import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastProvider {

  constructor(private toast: ToastController) {

  }

  show(message, duration = 1500, position = 'bottom') {
    return this.toast
      .create({ duration: duration, position: position, message: message })
      .present()
  }

}
