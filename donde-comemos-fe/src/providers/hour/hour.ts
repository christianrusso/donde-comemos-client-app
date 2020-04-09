import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HourProvider extends BaseProvider {

  hours = [];

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId){
    return `hours/${restaurantId}/`
  }
  
  protected process_get(response):void{
    this.hours = response;  
  }

}
