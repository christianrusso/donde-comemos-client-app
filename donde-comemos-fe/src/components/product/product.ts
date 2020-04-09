import { Component, Input } from '@angular/core';
import { ITEM_TYPE } from '../../app/constants/item-type';

@Component({
  selector: 'product',
  templateUrl: 'product.html'
})
export class ProductComponent {

  @Input("product") product;
  @Input("additionals") additionals;
  item_type = ITEM_TYPE.PRODUCT
  
  constructor() {
  }

}
