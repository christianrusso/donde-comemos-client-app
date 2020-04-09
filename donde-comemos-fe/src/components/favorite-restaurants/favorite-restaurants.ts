import { ToastProvider } from './../../providers/toast/toast';
import { FavoriteRestaurantProvider } from './../../providers/favorite-restaurant/favorite-restaurant';
import { AlertController, App } from 'ionic-angular';
import { Component, Input } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../../pages/login/login';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'favorite-restaurants',
  templateUrl: 'favorite-restaurants.html'
})
export class FavoriteRestaurantsComponent {


  @Input("restaurant") restaurant;
  @Input("restaurantFavorite") restaurantFavorite;


  constructor(
    public alertCtrl: AlertController,
    public favoriteRestaurantProvider: FavoriteRestaurantProvider,
    public toaster: ToastProvider,
    public userProvider: UserProvider,
    public app: App) {

  }

  addFavoriteRestaurant() {
  
    if (this.userProvider.isGuestUser()) {
      this.alertGuestUser()
    } else {
      if (this.restaurantFavorite) {
        this.presentAlert()
      } else {
        this.favoriteRestaurantProvider.addFavorite(this.restaurant.id).then((restaurantFavorite: any) => {
          this.restaurantFavorite = restaurantFavorite
          this.toaster.show('Restaurante agregado a favoritos')
        })
      }
    }
  
  }

  alertGuestUser() {
    let alert = this.alertCtrl.create({
      title: '¿Todavía no estas registrado?',
      message: 'Registrate y disfrutá de lo que tenemos para ofrecerte',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Registrar',
          handler: data => {
            this.app.getActiveNav().push(RegisterPage, { restaurant: this.restaurant })
          }
        }
      ]
    });
    alert.present()
  }

  presentAlert() {
    this.userProvider.isShowingPopUp = true;
    let alert = this.alertCtrl.create({
      title: '¿Estás seguro de que querés eliminar este restaurante de tus favoritos?',
      buttons: [

        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            this.userProvider.isShowingPopUp = false;
          }
        },

        {
          text: 'Aceptar',
          handler: data => {
            this.deleteFavoriteRestaurant(this.restaurantFavorite.id)
          }
        }
      ]
    });
    alert.present()
  }

  deleteFavoriteRestaurant(favoriteRestaurantId) {
    this.favoriteRestaurantProvider.deleteFavorite(favoriteRestaurantId).then(() => {
      this.restaurantFavorite = undefined;
    })
  }

}
