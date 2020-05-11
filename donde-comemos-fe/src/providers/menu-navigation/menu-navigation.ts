import { App, MenuClose, AlertController, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { LocationProvider } from '../location/location';

import { HomePage } from '../../pages/home/home';
import { StartPage } from '../../pages/start/start';
import { OrdersPage } from '../../pages/orders/orders';
import { ProfilePage } from '../../pages/profile/profile';
import { FavoritePage } from '../../pages/favorite/favorite';
import { MyReservationsPage } from '../../pages/my-reservations/my-reservations';
import { LoaderProvider } from '../loader/loader';
import { UserProvider } from '../user/user';
import { PrivacyPolicyPage } from '../../pages/privacy-policy/privacy-policy';
import { TermsOfServicePage } from '../../pages/terms-of-service/terms-of-service';
import { ErrorHandlerProvider } from '../error-handler/error-handler';

@Injectable()
export class MenuNavigationProvider {

  rootPage: any = StartPage
  selectedIndex: number
  rememberedSelection: number
  pages: Array<any>

  constructor(
    private app: App,
    private menu: MenuClose,
    private userProvider: UserProvider,
    private loaderProvider: LoaderProvider,
    private alertController: AlertController,
    private locationProvider: LocationProvider,
    public modal: ModalController,
    private errorHandlerProvider: ErrorHandlerProvider) {

  }

  loadSidemenu() {
    this.pages = [
      { id: 1, title: 'Inicio', component: HomePage, icon: 'home' },
      { id: 2, title: 'Perfil', component: ProfilePage, icon: 'person', disabled: this.userProvider.user.guest },
      { id: 3, title: 'Favoritos', component: FavoritePage, icon: 'heart', disabled: this.userProvider.user.guest },
      { id: 4, title: 'Mis pedidos', component: OrdersPage, icon: 'md-list-box', disabled: this.userProvider.user.guest },
      { id: 5, title: 'Mis reservas', component: MyReservationsPage, icon: 'ios-book-outline', disabled: this.userProvider.user.guest },
      { id: 6, title: 'Políticas de privacidad', component: PrivacyPolicyPage, icon: 'book' },
      { id: 7, title: 'Términos y condiciones', component: TermsOfServicePage, icon: 'book' },
      { id: 0, title: 'Cerrar sesión', component: StartPage, icon: 'power' }
    ]

    this.selectedIndex = 0
    this.saveSelection()
  }

  showTermsModal() {
    let modal = this.modal.create(TermsOfServicePage);
    modal.present();
  }

  goTo(page) {
    this.app.getActiveNav().setRoot(page)
  }

  handleSelection(index, page) {
    if (page.disabled) {
      this.errorHandlerProvider.handleError("GUEST_USER")
    } else {
      this.selectedIndex = index
      this.openPage(page)
    }
  }

  openPage(page) {
    switch (page.id) {
      case 0:{
        this.handleLogout()
        this.rememberSelection()
        break;
      } 
      case 6:{
        this.modal.create(PrivacyPolicyPage, {show: true}).present();
        break;
      }
      case 7:{
        this.modal.create(TermsOfServicePage, {show: true}).present();
        break;  
      }
      default:{
        this.app.getActiveNav().push(page.component)
        this.saveSelection()
      }
    }
  }

  saveSelection() {
    this.rememberedSelection = this.selectedIndex
  }

  rememberSelection() {
    this.selectedIndex = this.rememberedSelection
  }

  handleLogout() {
    let alert = this.alertController.create({
      title: '¿Desea cerrar la sesión actual?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Aceptar',
          handler: selectedRestaurantId => {
            this.loaderProvider.display("Cerrando sesión...")
            this.userProvider.logout()
              .then(() => {
                this.menu.close()
                this.locationProvider.removeCurrentLocation()
                this.app.getActiveNav().setRoot(StartPage)
                this.loaderProvider.hide()
              })
              .catch(errors => {
                this.loaderProvider.hide()
                this.app.getActiveNav().setRoot(StartPage)
              })
          }
        }
      ]
    });

    alert.present()
  }

}
