import { BaseProvider } from './../base/base';
import { API_URL } from './../../app/config/config';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuProvider extends BaseProvider{

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(params){
    return `menus/${params.restaurantId}/?date=${params.date}`
  }
}
