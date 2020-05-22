import { ReservationProvider } from './../../providers/reservation/reservation';
import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from "../../providers/order/order";
import { Events } from 'ionic-angular';
import { LoaderProvider } from '../../providers/loader/loader';
import { ToastProvider } from '../../providers/toast/toast';

@Component({
  selector: 'page-mercado-pago-modal',
  templateUrl: 'mercado-pago-modal.html',
})
export class MercadoPagoModalPage {
  publicKey: string;
  data: any;
  mpId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private orderProvider: OrderProvider,
    private reservationProvider: ReservationProvider,
    private events: Events,
    private loader: LoaderProvider,
    private toaster: ToastProvider) {

    let restaurantId = this.navParams.get('restaurantId');
    let phone_nbr = this.navParams.get('phone_nbr');
    let diners = this.navParams.get('diners');
    let formattedCurrentDate = this.navParams.get('formattedCurrentDate');
    let time = this.navParams.get('time');
    let motive = this.navParams.get('motive');
    let comments = this.navParams.get('comments');

    this.events.subscribe('payment:created', (response) => {
      if (response && response.attributes.status === 'approved') {

        if (this.orderProvider.isComerRestaurant()) {
          this.loader.display('Espere unos segundos...')

          this.reservationProvider.addReservation(response.attributes.id, restaurantId, phone_nbr, diners, formattedCurrentDate, time, motive, comments).then(() => {
            this.loader.hide()
            this.toaster.show("Tu reserva ha sido realizada con éxito", 1500)
            this.reservationProvider.clearReservation()
            this.orderProvider.clearOrder()
            this.navCtrl.remove(this.navCtrl.getActive().index - 1, 2);

          }).catch(() => {
            this.loader.hide()
            this.toaster.show('Ocurrió un problema al generar su reserva, intente nuevamente.')
          })
        } else {
          this.loader.display('Espere unos segundos...')
          this.orderProvider.create(response.attributes.id).then(() => {

            this.loader.hide()
            this.toaster.show('Se creó tu pedido correctamente')
            this.orderProvider.clearOrder()
            this.reservationProvider.clearReservation()
            this.navCtrl.remove(this.navCtrl.getActive().index - 1, 2);
          }).catch(() => {
            this.loader.hide()
            this.toaster.show('Ocurrió un problema al generar su pedido, intente nuevamente.')
          })
        }

      } else {
        this.loader.hide()
        this.toaster.show('Su pago ha sido rechazado, revise sus datos e intente nuevamente.')
      }

    });

    this.publicKey = this.navParams.get('publicKey');
    this.data = {
      restaurantId: restaurantId,
      //total: this.orderProvider.getTotal(),
      total: this.navParams.get('total'),
    }
  }
}
