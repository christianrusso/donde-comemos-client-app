import { Component, Input } from '@angular/core';
import { NavController, ModalOptions, NavParams } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { OrderProvider } from '../../providers/order/order';
import { LoaderProvider } from '../../providers/loader/loader';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { restaurant } from '../../interfaces/restaurant';
import { ReservationMotiveProvider } from '../../providers/reservation-motive/reservation-motive';
import { ToastProvider } from '../../providers/toast/toast';
import { formatDate } from '../../utils/format';
import { MercadoPagoModalPage } from '../../pages/mercado-pago-modal/mercado-pago-modal';

@Component({
  selector: 'reservation-form',
  templateUrl: 'reservation-form.html'
})
export class ReservationFormComponent {

  diners: any
  phone_nbr: any
  dateReservation: any
  time: any
  comments: any
  motive: any

  isAvailable: any

  today: Date
  currentDate: Date
  maxDate: Date
  reservationMotives: any

  localeStringsES
  modalOptions: ModalOptions
  okText: String

  hasCard: Boolean = false;

  form = new FormGroup({
    diners: new FormControl('', [Validators.required, Validators.minLength(1)]),
    phone_nbr: new FormControl('', [Validators.required, Validators.minLength(6)]),
    time: new FormControl('', [Validators.required]),
    comments: new FormControl(''),
    paymentMethod: new FormControl(''),
  })
  @Input("restaurant") restaurant: restaurant
  @Input("orderPage") orderPage: boolean
  @Input("onlyReservation") onlyReservation: boolean
  @Input("paymentMethod") paymentMethod: string

  constructor(
    public navCtrl: NavController,
    public reservationProvider: ReservationProvider,
    public orderProvider: OrderProvider,
    public toast: ToastProvider,
    public loader: LoaderProvider,
    public navParams: NavParams,
    public reservationMotiveProvider: ReservationMotiveProvider) {

    this.today = new Date()
    this.currentDate = new Date()
    this.maxDate = new Date(this.today.getFullYear() + 1, 11, 31)

    this.localeStringsES = {
      monday: true,
      weekdays: [
        'Lu',
        'Ma',
        'Mi',
        'Ju',
        'Vi',
        'Sa',
        'Do'
      ],
      months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
    }

    this.modalOptions = {
      cssClass: '.datepicker-wrapper'
    }

    this.okText = "Aceptar"

  }

  ngOnInit() {
    this.reservationMotiveProvider.get().then((motives: any) => {
      this.reservationMotives = motives
    })

    this.hasACard()
  }

  hasACard() {
    if (this.restaurant.public_key) {
      this.hasCard = true;
    }
  }

  isValid() {
    return this.form.valid
  }

  onDateChange(newDate) {
    this.currentDate = newDate
  }

  makeReservation() {
    if (!this.currentDate) {
      this.toast.show('Ingrese una fecha válida')
      return
    }
    let formattedCurrentDate = formatDate(this.currentDate)

    this.reservationProvider.isAvailable(this.restaurant.id, formattedCurrentDate, this.time, this.diners).then((isAvailable => {
      this.isAvailable = isAvailable;

      if (this.isAvailable.is_available) {

        this.loader.display('Estamos procesando tu reserva...')

        if (this.paymentMethod == 'creditCard') {
          this.loader.hide()
          this.orderProvider.order.order_type = "COM"
          this.navCtrl.push(MercadoPagoModalPage, { restaurantId: this.restaurant.id, publicKey: this.restaurant.public_key, phone_nbr: this.phone_nbr, diners: this.diners, formattedCurrentDate: formattedCurrentDate, time: this.time, motive: this.motive, comments: this.comments });
        } else {
          this.reservationProvider.addReservation(null, this.restaurant.id, this.phone_nbr, this.diners, formattedCurrentDate, this.time, this.motive, this.comments).then(() => {
            this.loader.hide()
            this.toast.show("Tu reserva ha sido realizada con éxito", 3000)
            this.navCtrl.pop()
            this.reservationProvider.clearReservation()
            this.orderProvider.clearOrder()
          })
        }

      } else {
        this.toast.show('No se ha podido realizar la reserva, el restaurante no se encuentra disponible en la fecha y hora seleccionada', 3000)
      }
    }))

  }

}
