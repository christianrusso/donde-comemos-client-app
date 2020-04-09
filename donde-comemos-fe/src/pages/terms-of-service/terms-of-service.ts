import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-terms-of-service',
  templateUrl: 'terms-of-service.html',
})
export class TermsOfServicePage {

  show: false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modal: ModalController) {
    this.show = navParams.get('show');

  }

  dismiss() {
    this.view.dismiss()
  }

  backPage() {
    this.navCtrl.pop()
  }

}
