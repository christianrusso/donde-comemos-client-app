import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { ToastProvider } from '../../providers/toast/toast';
import { RecoverPasswordProvider } from '../../providers/recover-password/recover-password';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

  oldPassword:string
  newPassword:string
  confirmedNewPassword:string

  constructor(
    public navCtrl: NavController,
    private viewCtrl: ViewController,
    private toastProvider: ToastProvider,
    private recoverPasswordProvider: RecoverPasswordProvider,
    private errorHandlerProvider: ErrorHandlerProvider) { }

  ionViewDidLoad() {
    this.oldPassword = ""
    this.newPassword = ""
    this.confirmedNewPassword = ""
   }

  handleCancel() {
    this.viewCtrl.dismiss()
  }

  handleAccept() {
    this.changePassword(this.oldPassword, this.newPassword, this.confirmedNewPassword)
  }

  changePassword(oldPassword, newPassword, confirmedNewPassword) {
    if (!newPassword && !confirmedNewPassword) {
      this.toastProvider.show('Complete todos los campos para continuar')
      return
    }

    if (newPassword !== confirmedNewPassword ) {
      this.toastProvider.show('Las contraseñas ingresadas no coinciden, verifiquelas y vuelva a intentarlo')
      return
    }

    this.recoverPasswordProvider.change_password(oldPassword, newPassword)
      .then( (response) => {
        this.toastProvider.show('La contraseña se ha cambiado correctamente')
        this.viewCtrl.dismiss()
      })
      .catch( (error) => {
        this.errorHandlerProvider.handleError(error.errorCode)
      })

  }
}
