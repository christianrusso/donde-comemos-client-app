import { restaurant } from './../../interfaces/restaurant';
import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantProvider extends BaseProvider {

  restaurants = [];
  resturantById: restaurant;

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId) {
    return `restaurants/`
  }

  protected process_get(response): void {
    this.restaurants = response;
  }

  getRestaurantsByLocation(idLocation) {
    return this.restaurants.filter((restaurant) =>
      restaurant.influence_range == idLocation
    )
  }

  getRestaurantById(restaurantId) {
    return this.restaurants.filter((restaurant) =>
      restaurant.id == restaurantId
    )
  }

}