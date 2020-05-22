import { LoaderProvider } from './../../providers/loader/loader';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from '../../providers/order/order';


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  pendingOrders = [];
  finishedOrders = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider, public loader: LoaderProvider) {
  }

  ionViewWillEnter() {
    this.getPendingOrders()
  }

  getPendingOrders() {
    this.loader.display('Cargando sus pedidos...');
    this.orderProvider.get().then((orders: any) => {
      this.pendingOrders = orders.filter((ord) =>
        !ord.delivered && !ord.cancelled);
      console.log(this.pendingOrders);
      this.finishedOrders = orders.filter((ord) =>
        ord.delivered)
      this.loader.hide()
    })

  }

  showMessagePendingReservations() {
    return this.pendingOrders.length == 0
  }

  showMessageFinishedReservations() {
    return this.finishedOrders.length == 0
  }


}
