import { RatingPage } from './../../pages/rating/rating';
import { App, NavController, AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { ReservationProvider } from '../../providers/reservation/reservation';

@Component({
  selector: 'reservation',
  templateUrl: 'reservation.html'
})
export class ReservationComponent {

  @Input("reservation") reservation;
  @Input("onQualified") onQualified;
  @Input("onCancel") onCancel;

  constructor(
    public reservationProvider: ReservationProvider,
    private app: App,
    private navCtrl: NavController,
    public alertController: AlertController) {

  }

  ionViewWillLeave() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component)
  }

  cancelReservation() {
    let alert = this.alertController.create({
      title: '¿Seguro quiere cancelar esta reserva?',
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

  cancellable() {
    return !this.reservation.finished && !this.reservation.cancelled
  }

  cancel() {
    this.reservationProvider.cancelReservation(this.reservation.id).then(() => {
      this.navCtrl.setRoot(this.navCtrl.getActive().component)
    })
  }

  qualifiable() {
    return this.reservation.finished && !this.reservation.cancelled && !this.reservation.qualified
  }

  qualifyReservation() {
    this.app.getActiveNav().push(RatingPage, { ODRCategory: this.reservation.id, categoryRank: "RES", typeRank: "reservation", restaurantId: this.reservation.restaurant.id, onQualified: this.onQualified }) //Se le pasa el tipo de categoria fija, en este caso una Reserva
  }

}