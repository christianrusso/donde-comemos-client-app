import { UserProvider } from './../user/user';
import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QualificationsProvider extends BaseProvider {

  categories: any

  constructor(public http: Http,
              public userProvider: UserProvider) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `restaurants/${restaurantId}/qualification_by_category/`
  }

  protected process_get(response): void {
    this.categories = response;
  }

}
