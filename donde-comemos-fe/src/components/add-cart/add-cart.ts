import { ModalOptions, PopoverController, App, AlertController } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { item } from '../../interfaces/item';
import { UserProvider } from '../../providers/user/user';
import { AddProductPage } from '../../pages/add-product/add-product';
import { ToastProvider } from '../../providers/toast/toast';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'add-cart',
  templateUrl: 'add-cart.html'
})
export class AddCartComponent {
  @Input("item") item: item;
  @Input("item_type") item_type
  @Input("additionals") additionals;

  constructor(
    public userProvider: UserProvider,
    public popOver: PopoverController,
    public toastProvider: ToastProvider,
    public app:App,
    public alertCtrl:AlertController
    ) { }

  addNew() {
    if (this.userProvider.isGuestUser()) {
      let alert = this.alertCtrl.create({
        title: '¿Todavía no estas registrado?',
        message: 'Registrate y disfrutá de lo que tenemos para ofrecerte',
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
            }
          },
          {
            text: 'Registrarse',
            handler: data => {
              this.app.getActiveNav().push(RegisterPage)
            }
          }
        ]
      });
      alert.present()
    } else {
      const modalOptions: ModalOptions = {
        cssClass: "addCartModal"
      };
      this.userProvider.isShowingPopUp = true;
      console.log(this.additionals);
      let popOver = this.popOver.create(AddProductPage, { 
        item: this.item, 
        item_type: this.item_type, 
        additionals: this.additionals, 
      }, modalOptions)

      popOver.onDidDismiss(()=> this.userProvider.isShowingPopUp = false )
      popOver.present();
    }
  }
}