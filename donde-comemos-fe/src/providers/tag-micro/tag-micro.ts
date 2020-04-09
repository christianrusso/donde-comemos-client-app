import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TagMicroProvider extends BaseProvider {
  tags = [];

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `tags-micro/${restaurantId}/`
  }

  protected process_get(response): void {
    this.tags = response;
  }
}
