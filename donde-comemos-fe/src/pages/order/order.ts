import { LoaderProvider } from './../../providers/loader/loader';
import { ToastProvider } from './../../providers/toast/toast';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';
import { ReservationPage } from '../reservation/reservation';
import { restaurant } from '../../interfaces/restaurant';
import { UserProvider } from '../../providers/user/user';
import { ReservationProvider } from '../../providers/reservation/reservation';
import moment, * as Moment from 'moment';
import { MercadoPagoModalPage } from "../mercado-pago-modal/mercado-pago-modal";

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  form = new FormGroup({
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    phone_nbr: new FormControl('', [Validators.required, Validators.minLength(6)]),
    expected_payment: new FormControl('', Validators.required),
    comments: new FormControl(''),
    order_type: new FormControl('', Validators.required),
    time: new FormControl(''),
    paymentMethod: new FormControl(''),
  })

  errors: any
  paymentMethod: any = 'cash';
  restaurant: restaurant;
  isAvailable: any;
  currentDate: Date;
  time: any;
  today = new Date();
  date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
  detailsPage: any;
  total_final: number;
  discountRes: any;
  discountDel: any;
  discountTw: any;
  
  hasCard: Boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderProvider: OrderProvider,
    private loader: LoaderProvider,
    private toaster: ToastProvider,
    public userProvider: UserProvider,
    public reservationProvider: ReservationProvider,
    public toast: ToastProvider,
    public modalCtrl: ModalController,
    public popOver: PopoverController) {

    this.currentDate = new Date()
    this.errors = {}
    this.restaurant = navParams.get('restaurant');
    this.detailsPage = navParams.get("detailsPage");

    this.deliveryMethod()
    this.hasACard()

    this.total_final = this.orderProvider.getTotal();

    this.discountRes = this.getDiscount('RES');
    this.discountDel = this.getDiscount('DEL');
    this.discountTw = this.getDiscount('LOC');
  }

  hasACard() {
    if (this.restaurant.public_key) {
      this.hasCard = true;
    }
  }

  ionViewWillLeave() {
  }

  onTimeChange(time) {
    this.time = time
  }

  getTotal() {
    return this.total_final;
  }

  isValid() {
    return this.form.valid
  }
  
  getDiscount(type: string) {
    const place = this.restaurant.placediscounts.find((item) => item.place === type);
    console.log(place);
    if (typeof place !== 'undefined') {
      return place.amount;
    } else {
      return "";
    }
  }

  validate() {
    if (this.orderProvider.isDeliveryOrder() && this.orderProvider.order.expected_payment < this.orderProvider.getTotal())
      this.errors.expected_payment = "No puede abonar con menos del total"

    return Object.keys(this.errors).length == 0
  }

  makeOrder() {
    this.loader.display("Comprobando disponibilidad...")
    if (!this.orderProvider.order.order_hour) {
      let time = moment().format('HH:mm');
      this.orderProvider.order.order_hour = time
    }

    this.reservationProvider.isAvailable(this.restaurant.id, this.date, this.orderProvider.order.order_hour, 0)
      .then(isAvailable => {
        this.loader.hide()

        this.isAvailable = isAvailable;
        if (this.isAvailable.is_available) {
          if (this.userProvider.user.token) {
            if (this.validate()) {
              if (this.paymentMethod == 'creditCard') {
                console.log("MEPA", this.total_final);
                this.navCtrl.push(MercadoPagoModalPage, { restaurantId: this.restaurant.id, publicKey: this.restaurant.public_key });
              } else {
                this.make2Order()
              }
            }
          }
          else {
            alert('No iniciaste sesión')
          }
        } else {
          this.toaster.show("El restaurant no esta disponible en ese horario", 2000)
        }

      })
      .catch(err => {
        this.loader.hide()
      })
  }

  make2Order() {
    if (!this.orderProvider.order.order_hour) {
      let time = moment().format('HH:mm');
      this.orderProvider.order.order_hour = time
    }
    
    this.reservationProvider.isAvailable(this.restaurant.id, this.date, this.orderProvider.order.order_hour, 0).then(isAvailable => {
      this.isAvailable = isAvailable;
      
      if (this.isAvailable.is_available) {
        if (this.userProvider.user.token) {

          if (this.validate()) {

            this.loader.display('Estamos creando tu pedido...')

            this.orderProvider.create().then(() => {
              this.orderProvider.clearOrder()
              this.reservationProvider.clearReservation()
              this.navCtrl.pop()
              this.loader.hide()
              this.toaster.show('Se creó tu pedido correctamente', 3000)
            }).catch(() => {
              this.loader.hide()
              this.toaster.show('No hemos podido crear su pedido correctamente, por favor intente nuevamente más tarde', 3000)
            })
          }
        } else {
          alert('No iniciaste sesión')
        }

      } else {
        this.toast.show('No ha podido realizar el pedido, el restaurante no se encuentra disponible en la fecha y hora seleccionada', 3000)

      }
    })
  }

  clearError(error) {
    delete this.errors[error]
  }

  deliveryMethod() {
    let total_init = this.orderProvider.getTotal() ;
    if (this.orderProvider.isDeliveryOrder()) {
      this.form.controls["address"].setValidators([Validators.required, Validators.minLength(3)])
      this.form.controls["expected_payment"].setValidators(Validators.required);
      this.total_final = total_init - (total_init * (this.discountDel * 0.01));
    }
    else if (this.orderProvider.isLocalOrder()) {
      this.form.controls["address"].clearValidators()
      this.form.controls["expected_payment"].clearValidators()
      this.form.controls["address"].updateValueAndValidity()
      this.form.controls["expected_payment"].updateValueAndValidity()
      this.total_final = total_init - (total_init * (this.discountTw * 0.01));
    }
    else if (this.orderProvider.isComerRestaurant()) {
      this.total_final = total_init - (total_init * (this.discountRes * 0.01));
    }
  }

  goToReservation() {
    this.navCtrl.push(ReservationPage, { restaurant: this.restaurant })
  }

}