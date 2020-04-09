import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-privacy-policy',
  templateUrl: 'privacy-policy.html',
})
export class PrivacyPolicyPage {

  show: false

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.show = navParams.get('show');

  }

  dismiss() {
    this.view.dismiss()
  }

  backPage() {
    this.navCtrl.pop()
  }
}
