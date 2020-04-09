import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseProvider } from '../base/base';

@Injectable()
export class ReservationMotiveProvider extends BaseProvider{

  reservationsMotives: any

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `reservation-motive/`
  }

  protected process_get(response): void {
    this.reservationsMotives = response;
  }
  
}
