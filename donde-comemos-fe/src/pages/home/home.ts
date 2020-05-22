import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import * as moment from 'moment';
import { CategoryPage } from './../category/category';

import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { LocationProvider } from './../../providers/location/location';
import { UserProvider } from '../../providers/user/user';

import { LocationInterface } from '../../interfaces/location';
import { MenuNavigationProvider } from '../../providers/menu-navigation/menu-navigation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  icons: Array<any>
  items: Array<any>

  locations = []
  restaurants = []

  currentDate

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public restaurantProvider: RestaurantProvider,
    public alertCtrl: AlertController,
    public locationProvider: LocationProvider,
    public userProvider: UserProvider,
    private menuNavigationProvider: MenuNavigationProvider) {

    this.currentDate = moment().format("YYYY/MM/DD")

  }

  ionViewWillEnter() {
    this.menuNavigationProvider.loadSidemenu()

    this.restaurantProvider.get().then((restaurants: any) => {
      let currentLocation = this.locationProvider.getCurrentLocation()
      if (!currentLocation) {

        this.locationProvider.get().then(() => {
          this.locations = this.locationProvider.locations;

          if (this.locations.length > 0)
            this.presentAlert()
        })

      } else {

        this.filterRestaurants(currentLocation)

      }

    })

  }

  getType() {
    return "restaurant"
  }

  categoryModal() {
    let modal = this.modalCtrl.create(CategoryPage, {}, { cssClass: 'category-modal' });
    modal.present();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '¿Cuál es tu ubicación?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Aceptar',
          handler: selectedRestaurantId => {
            let location = this.locations.find((location) => location.id == selectedRestaurantId)
            this.locationProvider.storeCurrentLocation(location)
            this.filterRestaurants(location);
          }
        }
      ]
    });

    const locations = [...this.locations] //copio la lista por valor y no por referencia
    const firstLocation = locations.pop()
    //agrego el primer elemento seleccionado por default
    alert.addInput({ type: 'radio', label: firstLocation.name, value: firstLocation.id, checked: true })
    locations.forEach(location => {
      alert.addInput({ type: 'radio', label: location.name, value: location.id });
    });

    alert.present()
  }

  filterRestaurants(location: LocationInterface) {
    this.restaurants = this.restaurantProvider.getRestaurantsByLocation(location.id) //Obtengo los resaurantes por el id de la ciudad
  }
}