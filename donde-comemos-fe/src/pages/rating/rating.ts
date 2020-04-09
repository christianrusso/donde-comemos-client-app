import { UserProvider } from './../../providers/user/user';
import { ScoreCategoryItemProvider } from './../../providers/score-category-item/score-category-item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {

  customForm: FormGroup;
  scores: any;
  rating: any;
  ODRCategory: any;
  categoryRank: any;
  typeRank: any;
  restaurantId: any;

  onQualified: any;

  ratings = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public scoreCategoryItemProvider: ScoreCategoryItemProvider,
    public userProvider: UserProvider) {

    this.ODRCategory = navParams.get('ODRCategory')
    this.categoryRank = navParams.get('categoryRank')
    this.typeRank = navParams.get('typeRank')
    this.restaurantId = navParams.get('restaurantId')
    this.onQualified = navParams.get('onQualified')


    this.addCategory = this.addCategory.bind(this)

  }

  ionViewWillEnter() {
    this.getScores()
    
  }

  getScores() {
    this.scoreCategoryItemProvider.get().then((scores: any) => {
      this.scores = scores.filter((score) =>
        score.item == this.categoryRank
      )
    })
  }

  addCategory(category, rating) {
    this.ratings = this.ratings.filter(x => x.score_category !== category.id)
    this.rankTypeCategory(this.typeRank, category, rating)
  }

  rankTypeCategory(typeCategory, category, rating) {

    let ratingG = {
      restaurant: this.restaurantId,
      related_id: this.ODRCategory,
      related_type: typeCategory,
      score_category: category.id,
      score: rating,
    }
    ratingG[typeCategory] = this.ODRCategory

    this.ratings.push(ratingG)
  }

  rate() {
    this.scoreCategoryItemProvider.rate(this.ratings, this.typeRank);
    //this.onQualified()
    this.navCtrl.pop()
  }

}