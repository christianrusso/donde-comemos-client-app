import { API_URL } from './../../app/config/config';
import { UserProvider } from './../user/user';
import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as HttpHeaders } from '@angular/http';
import 'rxjs/add/operator/map';
import { AddProductProvider } from '../add-product/add-product';

@Injectable()
export class ReservationProvider extends AddProductProvider {

  reservations = []
  reservationsNoFinished = []
  reservationsFinished = []

  onlyReservation: Boolean

  constructor(public http: Http,
    public userProvider: UserProvider) {
    super(http, userProvider)
  }

  protected getURL() {
    return `reservations/by_user/`
  }

  postURL() {
    return 'reservations/'
  }

  protected addHeaders(headers: Headers) {
    headers.append("Authorization", "Token " + this.userProvider.user.token)
  }

  map(mpId, restaurantId, phone_nbr, diners, reservation_date, reservation_hour, motive, comments) {
    return {
      restaurant_id: restaurantId,
      client: this.userProvider.user.id,
      phone_nbr: phone_nbr,
      diners: diners,
      reservation_date: reservation_date,
      reservation_hour: reservation_hour,
      motive: motive,
      comments: comments,
      mp_id: mpId,
      ...this.onlyReservation ? this.defaultLists() : this.mapList()
    }
  }

  defaultLists() {
    return {
      products: [],
      menus: []
    }
  }

  mapIsAvailable(date, hour, diners) {
    return {
      date: date,
      hour: hour,
      diners: parseInt(diners)
    }
  }

  addReservation(mpId, restaurantId: number, phone_nbr, diners, reservation_date, reservation_hour, motive, comments) {
    const body = this.map(mpId, restaurantId, phone_nbr, diners, reservation_date, reservation_hour, motive, comments)
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)

    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}reservations/`, body, new RequestOptions({ headers })).subscribe((response: any) => {
        resolve(JSON.parse(response._body))

      }, (errorResponse) => {
        reject()
      })
    })
  }

  clearReservation() {
    super.clearLists()
  }

  isAvailable(restaurantId: number, date, hour, diners) {
    const body = this.mapIsAvailable(date, hour, diners)
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}restaurants/${restaurantId}/is_available/`, body, new RequestOptions({ headers })).subscribe((response: any) => {

        resolve(JSON.parse(response._body))
      }, (errorResponse) => {
        reject()
      })
    })
  }

  cancelReservation(restaurantId) {
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)

    return new Promise((resolve, reject) => {
      this.http.put(`${API_URL}reservations/${restaurantId}/cancel/`, {}, new RequestOptions({ headers })).subscribe((response: any) => {
        let reservation = JSON.parse(response._body)
        this.reservations = this.reservations.filter((r) =>
          r.id !== reservation.id)

        resolve(reservation)
      }, (errorResponse) => {
        reject()
      })
    })
  }

  protected process_get(response) {
    this.reservations = response
    this.reservationsNoFinished = this.reservations.filter((r) =>
      (!(r.finished) && !(r.cancelled)))
    this.reservationsFinished = this.reservations.filter((r) =>
      (r.finished) && !(r.cancelled))

  }

}
