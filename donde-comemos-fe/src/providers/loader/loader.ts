import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoaderProvider {
  loader: any
  constructor(private loadingController: LoadingController) {
  }

  display(text, spinner='crescent'){
    this.loader = this.loadingController.create({
      content: `${text}...`,
      spinner
    })
    this.loader.present()
  }

  hide(){
    this.loader.dismiss()
  }

}
