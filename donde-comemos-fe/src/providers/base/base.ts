import { API_URL } from './../../app/config/config';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as HttpHeaders} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseProvider {

  constructor(public http: Http) {
  }

  get(params={}){
    return this._fetch(params)
  }

  protected _fetch(params){
    const headers = new HttpHeaders()
    this.addHeaders(headers)

    return new Promise((resolve , reject) => {
      this.http.get(`${API_URL}${this.getURL(params)}`, new RequestOptions({ headers })).subscribe((response:any) => {
          this.process_get(JSON.parse(response._body))
          resolve(JSON.parse(response._body))
      })
      ,( err => {
        reject(err);
      })
    });
  }

  protected addHeaders(headers){
    //do nothing by default
  }

  protected process_get(response){
    //do nothing by default
  }

  protected getURL(params){
    throw new Error("Method not implemented.");
  }
}
