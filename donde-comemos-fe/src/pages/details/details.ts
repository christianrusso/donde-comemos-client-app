import { UserProvider } from './../../providers/user/user';
import { FavoriteRestaurantProvider } from './../../providers/favorite-restaurant/favorite-restaurant';
import { ToastProvider } from './../../providers/toast/toast';
import { BrandPictureProvider } from './../../providers/brand-picture/brand-picture';
import { OrderPage } from './../order/order';
import { OrderProvider } from './../../providers/order/order';
import { NavController, NavParams, AlertController, App, Navbar, Platform } from 'ionic-angular';
import { InformationPage } from '../information/information';
import { MenuProvider } from './../../providers/menu/menu';
import { restaurant } from './../../interfaces/restaurant';
import { Component, ViewChild } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ScrollProvider } from '../../providers/scroll/scroll';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { ReservationPage } from '../reservation/reservation';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { HomePage } from '../home/home';
import { StorageProvider } from '../../providers/storage/storage';
import { RegisterPage } from '../register/register';
import { ProductCategoryProvider } from '../../providers/product-category/product-category';
import moment from 'moment';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  restaurant: restaurant;
  restaurantFavorite: any;
  loadedElementsNumber = 0;
  initialElementsToLoad = 15; 
  elements: any
  menus = []
  icons: Array<any>;
  selectedImg: any
  pictures: Array<any>;
  popUP: Boolean = true;

  public unregisterBackButtonAction: any;

  @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public socialSharing: SocialSharing,
    public scrollProvider: ScrollProvider,
    public restaurantProvider: RestaurantProvider,
    public productCategoryProvider: ProductCategoryProvider,
    public menuProvider: MenuProvider,
    public orderProvider: OrderProvider,
    public brandPictureProvider: BrandPictureProvider,
    public toaster: ToastProvider,
    public alertCtrl: AlertController,
    public favoriteRestaurantProvider: FavoriteRestaurantProvider,
    public userProvider: UserProvider,
    public reservationProvider: ReservationProvider,
    public app: App,
    public storageProvider: StorageProvider,
    public platform: Platform) {

    this.restaurant = navParams.get('restaurant');
    this.loadElements();
    this.loadedElementsNumber = this.initialElementsToLoad;
    this.orderProvider.clearOrder()
    this.reservationProvider.clearReservation()
    this.orderProvider.setRestaurant(this.restaurant)
    this.selectedImg = this.restaurant.profile_picture
    this.pictures = []

  }

  ionViewWillLeave() {
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    this.unregisterBackButtonAction = null;
    this.popUP = true
  }
  
  initializeBackButtonCustomHandler(): void {
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
      if (!this.userProvider.isShowingPopUp && this.userProvider.user.token && (this.orderProvider.products.length > 0 || this.orderProvider.menus.length > 0)) {
        this.alertOrder()
      } else if(!this.userProvider.isShowingPopUp)
        this.navCtrl.push(HomePage)
    }, 101);
  }

  public ionViewWillEnter() {
    this.isFavoriteRestaurant()
    this.navBar.backButtonClick = (e:  UIEvent) => {
      if (this.userProvider.user.token && (this.orderProvider.products.length > 0 || this.orderProvider.menus.length > 0)) {
        this.alertOrder()
      } else {
        this.navCtrl.push(HomePage)
      }
    }
    this.initializeBackButtonCustomHandler();
    this.popUP = true

  }

  isFavoriteRestaurant() {
    if (!this.userProvider.isGuestUser()) {
      this.favoriteRestaurantProvider.restaurantsFavorites(this.userProvider.user.id, this.restaurant.id).then((restaurant: any) => {
        this.restaurantFavorite = restaurant.pop();
      })
    }
  }

  async loadElements() {
    this.elements = await this.productCategoryProvider.get(this.restaurant.id);
    let now = moment()
    let date = moment().format("YYYY-MM-DD")

    console.log(date);
    

    const params = {
      restaurantId: this.restaurant.id,
      date
    }

    this.menuProvider.get(params).then((menus: any) => this.menus = menus);
    this.brandPictureProvider.get(this.restaurant.id).then((brandPictures: any) => {
      this.pictures.push(this.restaurant.profile_picture)
      this.pictures = this.pictures.concat(brandPictures.map(bp => bp.brand_picture))
    })
  }

  getElements() {
    return this.elements && this.elements.slice(0, this.loadedElementsNumber);
  }

  getMenusOfDay() {
    return this.menus;
  }

  doInfinite(infiniteScroll) {
    if (this.loadedElementsNumber < this.elements.length) {
      setTimeout(() => {
        this.loadedElementsNumber += this.initialElementsToLoad;
        infiniteScroll.complete();
      }, 500);
    } else {
      infiniteScroll.complete();
    }
  }

  shareSheetShare() {
    this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(() => {
      console.log("shareSheetShare: Success");
    }).catch(() => {
      console.error("shareSheetShare: failed");
    });
  }

  getImg(img) {
    this.selectedImg = img;
  }

  showOrder() {
    if (this.userProvider.isGuestUser()) {
      this.alertGuestUser()
    } else if (!this.orderProvider.isEmpty()) {
      this.navCtrl.push(OrderPage, { restaurant: this.restaurant, detailsPage: this })
      this.reservationProvider.onlyReservation = false
    }
    else
      this.toaster.show('Todavía no agregaste items a tu pedido')
  }

  goToServices() {
    this.navCtrl.push(InformationPage, { restaurant: this.restaurant, detailsPage: this })
  }

  goToReservation() {
    if (this.userProvider.isGuestUser()) {
      this.alertGuestUser()
    } else if (this.popUP) {
      this.showPopUps()
    } else {
      this.navCtrl.push(ReservationPage, { restaurant: this.restaurant, detailsPage: this, paymentMethod: null })
    }
  }


  showPopUps() {
    if ((this.orderProvider.products.length > 0 || this.orderProvider.menus.length > 0)) {
      this.presentAlertWithProduct()
    } else {
      this.presentAlert()
    }
  }


  presentAlert() {
    this.userProvider.isShowingPopUp = true;
    let alert = this.alertCtrl.create({
      title: '¡Recordá que podés hacer tu pedido y realizar una reserva!',
      buttons: [
        
        {
          text: 'Solo reservar mesa',
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
            this.popUP = false
            this.goToReservation()
            this.reservationProvider.onlyReservation = true
          }
        },

        {
          text: 'Seleccionar productos',
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
            this.popUP = false
            this.reservationProvider.onlyReservation = false
          }
        },
        {
          role: 'cancel',
          cssClass:"btn-hidden",
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
          }
        }
      ]
    });

    alert.present()
  }

  presentAlertWithProduct() {
    this.userProvider.isShowingPopUp = true;
    let alert = this.alertCtrl.create({
      title: '¡Recordá que podés hacer tu pedido y realizar una reserva!',
      buttons: [

        {
          text: 'Solo reservar mesa',
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
            this.popUP = false
            this.goToReservation()
            this.reservationProvider.onlyReservation = true
          }
        },

        {
          text: 'Reservar mesa con los productos seleccionados',
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
            this.popUP = false
            this.goToReservation()
            this.reservationProvider.onlyReservation = false

          }
        },
        {
          role: 'cancel',
          cssClass:"btn-hidden",
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
          }
        }

      ]
    });

    alert.present()
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
          text: 'Registrarse',
          handler: data => {
            this.app.getActiveNav().push(RegisterPage, { restaurant: this.restaurant })
          }
        }
      ]
    });
    alert.present()
  }

  alertOrder() {
    this.userProvider.isShowingPopUp = true;
    let alert = this.alertCtrl.create({
      title: '¿Estás seguro de que querés salir?',
      message: 'Al hacerlo, tu pedido se perderá',
      buttons: [
        {
          text: 'Cancelar',
          role: "cancel",
          handler: data => {
            this.userProvider.isShowingPopUp = false;            
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            this.userProvider.isShowingPopUp = false;
            this.orderProvider.clearLists()
            this.reservationProvider.clearLists()
            this.navCtrl.push(HomePage)
          }
        },
      ],
    });
    alert.present()
  }

}