import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ITEM_TYPE } from './../../app/constants/item-type';
import { BaseProvider } from '../base/base';
import { UserProvider } from '../user/user';
import { API_URL } from '../../app/config/config';


@Injectable()
export class AddProductProvider extends BaseProvider {

  entityName = ""
  products = []
  menus = []


  constructor(public http: Http, public userProvider: UserProvider) {
    super(http)
  }

  mapList() {
    return {
      products: this.getProducts().map(orderitem => {
        return {
          amount: orderitem.amount,
          product_id: orderitem.item.id,
          additional_id: orderitem.additional ? orderitem.additional.id : null,
        }
      }),
      menus: this.getMenus().map(orderitem => {
        return {
          amount: orderitem.amount,
          menu_id: orderitem.item.id
        }
      })
    }
  }

  getTotal() {
    return this.sumItems(this.products) + this.sumItems(this.menus)
  }

  private sumItems(items) {


    return items.reduce((result, orderproduct) => {
      let priceAdditional
      if (orderproduct.additional) {
        priceAdditional = (orderproduct.amount * orderproduct.additional.discount_price)
      } else {
        priceAdditional = 0;
      }

      return result += ((orderproduct.amount * orderproduct.item.discount_price) + priceAdditional)
    }, 0)
  }

  isEmpty() {
    return this.products.length === 0 && this.menus.length === 0
  }

  clearLists() {
    this.products = []
    this.menus = []
  }

  getMenus() {
    return this.menus
  }

  getProducts() {
    return this.products
  }

  addItem(item, item_type) {
    if (item_type === ITEM_TYPE.MENU)
      this.menus.push({
        ...item,
        menu: item.item
      })
    else if (item_type === ITEM_TYPE.PRODUCT)
      this.products.push({
        ...item,
        product: item.item
      })
  }



}
