import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentMethodProvider extends BaseProvider{
  paymentMethods: any;

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId){
    return `payment-methods/${restaurantId}/`
  }
  
  protected process_get(response):void{
    this.paymentMethods = response;  
  }



}
