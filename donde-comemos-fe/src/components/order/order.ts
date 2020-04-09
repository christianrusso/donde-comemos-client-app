import { RatingPage } from './../../pages/rating/rating';
import { App, NavController, AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { OrderProvider } from '../../providers/order/order';

@Component({
  selector: 'order',
  templateUrl: 'order.html'
})
export class OrderComponent {

  text: string;
  showProducts = false;
  calificada: Boolean;

  @Input("order") order;

  constructor(
    private app: App,
    public navCtrl: NavController,
    private orderProvider: OrderProvider,
    private alertController: AlertController) {
  }

  ionViewWillLeave(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component)
  }

  qualifiable() {
    return this.order.delivered && !(this.order.qualified)
  }

  qualifyOrder() {
    this.app.getActiveNav().push(RatingPage, { ODRCategory: this.order.id, categoryRank: this.order.order_type, typeRank: "order", restaurantId: this.order.restaurant.id }) //Se le pasa el tipo de categoria fija, en este caso una ORDEN
  }

  toggleProducts() {
    this.showProducts = !this.showProducts
  }

  cancellable() {
    return !this.order.delivered && !this.order.cancelled
  }

  cancel() {
    this.orderProvider.cancel(this.order.id).then(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component)
    })
  }

  cancelOrder() {
    let alert = this.alertController.create({
      title: '¿Seguro quiere cancelar este pedido?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.cancel()
          }
        }
      ]
    });

    alert.present()
  }

}
