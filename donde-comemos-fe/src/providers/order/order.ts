import { UserProvider } from './../user/user';
import { API_URL } from './../../app/config/config';
import { order } from './../../interfaces/order';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { StorageProvider } from '../storage/storage';
import { AddProductProvider } from '../add-product/add-product';

@Injectable()
export class OrderProvider extends AddProductProvider {

  orders: any
  order = {
    order_type: "",
    products: [],
    menus: []
  } as order

  constructor(
    public http: Http,
    public userProvider: UserProvider,
    private storageProvider: StorageProvider) {
    super(http, userProvider)
  }

  setRestaurant(restaurant) {
    this.order.restaurant = restaurant
  }

  create(mpId = null) {
    let clientId = this.userProvider.user.id
    const body = this.map(clientId,mpId)
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)

    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}orders/`, body, new RequestOptions({ headers })).subscribe((response) => {
        resolve(response)
      }, (errorResponse) => {
        reject()
      })
    })
  }

  cancel(orderId) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)

    return new Promise((resolve, reject) => {
      this.http.put(`${API_URL}orders/${orderId}/cancel/`, {}, new RequestOptions({ headers })).subscribe((response) => {
        resolve(response)
      }, (errorResponse) => {
        reject()
      })
    })
  }

  clearOrder() {
    super.clearLists()
    this.order.address = ""
    this.order.phone_nbr = ""
    this.order.expected_payment = undefined
    this.order.comments = ""
    this.order.price_final = 0
  }

  map(clientId,mpId) {
    return {
      restaurant_id: this.order.restaurant.id,
      order_hour: this.order.order_hour,
      client: clientId,
      phone_nbr: this.order.phone_nbr,
      address: this.order.address || null,
      expected_payment: this.order.expected_payment,
      comments: this.order.comments || null,
      order_type: this.order.order_type, ...this.mapList(),
      mp_id:mpId,
      price_final: this.order.price_final
    }
  }

  protected getURL() {
    return `orders/by_user/`
  }

  protected process_get(response): void {
    this.orders = response;
  }

  protected addHeaders(headers: Headers) {
    headers.append("Authorization", "Token " + this.userProvider.user.token)
  }

  isLocalOrder() {
    return this.order.order_type === "LOC"
  }

  isComerRestaurant() {
    return this.order.order_type === "COM"
  }

  isDeliveryOrder() {
    return this.order.order_type === "DEL"
  }
}
