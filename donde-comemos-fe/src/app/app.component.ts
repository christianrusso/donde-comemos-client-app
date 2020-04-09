import { Nav, Platform, NavController, App, AlertController, MenuClose } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { FCM } from '@ionic-native/fcm';

import { MenuNavigationProvider } from '../providers/menu-navigation/menu-navigation';
import { StorageProvider } from '../providers/storage/storage';
import { LoaderProvider } from '../providers/loader/loader';
import { ToastProvider } from '../providers/toast/toast';
import { UserProvider } from '../providers/user/user';

import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav

  constructor(
    public app: App,
    private fcm: FCM,
    public platform: Platform,
    public statusBar: StatusBar,
    public userProvider: UserProvider,
    public splashScreen: SplashScreen,
    private toastProvider: ToastProvider,
    private loaderProvider: LoaderProvider,
    private storageProvider: StorageProvider,
    private menuNavigation: MenuNavigationProvider) {

    this.initializeApp()

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString("ff6900")
      this.splashScreen.hide()
      this.menuNavigation.goTo(StartPage);
      this.storageProvider.getUser()
        .then((storedUser) => {
          this.loaderProvider.display('Iniciando sesión...')
          this.userProvider.login(storedUser.username, storedUser.password)
            .then(() => {
              this.menuNavigation.goTo(HomePage)
              this.loaderProvider.hide()
            })
            .catch(errors => {
              this.toastProvider.show('Ha habido un problema con las credenciales almacenadas')
              this.userProvider.logout()
                .catch(errors => {
                  console.log(errors)
                })
              this.menuNavigation.goTo(StartPage)
              this.loaderProvider.hide()
            })
        })
        .catch((error) => {
        })
    })
  }

  registerFCM() {
    this.fcm.getToken().then(token => {
    })

    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        // to develop
      } else {
        // this.toast.create({message:this.manageNotification(data.type),position:'top',showCloseButton:true,closeButtonText:"Ok"}).present()
      }
    })

    this.fcm.onTokenRefresh().subscribe(token => {
      // this.userProvider.changeFcmToken(token)
    })
  }

}
