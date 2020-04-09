import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalOptions, PopoverController, ModalController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { UserInterface } from '../../interfaces/user';
import { LoaderProvider } from '../../providers/loader/loader';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecoverPasswordProvider } from '../../providers/recover-password/recover-password';
import { ToastProvider } from '../../providers/toast/toast';
import { ChangePasswordPage } from '../change-password/change-password';
import { LocationProvider } from '../../providers/location/location';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public isDisabled: boolean = true;
  user: UserInterface

  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phone_nbr: new FormControl(''),
    email: new FormControl('')
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoaderProvider,
    private userProvider: UserProvider,
    private alertCtrl: AlertController,
    private recoverPasswordProvider: RecoverPasswordProvider,
    private toastProvider: ToastProvider,
    private modalCtrl: ModalController,
    private locationProvider: LocationProvider,
    private popOver: PopoverController) {

  }

  ngOnInit() {
    this.user = { ...this.userProvider.user }
  }

  changeMode() {
    if (this.user.first_name != this.userProvider.user.first_name || this.user.last_name != this.userProvider.user.last_name) {

      this.alertCtrl.create({
        title: 'Cambios sin guardar',
        message: "¿Quiere guardar los cambios realizados en su perfil?",
        buttons: [
          {
            text: 'Aceptar',
            handler: data => {
              this.saveChanges()
            }
          },
          {
            text: 'Cancelar',
            handler: data => {
              return
            }
          }
        ]
      }).present()

    } else {

      this.isDisabled = !this.isDisabled

    }
  }

  isValid() {
    return this.form.valid
  }

  showChangePasswordAlert() {

    const modalOptions: ModalOptions = {
      cssClass: "changePasswordModal"
    };

    this.modalCtrl.create("ChangePasswordPage", {}, modalOptions).present()
    this.navCtrl.push(ChangePasswordPage, {})
  }

  saveChanges() {
    this.loader.display("Guardando cambios...")
    this.userProvider.saveChanges(this.user.first_name, this.user.last_name)
      .then(() => {
        this.loader.hide()
        this.changeMode()
      })
      .catch(errors => {
        console.log(errors)
        this.loader.hide()
      })
      .then(() => {
        this.loader.hide()
        this.changeMode()
      })
      .catch(errors => {
        this.loader.hide()
      })
  }

}
