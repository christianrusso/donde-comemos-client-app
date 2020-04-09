import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecoverPasswordProvider } from '../../providers/recover-password/recover-password';
import { ToastProvider } from '../../providers/toast/toast';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-correct-code',
  templateUrl: 'correct-code.html',
})
export class CorrectCodePage {

  password1: String = ""
  password2: String = ""

  mail: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public recoverPasswordProvider: RecoverPasswordProvider,
    public toaster: ToastProvider) {

    this.mail = navParams.get('mail');
  
  }

  ionViewDidLoad() { }

  setPassword() {
    debugger
    if (this.password1 !== "" && this.password2 !== "") {
     
      if (this.password1 === this.password2) {

        this.recoverPasswordProvider.set_password(this.mail, this.password1)
        this.navCtrl.push(LoginPage)

      } else {

        this.toaster.show('Las contraseñas no coinciden, intentelo nuevamente')

      }

    } else {

      this.toaster.show('Ingrese una contraseña válida')

    }
  }

}
