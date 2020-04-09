import { QualificationsProvider } from './../../providers/qualifications/qualifications';
import { HourProvider } from './../../providers/hour/hour';
import { PaymentMethodProvider } from './../../providers/payment-method/payment-method';
import { TagMicroProvider } from '../../providers/tag-micro/tag-micro';
import { TagMacroProvider } from '../../providers/tag-macro/tag-macro';
import { ServiceProvider } from '../../providers/service/service';
import { restaurant } from '../../interfaces/restaurant';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  restaurant: restaurant;
  detailsPage: any;
  services = [];
  tagsLowAndHigh = [];
  paymentMethods = [];
  hours = [];
  qualifications = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public serviceProvider: ServiceProvider,
    public tagMacroProvider: TagMacroProvider,
    public tagMicroProvider: TagMicroProvider,
    private paymentMethodProvider: PaymentMethodProvider,
    private hourProvider: HourProvider,
    private qualificationsProvider: QualificationsProvider) {

    this.restaurant = navParams.get('restaurant');
    this.detailsPage = navParams.get("detailsPage");
  }

  ionViewWillLeave() {
  }

  ionViewWillEnter() {

    this.serviceProvider.get(this.restaurant.id).then((services: any) => {
      this.services = services;
    })

    // this.tagMicroProvider.get(this.restaurant.id).then((lowTag: any) => {
    //   this.tagsLowAndHigh = this.tagsLowAndHigh.concat(lowTag);
    // })

    this.tagMacroProvider.get(this.restaurant.id).then((highTag: any) => {
      this.tagsLowAndHigh = this.tagsLowAndHigh.concat(highTag)
    })

    this.paymentMethodProvider.get(this.restaurant.id).then((paymentMethods: any) => {
      this.paymentMethods = paymentMethods
    })

    this.hourProvider.get(this.restaurant.id).then((hours: any) => {
      this.hours = hours;
    })

    this.qualificationsProvider.get(this.restaurant.id).then((qualification: any) => {
      this.qualifications = qualification;
    })
  }

}
