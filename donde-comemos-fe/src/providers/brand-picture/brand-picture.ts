import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BrandPictureProvider extends BaseProvider{
  brand_pictures = [];

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId){
    return `brand_pictures/${restaurantId}/`
  }
  
  protected process_get(response):void{
    this.brand_pictures = response;  
  }
}
