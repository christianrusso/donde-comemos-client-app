import { API_URL } from './../../app/config/config';
import { UserProvider } from './../user/user';
import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as HttpHeaders } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ScoreCategoryItemProvider extends BaseProvider {

  constructor(public http: Http,
    public userProvider: UserProvider) {
    super(http)
  }

  protected getURL() {
    return `score-category-item/`
  }

  protected addHeaders(headers: Headers) {
    headers.append("Authorization", "Token " + this.userProvider.user.token)
  }

  rate(ratings, typeRank) {
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)

    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}qualifications/`, ratings, new RequestOptions({ headers })).subscribe((response: any) => {
        resolve(JSON.parse(response._body))
      }, (errorResponse) => {
        reject()
      })
    })
  }

}
