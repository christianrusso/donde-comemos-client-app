import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers as HttpHeaders } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseProvider } from '../base/base';
import { API_URL } from '../../app/config/config';
import { UserProvider } from '../user/user';


@Injectable()
export class RecoverPasswordProvider extends BaseProvider {

  constructor(
    public http: Http,
    public userProvider: UserProvider) {
      super(http)
  }

  recoverPassword(email) {
    const body = { email }
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}recover-password/mail/`, body).subscribe((response: any) => {
        resolve(JSON.parse(response._body))
      }, (errorResponse) => {
        reject()
      })
    })
  }

  checkCodeProvider(code, email){
    const body = { code, email }
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}recover-password/checkCode/`, body).subscribe((response: any) => {
        this.userProvider.user.token = JSON.parse(response._body).token
        resolve()
      }, (errorResponse) => {
        reject()
      })
    })
  }

  set_password(email, new_password){
    const body = { new_password, email }
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}recover-password/set_password/`, body, new RequestOptions({headers})).subscribe((response: any) => {
        resolve()
      }, (errorResponse) => {
        reject()
      })
    })
  }

  change_password(old_password, new_password) {
    const body = { old_password, new_password }
    const headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.userProvider.user.token}`)
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}recover-password/change_password/`, body, new RequestOptions({headers})).subscribe((response: any) => {
        resolve()
      }, (errorResponse) => {
        reject(JSON.parse(errorResponse._body))
      })
    })
  }

}
