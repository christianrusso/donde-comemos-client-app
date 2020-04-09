import { restaurant } from './../../interfaces/restaurant';
import { RestaurantProvider } from './../../providers/restaurant/restaurant';
import { HomePage } from './../home/home';
import { LoaderProvider } from './../../providers/loader/loader';
import { FavoriteRestaurantProvider } from './../../providers/favorite-restaurant/favorite-restaurant';
import { Component, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { NavController, NavParams, AlertController, App } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  icons: Array<any>;
  favorite: Array<any>;
  restaurants = []
  restaurantsId = []
  currentRestaurant: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public favoriteRestaurantProvider: FavoriteRestaurantProvider,
    public loader: LoaderProvider,
    public alertCtrl: AlertController,
    public app: App,
    public restaurantProvider: RestaurantProvider
  ) {
  }

  ionViewWillEnter() {
    this.loader.display('Buscando Restaurantes');
    this.favoriteRestaurantProvider.get().then((restaurants: any) => {
      this.restaurants = restaurants;
      this.loader.hide()
    })
    .catch(err => {
      alert(JSON.stringify(err))
      this.loader.hide()

    })

    this.restaurantProvider.get().then((restaurantsId: any) => {
      this.restaurantsId = restaurantsId
    })

  }

  getRestaurant(restaurantId) {
    this.restaurantsId = this.restaurantProvider.getRestaurantById(restaurantId)
    this.currentRestaurant = this.restaurantsId[0]    
  }

  goToDetails(restaurant) {
    this.getRestaurant(restaurant.restaurant.id)
    this.app.getActiveNav().push(DetailsPage, { restaurant: this.currentRestaurant })
  }


  deleteFavoriteRestaurant(restaurantId) {
    let alert = this.alertCtrl.create({
      title: '¿Seguro querés eliminar este restaurante de favoritos?',
      buttons: [

        {
          text: 'Cancelar',
          handler: data => {
          }
        },

        {
          text: 'Aceptar',
          handler: data => {
            this.favoriteRestaurantProvider.deleteFavorite(restaurantId).then(() => {
              this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
            })
          }
        }
      ]
    });
    alert.present()

  }


  // remove item from favorite
  removeItem(item, ev) {
    this.favorite.splice(this.favorite.indexOf(item), 1);
    ev.stopPropagation();
  }
}
