import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
category:Array<any>;
selectedItem;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.category=[{icon:"app-meat",title:"Meat Dishes",num:"1587"},{icon:"app-fish",title:"Fish Dishes",num:"748"},
    {icon:"app-vegetarian",title:"Vegetarian",num:"3125"},{icon:"app-pizza",title:"Pizza",num:"547"},
    {icon:"app-cokies",title:"Cokies",num:"1935"},{icon:"app-fastfood",title:"Fast Food",num:"2209"}]
  }
  dismiss() {    
    this.viewCtrl.dismiss();
  }   
  activeItem(index){
    this.selectedItem=index;
  }

}
  