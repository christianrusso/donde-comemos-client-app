import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { item } from '../../interfaces/item';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { OrderProvider } from '../../providers/order/order';
import { ToastProvider } from '../../providers/toast/toast';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  item: item;
  item_type: any;
  amount = 1;
  additionals:any
  additionals_name:any
  additional: any;

  constructor(
    public reservationProvider: ReservationProvider,
    public orderProvider: OrderProvider,
    public userProvider: UserProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastProvider) {

    this.item = navParams.get('item')
    this.item_type = navParams.get('item_type')
    this.additionals = navParams.get('additionals') || []
  }

  getAdditional() {
    return this.additionals && this.additionals.find(x => x.id == this.additional)
  }
  
  addItem() {
    if (this.amount <= 0) {
    
      this.toast.show('Debe seleccionar una cantidad mayor a 0')
    
    } else {
      const additional = this.getAdditional()
      this.reservationProvider.addItem({
        item: this.item,
        amount: this.amount,
        additional,
      }, this.item_type)

      this.orderProvider.addItem({
        item: this.item,
        amount: this.amount,
        additional,
      }, this.item_type)

      this.toast.show(`${this.item.name} fue agregado correctamente al pedido`, 3000)
    
    }
  }
  
  accept() {
    this.addItem()
    this.navCtrl.pop();
  }

  cancel() {
    this.navCtrl.pop();
  }

}
