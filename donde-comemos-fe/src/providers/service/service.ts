import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider extends BaseProvider {

  services = [];

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId){
    return `services/${restaurantId}/`
  }
  
  protected process_get(response):void{
    this.services = response;  
  }
}
