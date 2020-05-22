import { RatingPage } from './../rating/rating';
import { LoaderProvider } from './../../providers/loader/loader';
import { LocationProvider } from './../../providers/location/location';
import { HomePage } from './../home/home';
import { UserProvider } from '../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController, LoadingController, App, ViewController } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { RecoverPasswordProvider } from '../../providers/recover-password/recover-password';
import { CorrectCodePage } from '../correct-code/correct-code';
import { ToastProvider } from '../../providers/toast/toast';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { restaurant } from '../../interfaces/restaurant';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  type = 'password'
  email: string
  password: string
  errors: any
  restaurant: restaurant;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    public userProvider: UserProvider,
    public locationProvider: LocationProvider,
    public restaurantProvider: RestaurantProvider,
    private loader: LoaderProvider,
    private recoverPasswordProvider: RecoverPasswordProvider,
    public toaster: ToastProvider,
    private errorHandlerProvider: ErrorHandlerProvider,
    public viewController: ViewController) {

    this.menuCtrl.swipeEnable(false);
    this.restaurant = navParams.get('restaurant');

  }

  loginAsGuestUser() {
    this.loader.display('Iniciando sesión como invitado...')
    this.userProvider.loginAsGuest()
    this.navCtrl.push(HomePage)
    this.loader.hide()
  }

  doLogin() {

    this.loader.display('Iniciando sesión');
    console.log(this.email, this.password);
    this.userProvider.login(this.email, this.password)
      .then(() => {
        if (this.restaurant) {
          this.viewController.dismiss()
        } else {
          this.navCtrl.setRoot(HomePage)
        }
        this.loader.hide()
      })
      .catch(errors => {
        this.errorHandlerProvider.handleError('INVALID_CREDENTIALS')
        this.loader.hide()
      })
  }

  forgotPasswordAlert() {
    let forgotpas = this.alertCtrl.create({
      title: 'Recuperar contraseña',
      message: "Ingresa tu email, te mandaremos un código para reestablecer tu contraseña",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.recoverPass(data.email);
          }
        },
      ]
    });
    forgotpas.present();
  }

  inputCodeAlert(mail) {
    let forgotpas = this.alertCtrl.create({
      title: 'Ingresa el código que recibiste',
      message: "Si el código es correcto podrás cambiar tu contraseña",
      inputs: [
        {
          name: 'code',
          placeholder: 'Código de verificación'
        },
      ],
      buttons: [

        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Enviar',
          handler: data => {
            this.checkCode(data.code, mail)
          }
        }
      ]
    });
    forgotpas.present();
  }


  acceptedCode() {
    this.navCtrl.push(CorrectCodePage)
  }

  recoverPass(mail) {
    this.loader.display('Verificando email');
    this.recoverPasswordProvider.recoverPassword(mail).then(() => {
      this.loader.hide()
      this.inputCodeAlert(mail)
    }
    ).catch(() => {
      this.loader.hide()
      this.toaster.show('email incorrecto, intentelo nuevamente')
    })
  }

  checkCode(code, mail) {
    this.loader.display('Verificando código');
    this.recoverPasswordProvider.checkCodeProvider(code, mail).then(() => {
      this.loader.hide()
      this.navCtrl.push(CorrectCodePage, { mail: mail })
    }
    ).catch(() => {
      this.loader.hide()
      this.toaster.show('código incorrecto, intentelo nuevamente')
    })
  }

  showPassword() {
    this.type = this.type == 'password' ? 'text' : 'password'
  }

}
