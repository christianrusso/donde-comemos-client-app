import { LoaderProvider } from './../../providers/loader/loader';
import { restaurant } from './../../interfaces/restaurant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';

@Component({
  selector: 'page-my-reservations',
  templateUrl: 'my-reservations.html',
})
export class MyReservationsPage {

  pendingReservations = []
  finishedReservations = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public reservationProvider: ReservationProvider,
    private loader: LoaderProvider) {

  }

  ionViewWillEnter() {
    this.loadReservations()
  }

  loadReservations() {
    this.loader.display('Cargando sus reservas...');
    this.reservationProvider.get().then((reservations: any) => {
      this.pendingReservations = reservations.filter((r) =>
        !r.finished && !r.cancelled)
      this.finishedReservations = reservations.filter((r) =>
        r.finished)
      this.loader.hide()
    })
  }

  showMessagePendingReservations() {
    return this.pendingReservations.length == 0
  }

  showMessageFinishedReservations() {
    return this.finishedReservations.length == 0
  }

}
