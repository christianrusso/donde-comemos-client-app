import { API_URL, BASE_URL } from './../../app/config/config';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm';
import { StorageProvider } from '../storage/storage';
import { UserInterface } from '../../interfaces/user';
import { Platform } from 'ionic-angular';

@Injectable()
export class UserProvider {
  user: UserInterface;
  isShowingPopUp = false;

  constructor(
    public http: Http,
    private fcm: FCM,
    private storageProvider: StorageProvider,
    public platform: Platform) {

    this.setUpUser();

  }

  setUpUser() {
    this.user = {
      id: 0,
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      token: "",
      guest: false
    }
  }

  loginAsGuest() {
    this.setUpUser()
    
    this.user.first_name = "Invitado"
    this.user.guest = true;
  }

  isGuestUser() {
    return this.user.guest
  }  

  login(username: string, password: string) {

    const headers = new Headers()
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}login/`, { username, password }).subscribe(({ _body }: any) => {
        this.user.token = JSON.parse(_body).token
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Token ${this.user.token}`)
        this.http.get(`${API_URL}users/get_from_token/`, new RequestOptions({ headers })).subscribe(({ _body }: any) => {
          let token = this.user.token
          this.user = JSON.parse(_body)
          this.user.token = token
          this.user.guest = false

          //luego de loguear, pido el token y lo envio al back-end
          this.fcm.getToken().then(token => {
            this.registerFcmToken(token, this.user, headers);
          });

          this.storageProvider.storeUser({ ...this.user, password })
          resolve(this.user)

        }, ({ _body }) => {
          reject(_body)
        })
      }, ({ _body }) => {
        reject(JSON.parse(_body).non_field_errors)
      })
    })
  }

  async logout() {
    await this.storageProvider.removeUser();
  }

  register(form) {
    const body = {
      username: form.email,
      password: form.password,
      email: form.email,
      first_name: form.firstName,
      last_name: form.lastName
    }
    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}users/`, body).subscribe((response) => {
        resolve(response)
      }, (errorResponse) => {
        reject(JSON.parse(errorResponse._body))
      })
    })
  }

  registerFcmToken(token, user, headers) {

    let body = {
      registration_id: token,
      type: 'android',
    }

    if (this.platform.is('ios')) {
      body.type = 'ios'
    }

    return new Promise((resolve, reject) => {
      this.http.post(`${API_URL}fcm/`, body, new RequestOptions({ headers })).subscribe((response) => {
        resolve(response)
      }, (errorResponse) => {
        reject(JSON.parse(errorResponse._body))
      })
    })
  }

  saveChanges(first_name: string, last_name: string) {
    const body = {
      first_name,
      last_name
    }
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Token ${this.user.token}`)
    return new Promise((resolve, reject) => {
      this.http.put(`${API_URL}users/${this.user.id}/change/`, body, new RequestOptions({ headers }))
        .subscribe(async (response: any) => {
          let returnedUser: UserInterface = JSON.parse(response._body)
          this.user = { ...returnedUser, token: this.user.token }
          resolve(response)
        }, (errorResponse) => {
          reject(JSON.parse(errorResponse._body))
        })
    })
  }

}