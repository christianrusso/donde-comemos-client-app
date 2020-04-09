import { NavController, NavParams, MenuController, ModalController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TermsOfServicePage } from '../terms-of-service/terms-of-service';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { LoginPage } from './../login/login';
import { LocationProvider } from '../../providers/location/location';
import { LoaderProvider } from './../../providers/loader/loader';
import { ToastProvider } from '../../providers/toast/toast';
import { UserProvider } from './../../providers/user/user';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  userRegister = {
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: ""
  }

  errors = {
    email: [],
    password: [],
    firstName: [],
    lastName: []
  }


  form = new FormGroup({
    email: new FormControl('email', [Validators.required, Validators.email]),
    password: new FormControl('password', [Validators.required, Validators.minLength(6)]),
    passwordConfirmation: new FormControl('passwordConfirmation', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl('firstName', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('lastName', [Validators.required, Validators.minLength(4)])
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private userProvider: UserProvider,
    private loader: LoaderProvider,
    public locationProvider: LocationProvider,
    public toastProvider: ToastProvider,
    public modal: ModalController) {

    this.menuCtrl.swipeEnable(false);

  }

  showPrivacyModal() {
    let modal = this.modal.create(PrivacyPolicyPage, {show: true});
    modal.present();
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage, {show: true});
    modal.present();
  }

  toLogin(){
    this.navCtrl.push(LoginPage);
  }

  register() {
    if (this.isValid()) {
      if (this.userRegister.password === this.userRegister.passwordConfirmation) {
        this.userRegister.email = this.userRegister.email
        this.loader.display('Registrando')
        this.userProvider.register(this.userRegister).then(() => {
          this.navCtrl.setRoot(LoginPage)
          this.loader.hide()
        }).catch((error) => {
          if (error.username && error.username.length > 0)
            this.errors.email.push("Este email ya se encuentra en uso")
          this.loader.hide()
        })
      } else
        this.toastProvider.show("Las contraseñas no coinciden")
    }
    else
      this.checkErrors()
  }

  checkErrors() {
    this.checkPassword();
    this.checkEmail();
    this.checkFirstName();
  }

  checkFirstName() {
    this.errors.firstName = []
    if (this.field('firstName').invalid)
      this.addError("firstName", "El nombre es demasiado corto")
  }

  checkLastName() {
    this.errors.lastName = []
    if (this.field('lastName').invalid)
      this.addError("lastName", "El apellido es demasiado corto")
  }

  checkPassword() {
    this.errors.password = []

    if (this.field('password').invalid)
      this.addError("password", "La contraseña es demasiado corta");
    if (this.userRegister.password !== this.userRegister.passwordConfirmation)
      this.addError("password", "Las contraseñas no coinciden");
  }


  checkEmail() {
    this.errors.email = []

    if (this.field('email').invalid)
      this.addError("email", "El email ingresado no es válido");
  }

  addError(key, msg) {
    this.errors[key].push(msg)
  }

  field(fieldName) {
    return this.form.controls[fieldName]
  }

  isValid() {
    return this.form.valid && this.userRegister.password === this.userRegister.passwordConfirmation
  }

}
