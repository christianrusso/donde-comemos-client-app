import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductProvider extends BaseProvider{
  products: any
  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `products/${restaurantId}/`
  }

  protected process_get(response): void {
    this.products = response;
  }
}
