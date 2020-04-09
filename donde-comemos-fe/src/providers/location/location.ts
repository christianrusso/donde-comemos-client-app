import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocationInterface } from '../../interfaces/location';

@Injectable()
export class LocationProvider extends BaseProvider {

  currentLocation: LocationInterface
  locations = [];

  constructor(public http: Http) {
    super(http)
  }

  protected getURL(restaurantId){
    return `locations/`
  }
  
  protected process_get(response):void{
    this.locations = response;  
  }

  getCurrentLocation() {
    return this.currentLocation
  }

  storeCurrentLocation(location: LocationInterface) {
    return this.currentLocation = location
  }

  removeCurrentLocation() {
    delete this.currentLocation
  }
}
