import { UserProvider } from './../user/user';
import { API_URL } from './../../app/config/config';
import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as HttpHeaders} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoriteRestaurantProvider extends BaseProvider{

  user: any;
  favoritesRestaurants = []

  restaurants = []

  constructor(public http: Http, private userProvider: UserProvider) {
    super(http)
  }

  protected getURL() {
    return `favorite-restaurants/by_user/`
  }

  protected process_get(response): void {
    this.favoritesRestaurants = response;
  }

  protected addHeaders(headers:Headers){
    headers.append("Authorization", "Token " + this.userProvider.user.token)
  }

  addFavorite(restaurantId: number) {
    const body = this.mapFavorite(restaurantId)
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}favorite-restaurants/`, body, new RequestOptions({headers})).subscribe((response: any) => {
        resolve(JSON.parse(response._body))
      }, (errorResponse) => {
        reject()
      })
    })
  }

  deleteFavorite(restaurantFavoriteId: number){
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    
    return new Promise((resolve, reject) => {
      this.http.delete(`${API_URL}favorite-restaurants/${restaurantFavoriteId}/`, new RequestOptions({headers})).subscribe((response) => {
        resolve(response)
      }, (errorResponse) => {
        reject()
      })
    })
  }

  restaurantsFavorites(clientId: number, restaurantId: number){
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    
    return new Promise((resolve , reject) => {
      this.http.get(`${API_URL}favorite-restaurants/?client=${clientId}&restaurant=${restaurantId}`, new RequestOptions({ headers })).subscribe( (response:any) => {
          this.restaurants = JSON.parse(response._body);  
          resolve(this.restaurants);
        } 
      , err => {
        reject(err);
      }
      )
    })
  }

  mapFavorite(restaurantId){
    return{
      client: this.userProvider.user.id,
      restaurant_id: restaurantId
    }
  }
  

}
