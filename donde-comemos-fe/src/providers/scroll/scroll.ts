import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ScrollProvider {

  loadedElementsNumber = 0;
  loadedElements = [];  
  PAGESIZE = 3;
  elements = []



  constructor(public http: Http) {
  }

  getElements(){
    this.loadedElements = this.elements.slice(0, this.loadedElementsNumber);
  }

  doInfinite(infiniteScroll) {
    if(this.loadedElementsNumber <= this.elements.length){
      setTimeout(() => {
        this.loadedElementsNumber += this.PAGESIZE;
        this.getElements()
        infiniteScroll.complete();
      }, 500);
    }else {
      infiniteScroll.complete();
    }
  }

}
