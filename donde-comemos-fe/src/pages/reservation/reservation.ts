import { LoaderProvider } from './../../providers/loader/loader';
import { ToastProvider } from './../../providers/toast/toast';
import { restaurant } from './../../interfaces/restaurant';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalOptions } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { formatDate } from '../../utils/format';
import { ReservationMotiveProvider } from '../../providers/reservation-motive/reservation-motive';
import { OrderProvider } from '../../providers/order/order';

@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  restaurant: restaurant
  detailsPage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public reservationProvider: ReservationProvider,
    public orderProvider: OrderProvider,
    public toast: ToastProvider,
    public loader: LoaderProvider,
    public reservationMotiveProvider: ReservationMotiveProvider) {

    this.restaurant = navParams.get("restaurant")
    this.detailsPage = navParams.get("detailsPage");

  }

  ionViewWillLeave() {
  }

}
