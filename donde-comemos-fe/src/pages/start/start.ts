import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  activebutton='sign_in';
  links = {
    "sign_in": LoginPage,
    "sign_up": RegisterPage,
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
        this.menuCtrl.swipeEnable(false);
  }
  activeButton(type){
    this.navCtrl.push(this.links[type])
    this.activebutton=type;
  }

}
