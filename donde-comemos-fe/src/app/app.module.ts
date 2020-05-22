import { RatingPage } from './../pages/rating/rating';
import { CategoryRatingComponent } from './../components/category-rating/category-rating';
import { ReservationComponent } from './../components/reservation/reservation';
import { MyReservationsPage } from './../pages/my-reservations/my-reservations';
import { ReservationPage } from './../pages/reservation/reservation';
import { FavoriteRestaurantsComponent } from './../components/favorite-restaurants/favorite-restaurants';
import { OrderComponent } from './../components/order/order';
import { OrderPage } from './../pages/order/order';
import { AddCartComponent } from './../components/add-cart/add-cart';
import { InformationPage } from '../pages/information/information';
import { LocationProvider } from './../providers/location/location';
import { MenuComponent } from './../components/menu/menu';
import { ProductComponent } from './../components/product/product';
import { RestaurantComponent } from '../components/restaurant/restaurant';
import { StartPage } from './../pages/start/start';
import { RegisterPage } from './../pages/register/register';
import { ProfilePage } from './../pages/profile/profile';
import { LoginPage } from './../pages/login/login';
import { HomePage } from './../pages/home/home';
import { FavoritePage } from './../pages/favorite/favorite';
import { DetailsPage } from './../pages/details/details';
import { CategoryPage } from './../pages/category/category';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ToastController, LoadingController, MenuClose } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { RestaurantProvider } from '../providers/restaurant/restaurant';
import { HttpModule } from '@angular/http';
import { UserProvider } from '../providers/user/user';
import { ScrollProvider } from '../providers/scroll/scroll';
import { MenuProvider } from '../providers/menu/menu';
import { OrderProvider } from '../providers/order/order';
import { ServiceProvider } from '../providers/service/service';
import { BrandPictureProvider } from '../providers/brand-picture/brand-picture';
import { TagMacroProvider } from '../providers/tag-macro/tag-macro';
import { TagMicroProvider } from '../providers/tag-micro/tag-micro';
import { TimePipe } from '../PIPES/time/time';
import { PlacePipe } from '../PIPES/place/placeDiscount';
import { DiscountFormatPipe } from '../PIPES/place/discountFormat';
import { ToastProvider } from '../providers/toast/toast';
import { PaymentMethodProvider } from '../providers/payment-method/payment-method';
import { HourProvider } from '../providers/hour/hour';
import { FavoriteRestaurantProvider } from '../providers/favorite-restaurant/favorite-restaurant';
import { LoaderProvider } from '../providers/loader/loader';
import { OrdersPage } from '../pages/orders/orders';
import { StarRatingModule } from 'ionic3-star-rating';
import { ReservationProvider } from '../providers/reservation/reservation';
import { FCM } from '@ionic-native/fcm';
import { ScoreCategoryItemProvider } from '../providers/score-category-item/score-category-item';
import { QualificationsProvider } from '../providers/qualifications/qualifications';
import { DatePickerModule } from 'ionic3-datepicker';
import { ReservationMotiveProvider } from '../providers/reservation-motive/reservation-motive';
import { StorageProvider } from '../providers/storage/storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { AddProductProvider } from '../providers/add-product/add-product';
import { ReservationFormComponent } from '../components/reservation-form/reservation-form';
import { MercadoPagoComponent,MercadoPagoProvider } from "../pages/mercado-pago/mercado-pago-elements";
import { RecoverPasswordProvider } from '../providers/recover-password/recover-password';
import { CorrectCodePage } from '../pages/correct-code/correct-code';
import { MenuNavigationProvider } from '../providers/menu-navigation/menu-navigation';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { PreloadImage } from '../components/preload-image/preload-image';
import { ScrollComponent } from '../components/scroll/scroll';
import { MercadoPagoModalPage } from "../pages/mercado-pago-modal/mercado-pago-modal";
import { AddProductPage } from '../pages/add-product/add-product';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';
import { ProductCategoryProvider } from '../providers/product-category/product-category';
import { RestaurantScheduleIndicatorComponent } from '../components/restaurant-schedule-indicator/restaurant-schedule-indicator';

var config = {
  backButtonText: '',
  backButtonIcon: 'md-arrow-back',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'bottom',
  pageTransition: 'md',
  mode:'md',
  menuType: 'overlay'
};

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    DetailsPage,
    InformationPage,
    FavoritePage,
    HomePage,
    RatingPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    StartPage,
    OrderPage,
    ReservationPage,
    PrivacyPolicyPage,
    TermsOfServicePage,
    ProductComponent,
    RestaurantComponent,
    ReservationComponent,
    MenuComponent,
    AddCartComponent,
    TimePipe,
    PlacePipe,
    DiscountFormatPipe,
    OrderComponent,
    FavoriteRestaurantsComponent,
    OrdersPage,
    MyReservationsPage,
    CategoryRatingComponent,
    ReservationFormComponent,
    CorrectCodePage,
    PreloadImage,
    ChangePasswordPage,
    ScrollComponent,
    MercadoPagoComponent,
    CorrectCodePage,
    MercadoPagoModalPage,
    AddProductPage,
    RestaurantScheduleIndicatorComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,config),
    HttpModule,
    StarRatingModule,
    DatePickerModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    DetailsPage,
    InformationPage,
    FavoritePage,
    HomePage,
    RatingPage,
    LoginPage,
    ProfilePage,
    RegisterPage,
    StartPage,
    OrderPage,
    OrdersPage,
    ReservationPage,
    ChangePasswordPage,
    MyReservationsPage,
    MercadoPagoComponent,
    CorrectCodePage,
    MercadoPagoModalPage,
    AddProductPage,
    PrivacyPolicyPage,
    TermsOfServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantProvider,
    UserProvider,
    ScrollProvider,
    MenuProvider,
    OrderProvider,
    LocationProvider,
    ServiceProvider,
    BrandPictureProvider,
    TagMacroProvider,
    TagMicroProvider,
    ProductCategoryProvider,
    ToastProvider,
    ToastController,
    PaymentMethodProvider,
    HourProvider,
    FavoriteRestaurantProvider,
    LoaderProvider,
    LoadingController,
    ReservationProvider,
    ScoreCategoryItemProvider,
    QualificationsProvider,
    FCM,
    ReservationMotiveProvider,
    StorageProvider,
    NativeStorage,
    MenuClose,
    AddProductProvider,
    MercadoPagoProvider,
    RecoverPasswordProvider,
    MenuNavigationProvider,
    ErrorHandlerProvider,
    ProductCategoryProvider
  ]
})
export class AppModule {}
