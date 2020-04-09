import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ScoreCategoryItemProvider } from './../../providers/score-category-item/score-category-item';
import { UserProvider } from './../../providers/user/user';


@Component({
  selector: 'category-rating',
  templateUrl: 'category-rating.html'
})
export class CategoryRatingComponent {

  customForm: FormGroup;
  rating: any;
  disabledButton: Boolean = false;

  @Input("category") category;
  @Input("addCategory") addCategory;

  constructor(
    public scoreCategoryItemProvider: ScoreCategoryItemProvider,
    public userProvider: UserProvider

  ) {

  }

  logRatingChange(rating) {
    this.rating = rating;
    this.addCategory(this.category, rating)
  }

}
