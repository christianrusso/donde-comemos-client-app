import { Component, Input } from '@angular/core';
import { ITEM_TYPE } from '../../app/constants/item-type';
 
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  
  @Input("menu") menu;
  item_type = ITEM_TYPE.MENU

  subMenus: any
  
  constructor() {
    
  }
  
  ngOnInit(){
    this.subMenus = this.menu.sub_menus
  }

}
