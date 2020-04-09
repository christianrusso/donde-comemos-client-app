import { Component, Input } from '@angular/core';
import { ScrollProvider } from '../../providers/scroll/scroll';

@Component({
  selector: 'scroll',
  templateUrl: 'scroll.html'
})

export class ScrollComponent {


  @Input("elements") set elements(elements){
    this.scrollProvider.elements = elements;
    this.scrollProvider.loadedElementsNumber = this.scrollProvider.PAGESIZE;
    this.scrollProvider.getElements()
  }

  constructor(public scrollProvider: ScrollProvider) {}
}
