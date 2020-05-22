webpackJsonp([0],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreCategoryItemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScoreCategoryItemProvider = /** @class */ (function (_super) {
    __extends(ScoreCategoryItemProvider, _super);
    function ScoreCategoryItemProvider(http, userProvider) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        return _this;
    }
    ScoreCategoryItemProvider.prototype.getURL = function () {
        return "score-category-item/";
    };
    ScoreCategoryItemProvider.prototype.addHeaders = function (headers) {
        headers.append("Authorization", "Token " + this.userProvider.user.token);
    };
    ScoreCategoryItemProvider.prototype.rate = function (ratings, typeRank) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "qualifications/", ratings, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(JSON.parse(response._body));
            }, function (errorResponse) {
                reject();
            });
        });
    };
    ScoreCategoryItemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* UserProvider */]])
    ], ScoreCategoryItemProvider);
    return ScoreCategoryItemProvider;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=score-category-item.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants_item_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductProvider = /** @class */ (function (_super) {
    __extends(AddProductProvider, _super);
    function AddProductProvider(http, userProvider) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        _this.entityName = "";
        _this.products = [];
        _this.menus = [];
        return _this;
    }
    AddProductProvider.prototype.mapList = function () {
        return {
            products: this.getProducts().map(function (orderitem) {
                return {
                    amount: orderitem.amount,
                    product_id: orderitem.item.id,
                    additional_id: orderitem.additional ? orderitem.additional.id : null,
                };
            }),
            menus: this.getMenus().map(function (orderitem) {
                return {
                    amount: orderitem.amount,
                    menu_id: orderitem.item.id
                };
            })
        };
    };
    AddProductProvider.prototype.getTotal = function () {
        return this.sumItems(this.products) + this.sumItems(this.menus);
    };
    AddProductProvider.prototype.sumItems = function (items) {
        return items.reduce(function (result, orderproduct) {
            var priceAdditional;
            if (orderproduct.additional) {
                priceAdditional = (orderproduct.amount * orderproduct.additional.discount_price);
            }
            else {
                priceAdditional = 0;
            }
            return result += ((orderproduct.amount * orderproduct.item.discount_price) + priceAdditional);
        }, 0);
    };
    AddProductProvider.prototype.isEmpty = function () {
        return this.products.length === 0 && this.menus.length === 0;
    };
    AddProductProvider.prototype.clearLists = function () {
        this.products = [];
        this.menus = [];
    };
    AddProductProvider.prototype.getMenus = function () {
        return this.menus;
    };
    AddProductProvider.prototype.getProducts = function () {
        return this.products;
    };
    AddProductProvider.prototype.addItem = function (item, item_type) {
        if (item_type === __WEBPACK_IMPORTED_MODULE_3__app_constants_item_type__["a" /* ITEM_TYPE */].MENU)
            this.menus.push(__assign({}, item, { menu: item.item }));
        else if (item_type === __WEBPACK_IMPORTED_MODULE_3__app_constants_item_type__["a" /* ITEM_TYPE */].PRODUCT)
            this.products.push(__assign({}, item, { product: item.item }));
    };
    AddProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserProvider */]])
    ], AddProductProvider);
    return AddProductProvider;
}(__WEBPACK_IMPORTED_MODULE_4__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=add-product.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEM_TYPE; });
var ITEM_TYPE = {
    PRODUCT: 'products',
    MENU: 'menus'
};
//# sourceMappingURL=item-type.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_reservation_motive_reservation_motive__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_order_order__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReservationPage = /** @class */ (function () {
    function ReservationPage(navCtrl, navParams, reservationProvider, orderProvider, toast, loader, reservationMotiveProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reservationProvider = reservationProvider;
        this.orderProvider = orderProvider;
        this.toast = toast;
        this.loader = loader;
        this.reservationMotiveProvider = reservationMotiveProvider;
        this.restaurant = navParams.get("restaurant");
        this.detailsPage = navParams.get("detailsPage");
    }
    ReservationPage.prototype.ionViewWillLeave = function () {
    };
    ReservationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-reservation',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/reservation/reservation.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Reservar mesa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="!reservationProvider.onlyReservation">\n    <ion-card  *ngFor="let res of reservationProvider.getProducts().concat(reservationProvider.getMenus())">\n      <ion-card-title class="ion-cont">{{res.item.name}}</ion-card-title>\n      <ion-card-content class="ion-cont">\n          x {{res.amount}}\n          <span class="float-right" *ngIf="!res.additional">\n              $ {{res.amount * res.item.discount_price}}\n          </span>\n      </ion-card-content>\n      <ion-card-content class="ion-cont" *ngIf="res.additional">\n          Con: {{res.additional.name}}\n          <span class="float-right">\n              $ {{res.amount * res.item.discount_price + (res.additional.discount_price * res.amount)}}\n          </span>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <ion-card>\n    <ion-card-content>\n      <reservation-form [restaurant]="restaurant" [paymentMethod]="\'cash\'" [onlyReservation]="reservationProvider.onlyReservation" [orderPage]="false"></reservation-form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/reservation/reservation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_reservation_motive_reservation_motive__["a" /* ReservationMotiveProvider */]])
    ], ReservationPage);
    return ReservationPage;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationMotiveProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base__ = __webpack_require__(18);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationMotiveProvider = /** @class */ (function (_super) {
    __extends(ReservationMotiveProvider, _super);
    function ReservationMotiveProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ReservationMotiveProvider.prototype.getURL = function (restaurantId) {
        return "reservation-motive/";
    };
    ReservationMotiveProvider.prototype.process_get = function (response) {
        this.reservationsMotives = response;
    };
    ReservationMotiveProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ReservationMotiveProvider);
    return ReservationMotiveProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=reservation-motive.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage(navCtrl, navParams, view, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.modal = modal;
        this.show = navParams.get('show');
    }
    TermsOfServicePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    TermsOfServicePage.prototype.backPage = function () {
        this.navCtrl.pop();
    };
    TermsOfServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-of-service',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Términos y condiciones</ion-title>\n    <ion-buttons left>\n\n      <button *ngIf="!show" ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n      <button *ngIf="show" ion-button icon-only (click)="backPage()" class="my-style-for-modal">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>\n    TÉRMINOS Y CONDICIONES\n  </h1>\n\n  <h2> POR FAVOR, LEA ESTOS TÉRMINOS Y CONDICIONES CUIDADOSAMENTE\n    ANTES DE DESCARGAR NUESTRA APLICACIÓN Y/O USAR NUESTRO SERVICIO </h2>\n\n\n  Por la presente, usted confirma que leyó y entendió estos Términos y condiciones. Al\n  utilizar nuestro Sitio Web y/o Aplicación y/o Servicios ofrecidos, usted acepta estos\n  Términos completamente siendo estos de carácter obligatorio. Si usted no está de\n  acuerdo con estos términos de uso o alguna parte de ellos, usted no debe utilizar\n\n  nuestro Sitio Web y/o Aplicación y/o Servicios ofrecidos.\n\n  <br>\n\n  <h3> 1. DEFINICIONES</h3>\n  1.1. “DondeComemos”: La sociedad Donde Comemos SAS\n  1.2. “Aplicación”: aplicaciones de DondeComemos para móviles.\n\n  <h3>\n    2. RELACIÓN CONTRACTUAL\n  </h3>\n  2.1. Estos Términos y condiciones representan las bases contractuales entre\n  usted y Donde Comemos, una Sociedad de Acciones Simplificadas (“SAS”),\n  registrada bajo el número RL-2020-3069573-APN-DA. Los Términos y condiciones \n  aplican a su visita y uso de nuestro sitio web www.dondecomemos.com.ar y\n  www.web.dondecomemos.com.ar (el “Sitio Web”), el Servicio y Aplicación, y toda \n  información, recomendaciones y/o servicios provistos a usted mediante el Sitio Web, \n  la Aplicación y el Servicio.\n  2.2. Mediante el uso del Sitio Web, la Aplicación, el Servicio o servicios\n  relacionados, usted acepta celebrar este contrato (el “Contrato”) con\n  DondeComemos.\n  2.3. A su propia discreción y sin responsabilidad, DondeComemos puede\n  rescindir estos Términos y condiciones o el Contrato y todos los servicios\n  en cualquier momento y con efecto inmediato, tanto completa como\n  parcialmente, modificar, ajustar, limitar, discontinuar o suspender el\n  Servicio, Aplicación, Sitio Web y todos los servicios en cualquier momento,\n  tanto completa como parcialmente (incluyendo la disponibilidad de\n  cualquier información o contenido) o rechazarle el acceso al Servicio o\n  todos los servicios en cualquier momento, tanto completa como\n  parcialmente, por cualquier motivo, y bloquear o eliminar la información\n  relacionada, en particular su cuenta de usuario, tanto completa como\n  parcialmente. Sin embargo, DondeComemos anunciará dichas medidas a\n  través de una notificación en el Sitio Web o comunicándoselo a usted.\n  Adicionalmente, DondeComemos puede pedirle que acepte una versión\n  modificada de estos Términos y condiciones inmediatamente. La\n  continuación de su uso del Servicio o Aplicación o Sitio Web luego de que\n  DondeComemos le notifique y/o comunique los cambios constituye la\n  aceptación de los cambios.\n  2.4. Información personal será recolectada y procesada en relación al Servicio\n  en concordancia con nuestras políticas de privacidad. Al aceptar estos Términos \n  y condiciones, también reconoce y acepta nuestra política de privacidad.\n  <h3>\n    3. LOS SERVICIOS\n  </h3>\n  3.1. La Aplicación, que puede ser descargada e instada en su teléfono celular\n  (celular inteligente), y el Sitio Web de DondeComemos le permite acceder a\n  información específica de restaurantes, colocar pedidos de comida o bebida\n\n  y reservar una mesa en algunos de los restaurantes (“Restaurantes\n  Participantes”).\n  3.2. Con la Aplicación o desde el Sitio Web, usted puede buscar y ordenar/pedir\n  comida y bebida, o hacer una reserva de mesa en un Restaurante\n  Participante. Su pedido y/o reserva activa un proceso en el Restaurante\n  Participante que le provee información, incluyendo su información personal\n  y/o su pedido y/o datos de su reserva. En consecuencia, usted autoriza a\n  DondeComemos a revelarle sus pedidos, información personal y datos de\n  reserva a los Restaurantes Participantes y procesarlos.\n  3.3. DondeComemos pasa su pedido y/o reserva al Restaurante Participante, y\n  lo establece en nombre y a cuenta del Restaurante Participante. Todo este\n  proceso de intermediación prestado por DondeComemos, el Sitio Web y la\n  Aplicación se denominará en lo sucesivo como el “Servicio”. El Servicio es\n  solo para uso privado no comercial.\n  3.4. Los Restaurantes Participantes prestan sus servicios gastronómicos en su\n  propio nombre y por cuenta propia. Los Restaurantes Participantes de\n  ninguna manera actúan para o en nombre de DondeComemos. En\n  consecuencia, usted entra en contacto con el Restaurante Participante, en\n  vez de con DondeComemos.\n  3.5. DondeComemos en sí mismo no provee comida o bebida o servicios de\n  gastronomía en ninguna de sus variantes.\n  3.6. Los servicios de gastronomía (incluyendo pedidos, pagos y reservas) están\n  sujetos a un acuerdo entre usted y el Restaurante Participante. Estos Términos y \n  condiciones solo son aplicables a los servicios provistos por DondeComemos, no\n  siendo aplicables al servicio de gastronomía que usted contratará con uno o \n  más Restaurantes Participantes. Cada Restaurante Participante es responsable \n  frente a los usuarios de sus servicios por el cumplimiento de las prestaciones\n  comprometidas, no siendo DondeComemos responsable en ningún aspecto de tales\n  prestaciones.\n  <h3>\n    4. CUENTA DE USUARIO\n\n  </h3>\n  4.1. Para poder hacer uso de nuestro Servicio (en particular, hacer un pedido o\n  realizar una reserva) utilizando la Aplicación o Sitio Web de\n  DondeComemos, usted debe en primer término registrarse y crear una cuenta de\n  usuario. Durante el proceso de registro se requerirá que provea información\n  personal (incluyendo su nombre, apellido, número de celular y casilla de\n  email). Luego, podrá establecer una contraseña para su cuenta de usuario\n  personal.\n  4.2. Cada cuenta de usuario está asociada con una persona humana específica.\n  DondeComemos guarda su información en su cuenta de usuario. La cuenta\n  de usuario combina información sobre usted a fin de que usted y\n  DondeComemos puedan comprender y administrar mejor sus derechos y\n  obligaciones.\n  4.3. Las cuentas de usuario no pueden transferirse.\n  4.4. Usted no puede abrir más de una cuenta de usuario.\n  4.5. Usted garantiza que la información que provee a DondeComemos es\n  correcta, completa y actualizada.\n\n  4.6. Usted también está obligado a mantener su información de usuario\n  actualizada, correcta y completa en todo momento. Por favor, use la\n  herramienta de actualización en su cuenta de usuario para hacer cualquier\n  cambio necesario. Si su información deja de ser correcta, completa o\n  actualizada, o si la comunicación con usted es virtualmente imposible\n  debido a información de contacto desactualizada, incorrecta o incompleta,\n  es posible que no podamos brindarle los Servicios; en particular, es posible\n  que usted no pueda acceder o usar el Servicio, o DondeComemos lo\n  discontinuará, finalizará o suspenderá.\n  4.7. Usted es responsable de toda la actividad en su cuenta de usuario y usted\n  está obligado a mantener su nombre de usuario y contraseña seguras y\n  secretas en todo momento.\n  4.8. DondeComemos tiene derecho a verificar la información que usted ha\n  proporcionado en cualquier momento y a negarse a proporcionarle el\n  Servicio o permitirle usar la Aplicación o Sitio Web sin brindar una razón.\n  <h3>\n\n    5. CIERRE DE SU CUENTA DE USUARIO\n\n  </h3>\n  5.1. En cualquier momento, usted puede pedir a DondeComemos que cierre su\n  cuenta de usuario con efecto inmediato. La finalización de su acceso a su\n  cuenta de usuario no siempre o automáticamente elimina toda la\n  información relacionada. Por favor vea nuestras políticas de privacidad.\n  5.2. Adicionalmente, nos reservamos el derecho de eliminar su cuenta de\n  usuario en cualquier momento.\n  <h3>\n    6. USO DEL SERVICIO\n  </h3>\n  6.1. Usted debe tener al menos 18 años de edad para usar el Servicio, la\n  Aplicación o el Sitio Web y crear una cuenta de usuario. Usted confirma que\n  es un individuo legalmente autorizado a celebrar un contrato vinculante.\n  6.2. En particular, usted se compromete a lo siguiente:\n\n  * Usted utilizará el Servicio, Aplicación o Sitio Web solo con fines\n  privados, no comerciales, y no los transmitirá a terceros.\n  * Usted no permitirá o habilitará a terceras partes a usar su cuenta de\n  usuario.\n  * Usted no asignará, transferirá o hará accesible su cuenta de usuario\n  a ninguna otra persona.\n  * Usted no utilizará la cuenta de un tercero.\n  * Usted cumplirá con toda la legislación pertinente cuando use el\n  Servicio, Aplicación o Sitio Web, y utilizará el Servicio, Aplicación o\n  Sitio Web solo para fines legales.\n  * Usted no utilizará el Servicio, Aplicación o Sitio Web para causar\n  molestia o inconveniencias.\n  * Usted no impedirá el correcto funcionamiento del Servicio,\n  Aplicación o Sitio Web.\n  * Usted no dañará el Servicio, Aplicación o Sitio Web de forma o\n  manera alguna.\n  * Usted mantendrá la contraseña de su cuenta de usuario segura y\n  confidencial.\n  * Usted nos proveerá con cualquier prueba de su identidad que\n  consideremos razonable.\n\n  6.3. En particular, DondeComemos se reserva el derecho de finalizar el Servicio\n  o uso de la Aplicación y/o Sitio Web inmediatamente si usted no cumple\n  con todas las obligaciones detalladas precedentemente.\n  6.4. Usted es responsable del establecimiento y funcionamiento del acceso a la\n  red de datos requerido para el uso de el Servicio, Aplicación y Sitio Web, y de\n  cualquier costo relacionado. El acceso a y/o el uso de el Servicio,\n  Aplicación o Sitio Web puede incurrir en tarifas de datos y conexión de su\n  proveedor de red; por ejemplo, pagos por los cuales usted es el\n  responsable.\n  6.5. Usted es responsable de la adquisición y actualización del hardware y los\n  dispositivos compatibles necesarios para acceder, actualizar y usar el\n  Servicio, la Aplicación y el Sitio Web. DondeComemos no garantiza que el\n  Servicio, la Aplicación y el Sitio Web funcionarán en el hardware o\n  dispositivos en cuestión. Además, el Servicio, la Aplicación o el Sitio Web\n  pueden experimentar problemas y retrasos causados por el uso de internet\n  y medios electrónicos de comunicación.\n  6.6. Además, usted es responsable de asegurar que usted ha descargado la\n  Aplicación correcta para su dispositivo. DondeComemos no está obligada a\n  continuar con el soporte de versiones antiguas o en todo caso asegurar su\n  funcionamiento o que estén libre de errores, en particular en el lanzamiento\n  de nuevas versiones de la Aplicación. Usted debe siempre actualizarse a la\n  última versión de la Aplicación, en particular para hacer uso de nuevas\n  funcionalidades.\n  6.7. En particular, DondeComemos no se hace responsable si usted no tiene\n  acceso a la red de datos o a dispositivos compatibles, o si descarga la\n  versión equivocada de la Aplicación para su dispositivo móvil.\n  <h3>\n    7. PAGOS\n\n  </h3>\n  7.1. La Aplicación, Sitio Web y el Servicio pueden usarse de manera gratuita.\n  DondeComemos se reserva el derecho de introducir un pago/cuota para el\n  uso del Servicio, la Aplicación y/o Sitio Web. Si DondeComemos decidiese\n  introducir dicho pago/cuota, le notificará a usted por adelantado y le dará la\n  oportunidad de finalizar el Contrato.\n  7.2. Usted sabe y entiende que al hacer uso de la Aplicación y aceptar las ofertas \n  de los Restaurantes Participantes (en particular, hacer un pedido) a través de \n  la Aplicación y/o el Sitio Web incurrirá en costos.\n  7.3. El precio de los ítems ofrecidos por los Restaurantes Participantes (por\n  ejemplo, comida y bebida) pueden encontrarse en la Aplicación y Sitio Web.\n  Estos precios son fijados por los restaurantes en cuestión y son\n  cambiados/actualizados con una cierta regularidad. Es su responsabilidad\n  verificar los precios actuales de los ítems de los restaurantes en cuestión.\n\n  <h3>\n    8. LICENCIA Y RESTRICCIONES\n\n  </h3>\n  8.1. Siempre que usted cumpla con estos Términos y condiciones en su\n  totalidad, DondeComemos le otorga una licencia limitada, no exclusiva,\n  revocable e intransferible que no puede sublicenciarse para: (i) acceder a la\n  Aplicación y el Sitio Web y usarlos en sus dispositivos en conexión con el\n  uso del Servicio; y (ii) acceder a todo el contenido, información y\n  material relacionado disponible a través de la Aplicación y el Sitio Web y\n  usarlo con fines privados, no comerciales. DondeComemos conserva todos\n  los derechos no expresamente otorgados aquí.\n\n  8.2. Lo siguiente no está permitido: (i) eliminar referencias a derechos de autor,\n  marcas registradas u otros derechos de propiedad intelectual de cualquier\n  componente de la aplicación; (ii) reproducir, modificar, vender, licenciar,\n  alquilar, vender, revender, transferir, divulgar o mostrar públicamente,\n  transmitir, enviar o explotar la Aplicación y/o Sitio Web sin el consentimiento\n  expreso de DondeComemos; (iii) descompilar o realizar ingeniería inversa a\n  la Aplicación y/o Sitio Web más allá de los límites legalmente permitidos;\n  (iv) desarrollar o instalar programas o scripts para raspar, indexar,\n  encuestar o extraer información, o limitar o inhibir indebidamente la\n  funcionalidad de aspectos de la Aplicación y/o Sitio Web; (v) intentar\n  obtener acceso no autorizado a un componente de la Aplicación o Sitio\n  Web y sus sistemas o redes relacionados.\n  8.3. El Servicio, la Aplicación y el Sitio Web y todos los derechos sobre estos\n  son y seguirán siendo propiedad de DondeComemos.\n  8.4. Ni estos Términos y condiciones ni el uso del Servicio le otorgará a usted\n  ninguno de los siguientes derechos: (i) a o en conexión con, el Servicio, la\n  Aplicación o el Sitio Web, con la excepción de la licencia limitada detallada\n  más arriba; o (ii) a usar o hacer referencia al nombre, logotipos, marcas o\n  otras marcas distinguidas de DondeComemos.\n  8.5. Sin embargo, el Servicio, la Aplicación y el Sitio Web pueden hacerse\n  accesibles o utilizarse en conexión con servicios y/o contenido de terceros\n  (incluido los anuncios). Usted reconoce que pueden aplicarse otros\n  términos de uso y disposiciones de protección de datos a este respecto.\n  DondeComemos no se hace responsable de ningún bien, servicio o\n  contenido de terceros.\n\n  <h3>\n    9. CONTENIDO DE USUARIO\n\n  </h3>\n  9.1. A su exclusivo criterio, DondeComemos puede permitirle a usted enviar,\n  cargar, publicar o poner a disposición de DondeComemos, los\n  Restaurantes Participantes y/u otros usuarios texto, audio y/o contenido e\n  información a través de la Aplicación y/o Sitio Web; por ejemplo,\n  comentarios o valoraciones sobre el servicio, comida y bebida, u otros\n  ítems o servicios, el Servicio y consultas de soporte (“Contenido de\n  Usuario”). Usted continuará siendo el propietario/dueño de todo el\n  Contenido de Usuario que envíe o que de otra manera ponga a disposición.\n  9.2. Sin embargo, usted le otorga a DondeComemos una licencia global,\n  irrevocable, transferible y gratuita, sub-licenciable y sin restricciones en\n  términos de contenido o tiempo, a todo el Contenido de Usuario, en\n  particular para usar, duplicar, comercializar, alterar, publicar, divulgar,\n  exhibir en público y de cualquier otro modo usar en todos los formatos y en\n  todos los canales de venta, independientemente de si estos existen\n  actualmente y/o se conocen, o si emergerán o conocerán en el futuro.\n  9.3. Usted es responsable de asegurar que: (i) usted es el propietario único y\n  exclusivo de todo el Contenido de Usuario, o posee todos los derechos,\n  licencias, permisos y autorización necesarios para otorgarle a\n  DondeComemos la licencia mencionada anteriormente al Contenido de\n  Usuario; y (ii) ni el Contenido de Usuario en sí mismo ni el acto de enviarlo,\n  cargarlo o divulgarlo, incluido el uso del Contenido de Usuario por parte de\n  DondeComemos, viola o ignora los derechos de propiedad intelectual u\n  otros derechos de terceros, derechos de publicación, derechos personales\n\n  o derechos de privacidad de datos de terceros, o podrían considerarse una\n  violación de las leyes o regulaciones aplicables.\n  9.4. Usted se compromete a no colocar, enviar, cargar, transferir, publicar o\n  hacer disponible cualquier Contenido de Usuario que sea ofensivo,\n  difamatorio, grosero, violento, obsceno, pornográfico o de cualquier otra\n  manera objetable o ilegal, según lo juzgue DondeComemos a su propia\n  discreción, independientemente de si el Contenido de Usuario está\n  protegido por la ley. A su propia discreción, DondeComemos tiene el\n  derecho a verificar, monitorear y eliminar Contenido de Usuario sin\n  notificación. Sin embargo, DondeComemos no está obligado a verificar,\n  monitorear o eliminar Contenido de Usuario.\n\n  <h3>\n    10. INDEMNIZACIÓN\n\n  </h3>\n  10.1. Usted se compromete a indemnizar a DondeComemos, elementos,\n  gerentes, empleados, contra todos los reclamos, costos, daños, pérdidas y\n  reclamos de responsabilidad (incluidos los honorarios y gastos legales)\n  resultantes o en conexión con una violación de cualquier disposición de\n  estos términos de uso (Términos y condiciones), disposiciones legales o\n  derechos de terceros, incluidos los de los Restaurantes Participantes, por\n  usted, o de o en relación con su uso del Servicio, la Aplicación y/o el Sitio\n  Web.\n\n  <h3>\n    11. EXCLUSIÓN DE GARANTÍAS\n  </h3>\n  11.1. Quedan excluidas todas las garantías de DondeComemos, en particular las\n  relacionadas con el Servicio, la Aplicación y el Sitio Web. DondeComemos\n  no emite garantías de ningún tipo relacionadas con el Servicio, la Aplicación\n  o el Sitio Web.\n  11.2. Similarmente, DondeComemos no garantiza o emite garantías de ningún\n  tipo relacionadas a la calidad o idoneidad de los servicios de los\n  Restaurantes Participantes.\n  11.3. El Servicio se proporciona “tal cual” y como y cuando esté disponible.\n  11.4. En particular, DondeComemos no puede garantizar que el Sitio Web, su\n  contenido, el Servicio o la Aplicación estén libres de errores, defectos,\n  programas maliciosos o virus, o que el Sitio Web y/o la Aplicación son\n  correctas, actualizadas o libres de errores.\n  11.5. Además, DondeComemos no garantiza ni emite garantías de que el\n  Servicio no sea interrumpido o esté libre de errores, y no emite garantías\n  respecto a la confiabilidad, calidad, idoneidad o disponibilidad del Servicio,\n  Aplicación o Sitio Web. Interrupciones temporarias o errores pueden surgir\n  y el Servicio, la Aplicación o el Sitio Web pueden experimentar\n  restricciones, interrupciones, retrasos u otros problemas.\n  11.6. DondeComemos se reserva el derecho de suspender el uso del Servicio,\n  Aplicación y/o Sitio Web a cualquier Restaurante Participante que dañe la\n  imagen o Servicio de DondeComemos.\n\n  <h3>\n    12. LIMITACIONES DE RESPONSABILIDAD\n\n  </h3>\n  12.1. En particular, DondeComemos no puede ser considerada responsable de\n  cualquier daño resultante del uso de (o incapacidad para usar) el Sitio Web,\n  la Aplicación o el Servicio, incluso debido a programas maliciosos, virus,\n  errores o la incompletitud de información, la Aplicación o el Sitio Web.\n  12.2. DondeComemos no puede ser considerada responsable por daños a\n  terceros o reclamos de terceros por daños, en particular por cualquier daño\n  resultante de o en conexión con el contrato entre usted y un Restaurante\n  Participante. La calidad de la comida o bebida proporcionada a través del\n  uso de la Aplicación, Sitio Web o Servicio es completa responsabilidad del\n  Restaurante Participante que provee el servicio. Bajo ninguna circunstancia\n  DondeComemos aceptará cualquier responsabilidad por y/o en conexión\n  con la comida y la bebida proporcionada por el Restaurante Participante o\n  cualquier otra acción u omisión por parte del Restaurante Participante.\n  Cualquier queja o reclamo relacionado con los servicios del Restaurante\n  Participante o la comida o la bebida debe en consecuencia dirigirse al\n  Restaurante Participante.\n  12.3. Si usted contacta a DondeComemos con respecto a un contrato de servicio\n  o disputa con un Restaurante Participante, DondeComemos lo remitirá a él.\n  Si un Restaurante Participante contacta a DondeComemos con respecto a\n  un contrato de servicio o disputa con usted, DondeComemos lo remitirá a\n  usted; sin embargo, nos reservamos el derecho a proveerle al Restaurante\n  Participante información sobre usted y el contrato de servicio o disputa en\n  cuestión.\n  12.4. DondeComemos no puede ser considerada responsable por cualquier\n  pérdida de ganancias, ingreso, rentas, contratos, negocios, reputación,\n  datos o información. DondeComemos no será responsable por cualquier\n  pérdida o daño resultante de cualquier evento o eventos fuera de su control\n  razonable. En caso de que uno o más usuarios o algún tercero inicien\n  cualquier tipo de reclamo o acciones legales contra otro u otros usuarios,\n  todos y cada uno de los usuarios involucrados en dichos reclamos o\n  acciones eximen de toda responsabilidad a DondeComemos y a sus\n  directores, empleados, representantes y apoderados.\n\n  <h3>\n    13. JURISDICCIÓN, LEY APLICABLE Y OTRAS DISPOSICIONES\n\n  </h3>\n  13.1. Estos Términos y condiciones están regidos por las leyes vigentes dentro\n  del territorio de la República Argentina.\n  13.2. Usted no puede transferir sus derechos y deberes bajo estos Términos y\n  condiciones a un tercero sin el previo, expreso y escrito consentimiento de\n  DondeComemos.\n  13.3. DondeComemos puede contactarlo con respecto al Servicio, Aplicación o\n  Sitio Web por medio de una notificación general o un correo electrónico a la\n  dirección de correo electrónico almacenada en la información de la cuenta\n  de usuario que posee DondeComemos.\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/terms-of-service/terms-of-service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = /** @class */ (function () {
    function PrivacyPolicyPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.show = navParams.get('show');
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    PrivacyPolicyPage.prototype.backPage = function () {
        this.navCtrl.pop();
    };
    PrivacyPolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-privacy-policy',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/privacy-policy/privacy-policy.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Políticas de privacidad</ion-title>\n    <ion-buttons left>\n      <button *ngIf="!show" ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n      <button *ngIf="show" ion-button icon-only (click)="backPage()" class="my-style-for-modal">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h1>\n        POLÍTICAS DE PRIVACIDAD\n    </h1>\n    <h2>\n        PARA USUARIOS Y VISITANTES DE DONDECOMEMOS\n    </h2>\n    <p>\n        DondeComemos se compromete a proteger la privacidad de sus usuarios y visitantes.\n        La siguiente política de privacidad describe la información que Donde Comemos SAS\n        (“DondeComemos” o “Nosotros”) procesa y cómo utilizamos la información para\n        proveer mejores beneficios a usuarios y visitantes de nuestro sitio web\n        www.dondecomemos.com.ar y www.web.dondecomemos.com.ar (“Sitio Web”) y nuestra \n    aplicación móvil (la “Aplicación”).\n    </p>\n    <p>\n        Usted reconoce esta política de privacidad y acepta el procesamiento de sus datos\n        personales llevado a cabo por DondeComemos o terceras partes especificadas en\n        esta política de privacidad. DondeComemos se reserva el derecho de modificar esta\n        política de privacidad.\n    </p>\n    <p>\n        Si usted tiene cualquier duda o pregunta relacionada a esta política de privacidad, por\n        favor contáctese con nosotros en privacidad@dondecomemos.com.ar\n    </p>\n    <h3>\n        1. DEFINICIONES\n    </h3>\n    <p>\n\n        1.1. “Usuario” refiere a personas que visitan y/o usan el Sitio Web y/o la\n        Aplicación y/o que se han registrado en DondeComemos a fin de usar\n        el Servicio o para potencial uso.\n    </p>\n    <p>\n        1.2. “Restaurante Participante” refiere a terceros que son únicamente\n        responsables por los servicios gastronómicos y de los restaurantes.\n    </p>\n    <h3>\n        2. GENERAL\n    </h3>\n    <p>\n        DondeComemos no recolecta deliberadamente información personal de\n        personas menores de 18 años de edad. La Aplicación y el Sitio Web no están\n        destinados a personas menores de 18 años de edad. Si usted cree que su hijo\n        menor de edad está usando la Aplicación o el Sitio Web y en consecuencia\n        proveyendo a DondeComemos con información personal, por favor contáctese\n        con Nosotros a privacidad@dondecomemos.com.ar. Nosotros nos\n        esforzaremos por eliminar la cuenta de usuario de la Aplicación y/o el Sitio Web\n        y la información personal en cuestión.\n    </p>\n    <p>\n        La parte responsable de la información personal procesada es\n    </p>\n    <p>\n        Donde Comemos SAS <br>\n        Ciudad Autónoma de Buenos Aires, Argentina.<br>\n        E-Mail: privacidad@dondecomemos.com.ar\n    </p>\n    <p>\n\n        Los Restaurantes Participantes y otras compañías pueden estar involucradas\n        en el procesamiento de la información en conexión con actividades en el Sitio\n        Web y/o la Aplicación y/o en conexión con los servicios descritos en estas\n        políticas de privacidad. Los Restaurantes Participantes y otras compañías\n        perseguirán los propósitos descritos en esta política de privacidad y cumplirán\n        con la ley aplicable a protección de información.\n    </p>\n    <p>\n\n        Nosotros recolectamos y procesamos información personal en diferentes\n        formas/maneras. La información personal es provista voluntariamente por el\n        Usuario al momento de creación y/o modificación de una cuenta de usuario y\n        cuando interactúa con o usa la Aplicación, Sitio Web y/o el Servicio, y a través\n        de comunicación vía email con Nosotros. Para Usuarios de la Aplicación, Sitio\n        Web y/o el Servicio, esto incluye la siguiente información: nombre, apellido,\n        casilla de email, número de teléfono celular, contraseña, pedidos, comentarios\n        sobre pedidos, valoraciones, reservas de mesa, dirección IP, ubicación\n        geográfica. Los datos del Restaurante Participante incluyen nombre, dirección,\n        dirección de email, contraseña, número de teléfono, datos bancarios,\n        información particular de la persona humana o jurídica titular del restaurante.\n    </p>\n    <h3>\n        3. POR QUÉ PROCESAMOS SUS DATOS PERSONALES?\n    </h3>\n    <h5>\n        3.1. ADMINISTRAR LA APLICACIÓN, EL SITIO WEB Y HABILITARLO A\n        USTED PARA EL USO DE LOS SERVICIOS DISPONIBLES EN LA\n        APLICACIÓN Y EL SITIO WEB\n    </h5>\n    <p>\n\n        Cuando usted visita nuestro Sitio Web, nuestros administradores\n        procesan sus datos personales, incluyendo dirección IP, tipo de\n        navegador, fuente de referencia al Sitio Web y la duración de la visita.\n        Adicionalmente, en ciertas ocasiones su navegador puede requerirle su\n        ubicación actual a fin de optimizar su experiencia de Usuario.\n        Cuando usted visita y/o usa la Aplicación, Nosotros procesamos su\n        información personal incluyendo datos técnicos como su dirección IP.\n        Usamos estos datos para proveerle el Servicio, asegurarnos de que la\n        Aplicación funciona correctamente, resolver problemas técnicos,\n        proveerlo con la correcta y última versión de la Aplicación, y mejorar\n        funcionalidades de la Aplicación.\n    </p>\n    <h5>\n        3.2. SERVICIO AL CLIENTE\n    </h5>\n    <p>\n        Cuando usted se registra como un Usuario, recolectamos su nombre,\n        apellido, email, número de celular, contraseña, dirección IP y tipo de\n        dispositivo.\n    </p>\n    <p>\n\n    Usamos su información personal y datos de contacto para proveerle los\n    servicios, para cuestiones de comunicación relacionadas a sus pedidos\n    y reservas de mesa, para anunciar ofertas y hacer anuncios\n    relacionados con los servicios. Nosotros usamos sus datos personales\n    y datos de registro para crear y administrar su cuenta de usuario de\n    DondeComemos. Nos reservamos el derecho de desactivar su cuenta\n    si sospechamos que usted está usando la Aplicación o el Sitio Web\n    para cometer fraude o actos ilegales, o si viola nuestros términos y\n    condiciones.\n    </p>\n    <h5>\n        3.3. DATOS PERSONALES Y RESTAURANTES PARTICIPANTES\n    </h5>\n    <p>\n        Cuando usted hace un pedido o realiza una reserva a través de la\n        Aplicación o el Sitio Web, Nosotros le proveemos al Restaurante\n        Participante con la información de dicho pedido o reserva, su nombre,\n        apellido y número de teléfono celular.\n    </p>\n    <h5>\n        3.4. PROCESAMIENTO DE PAGO\n    </h5>\n    <p>\n        Si se realiza un pedido con pago online, en ningún momento\n        DondeComemos almacena los datos de la tarjeta de crédito/débito; esta\n        tarea la realizan los proveedores de pagos online.\n    </p>\n    <h5>\n        3.5. MARKETING\n    </h5>\n    <p>\n        DondeComemos puede usar sus datos personales para enviarle a\n        usted información general sobre nuevos desarrollos en\n        DondeComemos. Usted puede eliminar/cancelar su suscripción a estos\n        mensajes en cualquier momento.\n    </p>\n    <h5>\n        3.6. COMPILACIÓN DE DATOS ADMINISTRATIVOS Y ESTADÍSTICOS\n    </h5>\n    <p>\n\n        DondeComemos utiliza datos personales agregados sin identificar a\n        ningún individuo en particular, a fin de monitorear las funcionalidades\n        del Servicio más usadas, analizar patrones de uso y determinar dónde\n        debemos proveer nuestros servicios y enfocar nuestros esfuerzos.\n        Podemos proveer esta información a terceros con fines estadísticos y\n        para análisis del sector.\n    </p>\n    <h5>\n        3.7. COOKIES / GOOGLE ANALYTICS\n    </h5>\n    <p>\n\n        \n        DondeComemos usa cookies. Una cookie consiste en información\n        enviada por un servidor web a un navegador web, y almacenada por el\n        navegador. La información es luego enviada de nuevo al servidor en\n        cada momento que el navegador solicita una página del servidor. Esto\n        habilita al servidor a identificar y rastrear el navegador web. Las cookies\n        nos ayudan a Nosotros a reconocer su dispositivo cuando visita el Sitio\n        Web nuevamente, a analizar qué tan bien nuestro Sitio Web está\n        funcionando y a ajustar nuestro contenido de tal manera que usted\n        reciba información a medida de sus intereses.\n    </p>\n    <p>\n        La mayoría de los navegadores web lo autorizan a usted a rechazar la\n        aceptación de cookies o a ser notificado cuando recibe una cookie. En\n        la sección de “Ayuda” o “Configuración” de la mayoría de los\n        navegadores web, usted recibirá información de cómo cambiar su\n        configuración de navegación web. Si usted decide desactivar y/o\n        eliminar cookies, sepa por favor que puede que algunas funcionalidades \n    de DondeComemos ya no estén disponibles\n    </p>\n    <p>\n        Además, utilizamos una herramienta llamada Google Analytics para\n        recolectar y analizar información sobre el uso del Sitio Web. Google\n        Analytics recolecta información como la frecuencia de sus visitas al Sitio\n        Web o las páginas web que visitó antes de visitar la nuestra. Google\n        Analytics utiliza cookies, las cuales son almacenadas en la\n        computadora del Usuario. La información generada en relación con\n        nuestro Sitio Web es utilizada para mejorar nuestro Sitio Web. Google\n        almacenará esta información. Las políticas de privacidad de Google se\n        encuentran disponible en http://www.google.com/privacypolicy.html\n    </p>\n    <h5>\n        3.8. REVELACIÓN DE INFORMACIÓN\n    </h5>\n    <p>\n        DondeComemos no revelerá información personal o datos por usted \n    suministrados a ningún tercero, a menos que la entrega de dicha\n    información le sea requerida por autoridad pública competente y\n    en acuerdo con la normativa de Protección de Datos Personales \n    vigente en cada momento. Sin perjuicio de esto, DondeComemos se\n    reserva la facultad de revelar datos en la medida en que esto resulte\n    estrictamente necesario para ejercer y defender sus derechos.\n    </p>\n    <p>\n        Sin perjucio de esto, hace constar que, bajo acuerdo de confidencialidad,\n    el personal de DondeComemos tendrá en algunos casos acceso a información/\n    datos personales sobre usted en tanto ello sea necesario para el\n    desarrollo de las tareas que desempeñan para DondeComemos.\n    </p>\n    <h5>\n        3.9. NINGUNA OBLIGACIÓN DE PROPORCIONAR DATOS PERSONALES\n    </h5>\n    <p>\n        Usted no está obligado a proveer a DondeComemos con información\n        personal. Sin embargo, sin el aporte de cierta información, nos será\n        imposible ofrecerle Servicios que habitualmente provee DondeComemos a\n    sus usuarios.\n    </p>\n    <h3>\n        4. SUS DERECHOS\n    </h3>\n    <p>\n        Como Usuario, usted podría tener el derecho a información sobre su cuenta\n        personal. Esto también concierne información que usted nos haya dado al\n        hacer pedidos o realizar reservas de mesa a través de la Aplicación o el Sitio\n        Web. Usted podrá ejercer sus derechos bajo la ley de protección de datos\n        personales, por ejemplo, demandando que se le informe qué datos personales\n    guarda de su persona DondeComemos, o requiriendo que sus datos personales sean\n        corregidos o eliminados en cualquier momento, o solicitando que su\n        información personal no sea procesada, enviando un e-mail a\n        privacidad@dondecomemos.com.ar. Por favor, adjunte una copia de su tarjeta\n        de identificación o pasaporte para fines de identificación.\n    </p>\n    <p>\n        También puede actualizar sus datos personales a través de su cuenta de\n        DondeComemos y revocar cualquier consentimiento que haya otorgado.\n    </p>\n\n    <h3>\n        5. ALMACENAMIENTO DE DATOS\n    </h3>\n    <p>\n\n        A menos que se indique lo contrario en esta política de privacidad, Nosotros\n        almacenamos sus datos personales hasta que usted borre/elimine su cuenta\n        de usuario con DondeComemos. Si usted desea eliminar su cuenta de usuario\n        de DondeComemos o requiere que ya no usemos sus datos para prestarle\n        servicios a usted, por favor contáctese con Nosotros a\n        privacidad@dondecomemos.com.ar.\n    </p>\n    <p>\n\n        Luego de que su cuenta de usuario haya sido eliminada, Nosotros borraremos\n        sus datos personales a menos que sea requerida para cumplir obligaciones\n        legales o resolver disputas.\n    </p>\n    <h3>\n        6. SEGURIDAD\n    </h3>\n    <p>\n\n        DondeComemos tomará y toma precauciones técnicas y organizacionales para\n        prevenir la pérdida o el procesamiento no autorizado de su información\n        personal. Para este propósito, su información personal es almacenada en\n        servidores seguros; tomamos precauciones de seguridad estándar,\n        económicamente razonables.\n    </p>\n    <p>\n        Sin embargo, por más eficaces que sean nuestras precauciones de seguridad,\n        ningún sistema de seguridad es infalible. No podemos garantizar la seguridad\n        de nuestra base de datos o que la información que usted nos provee a\n        Nosotros no será interceptada mientras está siendo transmitida a Nosotros. La\n        transferencia de sus datos a DondeComemos es siempre bajo su propio riesgo.\n        Le recomendamos que no comparta su contraseña con nadie.\n    </p>\n    <h3>\n        7. CAMBIOS DE POLÍTICA DE PRIVACIDAD - COMPROMISO PERMANENTE\n    </h3>\n    <p>\n        Nosotros podremos actualizar esta política de privacidad para dar cuenta de los\n        cambios en nuestra información y procedimientos de procesamiento de datos y\n        otras cuestiones. Si los cambios son significativos, le notificaremos a usted a\n        través de email y lo anunciaremos en el Sitio Web antes de que entren en\n        vigor. La continuación de su uso de la Aplicación y/o Sitio Web y/o el Servicio\n        constituye su reconocimiento y aceptación de la política de privacidad\n        actualizada. Le recomendamos a usted que visite esta página web con\n        regularidad a fin de asegurarse que está de acuerdo con cualquier cambio. Sin\n    perjuicio de lo expuesto, DondeComemos se compromete de manera permanente a: (a)\n    designar un responsable de tratamiento de los datos personales, que será una\n    persona humana integrante de su órgano de administración; (b) emplear los datos\n    con la sola y estricta finalidad para la que han sido recabados; (c) abstenerse \n    de transferir por cualquier causa o título tales datos sin el previo conocimiento\n    y conformidad de su/s titular/es, salvo las excepciones referidas en la cláusula \n    3.8; (d) explicar al titular, al momento de recabar sus datos, la finalidad con \n    que serán empleados e informarle que será libre de negarse a suministrarlos si no\n    estuviese conforme con la finalidad para la que serán utilizados; (e) almacenar\n    los datos en sistemas seguros, que cuenten con medidas de protección suficientes\n    para evitar la substracción no autorizada de los datos; (f) apelar a sistemas de \n    encriptación en caso de ser necesaria la transferencia de los datos, de modo tal\n    de evitar que en la transmisión se los intercepte y derive sin autorización a \n    bases de datos administradas por terceros ajenos a DondeComemos; (g) destruir\n    los archivos o eliminar la información una vez que el servicio pierda vigencia y\n    la finalidad con que se recabaron los datos personales pierda vigencia; (h) mantener\n    su sistema de manejo de datos personales bajo permanente revisión, ajustándolo a \n    los más elevados estándares vigentes a nivel internacional; (i) cumplir con los\n    reglamentos que dicte la Agencia de Acesso a la Información Pública y la Dirección\n    Nacional de Protección de Datos Personales de la República Argentina.\n    </p>\n    <h3>\n        8. SITIOS WEB DE TERCEROS\n    </h3>\n    <p>\n        El Sitio Web y la Aplicación pueden contener vínculos a otros sitios web y/o\n        aplicaciones. Nosotros no nos hacemos responsables por las políticas de\n        privacidad o prácticas de otros sitios web y/o aplicaciones.\n    </p>\n    <h3>\n        9. INFORMACIÓN DE CONTACTO\n    </h3>\n    <p>\n        privacidad@dondecomemos.com.ar<br>\n        www.dondecomemos.com.ar<br>\n    </p>\n    <p>\n        Donde Comemos SAS<br>\n        Ciudad Autónoma de Buenos Aires, Argentina.\n    </p>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/privacy-policy/privacy-policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], PrivacyPolicyPage);
    return PrivacyPolicyPage;
}());

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuNavigationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_location__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_start_start__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorite_favorite__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_my_reservations_my_reservations__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_privacy_policy_privacy_policy__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_terms_of_service_terms_of_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__error_handler_error_handler__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MenuNavigationProvider = /** @class */ (function () {
    function MenuNavigationProvider(app, menu, userProvider, loaderProvider, alertController, locationProvider, modal, errorHandlerProvider) {
        this.app = app;
        this.menu = menu;
        this.userProvider = userProvider;
        this.loaderProvider = loaderProvider;
        this.alertController = alertController;
        this.locationProvider = locationProvider;
        this.modal = modal;
        this.errorHandlerProvider = errorHandlerProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */];
    }
    MenuNavigationProvider.prototype.loadSidemenu = function () {
        this.pages = [
            { id: 1, title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { id: 2, title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile__["a" /* ProfilePage */], icon: 'person', disabled: this.userProvider.user.guest },
            { id: 3, title: 'Favoritos', component: __WEBPACK_IMPORTED_MODULE_8__pages_favorite_favorite__["a" /* FavoritePage */], icon: 'heart', disabled: this.userProvider.user.guest },
            { id: 4, title: 'Mis pedidos', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders__["a" /* OrdersPage */], icon: 'md-list-box', disabled: this.userProvider.user.guest },
            { id: 5, title: 'Mis reservas', component: __WEBPACK_IMPORTED_MODULE_9__pages_my_reservations_my_reservations__["a" /* MyReservationsPage */], icon: 'ios-book-outline', disabled: this.userProvider.user.guest },
            { id: 6, title: 'Políticas de privacidad', component: __WEBPACK_IMPORTED_MODULE_12__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], icon: 'book' },
            { id: 7, title: 'Términos y condiciones', component: __WEBPACK_IMPORTED_MODULE_13__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */], icon: 'book' },
            { id: 0, title: 'Cerrar sesión', component: __WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */], icon: 'power' }
        ];
        this.selectedIndex = 0;
        this.saveSelection();
    };
    MenuNavigationProvider.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_13__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    MenuNavigationProvider.prototype.goTo = function (page) {
        this.app.getActiveNav().setRoot(page);
    };
    MenuNavigationProvider.prototype.handleSelection = function (index, page) {
        if (page.disabled) {
            this.errorHandlerProvider.handleError("GUEST_USER");
        }
        else {
            this.selectedIndex = index;
            this.openPage(page);
        }
    };
    MenuNavigationProvider.prototype.openPage = function (page) {
        switch (page.id) {
            case 0: {
                this.handleLogout();
                this.rememberSelection();
                break;
            }
            case 6: {
                this.modal.create(__WEBPACK_IMPORTED_MODULE_12__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], { show: true }).present();
                break;
            }
            case 7: {
                this.modal.create(__WEBPACK_IMPORTED_MODULE_13__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */], { show: true }).present();
                break;
            }
            default: {
                this.app.getActiveNav().push(page.component);
                this.saveSelection();
            }
        }
    };
    MenuNavigationProvider.prototype.saveSelection = function () {
        this.rememberedSelection = this.selectedIndex;
    };
    MenuNavigationProvider.prototype.rememberSelection = function () {
        this.selectedIndex = this.rememberedSelection;
    };
    MenuNavigationProvider.prototype.handleLogout = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: '¿Desea cerrar la sesión actual?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (selectedRestaurantId) {
                        _this.loaderProvider.display("Cerrando sesión...");
                        _this.userProvider.logout()
                            .then(function () {
                            _this.menu.close();
                            _this.locationProvider.removeCurrentLocation();
                            _this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */]);
                            _this.loaderProvider.hide();
                        })
                            .catch(function (errors) {
                            _this.loaderProvider.hide();
                            _this.app.getActiveNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_start_start__["a" /* StartPage */]);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MenuNavigationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["MenuClose"],
            __WEBPACK_IMPORTED_MODULE_11__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_10__loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_14__error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], MenuNavigationProvider);
    return MenuNavigationProvider;
}());

//# sourceMappingURL=menu-navigation.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartPage = /** @class */ (function () {
    function StartPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.activebutton = 'sign_in';
        this.links = {
            "sign_in": __WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */],
            "sign_up": __WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */],
        };
        this.menuCtrl.swipeEnable(false);
    }
    StartPage.prototype.activeButton = function (type) {
        this.navCtrl.push(this.links[type]);
        this.activebutton = type;
    };
    StartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-start',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/start/start.html"*/'<ion-content class="main_bg" text-center padding>\n   <div class="start_content">\n      <div class="logo" margin-bottom>\n         <img src="assets/img/icon.png">\n         <h3 no-margin>donde comemos</h3>\n      </div>\n   </div>\n   <div class="ionPWA">\n      <button \n         (click)="activeButton(\'sign_in\')" \n         [ngClass]="{\'active_btn\':activebutton==\'sign_in\'}" \n         ion-button block clear>\n         Ingresar\n      </button>\n      <button \n         (click)="activeButton(\'sign_up\')" \n         [ngClass]="{\'active_btn\':activebutton==\'sign_up\'}" \n         ion-button block clear>\n         Registrarse\n      </button>\n   </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/start/start.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], StartPage);
    return StartPage;
}());

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_favorite_restaurant_favorite_restaurant__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_brand_picture_brand_picture__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_order__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__information_information__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_menu_menu__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_scroll_scroll__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_restaurant_restaurant__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reservation_reservation__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__register_register__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_product_category_product_category__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




















var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, socialSharing, scrollProvider, restaurantProvider, productCategoryProvider, menuProvider, orderProvider, brandPictureProvider, toaster, alertCtrl, favoriteRestaurantProvider, userProvider, reservationProvider, app, storageProvider, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.socialSharing = socialSharing;
        this.scrollProvider = scrollProvider;
        this.restaurantProvider = restaurantProvider;
        this.productCategoryProvider = productCategoryProvider;
        this.menuProvider = menuProvider;
        this.orderProvider = orderProvider;
        this.brandPictureProvider = brandPictureProvider;
        this.toaster = toaster;
        this.alertCtrl = alertCtrl;
        this.favoriteRestaurantProvider = favoriteRestaurantProvider;
        this.userProvider = userProvider;
        this.reservationProvider = reservationProvider;
        this.app = app;
        this.storageProvider = storageProvider;
        this.platform = platform;
        this.loadedElementsNumber = 0;
        this.initialElementsToLoad = 15;
        this.menus = [];
        this.popUP = true;
        this.restaurant = navParams.get('restaurant');
        this.loadElements();
        this.loadedElementsNumber = this.initialElementsToLoad;
        this.orderProvider.clearOrder();
        this.reservationProvider.clearReservation();
        this.orderProvider.setRestaurant(this.restaurant);
        this.selectedImg = this.restaurant.profile_picture;
        this.pictures = [];
    }
    DetailsPage.prototype.ionViewWillLeave = function () {
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
        this.unregisterBackButtonAction = null;
        this.popUP = true;
    };
    DetailsPage.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            if (!_this.userProvider.isShowingPopUp && _this.userProvider.user.token && (_this.orderProvider.products.length > 0 || _this.orderProvider.menus.length > 0)) {
                _this.alertOrder();
            }
            else if (!_this.userProvider.isShowingPopUp)
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__home_home__["a" /* HomePage */]);
        }, 101);
    };
    DetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.isFavoriteRestaurant();
        this.navBar.backButtonClick = function (e) {
            if (_this.userProvider.user.token && (_this.orderProvider.products.length > 0 || _this.orderProvider.menus.length > 0)) {
                _this.alertOrder();
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__home_home__["a" /* HomePage */]);
            }
        };
        this.initializeBackButtonCustomHandler();
        this.popUP = true;
    };
    DetailsPage.prototype.isFavoriteRestaurant = function () {
        var _this = this;
        if (!this.userProvider.isGuestUser()) {
            this.favoriteRestaurantProvider.restaurantsFavorites(this.userProvider.user.id, this.restaurant.id).then(function (restaurant) {
                _this.restaurantFavorite = restaurant.pop();
            });
        }
    };
    DetailsPage.prototype.loadElements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, now, date, params;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.productCategoryProvider.get(this.restaurant.id)];
                    case 1:
                        _a.elements = _b.sent();
                        now = __WEBPACK_IMPORTED_MODULE_19_moment___default()();
                        date = __WEBPACK_IMPORTED_MODULE_19_moment___default()().format("YYYY-MM-DD");
                        console.log(date);
                        params = {
                            restaurantId: this.restaurant.id,
                            date: date
                        };
                        this.menuProvider.get(params).then(function (menus) { return _this.menus = menus; });
                        this.brandPictureProvider.get(this.restaurant.id).then(function (brandPictures) {
                            _this.pictures.push(_this.restaurant.profile_picture);
                            _this.pictures = _this.pictures.concat(brandPictures.map(function (bp) { return bp.brand_picture; }));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailsPage.prototype.getElements = function () {
        return this.elements && this.elements.slice(0, this.loadedElementsNumber);
    };
    DetailsPage.prototype.getMenusOfDay = function () {
        return this.menus;
    };
    DetailsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.loadedElementsNumber < this.elements.length) {
            setTimeout(function () {
                _this.loadedElementsNumber += _this.initialElementsToLoad;
                infiniteScroll.complete();
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
    };
    DetailsPage.prototype.shareSheetShare = function () {
        this.socialSharing.share("Share message", "Share subject", "URL to file or image", "A URL to share").then(function () {
            console.log("shareSheetShare: Success");
        }).catch(function () {
            console.error("shareSheetShare: failed");
        });
    };
    DetailsPage.prototype.getImg = function (img) {
        this.selectedImg = img;
    };
    DetailsPage.prototype.showOrder = function () {
        if (this.userProvider.isGuestUser()) {
            this.alertGuestUser();
        }
        else if (!this.orderProvider.isEmpty()) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__order_order__["a" /* OrderPage */], { restaurant: this.restaurant, detailsPage: this });
            this.reservationProvider.onlyReservation = false;
        }
        else
            this.toaster.show('Todavía no agregaste items a tu pedido');
    };
    DetailsPage.prototype.goToServices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__information_information__["a" /* InformationPage */], { restaurant: this.restaurant, detailsPage: this });
    };
    DetailsPage.prototype.goToReservation = function () {
        if (this.userProvider.isGuestUser()) {
            this.alertGuestUser();
        }
        else if (this.popUP) {
            this.showPopUps();
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__reservation_reservation__["a" /* ReservationPage */], { restaurant: this.restaurant, detailsPage: this, paymentMethod: null });
        }
    };
    DetailsPage.prototype.showPopUps = function () {
        if ((this.orderProvider.products.length > 0 || this.orderProvider.menus.length > 0)) {
            this.presentAlertWithProduct();
        }
        else {
            this.presentAlert();
        }
    };
    DetailsPage.prototype.presentAlert = function () {
        var _this = this;
        this.userProvider.isShowingPopUp = true;
        var alert = this.alertCtrl.create({
            title: '¡Recordá que podés hacer tu pedido y realizar una reserva!',
            buttons: [
                {
                    text: 'Solo reservar mesa',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                        _this.popUP = false;
                        _this.goToReservation();
                        _this.reservationProvider.onlyReservation = true;
                    }
                },
                {
                    text: 'Seleccionar productos',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                        _this.popUP = false;
                        _this.reservationProvider.onlyReservation = false;
                    }
                },
                {
                    role: 'cancel',
                    cssClass: "btn-hidden",
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsPage.prototype.presentAlertWithProduct = function () {
        var _this = this;
        this.userProvider.isShowingPopUp = true;
        var alert = this.alertCtrl.create({
            title: '¡Recordá que podés hacer tu pedido y realizar una reserva!',
            buttons: [
                {
                    text: 'Solo reservar mesa',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                        _this.popUP = false;
                        _this.goToReservation();
                        _this.reservationProvider.onlyReservation = true;
                    }
                },
                {
                    text: 'Reservar mesa con los productos seleccionados',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                        _this.popUP = false;
                        _this.goToReservation();
                        _this.reservationProvider.onlyReservation = false;
                    }
                },
                {
                    role: 'cancel',
                    cssClass: "btn-hidden",
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsPage.prototype.alertGuestUser = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Todavía no estas registrado?',
            message: 'Registrate y disfrutá de lo que tenemos para ofrecerte',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Registrarse',
                    handler: function (data) {
                        _this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_17__register_register__["a" /* RegisterPage */], { restaurant: _this.restaurant });
                    }
                }
            ]
        });
        alert.present();
    };
    DetailsPage.prototype.alertOrder = function () {
        var _this = this;
        this.userProvider.isShowingPopUp = true;
        var alert = this.alertCtrl.create({
            title: '¿Estás seguro de que querés salir?',
            message: 'Al hacerlo, tu pedido se perderá',
            buttons: [
                {
                    text: 'Cancelar',
                    role: "cancel",
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                        _this.orderProvider.clearLists();
                        _this.reservationProvider.clearLists();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__home_home__["a" /* HomePage */]);
                    }
                },
            ],
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Navbar"])
    ], DetailsPage.prototype, "navBar", void 0);
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/details/details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{restaurant.name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToServices()">\n        <ion-icon name="ios-information-circle-outline" class="float-right button-info"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="main_item">\n    <img src="{{selectedImg}}" />\n    <preload-image [ratio]="{w:2, h:1}" src="{{selectedImg}}"></preload-image>\n    <ion-item>\n      <h1 class="nameRestaurant"></h1>\n      <div class="item_info">\n        <div float-right>\n          <button ion-button class="button-reservation" (click)="goToReservation()">Reservar mesa</button>\n          <div float-right>\n            <favorite-restaurants [restaurant]="restaurant" [restaurantFavorite]="restaurantFavorite">\n            </favorite-restaurants>\n            <ion-icon name="cart" color="primary" (click)="showOrder()"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </ion-item>\n  </div>\n\n  <ion-scroll scrollX="true" class="more_img">\n    <div class="item_img" *ngFor="let item of pictures" [ngClass]="{\'active_select\':selectedImg==item}"\n      (click)="getImg(item)">\n      <preload-image class="preload" [ratio]="{w:1, h:1}" src="{{item}}"></preload-image>\n    </div>\n  </ion-scroll>\n\n  <div class="ionPWA">\n\n    <div class="no_results_menus" *ngIf="getMenusOfDay()?.length == 0" text-center padding>\n      Restaurante sin menú del día\n    </div>\n\n    <div *ngIf="getMenusOfDay().length > 0">\n      <div>\n        <h1 text-center class="menuOfDay">Menús del día</h1>\n      </div>\n\n      <ion-scroll class="horizontal-scroll" scrollX="true">\n        <ion-row nowrap>\n          <ion-col width-90 class="item_img" *ngFor="let menu of getMenusOfDay()">\n            <menu [menu]="menu"></menu>\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n    </div>\n\n    <!-- <div class="recipe_detail" padding>\n        <h3>Ingredients</h3>\n        <ion-list>\n          <ion-item no-lines>\n            <ion-icon class="app-circle" color="primary" item-start></ion-icon>\n            1 head garlic\n          </ion-item>\n        </ion-list>\n       \n      </div> -->\n    <h1 text-center>Carta</h1>\n    <div class="no_results_products" *ngIf="getElements()?.length == 0" text-center padding>Restaurante sin productos\n    </div>\n\n    <div *ngIf="getElements()?.length > 0">\n\n      <div class="category-container" *ngFor="let category of getElements()">\n        <h2 float-left class="nameCategory"> {{category.name}}</h2>\n        \n        <ion-item class="product-container" *ngFor="let product of category.products">\n            <product [product]="product" [additionals]="category.additionals"></product>\n        </ion-item>\n      </div>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n\n  </div>\n      <ion-fab bottom left>\n        <button (click)="showOrder()" ion-fab>\n          <ion-icon name="cart"></ion-icon>\n        </button>\n      </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_11__providers_scroll_scroll__["a" /* ScrollProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_restaurant_restaurant__["a" /* RestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_product_category_product_category__["a" /* ProductCategoryProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_menu_menu__["a" /* MenuProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_brand_picture_brand_picture__["a" /* BrandPictureProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_favorite_restaurant_favorite_restaurant__["a" /* FavoriteRestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_14__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_16__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Platform"]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadoPagoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MercadoPagoModalPage = /** @class */ (function () {
    function MercadoPagoModalPage(navCtrl, navParams, orderProvider, reservationProvider, events, loader, toaster) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.reservationProvider = reservationProvider;
        this.events = events;
        this.loader = loader;
        this.toaster = toaster;
        var restaurantId = this.navParams.get('restaurantId');
        var phone_nbr = this.navParams.get('phone_nbr');
        var diners = this.navParams.get('diners');
        var formattedCurrentDate = this.navParams.get('formattedCurrentDate');
        var time = this.navParams.get('time');
        var motive = this.navParams.get('motive');
        var comments = this.navParams.get('comments');
        this.events.subscribe('payment:created', function (response) {
            if (response && response.attributes.status === 'approved') {
                if (_this.orderProvider.isComerRestaurant()) {
                    _this.loader.display('Espere unos segundos...');
                    _this.reservationProvider.addReservation(response.attributes.id, restaurantId, phone_nbr, diners, formattedCurrentDate, time, motive, comments).then(function () {
                        _this.loader.hide();
                        _this.toaster.show("Tu reserva ha sido realizada con éxito", 1500);
                        _this.reservationProvider.clearReservation();
                        _this.orderProvider.clearOrder();
                        _this.navCtrl.remove(_this.navCtrl.getActive().index - 1, 2);
                    }).catch(function () {
                        _this.loader.hide();
                        _this.toaster.show('Ocurrió un problema al generar su reserva, intente nuevamente.');
                    });
                }
                else {
                    _this.loader.display('Espere unos segundos...');
                    _this.orderProvider.create(response.attributes.id).then(function () {
                        _this.loader.hide();
                        _this.toaster.show('Se creó tu pedido correctamente');
                        _this.orderProvider.clearOrder();
                        _this.reservationProvider.clearReservation();
                        _this.navCtrl.remove(_this.navCtrl.getActive().index - 1, 2);
                    }).catch(function () {
                        _this.loader.hide();
                        _this.toaster.show('Ocurrió un problema al generar su pedido, intente nuevamente.');
                    });
                }
            }
            else {
                _this.loader.hide();
                _this.toaster.show('Su pago ha sido rechazado, revise sus datos e intente nuevamente.');
            }
        });
        this.publicKey = this.navParams.get('publicKey');
        this.data = {
            restaurantId: restaurantId,
            //total: this.orderProvider.getTotal(),
            total: this.navParams.get('total'),
        };
    }
    MercadoPagoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-mercado-pago-modal',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/mercado-pago-modal/mercado-pago-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <mercado-pago [publicKey]="publicKey" [data]="data"></mercado-pago>\n</ion-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/mercado-pago-modal/mercado-pago-modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_reservation_reservation__["a" /* ReservationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_reservation_reservation__["a" /* ReservationProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _g || Object])
    ], MercadoPagoModalPage);
    return MercadoPagoModalPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=mercado-pago-modal.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QualificationsProvider = /** @class */ (function (_super) {
    __extends(QualificationsProvider, _super);
    function QualificationsProvider(http, userProvider) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        return _this;
    }
    QualificationsProvider.prototype.getURL = function (restaurantId) {
        return "restaurants/" + restaurantId + "/qualification_by_category/";
    };
    QualificationsProvider.prototype.process_get = function (response) {
        this.categories = response;
    };
    QualificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* UserProvider */]])
    ], QualificationsProvider);
    return QualificationsProvider;
}(__WEBPACK_IMPORTED_MODULE_1__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=qualifications.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagMacroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagMacroProvider = /** @class */ (function (_super) {
    __extends(TagMacroProvider, _super);
    function TagMacroProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.tags = [];
        return _this;
    }
    TagMacroProvider.prototype.getURL = function (restaurantId) {
        return "tags-macro/" + restaurantId + "/";
    };
    TagMacroProvider.prototype.process_get = function (response) {
        this.tags = response;
    };
    TagMacroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TagMacroProvider);
    return TagMacroProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=tag-macro.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollProvider = /** @class */ (function () {
    function ScrollProvider(http) {
        this.http = http;
        this.loadedElementsNumber = 0;
        this.loadedElements = [];
        this.PAGESIZE = 3;
        this.elements = [];
    }
    ScrollProvider.prototype.getElements = function () {
        this.loadedElements = this.elements.slice(0, this.loadedElementsNumber);
    };
    ScrollProvider.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.loadedElementsNumber <= this.elements.length) {
            setTimeout(function () {
                _this.loadedElementsNumber += _this.PAGESIZE;
                _this.getElements();
                infiniteScroll.complete();
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
    };
    ScrollProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ScrollProvider);
    return ScrollProvider;
}());

//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastProvider = /** @class */ (function () {
    function ToastProvider(toast) {
        this.toast = toast;
    }
    ToastProvider.prototype.show = function (message, duration, position) {
        if (duration === void 0) { duration = 1500; }
        if (position === void 0) { position = 'bottom'; }
        return this.toast
            .create({ duration: duration, position: position, message: message })
            .present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseProvider = /** @class */ (function () {
    function BaseProvider(http) {
        this.http = http;
    }
    BaseProvider.prototype.get = function (params) {
        if (params === void 0) { params = {}; }
        return this._fetch(params);
    };
    BaseProvider.prototype._fetch = function (params) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.addHeaders(headers);
        return new Promise(function (resolve, reject) {
            _this.http.get("" + __WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + _this.getURL(params), new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                _this.process_get(JSON.parse(response._body));
                resolve(JSON.parse(response._body));
            })
                , (function (err) {
                    reject(err);
                });
        });
    };
    BaseProvider.prototype.addHeaders = function (headers) {
        //do nothing by default
    };
    BaseProvider.prototype.process_get = function (response) {
        //do nothing by default
    };
    BaseProvider.prototype.getURL = function (params) {
        throw new Error("Method not implemented.");
    };
    BaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BaseProvider);
    return BaseProvider;
}());

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderProvider = /** @class */ (function () {
    function LoaderProvider(loadingController) {
        this.loadingController = loadingController;
    }
    LoaderProvider.prototype.display = function (text, spinner) {
        if (spinner === void 0) { spinner = 'crescent'; }
        this.loader = this.loadingController.create({
            content: text + "...",
            spinner: spinner
        });
        this.loader.present();
    };
    LoaderProvider.prototype.hide = function () {
        this.loader.dismiss();
    };
    LoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyReservationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservation_reservation__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyReservationsPage = /** @class */ (function () {
    function MyReservationsPage(navCtrl, navParams, reservationProvider, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reservationProvider = reservationProvider;
        this.loader = loader;
        this.pendingReservations = [];
        this.finishedReservations = [];
    }
    MyReservationsPage.prototype.ionViewWillEnter = function () {
        this.loadReservations();
    };
    MyReservationsPage.prototype.loadReservations = function () {
        var _this = this;
        this.loader.display('Cargando sus reservas...');
        this.reservationProvider.get().then(function (reservations) {
            _this.pendingReservations = reservations.filter(function (r) {
                return !r.finished && !r.cancelled;
            });
            _this.finishedReservations = reservations.filter(function (r) {
                return r.finished;
            });
            _this.loader.hide();
        });
    };
    MyReservationsPage.prototype.showMessagePendingReservations = function () {
        return this.pendingReservations.length == 0;
    };
    MyReservationsPage.prototype.showMessageFinishedReservations = function () {
        return this.finishedReservations.length == 0;
    };
    MyReservationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-my-reservations',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/my-reservations/my-reservations.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mis reservas</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="ionPWA">\n\n    <h1 text-center>Pendientes</h1>\n\n    <div class="no_results" *ngIf="showMessagePendingReservations()" text-center padding>\n      Actualmente no hay reservas\n    </div>\n\n    <ion-card *ngFor="let reservation of pendingReservations">\n      <reservation [reservation]="reservation"> </reservation>\n    </ion-card>\n\n    <h1 text-center>Finalizadas</h1>\n\n    <div class="no_results" *ngIf="showMessageFinishedReservations()" text-center padding>\n      Actualmente no hay reservas\n    </div>\n\n    <ion-card *ngFor="let reservation of finishedReservations">\n      <reservation [reservation]="reservation" [onQualified]="loadReservations"> </reservation>\n    </ion-card>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/my-reservations/my-reservations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__["a" /* LoaderProvider */]])
    ], MyReservationsPage);
    return MyReservationsPage;
}());

//# sourceMappingURL=my-reservations.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_product_add_product__ = __webpack_require__(122);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservationProvider = /** @class */ (function (_super) {
    __extends(ReservationProvider, _super);
    function ReservationProvider(http, userProvider) {
        var _this = _super.call(this, http, userProvider) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        _this.reservations = [];
        _this.reservationsNoFinished = [];
        _this.reservationsFinished = [];
        return _this;
    }
    ReservationProvider.prototype.getURL = function () {
        return "reservations/by_user/";
    };
    ReservationProvider.prototype.postURL = function () {
        return 'reservations/';
    };
    ReservationProvider.prototype.addHeaders = function (headers) {
        headers.append("Authorization", "Token " + this.userProvider.user.token);
    };
    ReservationProvider.prototype.map = function (mpId, restaurantId, phone_nbr, diners, reservation_date, reservation_hour, motive, comments) {
        return __assign({ restaurant_id: restaurantId, client: this.userProvider.user.id, phone_nbr: phone_nbr, diners: diners, reservation_date: reservation_date, reservation_hour: reservation_hour, motive: motive, comments: comments, mp_id: mpId }, this.onlyReservation ? this.defaultLists() : this.mapList());
    };
    ReservationProvider.prototype.defaultLists = function () {
        return {
            products: [],
            menus: []
        };
    };
    ReservationProvider.prototype.mapIsAvailable = function (date, hour, diners) {
        return {
            date: date,
            hour: hour,
            diners: parseInt(diners)
        };
    };
    ReservationProvider.prototype.addReservation = function (mpId, restaurantId, phone_nbr, diners, reservation_date, reservation_hour, motive, comments) {
        var _this = this;
        var body = this.map(mpId, restaurantId, phone_nbr, diners, reservation_date, reservation_hour, motive, comments);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "reservations/", body, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(JSON.parse(response._body));
            }, function (errorResponse) {
                reject();
            });
        });
    };
    ReservationProvider.prototype.clearReservation = function () {
        _super.prototype.clearLists.call(this);
    };
    ReservationProvider.prototype.isAvailable = function (restaurantId, date, hour, diners) {
        var _this = this;
        var body = this.mapIsAvailable(date, hour, diners);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "restaurants/" + restaurantId + "/is_available/", body, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(JSON.parse(response._body));
            }, function (errorResponse) {
                reject();
            });
        });
    };
    ReservationProvider.prototype.cancelReservation = function (restaurantId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "reservations/" + restaurantId + "/cancel/", {}, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                var reservation = JSON.parse(response._body);
                _this.reservations = _this.reservations.filter(function (r) {
                    return r.id !== reservation.id;
                });
                resolve(reservation);
            }, function (errorResponse) {
                reject();
            });
        });
    };
    ReservationProvider.prototype.process_get = function (response) {
        this.reservations = response;
        this.reservationsNoFinished = this.reservations.filter(function (r) {
            return (!(r.finished) && !(r.cancelled));
        });
        this.reservationsFinished = this.reservations.filter(function (r) {
            return (r.finished) && !(r.cancelled);
        });
    };
    ReservationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_user__["a" /* UserProvider */]) === "function" && _b || Object])
    ], ReservationProvider);
    return ReservationProvider;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_5__add_product_add_product__["a" /* AddProductProvider */]));

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_product_add_product__ = __webpack_require__(122);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderProvider = /** @class */ (function (_super) {
    __extends(OrderProvider, _super);
    function OrderProvider(http, userProvider, storageProvider) {
        var _this = _super.call(this, http, userProvider) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        _this.storageProvider = storageProvider;
        _this.order = {
            order_type: "",
            products: [],
            menus: []
        };
        return _this;
    }
    OrderProvider.prototype.setRestaurant = function (restaurant) {
        this.order.restaurant = restaurant;
    };
    OrderProvider.prototype.create = function (mpId) {
        var _this = this;
        if (mpId === void 0) { mpId = null; }
        var clientId = this.userProvider.user.id;
        var body = this.map(clientId, mpId);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config_config__["a" /* API_URL */] + "orders/", body, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(response);
            }, function (errorResponse) {
                reject();
            });
        });
    };
    OrderProvider.prototype.cancel = function (orderId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_1__app_config_config__["a" /* API_URL */] + "orders/" + orderId + "/cancel/", {}, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(response);
            }, function (errorResponse) {
                reject();
            });
        });
    };
    OrderProvider.prototype.clearOrder = function () {
        _super.prototype.clearLists.call(this);
        this.order.address = "";
        this.order.phone_nbr = "";
        this.order.expected_payment = undefined;
        this.order.comments = "";
        this.order.price_final = 0;
    };
    OrderProvider.prototype.map = function (clientId, mpId) {
        return __assign({ restaurant_id: this.order.restaurant.id, order_hour: this.order.order_hour, client: clientId, phone_nbr: this.order.phone_nbr, address: this.order.address || null, expected_payment: this.order.expected_payment, comments: this.order.comments || null, order_type: this.order.order_type }, this.mapList(), { mp_id: mpId, price_final: this.order.price_final });
    };
    OrderProvider.prototype.getURL = function () {
        return "orders/by_user/";
    };
    OrderProvider.prototype.process_get = function (response) {
        this.orders = response;
    };
    OrderProvider.prototype.addHeaders = function (headers) {
        headers.append("Authorization", "Token " + this.userProvider.user.token);
    };
    OrderProvider.prototype.isLocalOrder = function () {
        return this.order.order_type === "LOC";
    };
    OrderProvider.prototype.isComerRestaurant = function () {
        return this.order.order_type === "COM";
    };
    OrderProvider.prototype.isDeliveryOrder = function () {
        return this.order.order_type === "DEL";
    };
    OrderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__storage_storage__["a" /* StorageProvider */]])
    ], OrderProvider);
    return OrderProvider;
}(__WEBPACK_IMPORTED_MODULE_5__add_product_add_product__["a" /* AddProductProvider */]));

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
//export const BASE_URL = "https://dondecomemos-testing.herokuapp.com/"
var BASE_URL = "https://panel.dondecomemos.com.ar/";
//export const BASE_URL = "http://staging.dondecomemos.com.ar/"
var API_URL = BASE_URL + "api/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.category = [{ icon: "app-meat", title: "Meat Dishes", num: "1587" }, { icon: "app-fish", title: "Fish Dishes", num: "748" },
            { icon: "app-vegetarian", title: "Vegetarian", num: "3125" }, { icon: "app-pizza", title: "Pizza", num: "547" },
            { icon: "app-cokies", title: "Cokies", num: "1935" }, { icon: "app-fastfood", title: "Fast Food", num: "2209" }];
    }
    CategoryPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CategoryPage.prototype.activeItem = function (index) {
        this.selectedItem = index;
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/category/category.html"*/'<ion-header class="transparent_header">\n\n  <ion-navbar>\n    <ion-title>Category</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="searchInput=!searchInput">\n          <ion-icon name="search"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar *ngIf="searchInput">\n      <ion-searchbar placeholder=\'\' no-margin></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list class="category_list main_bg">\n        <ion-item *ngFor="let item of category" (click)="item.selectedItem = !item.selectedItem" text-center no-padding no-lines>\n            <span class="cir_icon" [ngClass]="{\'active_category\':item.selectedItem}" ><ion-icon class="{{item.icon}}"></ion-icon></span>\n            <p>{{item.title}}<span>{{item.num}}</span></p>\n        </ion-item>\n    </ion-list>    \n    <ion-fab bottom right>\n       <button (click)="dismiss()" ion-fab><ion-icon name="add"></ion-icon></button>\n    </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, orderProvider, loader) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.loader = loader;
        this.pendingOrders = [];
        this.finishedOrders = [];
    }
    OrdersPage.prototype.ionViewWillEnter = function () {
        this.getPendingOrders();
    };
    OrdersPage.prototype.getPendingOrders = function () {
        var _this = this;
        this.loader.display('Cargando sus pedidos...');
        this.orderProvider.get().then(function (orders) {
            _this.pendingOrders = orders.filter(function (ord) {
                return !ord.delivered && !ord.cancelled;
            });
            console.log(_this.pendingOrders);
            _this.finishedOrders = orders.filter(function (ord) {
                return ord.delivered;
            });
            _this.loader.hide();
        });
    };
    OrdersPage.prototype.showMessagePendingReservations = function () {
        return this.pendingOrders.length == 0;
    };
    OrdersPage.prototype.showMessageFinishedReservations = function () {
        return this.finishedOrders.length == 0;
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-orders',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/orders/orders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mis pedidos</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="ionPWA">\n\n    <h1 text-center>Pendientes</h1>\n\n    <div class="no_results" *ngIf="showMessagePendingReservations()" text-center padding>\n      Actualmente no hay pedidos\n    </div>\n\n    <ion-card *ngFor="let order of pendingOrders">\n      <order [order]="order"></order>\n    </ion-card>\n\n    <h1 text-center>Finalizados</h1>\n\n    <div class="no_results" *ngIf="showMessageFinishedReservations()" text-center padding>\n      Actualmente no hay pedidos\n    </div>\n\n    <ion-card *ngFor="let order of finishedOrders">\n      <order [order]="order"></order>\n    </ion-card>\n</div>\n\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__["a" /* LoaderProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_recover_password_recover_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__change_password_change_password__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_location_location__ = __webpack_require__(46);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, loader, userProvider, alertCtrl, recoverPasswordProvider, toastProvider, modalCtrl, locationProvider, popOver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.recoverPasswordProvider = recoverPasswordProvider;
        this.toastProvider = toastProvider;
        this.modalCtrl = modalCtrl;
        this.locationProvider = locationProvider;
        this.popOver = popOver;
        this.isDisabled = true;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            first_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
            last_name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]),
            phone_nbr: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.user = __assign({}, this.userProvider.user);
    };
    ProfilePage.prototype.changeMode = function () {
        var _this = this;
        if (this.user.first_name != this.userProvider.user.first_name || this.user.last_name != this.userProvider.user.last_name) {
            this.alertCtrl.create({
                title: 'Cambios sin guardar',
                message: "¿Quiere guardar los cambios realizados en su perfil?",
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: function (data) {
                            _this.saveChanges();
                        }
                    },
                    {
                        text: 'Cancelar',
                        handler: function (data) {
                            return;
                        }
                    }
                ]
            }).present();
        }
        else {
            this.isDisabled = !this.isDisabled;
        }
    };
    ProfilePage.prototype.isValid = function () {
        return this.form.valid;
    };
    ProfilePage.prototype.showChangePasswordAlert = function () {
        var modalOptions = {
            cssClass: "changePasswordModal"
        };
        this.modalCtrl.create("ChangePasswordPage", {}, modalOptions).present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__change_password_change_password__["a" /* ChangePasswordPage */], {});
    };
    ProfilePage.prototype.saveChanges = function () {
        var _this = this;
        this.loader.display("Guardando cambios...");
        this.userProvider.saveChanges(this.user.first_name, this.user.last_name)
            .then(function () {
            _this.loader.hide();
            _this.changeMode();
        })
            .catch(function (errors) {
            console.log(errors);
            _this.loader.hide();
        })
            .then(function () {
            _this.loader.hide();
            _this.changeMode();
        })
            .catch(function (errors) {
            _this.loader.hide();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/profile/profile.html"*/'<ion-header class="transparent_header">\n\n  <ion-navbar>\n\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Perfil</ion-title>\n\n    <ion-buttons end>\n      <button color="light" ion-button icon-only clear (click)="changeMode()">\n        <ion-icon name="md-create" *ngIf="isDisabled"></ion-icon>\n        <ion-icon name="checkmark" *ngIf="!isDisabled" class="save_icon"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main_bg" padding>\n  \n  <!-- <div class="profile_img" text-center> \n    <img src="{{img}}">\n    <span class="upload_img" (click)="getPhoto()"><ion-icon color="light" name="ios-camera-outline"></ion-icon></span>\n  </div> -->\n\n  <form [formGroup]="form">\n    <ion-list no-margin>\n      <ion-item no-lines>\n        <ion-icon name="md-person" color="light" item-start></ion-icon>\n        <ion-input \n        type="text" \n        placeholder="Nombre" \n        formControlName="first_name" \n        [(ngModel)]="user.first_name"\n        disabled="{{isDisabled}}">\n        </ion-input>\n      </ion-item>\n      \n      <ion-item no-lines>\n        <ion-icon name="md-person" color="light" item-start></ion-icon>\n        <ion-input \n        type="text" \n        placeholder="Apellido" \n        formControlName="last_name" \n        [(ngModel)]="user.last_name"\n        disabled="{{isDisabled}}">\n      </ion-input>\n    </ion-item>\n    \n    <ion-item no-lines>\n      <ion-icon name="md-mail" color="light" item-start></ion-icon>\n      <ion-input \n      type="email" \n      placeholder="Email" \n      formControlName="email" \n      [(ngModel)]="user.email" \n      disabled="true">\n      </ion-input>\n    </ion-item>\n    \n    <ion-item no-lines>\n      <ion-icon name="md-lock" color="light" item-start></ion-icon>\n      <button class="for_psw" (click)="showChangePasswordAlert()" ion-button small clear>\n        Cambiar contraseña...\n      </button>\n    </ion-item>\n    \n    <ion-item no-lines>\n      <ion-icon name="md-call" color="light" item-start></ion-icon>\n      <ion-input\n      type="tel" \n      placeholder="Teléfono" \n      formControlName="phone_nbr" \n      [(ngModel)]="user.phone_nbr"\n      disabled="{{isDisabled}}">\n      </ion-input>\n    </ion-item> \n\n    </ion-list>\n  </form>\n\n  <button ion-button block (click)="saveChanges()" *ngIf="!isDisabled" [disabled]="!isValid()">Guardar</button>\n\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_recover_password_recover_password__["a" /* RecoverPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_8__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recover_password_recover_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, viewCtrl, toastProvider, recoverPasswordProvider, errorHandlerProvider) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastProvider = toastProvider;
        this.recoverPasswordProvider = recoverPasswordProvider;
        this.errorHandlerProvider = errorHandlerProvider;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmedNewPassword = "";
    };
    ChangePasswordPage.prototype.handleCancel = function () {
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage.prototype.handleAccept = function () {
        this.changePassword(this.oldPassword, this.newPassword, this.confirmedNewPassword);
    };
    ChangePasswordPage.prototype.changePassword = function (oldPassword, newPassword, confirmedNewPassword) {
        var _this = this;
        if (!newPassword && !confirmedNewPassword) {
            this.toastProvider.show('Complete todos los campos para continuar');
            return;
        }
        if (newPassword !== confirmedNewPassword) {
            this.toastProvider.show('Las contraseñas ingresadas no coinciden, verifiquelas y vuelva a intentarlo');
            return;
        }
        this.recoverPasswordProvider.change_password(oldPassword, newPassword)
            .then(function (response) {
            _this.toastProvider.show('La contraseña se ha cambiado correctamente');
            _this.viewCtrl.dismiss();
        })
            .catch(function (error) {
            _this.errorHandlerProvider.handleError(error.errorCode);
        });
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/change-password/change-password.html"*/'<ion-header>\n    <ion-navbar>\n    </ion-navbar>\n  </ion-header>\n<ion-content class="background">\n  <ion-item>\n    <ion-label>\n      Cambiar contraseña\n    </ion-label>\n  </ion-item>\n  <ion-list no-lines="">\n    <ion-item>\n      <ion-icon \n        color="dark" \n        name="ios-lock-outline" \n        item-start>\n      </ion-icon>\n      <ion-input \n        type="password" \n        [(ngModel)]="oldPassword" \n        placeholder="Ingresá tu contraseña actual...">\n      </ion-input>\n      <!-- <button (click)="showPassword()" color="GrayColor" ion-button icon-only clear item-end>\n          <ion-icon *ngIf="type===\'text\'" name="eye"></ion-icon>\n          <ion-icon *ngIf="type===\'password\'" name="eye-off"></ion-icon>\n      </button> -->\n    </ion-item>\n   \n    <ion-item>\n      <ion-icon \n        color="dark" \n        name="ios-lock-outline" \n        item-start>\n      </ion-icon>\n      <ion-input \n        type="password" \n        [(ngModel)]="newPassword" \n        placeholder="Ingresa tu nueva contraseña...">\n      </ion-input>\n      <!-- <button (click)="showPassword()" color="GrayColor" ion-button icon-only clear item-end>\n          <ion-icon *ngIf="type===\'text\'" name="eye"></ion-icon>\n          <ion-icon *ngIf="type===\'password\'" name="eye-off"></ion-icon>\n      </button> -->\n    </ion-item>\n\n    <ion-item>\n      <ion-icon \n        color="dark" \n        name="ios-lock-outline" \n        item-start>\n      </ion-icon>\n      <ion-input \n        type="password" \n        [(ngModel)]="confirmedNewPassword"\n        placeholder="Repetí tu nueva contraseña...">\n      </ion-input>\n      <!-- <button (click)="showPassword()" color="GrayColor" ion-button icon-only clear item-end>\n          <ion-icon *ngIf="type===\'text\'" name="eye"></ion-icon>\n          <ion-icon *ngIf="type===\'password\'" name="eye-off"></ion-icon>\n      </button> -->\n    </ion-item>\n   \n  </ion-list>\n\n  <ion-row>\n    <ion-col>\n      <button (click)="handleCancel()" color="dark" ion-button clear full>Cancelar</button>          \n    </ion-col>\n    <ion-col>\n        <button (click)="handleAccept()" ion-button clear full>Aceptar</button>          \n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/change-password/change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_recover_password_recover_password__["a" /* RecoverPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_restaurant_restaurant__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorite_restaurant_favorite_restaurant__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, navParams, favoriteRestaurantProvider, loader, alertCtrl, app, restaurantProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoriteRestaurantProvider = favoriteRestaurantProvider;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.restaurantProvider = restaurantProvider;
        this.restaurants = [];
        this.restaurantsId = [];
    }
    FavoritePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loader.display('Buscando Restaurantes');
        this.favoriteRestaurantProvider.get().then(function (restaurants) {
            _this.restaurants = restaurants;
            _this.loader.hide();
        })
            .catch(function (err) {
            alert(JSON.stringify(err));
            _this.loader.hide();
        });
        this.restaurantProvider.get().then(function (restaurantsId) {
            _this.restaurantsId = restaurantsId;
        });
    };
    FavoritePage.prototype.getRestaurant = function (restaurantId) {
        this.restaurantsId = this.restaurantProvider.getRestaurantById(restaurantId);
        this.currentRestaurant = this.restaurantsId[0];
    };
    FavoritePage.prototype.goToDetails = function (restaurant) {
        this.getRestaurant(restaurant.restaurant.id);
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { restaurant: this.currentRestaurant });
    };
    FavoritePage.prototype.deleteFavoriteRestaurant = function (restaurantId) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Seguro querés eliminar este restaurante de favoritos?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        _this.favoriteRestaurantProvider.deleteFavorite(restaurantId).then(function () {
                            _this.restaurants = _this.restaurants.filter(function (restaurant) { return restaurant.id !== restaurantId; });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    // remove item from favorite
    FavoritePage.prototype.removeItem = function (item, ev) {
        this.favorite.splice(this.favorite.indexOf(item), 1);
        ev.stopPropagation();
    };
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-favorite',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/favorite/favorite.html"*/'<ion-header>\n\n  <ion-navbar >\n    <ion-title>Restaurantes favoritos</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content>\n  <div class="ionPWA">\n    <ion-card *ngFor="let restaurant of restaurants">\n      <ion-card-content>\n\n        <button float-right (click)="deleteFavoriteRestaurant(restaurant.id)" class="buttonHeart">\n          <ion-icon color="primary" name="heart" class="heart"></ion-icon>\n        </button>\n        <div (click)="goToDetails(restaurant)">\n\n          <h1>{{restaurant.restaurant.name}}</h1>\n          <br>\n          <h2>{{restaurant.restaurant.description}}</h2>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <div class="no_results" *ngIf="restaurants?.length == 0" text-center padding>No tenés restaurants como favoritos\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/favorite/favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_favorite_restaurant_favorite_restaurant__["a" /* FavoriteRestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0__providers_restaurant_restaurant__["a" /* RestaurantProvider */]])
    ], FavoritePage);
    return FavoritePage;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandPictureProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrandPictureProvider = /** @class */ (function (_super) {
    __extends(BrandPictureProvider, _super);
    function BrandPictureProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.brand_pictures = [];
        return _this;
    }
    BrandPictureProvider.prototype.getURL = function (restaurantId) {
        return "brand_pictures/" + restaurantId + "/";
    };
    BrandPictureProvider.prototype.process_get = function (response) {
        this.brand_pictures = response;
    };
    BrandPictureProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], BrandPictureProvider);
    return BrandPictureProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=brand-picture.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reservation_reservation__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mercado_pago_modal_mercado_pago_modal__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, orderProvider, loader, toaster, userProvider, reservationProvider, toast, modalCtrl, popOver) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.loader = loader;
        this.toaster = toaster;
        this.userProvider = userProvider;
        this.reservationProvider = reservationProvider;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.popOver = popOver;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            address: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]),
            phone_nbr: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]),
            expected_payment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            comments: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            order_type: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            paymentMethod: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
        });
        this.paymentMethod = 'cash';
        this.today = new Date();
        this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getDate();
        this.hasCard = false;
        this.currentDate = new Date();
        this.errors = {};
        this.restaurant = navParams.get('restaurant');
        this.detailsPage = navParams.get("detailsPage");
        this.deliveryMethod();
        this.hasACard();
        this.total_final = this.orderProvider.getTotal();
        this.discountRes = this.getDiscount('RES');
        this.discountDel = this.getDiscount('DEL');
        this.discountTw = this.getDiscount('LOC');
    }
    OrderPage.prototype.hasACard = function () {
        if (this.restaurant.public_key) {
            this.hasCard = true;
        }
    };
    OrderPage.prototype.ionViewWillLeave = function () {
    };
    OrderPage.prototype.onTimeChange = function (time) {
        this.time = time;
    };
    OrderPage.prototype.getTotal = function () {
        return this.total_final;
    };
    OrderPage.prototype.isValid = function () {
        return this.form.valid;
    };
    OrderPage.prototype.getDiscount = function (type) {
        var place = this.restaurant.placediscounts.find(function (item) { return item.place === type; });
        console.log(place);
        if (typeof place !== 'undefined') {
            return place.amount;
        }
        else {
            return "";
        }
    };
    OrderPage.prototype.validate = function () {
        if (this.orderProvider.isDeliveryOrder() && this.orderProvider.order.expected_payment < this.orderProvider.getTotal())
            this.errors.expected_payment = "No puede abonar con menos del total";
        return Object.keys(this.errors).length == 0;
    };
    OrderPage.prototype.makeOrder = function () {
        var _this = this;
        this.loader.display("Comprobando disponibilidad...");
        if (!this.orderProvider.order.order_hour) {
            var time = __WEBPACK_IMPORTED_MODULE_9_moment___default()().format('HH:mm');
            this.orderProvider.order.order_hour = time;
        }
        this.reservationProvider.isAvailable(this.restaurant.id, this.date, this.orderProvider.order.order_hour, 0)
            .then(function (isAvailable) {
            _this.loader.hide();
            _this.isAvailable = isAvailable;
            if (_this.isAvailable.is_available) {
                if (_this.userProvider.user.token) {
                    if (_this.validate()) {
                        if (_this.paymentMethod == 'creditCard') {
                            console.log("MEPA", _this.total_final);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__mercado_pago_modal_mercado_pago_modal__["a" /* MercadoPagoModalPage */], { restaurantId: _this.restaurant.id, publicKey: _this.restaurant.public_key });
                        }
                        else {
                            _this.make2Order();
                        }
                    }
                }
                else {
                    alert('No iniciaste sesión');
                }
            }
            else {
                _this.toaster.show("El restaurant no esta disponible en ese horario", 2000);
            }
        })
            .catch(function (err) {
            _this.loader.hide();
        });
    };
    OrderPage.prototype.make2Order = function () {
        var _this = this;
        if (!this.orderProvider.order.order_hour) {
            var time = __WEBPACK_IMPORTED_MODULE_9_moment___default()().format('HH:mm');
            this.orderProvider.order.order_hour = time;
        }
        this.reservationProvider.isAvailable(this.restaurant.id, this.date, this.orderProvider.order.order_hour, 0).then(function (isAvailable) {
            _this.isAvailable = isAvailable;
            if (_this.isAvailable.is_available) {
                if (_this.userProvider.user.token) {
                    if (_this.validate()) {
                        _this.loader.display('Estamos creando tu pedido...');
                        _this.orderProvider.create().then(function () {
                            _this.orderProvider.clearOrder();
                            _this.reservationProvider.clearReservation();
                            _this.navCtrl.pop();
                            _this.loader.hide();
                            _this.toaster.show('Se creó tu pedido correctamente', 3000);
                        }).catch(function () {
                            _this.loader.hide();
                            _this.toaster.show('No hemos podido crear su pedido correctamente, por favor intente nuevamente más tarde', 3000);
                        });
                    }
                }
                else {
                    alert('No iniciaste sesión');
                }
            }
            else {
                _this.toast.show('No ha podido realizar el pedido, el restaurante no se encuentra disponible en la fecha y hora seleccionada', 3000);
            }
        });
    };
    OrderPage.prototype.clearError = function (error) {
        delete this.errors[error];
    };
    OrderPage.prototype.deliveryMethod = function () {
        var total_init = this.orderProvider.getTotal();
        if (this.orderProvider.isDeliveryOrder()) {
            this.form.controls["address"].setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]);
            this.form.controls["expected_payment"].setValidators(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
            this.total_final = total_init - (total_init * (this.discountDel * 0.01));
        }
        else if (this.orderProvider.isLocalOrder()) {
            this.form.controls["address"].clearValidators();
            this.form.controls["expected_payment"].clearValidators();
            this.form.controls["address"].updateValueAndValidity();
            this.form.controls["expected_payment"].updateValueAndValidity();
            this.total_final = total_init - (total_init * (this.discountTw * 0.01));
        }
        else if (this.orderProvider.isComerRestaurant()) {
            this.total_final = total_init - (total_init * (this.discountRes * 0.01));
        }
    };
    OrderPage.prototype.goToReservation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__reservation_reservation__["a" /* ReservationPage */], { restaurant: this.restaurant });
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-order',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/order/order.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Confirmar pedido</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="app_form">\n        <ion-list>\n            <ion-item class="restaurant-title">\n                {{orderProvider.order.restaurant.name}}\n            </ion-item>\n            <ion-item class="products-title">\n                Pedido\n            </ion-item>\n        </ion-list>\n        <div class="ionPWA">\n            <ion-card *ngFor="let orderproduct of orderProvider.getProducts().concat(orderProvider.getMenus())">\n                <ion-card-title class="ion-cont">{{orderproduct.item.name}}</ion-card-title>\n                <ion-card-content class="ion-cont">\n                    x {{orderproduct.amount}}\n                    <span class="float-right" *ngIf="!orderproduct.additional">\n                        $ {{orderproduct.amount * orderproduct.item.discount_price}}\n                    </span>\n                </ion-card-content>\n                <ion-card-content class="ion-cont" *ngIf="orderproduct.additional">\n                    Con: {{orderproduct.additional.name}}\n                    <span class="float-right">\n                        $\n                        {{orderproduct.amount * orderproduct.item.discount_price + (orderproduct.additional.discount_price * orderproduct.amount)}}\n                    </span>\n                </ion-card-content>\n            </ion-card>\n\n            <ion-item class="products-title">\n                Confirmación\n            </ion-item>\n            <ion-card padding-left>\n                <ion-card-content [formGroup]="form">\n                    <ion-list radio-group [(ngModel)]="orderProvider.order.order_type" formControlName="order_type">\n                        <ion-list-header>\n                            ¿Dónde comés?\n                        </ion-list-header>\n                        <ion-item>\n                            <ion-label>En el restaurante <span style="color:rgb(105, 102, 102)">{{ discountRes | discountFormat }}</span></ion-label>\n                            <ion-radio (click)="deliveryMethod()" value="COM"></ion-radio>\n                        </ion-item>\n                        <ion-item *ngIf="orderProvider.order.restaurant.delivery">\n                            <ion-label>Delivery <span style="color:rgb(105, 102, 102)">{{ discountDel | discountFormat }}</span></ion-label>\n                            <ion-radio (click)="deliveryMethod()" value="DEL"></ion-radio>\n                        </ion-item>\n                        <ion-item *ngIf="orderProvider.order.restaurant.self_service">\n                            <ion-label>Take-away <span style="color:rgb(105, 102, 102)">{{ discountTw | discountFormat }}</span></ion-label>\n                            <ion-radio (click)="deliveryMethod()" value="LOC"></ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Método de pago</ion-label>\n                            <ion-select placeholder="Seleccione un método" cancelText="Cancelar" okText="Aceptar"\n                                [(ngModel)]="paymentMethod" formControlName="paymentMethod">\n                                <ion-option value="cash">Efectivo</ion-option>\n                                <ion-option *ngIf="hasCard" value="creditCard">Tarjeta</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                    </ion-list>\n\n                    <reservation-form \n                        *ngIf="orderProvider.isComerRestaurant()" \n                        [restaurant]="restaurant" [total_final]="total_final" [orderPage]="true" [paymentMethod]="paymentMethod" [orderPage]="true">\n                    </reservation-form>\n\n                    <div class="borderItems">\n\n                        <ion-item class="reservationItems"\n                            *ngIf="orderProvider.isDeliveryOrder() || orderProvider.isLocalOrder()">\n                            <ion-icon name="time" class="iconItems" item-start></ion-icon>\n                            <ion-label>Horario de pedido</ion-label>\n                            <ion-datetime (ionChanged)="onTimeChange($event)" displayFormat="HH:mm" doneText="aceptar"\n                                cancelText="cancelar" min="08:00" formControlName="time"\n                                [(ngModel)]="orderProvider.order.order_hour" [(ngModel)]="time"></ion-datetime>\n                        </ion-item>\n\n                        <ion-item class="reservationItems" *ngIf="orderProvider.isDeliveryOrder()">\n                            <ion-icon name="pin" item-start></ion-icon>\n                            <ion-input type="text" placeholder="Dirección" [(ngModel)]="orderProvider.order.address"\n                                formControlName="address"></ion-input>\n                        </ion-item>\n\n                        <ion-item class="reservationItems"\n                            *ngIf="orderProvider.isDeliveryOrder() || orderProvider.isLocalOrder()">\n                            <ion-icon class="iconItems" name="call" item-start></ion-icon>\n                            <ion-input type="tel" placeholder="Celular" [(ngModel)]="orderProvider.order.phone_nbr"\n                                formControlName="phone_nbr">\n                            </ion-input>\n                        </ion-item>\n\n                        <ion-item class="reservationItems" *ngIf="orderProvider.isDeliveryOrder()">\n                            <ion-icon name="cash" item-start></ion-icon>\n                            <ion-input [ngClass]="{\'error-expected-payment\': errors.expected_payment}"\n                                (ionChange)="clearError(\'expected_payment\')" type="number" placeholder="Abono con:"\n                                [(ngModel)]="orderProvider.order.expected_payment" formControlName="expected_payment">\n                            </ion-input>\n                        </ion-item>\n\n                        <ion-label color="error-color" *ngIf="errors.expected_payment">{{errors.expected_payment}}\n                        </ion-label>\n\n\n                        <ion-item class="reservationItems"\n                            *ngIf="orderProvider.isDeliveryOrder() || orderProvider.isLocalOrder()">\n                            <ion-icon name="chatbubbles" class="iconItems" item-start></ion-icon>\n                            <ion-input type="text" placeholder="Comentario" text-wrap\n                                [(ngModel)]="orderProvider.order.comments" formControlName="comments"></ion-input>\n                        </ion-item>\n\n                    </div>\n\n                    <ion-label class="products-title borderTotal">Total: ${{total_final}}</ion-label>\n                </ion-card-content>\n            </ion-card>\n            <button\n                ion-button block\n                (click)="makeOrder()"\n                [disabled]="!isValid()"\n                *ngIf="orderProvider.isDeliveryOrder() || orderProvider.isLocalOrder()">\n                Confirmar\n            </button>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["PopoverController"]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_qualifications_qualifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_hour_hour__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_payment_method_payment_method__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tag_micro_tag_micro__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tag_macro_tag_macro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams, serviceProvider, tagMacroProvider, tagMicroProvider, paymentMethodProvider, hourProvider, qualificationsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serviceProvider = serviceProvider;
        this.tagMacroProvider = tagMacroProvider;
        this.tagMicroProvider = tagMicroProvider;
        this.paymentMethodProvider = paymentMethodProvider;
        this.hourProvider = hourProvider;
        this.qualificationsProvider = qualificationsProvider;
        this.services = [];
        this.tagsLowAndHigh = [];
        this.paymentMethods = [];
        this.hours = [];
        this.qualifications = [];
        this.restaurant = navParams.get('restaurant');
        this.detailsPage = navParams.get("detailsPage");
    }
    InformationPage.prototype.ionViewWillLeave = function () {
    };
    InformationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.serviceProvider.get(this.restaurant.id).then(function (services) {
            _this.services = services;
        });
        // this.tagMicroProvider.get(this.restaurant.id).then((lowTag: any) => {
        //   this.tagsLowAndHigh = this.tagsLowAndHigh.concat(lowTag);
        // })
        this.tagMacroProvider.get(this.restaurant.id).then(function (highTag) {
            _this.tagsLowAndHigh = _this.tagsLowAndHigh.concat(highTag);
        });
        this.paymentMethodProvider.get(this.restaurant.id).then(function (paymentMethods) {
            _this.paymentMethods = paymentMethods;
        });
        this.hourProvider.get(this.restaurant.id).then(function (hours) {
            _this.hours = hours;
        });
        this.qualificationsProvider.get(this.restaurant.id).then(function (qualification) {
            _this.qualifications = qualification;
        });
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'page-information',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/information/information.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title class="titleGaia">Información de {{restaurant.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="ionPWA">\n\n    <h3>\n      <ion-icon name="md-book"></ion-icon>\n      Calificaciones\n    </h3>\n    <div class="no_results" *ngIf="qualifications?.length == 0" text-center padding>Actualmente no hay calificaciones\n    </div>\n\n    <ion-item *ngFor="let q of qualifications">\n      <ion-label>{{q.name}}</ion-label>\n      <ion-label>\n        <ionic3-star-rating #rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="rgb(255, 105, 0)"\n          defaultColor="red" readonly="true" fontSize="12px" halfStar="true" rating="{{q.average}}">\n        </ionic3-star-rating>\n      </ion-label>\n      <ion-label class="alignme">{{ q.average | number:"1.0-1"}}</ion-label>\n\n\n    </ion-item>\n\n    <h3>\n      <ion-icon name="md-book"></ion-icon>\n      Descripción\n    </h3>\n    <ion-item>\n      {{restaurant.description}}\n    </ion-item>\n\n    <h3>\n      <ion-icon name="ios-locate-outline"></ion-icon>\n      Ubicación\n    </h3>\n    <ion-item>\n      {{restaurant.address}}\n    </ion-item>\n\n    <h3 *ngIf="services.length>0">\n      <ion-icon name="restaurant"></ion-icon>\n      Servicios\n    </h3>\n\n    <ion-item *ngFor="let service of services">\n      {{service.name}}\n    </ion-item>\n\n    <h3 *ngIf="tagsLowAndHigh.length>0">\n      <ion-icon name="pricetags"></ion-icon>\n      Tags\n    </h3>\n\n    <ion-chip class="chip" *ngFor="let tag of tagsLowAndHigh">\n      <ion-label text-center>{{tag.name}}</ion-label>\n    </ion-chip>\n\n    <h3 *ngIf="paymentMethods.length>0">\n      <ion-icon name="card"></ion-icon>\n      Métodos de pago\n    </h3>\n\n    <ion-item *ngFor="let paymentMethod of paymentMethods">\n      {{paymentMethod.name}}\n    </ion-item>\n\n    <h3 *ngIf="hours.length>0">\n      <ion-icon name="ios-time"></ion-icon>\n      Horarios\n    </h3>\n\n    <ion-item text-wrap *ngFor="let hour of hours">\n      <ion-label class="sub-menu">{{hour.day}}</ion-label>\n      <ion-label>{{hour.opening_hour | time}}\n        <ion-icon class="hour" name="time"> </ion-icon>\n        {{hour.closing_hour | time}}\n      </ion-label>\n    </ion-item>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tag_macro_tag_macro__["a" /* TagMacroProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_tag_micro_tag_micro__["a" /* TagMicroProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_payment_method_payment_method__["a" /* PaymentMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_hour_hour__["a" /* HourProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_qualifications_qualifications__["a" /* QualificationsProvider */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HourProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HourProvider = /** @class */ (function (_super) {
    __extends(HourProvider, _super);
    function HourProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.hours = [];
        return _this;
    }
    HourProvider.prototype.getURL = function (restaurantId) {
        return "hours/" + restaurantId + "/";
    };
    HourProvider.prototype.process_get = function (response) {
        this.hours = response;
    };
    HourProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], HourProvider);
    return HourProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=hour.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentMethodProvider = /** @class */ (function (_super) {
    __extends(PaymentMethodProvider, _super);
    function PaymentMethodProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    PaymentMethodProvider.prototype.getURL = function (restaurantId) {
        return "payment-methods/" + restaurantId + "/";
    };
    PaymentMethodProvider.prototype.process_get = function (response) {
        this.paymentMethods = response;
    };
    PaymentMethodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PaymentMethodProvider);
    return PaymentMethodProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagMicroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagMicroProvider = /** @class */ (function (_super) {
    __extends(TagMicroProvider, _super);
    function TagMicroProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.tags = [];
        return _this;
    }
    TagMicroProvider.prototype.getURL = function (restaurantId) {
        return "tags-micro/" + restaurantId + "/";
    };
    TagMicroProvider.prototype.process_get = function (response) {
        this.tags = response;
    };
    TagMicroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TagMicroProvider);
    return TagMicroProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=tag-micro.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceProvider = /** @class */ (function (_super) {
    __extends(ServiceProvider, _super);
    function ServiceProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.services = [];
        return _this;
    }
    ServiceProvider.prototype.getURL = function (restaurantId) {
        return "services/" + restaurantId + "/";
    };
    ServiceProvider.prototype.process_get = function (response) {
        this.services = response;
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuProvider = /** @class */ (function (_super) {
    __extends(MenuProvider, _super);
    function MenuProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    MenuProvider.prototype.getURL = function (params) {
        return "menus/" + params.restaurantId + "/?date=" + params.date;
    };
    MenuProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], MenuProvider);
    return MenuProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCategoryProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCategoryProvider = /** @class */ (function (_super) {
    __extends(ProductCategoryProvider, _super);
    function ProductCategoryProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
    }
    ProductCategoryProvider.prototype.getURL = function (restaurantId) {
        return "product-categories/?restaurant=" + restaurantId;
    };
    ProductCategoryProvider.prototype.process_get = function (response) {
        this.categories = response;
    };
    ProductCategoryProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProductCategoryProvider);
    return ProductCategoryProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=product-category.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorrectCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recover_password_recover_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CorrectCodePage = /** @class */ (function () {
    function CorrectCodePage(navCtrl, navParams, recoverPasswordProvider, toaster) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recoverPasswordProvider = recoverPasswordProvider;
        this.toaster = toaster;
        this.password1 = "";
        this.password2 = "";
        this.mail = navParams.get('mail');
    }
    CorrectCodePage.prototype.ionViewDidLoad = function () { };
    CorrectCodePage.prototype.setPassword = function () {
        debugger;
        if (this.password1 !== "" && this.password2 !== "") {
            if (this.password1 === this.password2) {
                this.recoverPasswordProvider.set_password(this.mail, this.password1);
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
            else {
                this.toaster.show('Las contraseñas no coinciden, intentelo nuevamente');
            }
        }
        else {
            this.toaster.show('Ingrese una contraseña válida');
        }
    };
    CorrectCodePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-correct-code',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/correct-code/correct-code.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cambio de contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n  <ion-item>\n    <ion-label color="primary" class="txtC" stacked>Ingresa la nueva contraseña</ion-label>\n    <ion-input type="password" placeholder="" [(ngModel)]="password1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" class="txtC" stacked>Repite la nueva contraseña</ion-label>\n    <ion-input type="password" placeholder="" [(ngModel)]="password2"></ion-input>\n  </ion-item>\n  \n  <button class="center-content" (click)="setPassword()" ion-button block>Cambiar contraseña</button>\n</ion-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/correct-code/correct-code.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_recover_password_recover_password__["a" /* RecoverPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_toast__["a" /* ToastProvider */]])
    ], CorrectCodePage);
    return CorrectCodePage;
}());

//# sourceMappingURL=correct-code.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductPage = /** @class */ (function () {
    function AddProductPage(reservationProvider, orderProvider, userProvider, navCtrl, navParams, toast) {
        this.reservationProvider = reservationProvider;
        this.orderProvider = orderProvider;
        this.userProvider = userProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.amount = 1;
        this.item = navParams.get('item');
        this.item_type = navParams.get('item_type');
        this.additionals = navParams.get('additionals') || [];
    }
    AddProductPage.prototype.getAdditional = function () {
        var _this = this;
        return this.additionals && this.additionals.find(function (x) { return x.id == _this.additional; });
    };
    AddProductPage.prototype.addItem = function () {
        if (this.amount <= 0) {
            this.toast.show('Debe seleccionar una cantidad mayor a 0');
        }
        else {
            var additional = this.getAdditional();
            this.reservationProvider.addItem({
                item: this.item,
                amount: this.amount,
                additional: additional,
            }, this.item_type);
            this.orderProvider.addItem({
                item: this.item,
                amount: this.amount,
                additional: additional,
            }, this.item_type);
            this.toast.show(this.item.name + " fue agregado correctamente al pedido", 3000);
        }
    };
    AddProductPage.prototype.accept = function () {
        this.addItem();
        this.navCtrl.pop();
    };
    AddProductPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-product',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/add-product/add-product.html"*/'<ion-content class="background scroll">\n\n    <div class="flex flex-column modal-container">\n        <h6>Cantidad de {{item.name}} a pedir ?</h6>\n        <ion-item>\n            <ion-label>Cantidad:</ion-label>\n            <ion-input type="number" [(ngModel)]="amount" value="1" class="amount-input" placeholder="Cantidad"></ion-input>\n        </ion-item>\n     \n        <ion-item *ngIf="additionals.length > 0">\n            <ion-label>Adicional</ion-label>\n            <ion-select [(ngModel)]="additional" cancelText="Cancelar" okText="Aceptar">\n                <div *ngFor="let additional of additionals">\n                    <ion-option value="{{additional.id}}">{{additional.name}} ${{additional.discount_price}} </ion-option>\n                </div>\n            </ion-select>\n        </ion-item>\n        <ion-row>\n            <ion-col>\n                <button ion-button (click)="cancel()" color="dark" clear full>Cancelar</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button (click)="accept()" full>Aceptar</button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/add-product/add-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadoPagoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MercadoPagoProvider = /** @class */ (function () {
    function MercadoPagoProvider(http, events, userProvider, loader, toaster) {
        this.http = http;
        this.events = events;
        this.userProvider = userProvider;
        this.loader = loader;
        this.toaster = toaster;
        this.doSubmit = false;
        this.cardNumberElement = null;
        this.payElement = null;
        this.formElement = null;
        this.paymentMethodId = null;
        this.token = null;
        this.email = null;
        this.docNumber = null;
        this.data = {};
    }
    MercadoPagoProvider.prototype.initialize = function (publishableKey) {
        Mercadopago.setPublishableKey(publishableKey);
        Mercadopago.getIdentificationTypes();
    };
    MercadoPagoProvider.prototype.setCardNumberElement = function (element) {
        this.cardNumberElement = element;
    };
    MercadoPagoProvider.prototype.setPayButtonElement = function (element) {
        this.payElement = element;
    };
    MercadoPagoProvider.prototype.setPayFormElement = function (formElement) {
        this.formElement = formElement;
    };
    MercadoPagoProvider.prototype.getBin = function () {
        var ccNumber = this.cardNumberElement;
        return ccNumber.value.replace(/[ .-]/g, '').slice(0, 6);
    };
    MercadoPagoProvider.prototype.guessingPaymentMethod = function (eventType) {
        var _this = this;
        var bin = this.getBin();
        if (eventType == "keyup") {
            if (bin.length >= 6) {
                Mercadopago.getPaymentMethod({
                    "bin": bin
                }, this.setPaymentMethodInfo.bind(this));
            }
        }
        else {
            setTimeout(function () {
                if (bin.length >= 6) {
                    Mercadopago.getPaymentMethod({
                        "bin": bin
                    }, _this.setPaymentMethodInfo.bind(_this));
                }
            }, 100);
        }
    };
    MercadoPagoProvider.prototype.setPaymentMethodInfo = function (status, response) {
        if (status == 200) {
            var form = this.formElement;
            if (this.paymentMethodId == null) {
                try {
                    this.paymentMethodId = response[0].id;
                }
                catch (error) {
                    console.log(error);
                }
            }
            else {
                this.paymentMethodId = response[0].id;
            }
        }
    };
    MercadoPagoProvider.prototype.doPay = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Mercadopago.createToken(form, _this.sdkResponseHandler.bind(_this));
            resolve();
        });
    };
    MercadoPagoProvider.prototype.sdkResponseHandler = function (status, response) {
        if (status != 200 && status != 201) {
            this.toaster.show("Por Favor, Verifique los datos ingresados");
            this.loader.hide();
        }
        else {
            this.token = response.id;
            var data = {
                client: this.email,
                restaurant: this.data.restaurantId,
                amount: this.data.total,
                description: 'Compra Donde comemos',
                payment_method: this.paymentMethodId,
                token: this.token,
            };
            return this.sendToken(__WEBPACK_IMPORTED_MODULE_1__config__["b" /* MP_ENDPOINT */], data);
        }
    };
    MercadoPagoProvider.prototype.setEmail = function (email) {
        this.email = email;
    };
    MercadoPagoProvider.prototype.setDocNumber = function (docNumber) {
        this.docNumber = docNumber;
    };
    MercadoPagoProvider.prototype.setData = function (data) {
        this.data = data;
    };
    MercadoPagoProvider.prototype.sendToken = function (endpoint, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(endpoint, data, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .subscribe(function (response) {
                _this.loader.hide();
                var body = JSON.parse(response._body);
                _this.events.publish('payment:created', body.data.payment);
                resolve(response);
            }, function (err) {
                _this.loader.hide();
                console.log(err);
                _this.toaster.show("Algo salio mal...");
            });
        });
        return promise;
    };
    MercadoPagoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_toast__["a" /* ToastProvider */]])
    ], MercadoPagoProvider);
    return MercadoPagoProvider;
}());

//# sourceMappingURL=mercado-pago.provider.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MP_ENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CUSTOM_IMAGE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_config__ = __webpack_require__(30);

var MP_ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__app_config_config__["b" /* BASE_URL */] + "api/payments/";
// export const CUSTOM_IMAGE = "assets/img/001.png";
var CUSTOM_IMAGE = "assets/img/002.png";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_category_rating_category_rating__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_reservation_reservation__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_my_reservations_my_reservations__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_reservation_reservation__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_favorite_restaurants_favorite_restaurants__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_order_order__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_order_order__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_add_cart_add_cart__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_information_information__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_location_location__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_product__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_restaurant_restaurant__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_start_start__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorite_favorite__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_details_details__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_category_category__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_restaurant_restaurant__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_scroll_scroll__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_menu_menu__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_service_service__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_brand_picture_brand_picture__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_tag_macro_tag_macro__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_tag_micro_tag_micro__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__PIPES_time_time__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__PIPES_place_placeDiscount__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__PIPES_place_discountFormat__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_payment_method_payment_method__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_hour_hour__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_favorite_restaurant_favorite_restaurant__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_orders_orders__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ionic3_star_rating__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_fcm__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_score_category_item_score_category_item__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_qualifications_qualifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ionic3_datepicker__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_reservation_motive_reservation_motive__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_storage_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ionic_native_native_storage__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_add_product_add_product__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_reservation_form_reservation_form__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_mercado_pago_mercado_pago_elements__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__providers_recover_password_recover_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_correct_code_correct_code__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_menu_navigation_menu_navigation__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_change_password_change_password__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__providers_error_handler_error_handler__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_ionic_select_searchable__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_66_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_preload_image_preload_image__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_scroll_scroll__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_mercado_pago_modal_mercado_pago_modal__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_add_product_add_product__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_privacy_policy_privacy_policy__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_terms_of_service_terms_of_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__providers_product_category_product_category__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_restaurant_schedule_indicator_restaurant_schedule_indicator__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































































var config = {
    backButtonText: '',
    backButtonIcon: 'md-arrow-back',
    modalEnter: 'modal-slide-in',
    modalLeave: 'modal-slide-out',
    tabsPlacement: 'bottom',
    pageTransition: 'md',
    mode: 'md',
    menuType: 'overlay'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_23__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
                __WEBPACK_IMPORTED_MODULE_12__components_product_product__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_restaurant_restaurant__["a" /* RestaurantComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_reservation_reservation__["a" /* ReservationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_menu_menu__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_add_cart_add_cart__["a" /* AddCartComponent */],
                __WEBPACK_IMPORTED_MODULE_40__PIPES_time_time__["a" /* TimePipe */],
                __WEBPACK_IMPORTED_MODULE_41__PIPES_place_placeDiscount__["a" /* PlacePipe */],
                __WEBPACK_IMPORTED_MODULE_42__PIPES_place_discountFormat__["a" /* DiscountFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_6__components_order_order__["a" /* OrderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_favorite_restaurants_favorite_restaurants__["a" /* FavoriteRestaurantsComponent */],
                __WEBPACK_IMPORTED_MODULE_48__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_my_reservations_my_reservations__["a" /* MyReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_1__components_category_rating_category_rating__["a" /* CategoryRatingComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_reservation_form_reservation_form__["a" /* ReservationFormComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_correct_code_correct_code__["a" /* CorrectCodePage */],
                __WEBPACK_IMPORTED_MODULE_67__components_preload_image_preload_image__["a" /* PreloadImage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_68__components_scroll_scroll__["a" /* ScrollComponent */],
                __WEBPACK_IMPORTED_MODULE_60__pages_mercado_pago_mercado_pago_elements__["a" /* MercadoPagoComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_correct_code_correct_code__["a" /* CorrectCodePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_mercado_pago_modal_mercado_pago_modal__["a" /* MercadoPagoModalPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_add_product_add_product__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_74__components_restaurant_schedule_indicator_restaurant_schedule_indicator__["a" /* RestaurantScheduleIndicatorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */], config, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_49_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_54_ionic3_datepicker__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_66_ionic_select_searchable__["SelectSearchableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_24_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_information_information__["a" /* InformationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__["a" /* RatingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_start_start__["a" /* StartPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_reservation_reservation__["a" /* ReservationPage */],
                __WEBPACK_IMPORTED_MODULE_64__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_my_reservations_my_reservations__["a" /* MyReservationsPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_mercado_pago_mercado_pago_elements__["a" /* MercadoPagoComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_correct_code_correct_code__["a" /* CorrectCodePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_mercado_pago_modal_mercado_pago_modal__["a" /* MercadoPagoModalPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_add_product_add_product__["a" /* AddProductPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
                __WEBPACK_IMPORTED_MODULE_72__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_23__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_30__providers_restaurant_restaurant__["a" /* RestaurantProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_scroll_scroll__["a" /* ScrollProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_menu_menu__["a" /* MenuProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_order_order__["a" /* OrderProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_location_location__["a" /* LocationProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_brand_picture_brand_picture__["a" /* BrandPictureProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_tag_macro_tag_macro__["a" /* TagMacroProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_tag_micro_tag_micro__["a" /* TagMicroProvider */],
                __WEBPACK_IMPORTED_MODULE_73__providers_product_category_product_category__["a" /* ProductCategoryProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["ToastController"],
                __WEBPACK_IMPORTED_MODULE_44__providers_payment_method_payment_method__["a" /* PaymentMethodProvider */],
                __WEBPACK_IMPORTED_MODULE_45__providers_hour_hour__["a" /* HourProvider */],
                __WEBPACK_IMPORTED_MODULE_46__providers_favorite_restaurant_favorite_restaurant__["a" /* FavoriteRestaurantProvider */],
                __WEBPACK_IMPORTED_MODULE_47__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["LoadingController"],
                __WEBPACK_IMPORTED_MODULE_50__providers_reservation_reservation__["a" /* ReservationProvider */],
                __WEBPACK_IMPORTED_MODULE_52__providers_score_category_item_score_category_item__["a" /* ScoreCategoryItemProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_qualifications_qualifications__["a" /* QualificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_55__providers_reservation_motive_reservation_motive__["a" /* ReservationMotiveProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_57__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_24_ionic_angular__["MenuClose"],
                __WEBPACK_IMPORTED_MODULE_58__providers_add_product_add_product__["a" /* AddProductProvider */],
                __WEBPACK_IMPORTED_MODULE_60__pages_mercado_pago_mercado_pago_elements__["b" /* MercadoPagoProvider */],
                __WEBPACK_IMPORTED_MODULE_61__providers_recover_password_recover_password__["a" /* RecoverPasswordProvider */],
                __WEBPACK_IMPORTED_MODULE_63__providers_menu_navigation_menu_navigation__["a" /* MenuNavigationProvider */],
                __WEBPACK_IMPORTED_MODULE_65__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_73__providers_product_category_product_category__["a" /* ProductCategoryProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_score_category_item_score_category_item__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryRatingComponent = /** @class */ (function () {
    function CategoryRatingComponent(scoreCategoryItemProvider, userProvider) {
        this.scoreCategoryItemProvider = scoreCategoryItemProvider;
        this.userProvider = userProvider;
        this.disabledButton = false;
    }
    CategoryRatingComponent.prototype.logRatingChange = function (rating) {
        this.rating = rating;
        this.addCategory(this.category, rating);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("category"),
        __metadata("design:type", Object)
    ], CategoryRatingComponent.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("addCategory"),
        __metadata("design:type", Object)
    ], CategoryRatingComponent.prototype, "addCategory", void 0);
    CategoryRatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'category-rating',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/category-rating/category-rating.html"*/'\n<div>\n  <p class="centerR textP">{{category.name}}</p>\n  <div class="centerR">\n    <ionic3-star-rating #rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="rgb(255,105,0)"\n      defaultColor="rgb(255,105,0)" readonly="false" fontSize="50px" (ratingChanged)="logRatingChange($event)" rating = "0" halfStar = "true">\n    </ionic3-star-rating>\n  </div>\n</div>\n\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/category-rating/category-rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_score_category_item_score_category_item__["a" /* ScoreCategoryItemProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], CategoryRatingComponent);
    return CategoryRatingComponent;
}());

//# sourceMappingURL=category-rating.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservation_reservation__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationComponent = /** @class */ (function () {
    function ReservationComponent(reservationProvider, app, navCtrl, alertController) {
        this.reservationProvider = reservationProvider;
        this.app = app;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
    }
    ReservationComponent.prototype.ionViewWillLeave = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    ReservationComponent.prototype.cancelReservation = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: '¿Seguro quiere cancelar esta reserva?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        _this.cancel();
                    }
                }
            ]
        });
        alert.present();
    };
    ReservationComponent.prototype.cancellable = function () {
        return !this.reservation.finished && !this.reservation.cancelled;
    };
    ReservationComponent.prototype.cancel = function () {
        var _this = this;
        this.reservationProvider.cancelReservation(this.reservation.id).then(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
    };
    ReservationComponent.prototype.qualifiable = function () {
        return this.reservation.finished && !this.reservation.cancelled && !this.reservation.qualified;
    };
    ReservationComponent.prototype.qualifyReservation = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__["a" /* RatingPage */], { ODRCategory: this.reservation.id, categoryRank: "RES", typeRank: "reservation", restaurantId: this.reservation.restaurant.id, onQualified: this.onQualified }); //Se le pasa el tipo de categoria fija, en este caso una Reserva
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])("reservation"),
        __metadata("design:type", Object)
    ], ReservationComponent.prototype, "reservation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])("onQualified"),
        __metadata("design:type", Object)
    ], ReservationComponent.prototype, "onQualified", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])("onCancel"),
        __metadata("design:type", Object)
    ], ReservationComponent.prototype, "onCancel", void 0);
    ReservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'reservation',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/reservation/reservation.html"*/'<ion-card-content>\n\n    <ion-item text-wrap>\n        <ion-label>{{reservation.restaurant.name}}</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap>\n        <ion-label>Comensales:</ion-label>\n        <ion-label>{{reservation.diners}}</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap>\n        <ion-label>Dia:</ion-label>\n        <ion-label>{{reservation.reservation_date}}</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap>\n        <ion-label>Total:</ion-label>\n        <ion-label>$ {{reservation.price_final}}</ion-label>\n    </ion-item>\n\n    <button ion-button small *ngIf="qualifiable()" (click)="qualifyReservation()">Calificar</button>\n    <button ion-button small color="danger" *ngIf="cancellable()" (click)="cancelReservation()">Cancelar</button>\n    \n\n</ion-card-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/reservation/reservation.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_reservation_reservation__["a" /* ReservationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ReservationComponent);
    return ReservationComponent;
}());

//# sourceMappingURL=reservation.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteRestaurantsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_favorite_restaurant_favorite_restaurant__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoriteRestaurantsComponent = /** @class */ (function () {
    function FavoriteRestaurantsComponent(alertCtrl, favoriteRestaurantProvider, toaster, userProvider, app) {
        this.alertCtrl = alertCtrl;
        this.favoriteRestaurantProvider = favoriteRestaurantProvider;
        this.toaster = toaster;
        this.userProvider = userProvider;
        this.app = app;
    }
    FavoriteRestaurantsComponent.prototype.addFavoriteRestaurant = function () {
        var _this = this;
        if (this.userProvider.isGuestUser()) {
            this.alertGuestUser();
        }
        else {
            if (this.restaurantFavorite) {
                this.presentAlert();
            }
            else {
                this.favoriteRestaurantProvider.addFavorite(this.restaurant.id).then(function (restaurantFavorite) {
                    _this.restaurantFavorite = restaurantFavorite;
                    _this.toaster.show('Restaurante agregado a favoritos');
                });
            }
        }
    };
    FavoriteRestaurantsComponent.prototype.alertGuestUser = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Todavía no estas registrado?',
            message: 'Registrate y disfrutá de lo que tenemos para ofrecerte',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Registrar',
                    handler: function (data) {
                        _this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */], { restaurant: _this.restaurant });
                    }
                }
            ]
        });
        alert.present();
    };
    FavoriteRestaurantsComponent.prototype.presentAlert = function () {
        var _this = this;
        this.userProvider.isShowingPopUp = true;
        var alert = this.alertCtrl.create({
            title: '¿Estás seguro de que querés eliminar este restaurante de tus favoritos?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function (data) {
                        _this.userProvider.isShowingPopUp = false;
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        _this.deleteFavoriteRestaurant(_this.restaurantFavorite.id);
                    }
                }
            ]
        });
        alert.present();
    };
    FavoriteRestaurantsComponent.prototype.deleteFavoriteRestaurant = function (favoriteRestaurantId) {
        var _this = this;
        this.favoriteRestaurantProvider.deleteFavorite(favoriteRestaurantId).then(function () {
            _this.restaurantFavorite = undefined;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])("restaurant"),
        __metadata("design:type", Object)
    ], FavoriteRestaurantsComponent.prototype, "restaurant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])("restaurantFavorite"),
        __metadata("design:type", Object)
    ], FavoriteRestaurantsComponent.prototype, "restaurantFavorite", void 0);
    FavoriteRestaurantsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'favorite-restaurants',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/favorite-restaurants/favorite-restaurants.html"*/'<button  (click)="addFavoriteRestaurant()" class="buttonHeart">\n  <ion-icon *ngIf="restaurantFavorite" color="primary" name="heart" class="heart"></ion-icon>\n  <ion-icon *ngIf="!restaurantFavorite" color="GrlikeItem=!likeItemayColor" name="heart" class="heart color-heart" style="color: white"></ion-icon>\n</button>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/favorite-restaurants/favorite-restaurants.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1__providers_favorite_restaurant_favorite_restaurant__["a" /* FavoriteRestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"]])
    ], FavoriteRestaurantsComponent);
    return FavoriteRestaurantsComponent;
}());

//# sourceMappingURL=favorite-restaurants.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 232,
	"./af.js": 232,
	"./ar": 233,
	"./ar-dz": 234,
	"./ar-dz.js": 234,
	"./ar-kw": 235,
	"./ar-kw.js": 235,
	"./ar-ly": 236,
	"./ar-ly.js": 236,
	"./ar-ma": 237,
	"./ar-ma.js": 237,
	"./ar-sa": 238,
	"./ar-sa.js": 238,
	"./ar-tn": 239,
	"./ar-tn.js": 239,
	"./ar.js": 233,
	"./az": 240,
	"./az.js": 240,
	"./be": 241,
	"./be.js": 241,
	"./bg": 242,
	"./bg.js": 242,
	"./bm": 243,
	"./bm.js": 243,
	"./bn": 244,
	"./bn.js": 244,
	"./bo": 245,
	"./bo.js": 245,
	"./br": 246,
	"./br.js": 246,
	"./bs": 247,
	"./bs.js": 247,
	"./ca": 248,
	"./ca.js": 248,
	"./cs": 249,
	"./cs.js": 249,
	"./cv": 250,
	"./cv.js": 250,
	"./cy": 251,
	"./cy.js": 251,
	"./da": 252,
	"./da.js": 252,
	"./de": 253,
	"./de-at": 254,
	"./de-at.js": 254,
	"./de-ch": 255,
	"./de-ch.js": 255,
	"./de.js": 253,
	"./dv": 256,
	"./dv.js": 256,
	"./el": 257,
	"./el.js": 257,
	"./en-SG": 258,
	"./en-SG.js": 258,
	"./en-au": 259,
	"./en-au.js": 259,
	"./en-ca": 260,
	"./en-ca.js": 260,
	"./en-gb": 261,
	"./en-gb.js": 261,
	"./en-ie": 262,
	"./en-ie.js": 262,
	"./en-il": 263,
	"./en-il.js": 263,
	"./en-nz": 264,
	"./en-nz.js": 264,
	"./eo": 265,
	"./eo.js": 265,
	"./es": 266,
	"./es-do": 267,
	"./es-do.js": 267,
	"./es-us": 268,
	"./es-us.js": 268,
	"./es.js": 266,
	"./et": 269,
	"./et.js": 269,
	"./eu": 270,
	"./eu.js": 270,
	"./fa": 271,
	"./fa.js": 271,
	"./fi": 272,
	"./fi.js": 272,
	"./fo": 273,
	"./fo.js": 273,
	"./fr": 274,
	"./fr-ca": 275,
	"./fr-ca.js": 275,
	"./fr-ch": 276,
	"./fr-ch.js": 276,
	"./fr.js": 274,
	"./fy": 277,
	"./fy.js": 277,
	"./ga": 278,
	"./ga.js": 278,
	"./gd": 279,
	"./gd.js": 279,
	"./gl": 280,
	"./gl.js": 280,
	"./gom-latn": 281,
	"./gom-latn.js": 281,
	"./gu": 282,
	"./gu.js": 282,
	"./he": 283,
	"./he.js": 283,
	"./hi": 284,
	"./hi.js": 284,
	"./hr": 285,
	"./hr.js": 285,
	"./hu": 286,
	"./hu.js": 286,
	"./hy-am": 287,
	"./hy-am.js": 287,
	"./id": 288,
	"./id.js": 288,
	"./is": 289,
	"./is.js": 289,
	"./it": 290,
	"./it-ch": 291,
	"./it-ch.js": 291,
	"./it.js": 290,
	"./ja": 292,
	"./ja.js": 292,
	"./jv": 293,
	"./jv.js": 293,
	"./ka": 294,
	"./ka.js": 294,
	"./kk": 295,
	"./kk.js": 295,
	"./km": 296,
	"./km.js": 296,
	"./kn": 297,
	"./kn.js": 297,
	"./ko": 298,
	"./ko.js": 298,
	"./ku": 299,
	"./ku.js": 299,
	"./ky": 300,
	"./ky.js": 300,
	"./lb": 301,
	"./lb.js": 301,
	"./lo": 302,
	"./lo.js": 302,
	"./lt": 303,
	"./lt.js": 303,
	"./lv": 304,
	"./lv.js": 304,
	"./me": 305,
	"./me.js": 305,
	"./mi": 306,
	"./mi.js": 306,
	"./mk": 307,
	"./mk.js": 307,
	"./ml": 308,
	"./ml.js": 308,
	"./mn": 309,
	"./mn.js": 309,
	"./mr": 310,
	"./mr.js": 310,
	"./ms": 311,
	"./ms-my": 312,
	"./ms-my.js": 312,
	"./ms.js": 311,
	"./mt": 313,
	"./mt.js": 313,
	"./my": 314,
	"./my.js": 314,
	"./nb": 315,
	"./nb.js": 315,
	"./ne": 316,
	"./ne.js": 316,
	"./nl": 317,
	"./nl-be": 318,
	"./nl-be.js": 318,
	"./nl.js": 317,
	"./nn": 319,
	"./nn.js": 319,
	"./pa-in": 320,
	"./pa-in.js": 320,
	"./pl": 321,
	"./pl.js": 321,
	"./pt": 322,
	"./pt-br": 323,
	"./pt-br.js": 323,
	"./pt.js": 322,
	"./ro": 324,
	"./ro.js": 324,
	"./ru": 325,
	"./ru.js": 325,
	"./sd": 326,
	"./sd.js": 326,
	"./se": 327,
	"./se.js": 327,
	"./si": 328,
	"./si.js": 328,
	"./sk": 329,
	"./sk.js": 329,
	"./sl": 330,
	"./sl.js": 330,
	"./sq": 331,
	"./sq.js": 331,
	"./sr": 332,
	"./sr-cyrl": 333,
	"./sr-cyrl.js": 333,
	"./sr.js": 332,
	"./ss": 334,
	"./ss.js": 334,
	"./sv": 335,
	"./sv.js": 335,
	"./sw": 336,
	"./sw.js": 336,
	"./ta": 337,
	"./ta.js": 337,
	"./te": 338,
	"./te.js": 338,
	"./tet": 339,
	"./tet.js": 339,
	"./tg": 340,
	"./tg.js": 340,
	"./th": 341,
	"./th.js": 341,
	"./tl-ph": 342,
	"./tl-ph.js": 342,
	"./tlh": 343,
	"./tlh.js": 343,
	"./tr": 344,
	"./tr.js": 344,
	"./tzl": 345,
	"./tzl.js": 345,
	"./tzm": 346,
	"./tzm-latn": 347,
	"./tzm-latn.js": 347,
	"./tzm.js": 346,
	"./ug-cn": 348,
	"./ug-cn.js": 348,
	"./uk": 349,
	"./uk.js": 349,
	"./ur": 350,
	"./ur.js": 350,
	"./uz": 351,
	"./uz-latn": 352,
	"./uz-latn.js": 352,
	"./uz.js": 351,
	"./vi": 353,
	"./vi.js": 353,
	"./x-pseudo": 354,
	"./x-pseudo.js": 354,
	"./yo": 355,
	"./yo.js": 355,
	"./zh-cn": 356,
	"./zh-cn.js": 356,
	"./zh-hk": 357,
	"./zh-hk.js": 357,
	"./zh-tw": 358,
	"./zh-tw.js": 358
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 458;

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderComponent = /** @class */ (function () {
    function OrderComponent(app, navCtrl, orderProvider, alertController) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.orderProvider = orderProvider;
        this.alertController = alertController;
        this.showProducts = false;
    }
    OrderComponent.prototype.ionViewWillLeave = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    OrderComponent.prototype.qualifiable = function () {
        return this.order.delivered && !(this.order.qualified);
    };
    OrderComponent.prototype.qualifyOrder = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_0__pages_rating_rating__["a" /* RatingPage */], { ODRCategory: this.order.id, categoryRank: this.order.order_type, typeRank: "order", restaurantId: this.order.restaurant.id }); //Se le pasa el tipo de categoria fija, en este caso una ORDEN
    };
    OrderComponent.prototype.toggleProducts = function () {
        this.showProducts = !this.showProducts;
    };
    OrderComponent.prototype.cancellable = function () {
        return !this.order.delivered && !this.order.cancelled;
    };
    OrderComponent.prototype.cancel = function () {
        var _this = this;
        this.orderProvider.cancel(this.order.id).then(function () {
            _this.navCtrl.setRoot(_this.navCtrl.getActive().component);
        });
    };
    OrderComponent.prototype.cancelOrder = function () {
        var _this = this;
        var alert = this.alertController.create({
            title: '¿Seguro quiere cancelar este pedido?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        _this.cancel();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])("order"),
        __metadata("design:type", Object)
    ], OrderComponent.prototype, "order", void 0);
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'order',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/order/order.html"*/'\n<ion-card-header class="title-menu">{{order.restaurant.name}}</ion-card-header>\n\n<ion-card-content>\n\n  <ion-item text-wrap *ngIf="order.order_type===\'LOC\'">\n    <ion-label class="delivery-method">Lo retiraste por el local</ion-label>\n  </ion-item>\n  <ion-item text-wrap *ngIf="order.order_type===\'DEL\'">\n    <ion-label class="delivery-method">Te lo llevamos a <b>{{order.address}}</b></ion-label>\n  </ion-item>\n\n  <ion-item text-wrap>\n    <ion-label>Realizado el día </ion-label>\n    <ion-label>{{order.create_dttm | date: \'d/M/y\'}}</ion-label>\n  </ion-item>\n\n  <ion-item text-wrap>\n    <ion-label class="total">Total</ion-label>\n    <ion-label class="total">$ {{order.price_final}}</ion-label>\n  </ion-item>\n\n  <button ion-button small *ngIf="!showProducts" (click)="toggleProducts()">Ver productos</button>\n  <button ion-button small *ngIf="showProducts" (click)="toggleProducts()">Ocultar\n    productos</button>\n  <button ion-button small *ngIf="qualifiable()" (click)="qualifyOrder()">Calificar</button>\n  <button ion-button small color="danger" *ngIf="cancellable()" (click)="cancelOrder()">Cancelar</button>\n\n  <div *ngIf="showProducts">\n    <ion-item text-wrap *ngFor="let product of order.products">\n      <ion-label class="product">{{product.product.name}}</ion-label>\n      <ion-label class="product">x {{product.amount}}</ion-label>\n    </ion-item>\n\n    <ion-item text-wrap *ngFor="let product of order.menus">\n      <ion-label class="product">{{product.menu.name}}</ion-label>\n      <ion-label class="product">x {{product.amount}}</ion-label>\n    </ion-item>\n  </div>\n</ion-card-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/order/order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], OrderComponent);
    return OrderComponent;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationProvider = /** @class */ (function (_super) {
    __extends(LocationProvider, _super);
    function LocationProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.locations = [];
        return _this;
    }
    LocationProvider.prototype.getURL = function (restaurantId) {
        return "locations/";
    };
    LocationProvider.prototype.process_get = function (response) {
        this.locations = response;
    };
    LocationProvider.prototype.getCurrentLocation = function () {
        return this.currentLocation;
    };
    LocationProvider.prototype.storeCurrentLocation = function (location) {
        return this.currentLocation = location;
    };
    LocationProvider.prototype.removeCurrentLocation = function () {
        delete this.currentLocation;
    };
    LocationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LocationProvider);
    return LocationProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_add_product_add_product__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_register_register__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCartComponent = /** @class */ (function () {
    function AddCartComponent(userProvider, popOver, toastProvider, app, alertCtrl) {
        this.userProvider = userProvider;
        this.popOver = popOver;
        this.toastProvider = toastProvider;
        this.app = app;
        this.alertCtrl = alertCtrl;
    }
    AddCartComponent.prototype.addNew = function () {
        var _this = this;
        if (this.userProvider.isGuestUser()) {
            var alert_1 = this.alertCtrl.create({
                title: '¿Todavía no estas registrado?',
                message: 'Registrate y disfrutá de lo que tenemos para ofrecerte',
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function (data) {
                        }
                    },
                    {
                        text: 'Registrarse',
                        handler: function (data) {
                            _this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_register_register__["a" /* RegisterPage */]);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var modalOptions = {
                cssClass: "addCartModal"
            };
            this.userProvider.isShowingPopUp = true;
            console.log(this.additionals);
            var popOver = this.popOver.create(__WEBPACK_IMPORTED_MODULE_3__pages_add_product_add_product__["a" /* AddProductPage */], {
                item: this.item,
                item_type: this.item_type,
                additionals: this.additionals,
            }, modalOptions);
            popOver.onDidDismiss(function () { return _this.userProvider.isShowingPopUp = false; });
            popOver.present();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("item"),
        __metadata("design:type", Object)
    ], AddCartComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("item_type"),
        __metadata("design:type", Object)
    ], AddCartComponent.prototype, "item_type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("additionals"),
        __metadata("design:type", Object)
    ], AddCartComponent.prototype, "additionals", void 0);
    AddCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'add-cart',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/add-cart/add-cart.html"*/'<div class="h-100 flex-bottom-right" (click)="addNew()">\n  <ion-icon float-right class="iconAdd" name="add-circle"></ion-icon>\n</div>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/add-cart/add-cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
    ], AddCartComponent);
    return AddCartComponent;
}());

//# sourceMappingURL=add-cart.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants_item_type__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.item_type = __WEBPACK_IMPORTED_MODULE_1__app_constants_item_type__["a" /* ITEM_TYPE */].MENU;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.subMenus = this.menu.sub_menus;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("menu"),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "menu", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'menu',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/menu/menu.html"*/'<ion-card class="card-style flex-column">\n    <ion-card-header class="title-menu">{{menu.name}}</ion-card-header>\n    <ion-card-content class="flex-column menu-content">\n\n        <div>\n            <ion-item class="description" text-wrap>{{menu.description}}</ion-item>\n\n            <div class="sub">\n                <div class="sub-menu-container" *ngFor="let sm of subMenus">\n                    <ion-item text-wrap>\n                        <ion-label class="sub-menu">{{sm.name}}</ion-label>\n                        <ion-label class="sub-menu-description">{{sm.value}} </ion-label>\n                    </ion-item>\n                </div>\n            </div>\n        </div>\n\n\n        <ion-grid>\n            <ion-row>\n                <ion-col col-12 end>\n                    <div *ngIf="menu.discount_price != menu.real_price">\n                        <button ion-button small float-left\n                            class="discountMenu">{{ ((  1 - (menu.discount_price / menu.real_price)  ) * 100) | number:\'1.0-2\'}}\n                            %</button>\n                    </div>\n                    <ion-label class="sub-menu" text-right>$ {{menu.discount_price}} </ion-label>\n                    <add-cart [item]="menu" [item_type]="item_type"></add-cart>\n                </ion-col>\n                <ion-col col-2>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-card-content>\n</ion-card>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants_item_type__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
        this.item_type = __WEBPACK_IMPORTED_MODULE_1__app_constants_item_type__["a" /* ITEM_TYPE */].PRODUCT;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("product"),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("additionals"),
        __metadata("design:type", Object)
    ], ProductComponent.prototype, "additionals", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/product/product.html"*/'<div>\n  <ion-grid>\n    <ion-row>\n      <ion-col class="flex-center" col-7>\n        <p class="nameProduct" float-left>{{product.name}}</p>\n      </ion-col>\n      <ion-col col-5>\n        <ion-row>\n          <ion-col no-padding width-50 *ngIf="product.discount_price != product.real_price">\n            <button float-right ion-button small class="discountProduct">\n              {{ ((  1 - (product.discount_price / product.real_price)  ) * 100) | number:\'1.0-2\'}} %\n            </button>\n          </ion-col>\n          <ion-col class="flex-center flex-end" width-50>\n            <span class="price-text">\n              ${{product.discount_price | number:\'1.0-2\'}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-8>\n        <h4 class="descriptionProduct">{{product.description}}</h4>\n      </ion-col>\n      <ion-col col-4>\n        <add-cart class="h-100" [item]="product" [item_type]="item_type" [additionals]="additionals"></add-cart>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/product/product.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_details_details__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_qualifications_qualifications__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tag_macro_tag_macro__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(app, qualificationsProvider, tagMacroProvider) {
        this.app = app;
        this.qualificationsProvider = qualificationsProvider;
        this.tagMacroProvider = tagMacroProvider;
    }
    RestaurantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qualificationsProvider.get(this.restaurant.id).then(function (qualification) {
            var promedio = qualification.reduce(function (previous, current) {
                return previous += parseFloat(current.average);
            }, 0);
            _this.promedioC = promedio / (qualification.length);
        });
        this.tagMacroProvider.get(this.restaurant.id).then(function (highTag) {
            _this.tagsMacro = highTag.slice(0, 4);
        });
    };
    RestaurantComponent.prototype.goToDetails = function () {
        this.app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_0__pages_details_details__["a" /* DetailsPage */], { restaurant: this.restaurant });
    };
    RestaurantComponent.prototype.likePost = function (item, $event) {
        item.likeImg = !item.likeImg;
        $event.stopPropagation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])("restaurant"),
        __metadata("design:type", Object)
    ], RestaurantComponent.prototype, "restaurant", void 0);
    RestaurantComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'restaurant',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/restaurant/restaurant.html"*/'<ion-row class="restaurant-container" (click)="goToDetails()">\n  <ion-col float-left width-30 class="image-container" id="container">\n    <preload-image [ratio]="{w:1, h:1}" src="{{restaurant.profile_picture}}"></preload-image>\n\n    <div class="discount" *ngIf="restaurant.max_discount_today > 0">\n      <span class="discount-number">\n        {{restaurant.max_discount_today}}%\n      </span>\n    </div>\n  </ion-col>\n  <ion-col class="main-container" width-70>\n    <div class="flex">\n      <div class="nameRestaurant"> {{restaurant.name}} </div>\n      <div class="text-left">\n        <ion-icon *ngIf="promedioC > 0" pull-right name="star" class="iconStar">\n          <a class="promedio">{{ promedioC | number:"1.0-1"}}</a>\n        </ion-icon>\n      </div>\n    </div>\n    <restaurant-schedule-indicator [hours]="restaurant.hours"></restaurant-schedule-indicator>\n\n    <div class="flex">\n\n      <div class="more-info">\n        <h2 class="address">{{restaurant.address}}</h2>\n\n        <!--div class="promotionDIV" *ngIf="restaurant.promotions">\n          <h3 class="promotion">{{restaurant.promotions.promotion}}</h3>\n        </div-->\n        <div class="discountPlace" *ngIf="restaurant.placediscounts">\n          <span class="tagsDiscountPlace" *ngFor="let discount of restaurant.placediscounts">\n            {{discount.place| place}} -{{discount.amount}}%\n          </span>\n        </div>\n\n        <ion-chip class="chip" *ngFor="let tag of tagsMacro">\n          <ion-label text-center>{{tag.name}}</ion-label>\n        </ion-chip>\n\n      </div>\n      <div class="buyingOptions-container">\n        <div class="buyingOptions-row flex">\n          <a class="buyingOptions-txt" *ngIf="restaurant.self_service">Take away</a>\n          <!-- <ion-icon name="custom-self-box" class="service-icon" *ngIf="restaurant.self_service"></ion-icon> -->\n        </div>\n        <div class="buyingOptions-row flex">\n          <a class="buyingOptions-txt" *ngIf="restaurant.delivery">Delivery</a>\n          <!-- <ion-icon name="custom-scooter" class="service-icon" *ngIf="restaurant.delivery"></ion-icon> -->\n        </div>\n      </div>\n    </div>\n  </ion-col>\n\n  <!-- <div float-right>\n    <h1 class="nameRestaurant">{{restaurant.name}}\n      <ion-icon *ngIf="promedioC > 0" pull-right name="star" class="iconStar">\n        <a class="promedio">{{ promedioC | number:"1.0-1"}}</a>\n      </ion-icon>\n    </h1>\n  </div> -->\n</ion-row>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/restaurant/restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__providers_qualifications_qualifications__["a" /* QualificationsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_tag_macro_tag_macro__["a" /* TagMacroProvider */]])
    ], RestaurantComponent);
    return RestaurantComponent;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_menu_navigation_menu_navigation__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_start_start__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(app, fcm, platform, statusBar, userProvider, splashScreen, toastProvider, loaderProvider, storageProvider, menuNavigation) {
        this.app = app;
        this.fcm = fcm;
        this.platform = platform;
        this.statusBar = statusBar;
        this.userProvider = userProvider;
        this.splashScreen = splashScreen;
        this.toastProvider = toastProvider;
        this.loaderProvider = loaderProvider;
        this.storageProvider = storageProvider;
        this.menuNavigation = menuNavigation;
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString("ff6900");
            _this.splashScreen.hide();
            _this.menuNavigation.goTo(__WEBPACK_IMPORTED_MODULE_11__pages_start_start__["a" /* StartPage */]);
            _this.storageProvider.getUser()
                .then(function (storedUser) {
                _this.loaderProvider.display('Iniciando sesión...');
                _this.userProvider.login(storedUser.username, storedUser.password)
                    .then(function () {
                    _this.menuNavigation.goTo(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]);
                    _this.loaderProvider.hide();
                })
                    .catch(function (errors) {
                    _this.toastProvider.show('Ha habido un problema con las credenciales almacenadas');
                    _this.userProvider.logout()
                        .catch(function (errors) {
                        console.log(errors);
                    });
                    _this.menuNavigation.goTo(__WEBPACK_IMPORTED_MODULE_11__pages_start_start__["a" /* StartPage */]);
                    _this.loaderProvider.hide();
                });
            })
                .catch(function (error) {
            });
        });
    };
    MyApp.prototype.registerFCM = function () {
        this.fcm.getToken().then(function (token) {
        });
        this.fcm.onNotification().subscribe(function (data) {
            if (data.wasTapped) {
                // to develop
            }
            else {
                // this.toast.create({message:this.manageNotification(data.type),position:'top',showCloseButton:true,closeButtonText:"Ok"}).present()
            }
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            // this.userProvider.changeFcmToken(token)
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header class="transparent_header">\n      <ion-buttons>\n        <button color="light" menuClose ion-button icon-only clear float-left> \n           <ion-icon name="arrow-back"></ion-icon>\n        </button>\n        <!-- <button color="light" (click)="handleLogout()" ion-button icon-only clear float-right> \n          <ion-icon name="power"></ion-icon>\n        </button> -->\n      </ion-buttons>\n      \n  </ion-header>\n\n  <ion-content class="main_bg" padding>\n    <div class="profile_name" text-center>\n      <p no-margin>{{userProvider.user.first_name}} {{userProvider.user.last_name}}</p>\n    </div>\n\n    <ion-list class="menu_items">\n      <ion-item \n        ion-item \n        no-lines\n        menuClose \n        no-padding \n        text-center \n        *ngFor="let p of menuNavigation.pages; let i = index" \n        (click)="this.menuNavigation.handleSelection(i, p)">\n        <span \n          class="cir_icon" \n          [ngClass]="{ \'active_category\': menuNavigation.selectedIndex == i }">\n          <ion-icon name="{{p.icon}}"></ion-icon>\n        </span>\n        {{p.title}}\n      </ion-item>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_menu_navigation_menu_navigation__["a" /* MenuNavigationProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = /** @class */ (function () {
    function TimePipe() {
    }
    TimePipe.prototype.transform = function (value) {
        return value.split(':')[0] + ":" + value.split(':')[1];
    };
    TimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'time',
        })
    ], TimePipe);
    return TimePipe;
}());

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservation_reservation__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_order_order__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_restaurant__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_restaurant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__interfaces_restaurant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_reservation_motive_reservation_motive__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_format__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_mercado_pago_modal_mercado_pago_modal__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReservationFormComponent = /** @class */ (function () {
    function ReservationFormComponent(navCtrl, reservationProvider, orderProvider, toast, loader, navParams, reservationMotiveProvider) {
        this.navCtrl = navCtrl;
        this.reservationProvider = reservationProvider;
        this.orderProvider = orderProvider;
        this.toast = toast;
        this.loader = loader;
        this.navParams = navParams;
        this.reservationMotiveProvider = reservationMotiveProvider;
        this.hasCard = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            total_final_form: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            diners: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(1)]),
            phone_nbr: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(6)]),
            time: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required]),
            comments: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
            paymentMethod: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](''),
        });
        this.today = new Date();
        this.currentDate = new Date();
        this.maxDate = new Date(this.today.getFullYear() + 1, 11, 31);
        this.localeStringsES = {
            monday: true,
            weekdays: [
                'Lu',
                'Ma',
                'Mi',
                'Ju',
                'Vi',
                'Sa',
                'Do'
            ],
            months: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio',
                'Agosto',
                'Septiembre',
                'Octubre',
                'Noviembre',
                'Diciembre'
            ]
        };
        this.modalOptions = {
            cssClass: '.datepicker-wrapper'
        };
        this.okText = "Aceptar";
    }
    ReservationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.total_final_amount = this.total_final;
        this.reservationMotiveProvider.get().then(function (motives) {
            _this.reservationMotives = motives;
        });
        this.hasACard();
    };
    ReservationFormComponent.prototype.hasACard = function () {
        if (this.restaurant.public_key) {
            this.hasCard = true;
        }
    };
    ReservationFormComponent.prototype.isValid = function () {
        return this.form.valid;
    };
    ReservationFormComponent.prototype.onDateChange = function (newDate) {
        this.currentDate = newDate;
    };
    ReservationFormComponent.prototype.makeReservation = function () {
        var _this = this;
        if (!this.currentDate) {
            this.toast.show('Ingrese una fecha válida');
            return;
        }
        var formattedCurrentDate = Object(__WEBPACK_IMPORTED_MODULE_9__utils_format__["a" /* formatDate */])(this.currentDate);
        this.reservationProvider.isAvailable(this.restaurant.id, formattedCurrentDate, this.time, this.diners).then((function (isAvailable) {
            _this.isAvailable = isAvailable;
            if (_this.isAvailable.is_available) {
                _this.loader.display('Estamos procesando tu reserva...');
                if (_this.paymentMethod == 'creditCard') {
                    _this.loader.hide();
                    _this.orderProvider.order.order_type = "COM";
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_mercado_pago_modal_mercado_pago_modal__["a" /* MercadoPagoModalPage */], { restaurantId: _this.restaurant.id, publicKey: _this.restaurant.public_key, phone_nbr: _this.phone_nbr, diners: _this.diners, formattedCurrentDate: formattedCurrentDate, time: _this.time, motive: _this.motive, comments: _this.comments, total: _this.total_final_amount });
                }
                else {
                    _this.reservationProvider.addReservation(null, _this.restaurant.id, _this.phone_nbr, _this.diners, formattedCurrentDate, _this.time, _this.motive, _this.comments).then(function () {
                        _this.loader.hide();
                        _this.toast.show("Tu reserva ha sido realizada con éxito", 3000);
                        _this.navCtrl.pop();
                        _this.reservationProvider.clearReservation();
                        _this.orderProvider.clearOrder();
                    });
                }
            }
            else {
                _this.toast.show('No se ha podido realizar la reserva, el restaurante no se encuentra disponible en la fecha y hora seleccionada', 3000);
            }
        }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("restaurant"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__interfaces_restaurant__["restaurant"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__interfaces_restaurant__["restaurant"]) === "function" && _a || Object)
    ], ReservationFormComponent.prototype, "restaurant", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("orderPage"),
        __metadata("design:type", Boolean)
    ], ReservationFormComponent.prototype, "orderPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("onlyReservation"),
        __metadata("design:type", Boolean)
    ], ReservationFormComponent.prototype, "onlyReservation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("paymentMethod"),
        __metadata("design:type", String)
    ], ReservationFormComponent.prototype, "paymentMethod", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("total_final"),
        __metadata("design:type", String)
    ], ReservationFormComponent.prototype, "total_final", void 0);
    ReservationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reservation-form',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/reservation-form/reservation-form.html"*/'<div [formGroup]="form">\n\n  <ion-input type="text" formControlName="total_final_form" [(ngModel)]="total_final_amount"></ion-input>\n\n  <ion-item *ngIf="!orderPage && !onlyReservation && reservationProvider.getProducts().concat(reservationProvider.getMenus()).length > 0">\n      <ion-label>Método de pago</ion-label>\n      <ion-select placeholder="Seleccione un método" cancelText="Cancelar" okText="Aceptar"\n          [(ngModel)]="paymentMethod" formControlName="paymentMethod">\n          <ion-option value="cash">Efectivo</ion-option>\n          <ion-option *ngIf="hasCard" value="creditCard">Tarjeta</ion-option>\n      </ion-select>\n  </ion-item>\n\n  <ion-item class="reservationItems">\n    <ion-icon class="iconItems" color="dark" name="people" item-start></ion-icon>\n    <ion-input color="primary" class="ionColor" type="number" placeholder="Comensales" formControlName="diners"\n      [(ngModel)]="diners">\n    </ion-input>\n  </ion-item>\n\n  <ion-label>\n    <span float-left>\n      <ion-item class="reservationItems">\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label class="labelCalendar reservationItems">Fecha</ion-label>\n      </ion-item>\n    </span>\n\n    <span float-right class="calendar">\n      <ion-icon class="iconCalendar" name="clipboard" item-right></ion-icon>\n      <span float-right ion-datepicker (ionChanged)="onDateChange($event)" [localeStrings]="localeStringsES"\n        okText="Aceptar" cancelText="Cancelar" [value]="currentDate" class="ScheduleDate" [min]="today" [max]="maxDate"\n        [modalOptions]="modalOptions" clear>\n        <span>{{ currentDate | date: \'dd/MM/yyyy\' }}</span>\n      </span>\n    </span>\n  </ion-label>\n\n  <ion-item class="reservationItems">\n    <ion-icon name="time" class="iconItems" item-start></ion-icon>\n    <ion-label class="reservationItems">Hora</ion-label>\n    <ion-datetime displayFormat="HH:mm" doneText="aceptar" cancelText="cancelar" minuteValues="0,15,30,45" min="06:00"\n      formControlName="time" [(ngModel)]="time"></ion-datetime>\n  </ion-item>\n\n  <ion-item class="reservationItems">\n    <ion-icon class="iconItems" name="call" item-start></ion-icon>\n    <ion-input type="tel" placeholder="Celular" formControlName="phone_nbr" [(ngModel)]="phone_nbr">\n    </ion-input>\n  </ion-item>\n\n  <ion-item class="reservationItems">\n    <ion-icon name="chatbubbles" class="iconItems" item-start></ion-icon>\n    <ion-input class="reservationItems" type="text" placeholder="Comentario" text-wrap formControlName="comments"\n      [(ngModel)]="comments">\n    </ion-input>\n  </ion-item>\n  \n</div>\n<ion-item>\n  <ion-icon class="iconItems" name="clipboard" item-start></ion-icon>\n  <ion-label class="reservationItems">Motivo</ion-label>\n  <ion-select [(ngModel)]="motive" cancelText="Cancelar" okText="Aceptar">\n    <div *ngFor=\'let m of reservationMotives\'>\n      <ion-option value={{m.name}}>{{m.name}}</ion-option>\n    </div>\n  </ion-select>\n</ion-item>\n\n\n<button ion-button block [disabled]="!isValid()" (click)="makeReservation()">Confirmar </button>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/reservation-form/reservation-form.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_reservation_reservation__["a" /* ReservationProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_reservation_reservation__["a" /* ReservationProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_order_order__["a" /* OrderProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_loader_loader__["a" /* LoaderProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__providers_reservation_motive_reservation_motive__["a" /* ReservationMotiveProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_reservation_motive_reservation_motive__["a" /* ReservationMotiveProvider */]) === "function" && _h || Object])
    ], ReservationFormComponent);
    return ReservationFormComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=reservation-form.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
function formatDate(dateObject) {
    var day = dateObject.getDate();
    var month = dateObject.getMonth() + 1;
    var year = dateObject.getFullYear();
    if (month < 10) {
        return year + "-0" + month + "-" + day;
    }
    else {
        return year + "-" + month + "-" + day;
    }
}
//# sourceMappingURL=format.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mercado_pago__ = __webpack_require__(475);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__mercado_pago__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercado_pago_provider__ = __webpack_require__(381);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mercado_pago_provider__["a"]; });


//# sourceMappingURL=mercado-pago-elements.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MercadoPagoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercado_pago_provider__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MercadoPagoComponent = /** @class */ (function () {
    function MercadoPagoComponent(mercadoPagoProvider, userProvider, viewController, loader, toaster, events) {
        this.mercadoPagoProvider = mercadoPagoProvider;
        this.userProvider = userProvider;
        this.viewController = viewController;
        this.loader = loader;
        this.toaster = toaster;
        this.events = events;
        this.data = {};
        this.image = null;
        this.image = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* CUSTOM_IMAGE */];
    }
    MercadoPagoComponent.prototype.ngAfterViewInit = function () {
        this.mercadoPagoProvider.initialize(this.publicKey);
        this.mercadoPagoProvider.setCardNumberElement(this.cardNumber);
        this.mercadoPagoProvider.setPayButtonElement(this.payButton);
        this.mercadoPagoProvider.setPayFormElement(this.payForm);
    };
    MercadoPagoComponent.prototype.submitForm = function () {
        var _this = this;
        this.mercadoPagoProvider.setEmail(this.userProvider.user.email);
        this.mercadoPagoProvider.setDocNumber(this.docNumber);
        this.mercadoPagoProvider.setData(this.data);
        var form = document.getElementById("payForm");
        this.loader.display('Estamos creando su pedido...');
        this.mercadoPagoProvider.doPay(form).then(function (mpId) {
            _this.events.publish('mp:created');
            _this.mpId = mpId;
            // this.viewController.dismiss(this.mpId);
            // this.orderProvider.sendMercadopagoID()
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cardNumber'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MercadoPagoComponent.prototype, "cardNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('payButton'),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "payButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('payForm'),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "payForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('docNumber'),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "docNumber", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "publicKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('mpId'),
        __metadata("design:type", Object)
    ], MercadoPagoComponent.prototype, "mpId", void 0);
    MercadoPagoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mercado-pago',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/mercado-pago/mercado-pago.html"*/'\n  <div class="center_screen">\n    <form action="" #payForm method="post" id="payForm" (ngSubmit)="submitForm()" name="pay">\n      <ion-item>\n        <ion-label>Total: $2536</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Número de tarjeta</ion-label>\n        <ion-input type="tel" #cardNumber maxlength="16"\n                (keyup)=\'mercadoPagoProvider.guessingPaymentMethod("change")\'\n                data-checkout="cardNumber" placeholder="*ingrese los 16 digitos de su tarjeta" >\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Código de seguridad</ion-label>\n        <ion-input type="tel" maxlength="3" id="securityCode" data-checkout="securityCode" placeholder="*ingrese los 3 digitos del dorso" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Mes de expiración</ion-label>\n        <ion-input type="tel" id="cardExpirationMonth" maxlength="2" data-checkout="cardExpirationMonth" placeholder="12" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Año de expiración</ion-label>\n        <ion-input type="number" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2019" ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Nombre completo</ion-label>\n        <ion-input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="*como figura en la tarjeta"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <label for="docType">Tipo de documento:</label>\n        <select id="docType" data-checkout="docType"></select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Número de documento</ion-label>\n        <ion-input type="tel" id="docNumber" #docNumber data-checkout="docNumber" placeholder="12345678"></ion-input>\n      </ion-item>\n\n      <input type="hidden" name="paymentMethodId" [(ngModel)]="mercadoPagoProvider.paymentMethodId">\n      <input type="hidden" name="token" [(ngModel)]="mercadoPagoProvider.token">\n\n      <button ion-button #payButton  type="submit" value="Pay!" block>PAGAR</button>\n    </form>\n\n  </div>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/mercado-pago/mercado-pago.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mercado_pago_provider__["a" /* MercadoPagoProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mercado_pago_provider__["a" /* MercadoPagoProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ViewController"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_loader_loader__["a" /* LoaderProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"]) === "function" && _g || Object])
    ], MercadoPagoComponent);
    return MercadoPagoComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=mercado-pago.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = /** @class */ (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "alt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PreloadImage.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImage.prototype, "src", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PreloadImage.prototype, "ratio", null);
    PreloadImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'preload-image',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/preload-image/preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/preload-image/preload-image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], PreloadImage);
    return PreloadImage;
}());

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_scroll_scroll__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollComponent = /** @class */ (function () {
    function ScrollComponent(scrollProvider) {
        this.scrollProvider = scrollProvider;
    }
    Object.defineProperty(ScrollComponent.prototype, "elements", {
        set: function (elements) {
            this.scrollProvider.elements = elements;
            this.scrollProvider.loadedElementsNumber = this.scrollProvider.PAGESIZE;
            this.scrollProvider.getElements();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("elements"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ScrollComponent.prototype, "elements", null);
    ScrollComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'scroll',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/scroll/scroll.html"*/'<ng-content></ng-content>\n\n<ion-infinite-scroll (ionInfinite)="scrollProvider.doInfinite($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/scroll/scroll.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_scroll_scroll__["a" /* ScrollProvider */]])
    ], ScrollComponent);
    return ScrollComponent;
}());

//# sourceMappingURL=scroll.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantScheduleIndicatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestaurantScheduleIndicatorComponent = /** @class */ (function () {
    function RestaurantScheduleIndicatorComponent() {
        this.status = "";
        this.openCloseMessage = "";
    }
    Object.defineProperty(RestaurantScheduleIndicatorComponent.prototype, "hours", {
        set: function (schedule) {
            if (schedule.length == 0) {
                this.openCloseMessage = "HOY CERRADO";
                this.status = "closedToday";
            }
            else {
                var openHours = schedule.filter(function (hours) {
                    var now = __WEBPACK_IMPORTED_MODULE_1_moment___default()();
                    var opensAt = __WEBPACK_IMPORTED_MODULE_1_moment___default()(hours.opening_hour, 'HH:mm:ss');
                    var closesAt = __WEBPACK_IMPORTED_MODULE_1_moment___default()(hours.closing_hour, 'HH:mm:ss');
                    return now.isBetween(opensAt, closesAt);
                });
                var isOpenNow = openHours.length > 0;
                if (isOpenNow) {
                    var closesAt = openHours[0].closing_hour;
                    this.openCloseMessage = "ABIERTO - CIERRA A LAS " + this.formatHour(closesAt);
                    this.status = "openedToday";
                }
                else {
                    var willOpen = schedule.filter(function (hours) {
                        var now = __WEBPACK_IMPORTED_MODULE_1_moment___default()();
                        var opensAt = __WEBPACK_IMPORTED_MODULE_1_moment___default()(hours.opening_hour, 'HH:mm:ss');
                        return now.isBefore(opensAt);
                    });
                    if (willOpen.length > 0) {
                        var opensAt = willOpen[0].opening_hour;
                        this.openCloseMessage = "ABRE HOY A LAS " + this.formatHour(opensAt);
                        this.status = "willOpenToday";
                    }
                    else {
                        this.openCloseMessage = "HOY CERRADO";
                        this.status = "closedToday";
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    RestaurantScheduleIndicatorComponent.prototype.formatHour = function (hour) {
        var hours = hour.split(':')[0];
        var minutes = hour.split(':')[1];
        return minutes != '00' ? hours + ":" + minutes : hours;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("hours"),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], RestaurantScheduleIndicatorComponent.prototype, "hours", null);
    RestaurantScheduleIndicatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'restaurant-schedule-indicator',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/restaurant-schedule-indicator/restaurant-schedule-indicator.html"*/'<!-- Generated template for the RestaurantScheduleIndicatorComponent component -->\n<div>\n  <span [ngClass]="status" class="schedule">{{openCloseMessage}}</span>\n</div>\n'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/components/restaurant-schedule-indicator/restaurant-schedule-indicator.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RestaurantScheduleIndicatorComponent);
    return RestaurantScheduleIndicatorComponent;
}());

//# sourceMappingURL=restaurant-schedule-indicator.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageProvider = /** @class */ (function () {
    function StorageProvider(nativeStorage) {
        this.nativeStorage = nativeStorage;
    }
    StorageProvider.prototype.storeUser = function (user) {
        this.nativeStorage.remove("user");
        return this.nativeStorage.setItem("user", user);
    };
    StorageProvider.prototype.removeUser = function () {
        return this.nativeStorage.remove("user");
    };
    StorageProvider.prototype.getUser = function () {
        return this.nativeStorage.getItem("user");
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlacePipe = /** @class */ (function () {
    function PlacePipe() {
    }
    PlacePipe.prototype.transform = function (value) {
        switch (value) {
            case "DEL": {
                return "Delivery";
            }
            case "LOC": {
                return "Take-away";
            }
            default: {
                return "Restaurant";
            }
        }
    };
    PlacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'place',
        })
    ], PlacePipe);
    return PlacePipe;
}());

//# sourceMappingURL=placeDiscount.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DiscountFormatPipe = /** @class */ (function () {
    function DiscountFormatPipe() {
    }
    DiscountFormatPipe.prototype.transform = function (value) {
        if (value) {
            return "( -" + value + "% )";
        }
        else {
            return "";
        }
    };
    DiscountFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'discountFormat',
        })
    ], DiscountFormatPipe);
    return DiscountFormatPipe;
}());

//# sourceMappingURL=discountFormat.js.map

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_location_location__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, menuCtrl, userProvider, loader, locationProvider, toastProvider, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.userProvider = userProvider;
        this.loader = loader;
        this.locationProvider = locationProvider;
        this.toastProvider = toastProvider;
        this.modal = modal;
        this.userRegister = {
            email: "",
            password: "",
            passwordConfirmation: "",
            firstName: "",
            lastName: ""
        };
        this.errors = {
            email: [],
            password: [],
            firstName: [],
            lastName: []
        };
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('email', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('password', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]),
            passwordConfirmation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('passwordConfirmation', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)]),
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('firstName', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('lastName', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)])
        });
        this.menuCtrl.swipeEnable(false);
    }
    RegisterPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */], { show: true });
        modal.present();
    };
    RegisterPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */], { show: true });
        modal.present();
    };
    RegisterPage.prototype.toLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.isValid()) {
            if (this.userRegister.password === this.userRegister.passwordConfirmation) {
                this.userRegister.email = this.userRegister.email;
                this.loader.display('Registrando');
                this.userProvider.register(this.userRegister).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    _this.loader.hide();
                }).catch(function (error) {
                    if (error.username && error.username.length > 0)
                        _this.errors.email.push("Este email ya se encuentra en uso");
                    _this.loader.hide();
                });
            }
            else
                this.toastProvider.show("Las contraseñas no coinciden");
        }
        else
            this.checkErrors();
    };
    RegisterPage.prototype.checkErrors = function () {
        this.checkPassword();
        this.checkEmail();
        this.checkFirstName();
    };
    RegisterPage.prototype.checkFirstName = function () {
        this.errors.firstName = [];
        if (this.field('firstName').invalid)
            this.addError("firstName", "El nombre es demasiado corto");
    };
    RegisterPage.prototype.checkLastName = function () {
        this.errors.lastName = [];
        if (this.field('lastName').invalid)
            this.addError("lastName", "El apellido es demasiado corto");
    };
    RegisterPage.prototype.checkPassword = function () {
        this.errors.password = [];
        if (this.field('password').invalid)
            this.addError("password", "La contraseña es demasiado corta");
        if (this.userRegister.password !== this.userRegister.passwordConfirmation)
            this.addError("password", "Las contraseñas no coinciden");
    };
    RegisterPage.prototype.checkEmail = function () {
        this.errors.email = [];
        if (this.field('email').invalid)
            this.addError("email", "El email ingresado no es válido");
    };
    RegisterPage.prototype.addError = function (key, msg) {
        this.errors[key].push(msg);
    };
    RegisterPage.prototype.field = function (fieldName) {
        return this.form.controls[fieldName];
    };
    RegisterPage.prototype.isValid = function () {
        return this.form.valid && this.userRegister.password === this.userRegister.passwordConfirmation;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/register/register.html"*/'<ion-header class="transparent_header">\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login_register main_bg" padding>\n  <div class="logo" text-center margin-bottom>\n    <img src="assets/img/icon.png">\n    <h3 no-margin>donde comemos</h3>\n    <p no-margin></p>\n  </div>\n  <div class="app_form" [formGroup]="form">\n    <div class="ionPWA">\n      <ion-list>\n\n        <ion-item [ngClass]="{\'error-field\': errors.email.length>0}" no-lines>\n          <ion-icon color="dark" name="ios-mail-outline" item-start></ion-icon>\n          <ion-input (blur)="checkEmail()" type="email" placeholder="Email" [(ngModel)]="userRegister.email"\n            formControlName="email"></ion-input>\n        </ion-item>\n        <ion-list>\n          <ion-label *ngFor="let error of errors.email" class="error-message">{{error}}</ion-label>\n        </ion-list>\n\n        <ion-item [ngClass]="{\'error-field\': errors.password.length>0}" no-lines>\n          <ion-icon color="dark" name="ios-lock-outline" item-start></ion-icon>\n          <ion-input (blur)="checkPassword()" type="password" placeholder="Contraseña"\n            [(ngModel)]="userRegister.password" formControlName="password"></ion-input>\n        </ion-item>\n\n        <ion-item [ngClass]="{\'error-field\': errors.password.length>0}" no-lines>\n          <ion-icon color="dark" name="ios-lock-outline" item-start></ion-icon>\n          <ion-input (blur)="checkPassword()" type="password" placeholder="Repetir contraseña"\n            [(ngModel)]="userRegister.passwordConfirmation" formControlName="passwordConfirmation"></ion-input>\n        </ion-item>\n        <ion-list>\n          <ion-label *ngFor="let error of errors.password" class="error-message">{{error}}</ion-label>\n        </ion-list>\n\n        <ion-item no-lines>\n          <ion-icon color="dark" name="person" item-start></ion-icon>\n          <ion-input type="text" placeholder="Nombre" [(ngModel)]="userRegister.firstName" formControlName="firstName">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-lines>\n          <ion-icon color="dark" name="people" item-start></ion-icon>\n          <ion-input type="text" placeholder="Apellido" [(ngModel)]="userRegister.lastName" formControlName="lastName">\n          </ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <button [disabled]="!isValid()" (click)="register()" ion-button block>Registrarme</button>\n\n      <h5 style="color: white; text-align: center;">¿Ya tienes cuenta? <a (click)="toLogin()"> Inicia sesión </a></h5>\n\n      <h5 style="color: white;">Creandote una cuenta aceptas los <a (click)="showTermsModal()">términos y condiciones</a> y <a (click)="showPrivacyModal()">políticas de privacidad</a> del sitio</h5>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restaurant_restaurant__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_location_location__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_menu_navigation_menu_navigation__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, modalCtrl, restaurantProvider, alertCtrl, locationProvider, userProvider, menuNavigationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.restaurantProvider = restaurantProvider;
        this.alertCtrl = alertCtrl;
        this.locationProvider = locationProvider;
        this.userProvider = userProvider;
        this.menuNavigationProvider = menuNavigationProvider;
        this.locations = [];
        this.restaurants = [];
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__().format("YYYY/MM/DD");
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.menuNavigationProvider.loadSidemenu();
        this.restaurantProvider.get().then(function (restaurants) {
            var currentLocation = _this.locationProvider.getCurrentLocation();
            if (!currentLocation) {
                _this.locationProvider.get().then(function () {
                    _this.locations = _this.locationProvider.locations;
                    if (_this.locations.length > 0)
                        _this.presentAlert();
                });
            }
            else {
                _this.filterRestaurants(currentLocation);
            }
        });
    };
    HomePage.prototype.getType = function () {
        return "restaurant";
    };
    HomePage.prototype.categoryModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], {}, { cssClass: 'category-modal' });
        modal.present();
    };
    HomePage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Cuál es tu ubicación?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (selectedRestaurantId) {
                        var location = _this.locations.find(function (location) { return location.id == selectedRestaurantId; });
                        _this.locationProvider.storeCurrentLocation(location);
                        _this.filterRestaurants(location);
                    }
                }
            ]
        });
        var locations = this.locations.slice(); //copio la lista por valor y no por referencia
        var firstLocation = locations.pop();
        //agrego el primer elemento seleccionado por default
        alert.addInput({ type: 'radio', label: firstLocation.name, value: firstLocation.id, checked: true });
        locations.forEach(function (location) {
            alert.addInput({ type: 'radio', label: location.name, value: location.id });
        });
        alert.present();
    };
    HomePage.prototype.filterRestaurants = function (location) {
        this.restaurants = this.restaurantProvider.getRestaurantsByLocation(location.id); //Obtengo los resaurantes por el id de la ciudad
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Restaurantes</ion-title>\n    <ion-buttons end>\n      <!--\n      <button ion-button icon-only (click)="searchInput=!searchInput">\n        <ion-icon name="search"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar *ngIf="searchInput">\n    <ion-searchbar placeholder=\'\' no-margin></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div class="responsive-home">\n      <restaurant *ngFor="let restaurant of restaurants" [restaurant]="restaurant"></restaurant>\n    </div>\n      <!--\n  <ion-fab bottom right>\n    <button (click)="categoryModal()" ion-fab>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-fab>\n-->\n\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_restaurant_restaurant__["a" /* RestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_menu_navigation_menu_navigation__["a" /* MenuNavigationProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestaurantProvider = /** @class */ (function (_super) {
    __extends(RestaurantProvider, _super);
    function RestaurantProvider(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.restaurants = [];
        return _this;
    }
    RestaurantProvider.prototype.getURL = function (restaurantId) {
        return "restaurants/";
    };
    RestaurantProvider.prototype.process_get = function (response) {
        this.restaurants = response;
    };
    RestaurantProvider.prototype.getRestaurantsByLocation = function (idLocation) {
        return this.restaurants.filter(function (restaurant) {
            return restaurant.influence_range == idLocation;
        });
    };
    RestaurantProvider.prototype.getRestaurantById = function (restaurantId) {
        return this.restaurants.filter(function (restaurant) {
            return restaurant.id == restaurantId;
        });
    };
    RestaurantProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], RestaurantProvider);
    return RestaurantProvider;
}(__WEBPACK_IMPORTED_MODULE_0__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverPasswordProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecoverPasswordProvider = /** @class */ (function (_super) {
    __extends(RecoverPasswordProvider, _super);
    function RecoverPasswordProvider(http, userProvider) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        return _this;
    }
    RecoverPasswordProvider.prototype.recoverPassword = function (email) {
        var _this = this;
        var body = { email: email };
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config_config__["a" /* API_URL */] + "recover-password/mail/", body).subscribe(function (response) {
                resolve(JSON.parse(response._body));
            }, function (errorResponse) {
                reject();
            });
        });
    };
    RecoverPasswordProvider.prototype.checkCodeProvider = function (code, email) {
        var _this = this;
        var body = { code: code, email: email };
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config_config__["a" /* API_URL */] + "recover-password/checkCode/", body).subscribe(function (response) {
                _this.userProvider.user.token = JSON.parse(response._body).token;
                resolve();
            }, function (errorResponse) {
                reject();
            });
        });
    };
    RecoverPasswordProvider.prototype.set_password = function (email, new_password) {
        var _this = this;
        var body = { new_password: new_password, email: email };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config_config__["a" /* API_URL */] + "recover-password/set_password/", body, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve();
            }, function (errorResponse) {
                reject();
            });
        });
    };
    RecoverPasswordProvider.prototype.change_password = function (old_password, new_password) {
        var _this = this;
        var body = { old_password: old_password, new_password: new_password };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config_config__["a" /* API_URL */] + "recover-password/change_password/", body, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve();
            }, function (errorResponse) {
                reject(JSON.parse(errorResponse._body));
            });
        });
    };
    RecoverPasswordProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserProvider */]])
    ], RecoverPasswordProvider);
    return RecoverPasswordProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=recover-password.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteRestaurantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_base__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FavoriteRestaurantProvider = /** @class */ (function (_super) {
    __extends(FavoriteRestaurantProvider, _super);
    function FavoriteRestaurantProvider(http, userProvider) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.userProvider = userProvider;
        _this.favoritesRestaurants = [];
        _this.restaurants = [];
        return _this;
    }
    FavoriteRestaurantProvider.prototype.getURL = function () {
        return "favorite-restaurants/by_user/";
    };
    FavoriteRestaurantProvider.prototype.process_get = function (response) {
        this.favoritesRestaurants = response;
    };
    FavoriteRestaurantProvider.prototype.addHeaders = function (headers) {
        headers.append("Authorization", "Token " + this.userProvider.user.token);
    };
    FavoriteRestaurantProvider.prototype.addFavorite = function (restaurantId) {
        var _this = this;
        var body = this.mapFavorite(restaurantId);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_1__app_config_config__["a" /* API_URL */] + "favorite-restaurants/", body, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(JSON.parse(response._body));
            }, function (errorResponse) {
                reject();
            });
        });
    };
    FavoriteRestaurantProvider.prototype.deleteFavorite = function (restaurantFavoriteId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_1__app_config_config__["a" /* API_URL */] + "favorite-restaurants/" + restaurantFavoriteId + "/", new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(response);
            }, function (errorResponse) {
                reject();
            });
        });
    };
    FavoriteRestaurantProvider.prototype.restaurantsFavorites = function (clientId, restaurantId) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.userProvider.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_1__app_config_config__["a" /* API_URL */] + "favorite-restaurants/?client=" + clientId + "&restaurant=" + restaurantId, new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                _this.restaurants = JSON.parse(response._body);
                resolve(_this.restaurants);
            }, function (err) {
                reject(err);
            });
        });
    };
    FavoriteRestaurantProvider.prototype.mapFavorite = function (restaurantId) {
        return {
            client: this.userProvider.user.id,
            restaurant_id: restaurantId
        };
    };
    FavoriteRestaurantProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* UserProvider */]])
    ], FavoriteRestaurantProvider);
    return FavoriteRestaurantProvider;
}(__WEBPACK_IMPORTED_MODULE_2__base_base__["a" /* BaseProvider */]));

//# sourceMappingURL=favorite-restaurant.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_location_location__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_restaurant_restaurant__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_recover_password_recover_password__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__correct_code_correct_code__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toast_toast__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, menuCtrl, userProvider, locationProvider, restaurantProvider, loader, recoverPasswordProvider, toaster, errorHandlerProvider, viewController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.userProvider = userProvider;
        this.locationProvider = locationProvider;
        this.restaurantProvider = restaurantProvider;
        this.loader = loader;
        this.recoverPasswordProvider = recoverPasswordProvider;
        this.toaster = toaster;
        this.errorHandlerProvider = errorHandlerProvider;
        this.viewController = viewController;
        this.type = 'password';
        this.menuCtrl.swipeEnable(false);
        this.restaurant = navParams.get('restaurant');
    }
    LoginPage.prototype.loginAsGuestUser = function () {
        this.loader.display('Iniciando sesión como invitado...');
        this.userProvider.loginAsGuest();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        this.loader.hide();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.loader.display('Iniciando sesión');
        console.log(this.email, this.password);
        this.userProvider.login(this.email, this.password)
            .then(function () {
            if (_this.restaurant) {
                _this.viewController.dismiss();
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            _this.loader.hide();
        })
            .catch(function (errors) {
            _this.errorHandlerProvider.handleError('INVALID_CREDENTIALS');
            _this.loader.hide();
        });
    };
    LoginPage.prototype.forgotPasswordAlert = function () {
        var _this = this;
        var forgotpas = this.alertCtrl.create({
            title: 'Recuperar contraseña',
            message: "Ingresa tu email, te mandaremos un código para reestablecer tu contraseña",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        _this.recoverPass(data.email);
                    }
                },
            ]
        });
        forgotpas.present();
    };
    LoginPage.prototype.inputCodeAlert = function (mail) {
        var _this = this;
        var forgotpas = this.alertCtrl.create({
            title: 'Ingresa el código que recibiste',
            message: "Si el código es correcto podrás cambiar tu contraseña",
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Código de verificación'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Enviar',
                    handler: function (data) {
                        _this.checkCode(data.code, mail);
                    }
                }
            ]
        });
        forgotpas.present();
    };
    LoginPage.prototype.acceptedCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__correct_code_correct_code__["a" /* CorrectCodePage */]);
    };
    LoginPage.prototype.recoverPass = function (mail) {
        var _this = this;
        this.loader.display('Verificando email');
        this.recoverPasswordProvider.recoverPassword(mail).then(function () {
            _this.loader.hide();
            _this.inputCodeAlert(mail);
        }).catch(function () {
            _this.loader.hide();
            _this.toaster.show('email incorrecto, intentelo nuevamente');
        });
    };
    LoginPage.prototype.checkCode = function (code, mail) {
        var _this = this;
        this.loader.display('Verificando código');
        this.recoverPasswordProvider.checkCodeProvider(code, mail).then(function () {
            _this.loader.hide();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__correct_code_correct_code__["a" /* CorrectCodePage */], { mail: mail });
        }).catch(function () {
            _this.loader.hide();
            _this.toaster.show('código incorrecto, intentelo nuevamente');
        });
    };
    LoginPage.prototype.showPassword = function () {
        this.type = this.type == 'password' ? 'text' : 'password';
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/login/login.html"*/'<ion-header class="transparent_header">\n    <ion-navbar>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login_register main_bg" padding>\n    <div class="logo" text-center margin-bottom>\n        <img src="assets/img/icon.png">\n        <h3 no-margin>donde comemos</h3>\n        <p no-margin></p>\n    </div>\n\n    <div class="app_form">\n        <div class="ionPWA">\n            <ion-list>\n\n                <ion-item no-lines>\n                    <ion-icon color="dark" name="ios-mail-outline" item-start></ion-icon>\n                    <ion-input type="text" [(ngModel)]="email" placeholder="Email"></ion-input>\n                </ion-item>\n\n                <ion-item no-lines>\n                    <ion-icon color="dark" name="ios-lock-outline" item-start></ion-icon>\n                    <ion-input type="{{type}}" [(ngModel)]="password" placeholder="Contraseña"></ion-input>\n                    <button (click)="showPassword()" color="GrayColor" ion-button icon-only clear item-end>\n                        <ion-icon *ngIf="type===\'text\'" name="eye"></ion-icon>\n                        <ion-icon *ngIf="type===\'password\'" name="eye-off"></ion-icon>\n                    </button>\n                </ion-item>\n                <ion-label class="login-error" *ngFor="let error of errors">{{error}}</ion-label>\n            </ion-list>\n\n            <button \n                (click)="doLogin()" \n                style="color: white;"\n                ion-button block>\n                Iniciar sesión\n            </button>\n\n            <ion-row>\n                <ion-col width-50>\n                    <button \n                        class="for_psw no-wrap" \n                        (click)="forgotPasswordAlert()" \n                        ion-button block clear>\n                        ¿Olvidaste la contraseña?\n                    </button>\n                </ion-col>\n                <ion-col width-50>\n                    <button \n                        class="no-wrap"\n                        (click)="loginAsGuestUser()" \n                        ion-button block clear>\n                        Ingresar como invitado\n                    </button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    \n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_restaurant_restaurant__["a" /* RestaurantProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_recover_password_recover_password__["a" /* RecoverPasswordProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["ViewController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_toast__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(toastProvider) {
        this.toastProvider = toastProvider;
        this.errorDescriptions = {
            INCORRECT_OLD_PASSWORD: "La contraseña actual ingresada es incorrecta",
            INVALID_CREDENTIALS: "Usuario y/o contraseña inválidos",
            GUEST_USER: "Los invitados no pueden acceder a esta sección"
        };
    }
    ErrorHandlerProvider.prototype.handleError = function (errorCode) {
        this.toastProvider.show(this.errorDescriptions[errorCode], 3000);
    };
    ErrorHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toast_toast__["a" /* ToastProvider */]])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_score_category_item_score_category_item__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RatingPage = /** @class */ (function () {
    function RatingPage(navCtrl, navParams, scoreCategoryItemProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.scoreCategoryItemProvider = scoreCategoryItemProvider;
        this.userProvider = userProvider;
        this.ratings = [];
        this.ODRCategory = navParams.get('ODRCategory');
        this.categoryRank = navParams.get('categoryRank');
        this.typeRank = navParams.get('typeRank');
        this.restaurantId = navParams.get('restaurantId');
        this.onQualified = navParams.get('onQualified');
        this.addCategory = this.addCategory.bind(this);
    }
    RatingPage.prototype.ionViewWillEnter = function () {
        this.getScores();
    };
    RatingPage.prototype.getScores = function () {
        var _this = this;
        this.scoreCategoryItemProvider.get().then(function (scores) {
            _this.scores = scores.filter(function (score) {
                return score.item == _this.categoryRank;
            });
        });
    };
    RatingPage.prototype.addCategory = function (category, rating) {
        this.ratings = this.ratings.filter(function (x) { return x.score_category !== category.id; });
        this.rankTypeCategory(this.typeRank, category, rating);
    };
    RatingPage.prototype.rankTypeCategory = function (typeCategory, category, rating) {
        var ratingG = {
            restaurant: this.restaurantId,
            related_id: this.ODRCategory,
            related_type: typeCategory,
            score_category: category.id,
            score: rating,
        };
        ratingG[typeCategory] = this.ODRCategory;
        this.ratings.push(ratingG);
    };
    RatingPage.prototype.rate = function () {
        this.scoreCategoryItemProvider.rate(this.ratings, this.typeRank);
        //this.onQualified()
        this.navCtrl.pop();
    };
    RatingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-rating',template:/*ion-inline-start:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/rating/rating.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>rating</ion-title>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngFor="let res of this.scores">\n    <category-rating [category]="res.category" [addCategory]="addCategory"> </category-rating>\n  </div>\n\n  <div class="center" *ngIf=\'this.scores?.length > 0\'>\n    <button color="primary" ion-button center default (click)="rate()">Calificar</button>\n  </div>\n  <div class="no_results" *ngIf=\'this.scores?.length == 0\' text-center padding>Actualmente no hay categorias para\n    calificar\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/tornikete/ionic/PY_ORBIT/donde-comemos-client-app/donde-comemos-fe/src/pages/rating/rating.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__providers_score_category_item_score_category_item__["a" /* ScoreCategoryItemProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_user_user__["a" /* UserProvider */]])
    ], RatingPage);
    return RatingPage;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_config_config__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var UserProvider = /** @class */ (function () {
    function UserProvider(http, fcm, storageProvider, platform) {
        this.http = http;
        this.fcm = fcm;
        this.storageProvider = storageProvider;
        this.platform = platform;
        this.isShowingPopUp = false;
        this.setUpUser();
    }
    UserProvider.prototype.setUpUser = function () {
        this.user = {
            id: 0,
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            token: "",
            guest: false
        };
    };
    UserProvider.prototype.loginAsGuest = function () {
        this.setUpUser();
        this.user.first_name = "Invitado";
        this.user.guest = true;
    };
    UserProvider.prototype.isGuestUser = function () {
        return this.user.guest;
    };
    UserProvider.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "login/", { username: username, password: password }).subscribe(function (_a) {
                var _body = _a._body;
                _this.user.token = JSON.parse(_body).token;
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', "Token " + _this.user.token);
                _this.http.get(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "users/get_from_token/", new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (_a) {
                    var _body = _a._body;
                    var token = _this.user.token;
                    _this.user = JSON.parse(_body);
                    _this.user.token = token;
                    _this.user.guest = false;
                    //luego de loguear, pido el token y lo envio al back-end
                    _this.fcm.getToken().then(function (token) {
                        _this.registerFcmToken(token, _this.user, headers);
                    });
                    _this.storageProvider.storeUser(__assign({}, _this.user, { password: password }));
                    resolve(_this.user);
                }, function (_a) {
                    var _body = _a._body;
                    reject(_body);
                });
            }, function (_a) {
                var _body = _a._body;
                reject(JSON.parse(_body).non_field_errors);
            });
        });
    };
    UserProvider.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageProvider.removeUser()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.register = function (form) {
        var _this = this;
        var body = {
            username: form.email,
            password: form.password,
            email: form.email,
            first_name: form.firstName,
            last_name: form.lastName
        };
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "users/", body).subscribe(function (response) {
                resolve(response);
            }, function (errorResponse) {
                reject(JSON.parse(errorResponse._body));
            });
        });
    };
    UserProvider.prototype.registerFcmToken = function (token, user, headers) {
        var _this = this;
        var body = {
            registration_id: token,
            type: 'android',
        };
        if (this.platform.is('ios')) {
            body.type = 'ios';
        }
        return new Promise(function (resolve, reject) {
            _this.http.post(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "fcm/", body, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers })).subscribe(function (response) {
                resolve(response);
            }, function (errorResponse) {
                reject(JSON.parse(errorResponse._body));
            });
        });
    };
    UserProvider.prototype.saveChanges = function (first_name, last_name) {
        var _this = this;
        var body = {
            first_name: first_name,
            last_name: last_name
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Token " + this.user.token);
        return new Promise(function (resolve, reject) {
            _this.http.put(__WEBPACK_IMPORTED_MODULE_0__app_config_config__["a" /* API_URL */] + "users/" + _this.user.id + "/change/", body, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers }))
                .subscribe(function (response) { return __awaiter(_this, void 0, void 0, function () {
                var returnedUser;
                return __generator(this, function (_a) {
                    returnedUser = JSON.parse(response._body);
                    this.user = __assign({}, returnedUser, { token: this.user.token });
                    resolve(response);
                    return [2 /*return*/];
                });
            }); }, function (errorResponse) {
                reject(JSON.parse(errorResponse._body));
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_fcm__["a" /* FCM */],
            __WEBPACK_IMPORTED_MODULE_4__storage_storage__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["Platform"]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[383]);
//# sourceMappingURL=main.js.map