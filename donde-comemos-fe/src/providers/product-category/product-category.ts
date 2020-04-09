import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductCategoryProvider extends BaseProvider{
  categories: any
  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `product-categories/?restaurant=${restaurantId}`
  }

  protected process_get(response): void {
    this.categories = response;
  }
}
