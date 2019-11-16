(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header></app-header>\n    <div class=\"main-wrapper\">\n        <div class=\"bread\">\n            <span>\n                <img [src]=\"bread\"> MEN</span>\n        </div>\n        <router-outlet></router-outlet>\n    </div>\n\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cl strip\">\n    <img class=\"d-show\" [src]=\"strip\">\n    <img class=\"d-show-12\" [src]=\"stripSmall\">\n</div>\n<footer>\n    <div class=\"row\">\n\n    </div>\n    <div class=\"row\">\n        <div class=\"cl c-flex c-space-between\">\n            <div class=\"c-flex c-space-between w100 footerMenu\">\n                <div class=\"listing\">\n                    <h4>Men</h4>\n                    <ul>\n                        <li *ngFor=\"let list of footerListMen\">{{list}}</li>\n                    </ul>\n                </div>\n                <div class=\"listing\">\n                    <h4>Women</h4>\n                    <ul>\n                        <li *ngFor=\"let list of footerListMen\">{{list}}</li>\n                    </ul>\n                </div>\n                <div class=\"listing\">\n                    <h4>SUPPORT</h4>\n                    <ul>\n                        <li *ngFor=\"let list of support\">{{list}}</li>\n                    </ul>\n                </div>\n                <div class=\"listing\">\n                    <h4>About</h4>\n                    <ul>\n                        <li *ngFor=\"let list of about\">{{list}}</li>\n                    </ul>\n                </div>\n                <div class=\"listing\">\n                    <h4>PopUp Stores</h4>\n                    <ul>\n                        <li *ngFor=\"let list of stores\">{{list}}</li>\n                    </ul>\n                    <ul class=\"straight d-show\">\n                        <li class=\"c-flex border-class\">\n                            <input class=\"search\" placeholder=\"Find your sneakers here\">\n                            <img class=\"searchIcon\" [src]=\"search\">\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"listing\">\n                    <h4>NewsLetter</h4>\n                    <ul class=\"straight\">\n                        <li>\n                            <input placeholder=\"Enter email\">\n                        </li>\n                        <li>\n                            <div>JOIN US</div>\n                        </li>\n                    </ul>\n                    <ul class=\"straight\">\n                        <li class=\"log\">\n                            <img [src]=\"fb\">\n                        </li>\n                        <li class=\"log\">\n                            <img [src]=\"insta\">\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"cl\">\n            <span class=\"copyright\">\n                Copyright © 2019 CARIUMA. All Rights Reserved. Terms of Use | Privacy Policy\n            </span>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header-label\">\n        <p>FREE US SHIPPING AND RETURN</p>\n    </div>\n    <div class=\"main-header\">\n        <div class=\"c-flex menu c-space-between c-align-center\">\n            <div class=\"c-flex w20-sm\">\n                <div class=\"menu-text d-show\">MEN</div>\n                <div class=\"menu-text d-show\">WOMEN</div>\n                <div class=\"d-show-12\"><img [src]=\"hamburger\"></div>\n            </div>\n            <div class=\"logo\">\n                <img [src]=\"logo\">\n            </div>\n            <div class=\"side-menu c-flex c-align-center w20-sm\">\n                <div class=\"menu-text d-show\">ABOUT</div>\n                <div class=\"menu-img\">\n                    <img [src]=\"user\">\n                </div>\n                <div>\n                    <img [src]=\"bag\">\n                </div>\n            </div>\n        </div>\n    </div>\n</header>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [{
        path: 'Annatta',
        loadChildren: function () { return __webpack_require__.e(/*! import() | module-product-detail-product-detail-module */ "module-product-detail-product-detail-module").then(__webpack_require__.bind(null, /*! ./module/product-detail/product-detail.module */ "./src/app/module/product-detail/product-detail.module.ts")).then(function (m) { return m.ProductDetailModule; }); }
        // component: ProductDetailComponent
    }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'Annatta'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1440px;\n  margin: 0px auto;\n}\n\n.main-wrapper .bread {\n  margin-left: 50px;\n  margin-top: 25px;\n  font-size: 10px;\n  color: #4A4A4A;\n  letter-spacing: 0;\n}\n\n@media only screen and (min-width: 0px) and (max-device-width : 576px) {\n  .main-wrapper .bread {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudGhvc2hrdW1hci9Eb2N1bWVudHMvUHJvamVjdHMvT3duIFByb2plY3RzL0FubmF0dGEvYW5uYXR0YS9zcmMvYXNzZXRzL3Njc3MvbWVkaWEtcXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRFI7O0FDU1E7RUZGQTtJQUNJLGlCQUFBO0VDSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtZWRpYS1xdWVyeVwiO1xuLmNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm1haW4td3JhcHBlcntcbiAgICAvLyBwYWRkaW5nOiAwcHggMjVweDtcbiAgICAuYnJlYWR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICB9XG59XG5AaW5jbHVkZSByZXNwb25kLXRvKHhzKSB7XG4gICAgLm1haW4td3JhcHBlcntcbiAgICAgICAgLy8gcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIC5icmVhZHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfSAgIFxufSIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cblxuLm1haW4td3JhcHBlciAuYnJlYWQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NzZweCkge1xuICAubWFpbi13cmFwcGVyIC5icmVhZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iLCJcbi8vIEV4dHJhIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCBsZXNzKVxuJHhzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU3NnB4KVwiO1xuXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXG4kc206IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweClcIjtcblxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbiRtZDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDk5MnB4KVwiO1xuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcblxuJGxnOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTIwMHB4KVwiO1xuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcbiR4bDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVwiO1xuXG5cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYT09eHMge1xuICAgICAgICBAbWVkaWEgI3skeHN9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PXNtIHtcbiAgICAgICAgQG1lZGlhICN7JHNtfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaWYgJG1lZGlhPT1tZCB7XG4gICAgICAgIEBtZWRpYSAjeyRtZH0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmICRtZWRpYT09bGcge1xuICAgICAgICBAbWVkaWEgI3skbGd9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PXhsIHtcbiAgICAgICAgQG1lZGlhICN7JHhsfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.bread = __webpack_require__(/*! ./../assets/images/bread.svg */ "./src/assets/images/bread.svg");
        this.title = 'annatta';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #000000;\n  padding: 0px 72px;\n  padding-top: 65px;\n}\nfooter .footerMenu {\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\nfooter .footerMenu .listing h4 {\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  line-height: 18px;\n  margin-bottom: 11px;\n  text-transform: uppercase;\n}\nfooter .footerMenu .listing ul {\n  list-style: none;\n  margin-bottom: 28px;\n}\nfooter .footerMenu .listing ul.straight {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n}\nfooter .footerMenu .listing ul.straight li {\n  align-self: flex-end;\n  font-size: 10px;\n  color: #FFFFFF;\n  letter-spacing: 2px;\n  text-align: center;\n  line-height: 15px;\n  display: inline-block;\n}\nfooter .footerMenu .listing ul.straight li img.searchIcon {\n  border: 0px;\n  padding: 0px;\n  vertical-align: bottom;\n  margin-bottom: 6px;\n}\nfooter .footerMenu .listing ul.straight li div {\n  padding: 15px;\n  border: 3px solid #FFFFFF;\n}\nfooter .footerMenu .listing ul.straight li input {\n  margin-right: 8px;\n  background-color: #000000;\n  border: 0px;\n  border-bottom: 1px solid #FFFFFF;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0.25px;\n  line-height: 24px;\n}\nfooter .footerMenu .listing ul.straight li input.search {\n  font-size: 10px;\n  color: #F1F1F1;\n  letter-spacing: 0;\n  border: 0px;\n  border-bottom: 0px;\n  padding: 8px 0px;\n}\nfooter .footerMenu .listing ul.straight li.log {\n  padding-top: 36px;\n  margin-right: 30px;\n}\nfooter .footerMenu .listing ul.straight li.border-class {\n  border-bottom: 1px solid white;\n}\nfooter .footerMenu .listing ul li {\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0.25px;\n  line-height: 24px;\n}\nfooter .copyright {\n  width: 100%;\n  opacity: 0.5;\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 24px;\n  margin: 16px 0px;\n  position: relative;\n}\nfooter span.copyright::before {\n  content: \" \";\n  border-top: 1px solid #7d7d7d;\n  position: absolute;\n  top: -16px;\n  left: 0px;\n  height: 1px;\n  width: 100%;\n}\n.strip {\n  max-height: 58px;\n  margin-top: 80px;\n}\n.strip img {\n  width: 100%;\n}\n@media only screen and (min-width: 0px) and (max-device-width : 576px) {\n  footer {\n    padding: 0px 40px;\n    padding-top: 55px;\n  }\n  footer .footerMenu .listing {\n    -webkit-box-flex: 0;\n            flex: 0 50%;\n  }\n  footer .footerMenu .listing ul {\n    margin-bottom: 38px;\n  }\n  footer .footerMenu .listing:last-child {\n    -webkit-box-ordinal-group: 0;\n            order: -1;\n    -webkit-box-flex: 0;\n            flex: 0 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hc3NldHMvc2Nzcy9tZWRpYS1xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURDSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ2hCO0FEQ1k7RUFpREksZ0JBQUE7RUFDQSxtQkFBQTtBQy9DaEI7QURGZ0I7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtVQUFBLHFCQUFBO0FDSXBCO0FESG9CO0VBQ0ksb0JBQUE7RUFPQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDRHhCO0FEVndCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDWTVCO0FESndCO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FDTTVCO0FESndCO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ001QjtBREw0QjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ09oQztBREp3QjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNNNUI7QURKd0I7RUFDSSw4QkFBQTtBQ001QjtBREFnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0VwQjtBREdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdJO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDRFI7QURLQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBREdJO0VBQ0ksV0FBQTtBQ0RSO0FDbEZRO0VGd0ZKO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQ0ZOO0VESVU7SUFDSSxtQkFBQTtZQUFBLFdBQUE7RUNGZDtFREdjO0lBQ0ksbUJBQUE7RUNEbEI7RURHYztJQUNJLDRCQUFBO1lBQUEsU0FBQTtJQUNBLG1CQUFBO1lBQUEsWUFBQTtFQ0RsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtZWRpYS1xdWVyeVwiO1xuZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICAgIHBhZGRpbmc6IDBweCA3MnB4O1xuICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgIC5mb290ZXJNZW51IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAubGlzdGluZyB7XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICYuc3RyYWlnaHQge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNlYXJjaEljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnNlYXJjaCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGMUYxRjE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICYubG9nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmJvcmRlci1jbGFzc3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBzcGFuLmNvcHlyaWdodDo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzdkN2Q3ZDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC0xNnB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5zdHJpcCB7XG4gICAgbWF4LWhlaWdodDogNThweDtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuQGluY2x1ZGUgcmVzcG9uZC10byh4cykge1xuICAgIGZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA0MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNTVweDtcbiAgICAgICAgLmZvb3Rlck1lbnUge1xuICAgICAgICAgICAgLmxpc3Rpbmcge1xuICAgICAgICAgICAgICAgIGZsZXg6IDAgNTAlO1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIHBhZGRpbmc6IDBweCA3MnB4O1xuICBwYWRkaW5nLXRvcDogNjVweDtcbn1cbmZvb3RlciAuZm9vdGVyTWVudSB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbmZvb3RlciAuZm9vdGVyTWVudSAubGlzdGluZyBoNCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbn1cbmZvb3RlciAuZm9vdGVyTWVudSAubGlzdGluZyB1bC5zdHJhaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbmZvb3RlciAuZm9vdGVyTWVudSAubGlzdGluZyB1bC5zdHJhaWdodCBsaSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5mb290ZXIgLmZvb3Rlck1lbnUgLmxpc3RpbmcgdWwuc3RyYWlnaHQgbGkgaW1nLnNlYXJjaEljb24ge1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5mb290ZXIgLmZvb3Rlck1lbnUgLmxpc3RpbmcgdWwuc3RyYWlnaHQgbGkgZGl2IHtcbiAgcGFkZGluZzogMTVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGRkZGRjtcbn1cbmZvb3RlciAuZm9vdGVyTWVudSAubGlzdGluZyB1bC5zdHJhaWdodCBsaSBpbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nIHVsLnN0cmFpZ2h0IGxpIGlucHV0LnNlYXJjaCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNGMUYxRjE7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBib3JkZXI6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiA4cHggMHB4O1xufVxuZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nIHVsLnN0cmFpZ2h0IGxpLmxvZyB7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5mb290ZXIgLmZvb3Rlck1lbnUgLmxpc3RpbmcgdWwuc3RyYWlnaHQgbGkuYm9yZGVyLWNsYXNzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nIHVsIGxpIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5mb290ZXIgLmNvcHlyaWdodCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDE2cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5mb290ZXIgc3Bhbi5jb3B5cmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzdkN2Q3ZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICBsZWZ0OiAwcHg7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0cmlwIHtcbiAgbWF4LWhlaWdodDogNThweDtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cbi5zdHJpcCBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU3NnB4KSB7XG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogMHB4IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDU1cHg7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nIHtcbiAgICBmbGV4OiAwIDUwJTtcbiAgfVxuICBmb290ZXIgLmZvb3Rlck1lbnUgLmxpc3RpbmcgdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gIH1cbiAgZm9vdGVyIC5mb290ZXJNZW51IC5saXN0aW5nOmxhc3QtY2hpbGQge1xuICAgIG9yZGVyOiAtMTtcbiAgICBmbGV4OiAwIDEwMCU7XG4gIH1cbn0iLCJcbi8vIEV4dHJhIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCBsZXNzKVxuJHhzOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDU3NnB4KVwiO1xuXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXG4kc206IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA3NjhweClcIjtcblxuLy8gTWVkaXVtIGRldmljZXMgKHRhYmxldHMsIDc2OHB4IGFuZCB1cClcbiRtZDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDk5MnB4KVwiO1xuLy8gTGFyZ2UgZGV2aWNlcyAoZGVza3RvcHMsIDk5MnB4IGFuZCB1cClcblxuJGxnOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogMTIwMHB4KVwiO1xuXG4vLyBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cClcbiR4bDogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVwiO1xuXG5cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYT09eHMge1xuICAgICAgICBAbWVkaWEgI3skeHN9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PXNtIHtcbiAgICAgICAgQG1lZGlhICN7JHNtfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaWYgJG1lZGlhPT1tZCB7XG4gICAgICAgIEBtZWRpYSAjeyRtZH0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmICRtZWRpYT09bGcge1xuICAgICAgICBAbWVkaWEgI3skbGd9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PXhsIHtcbiAgICAgICAgQG1lZGlhICN7JHhsfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.strip = __webpack_require__(/*! ./../../assets/images/features.svg */ "./src/assets/images/features.svg");
        this.stripSmall = __webpack_require__(/*! ./../../assets/images/features.svg */ "./src/assets/images/features.svg");
        this.footerListMen = ['OCA Low', 'OCA High', 'CATIBA Low', 'CATIBA high'];
        this.support = ['FAQ', 'Returns', 'Live Chat'];
        this.about = ['Mission', 'Vision', 'Future'];
        this.stores = ['Find Near You', 'Register'];
        this.fb = __webpack_require__(/*! ./../../assets/images/facebook-logo.svg */ "./src/assets/images/facebook-logo.svg");
        this.insta = __webpack_require__(/*! ./../../assets/images/instagram.svg */ "./src/assets/images/instagram.svg");
        this.search = __webpack_require__(/*! ./../../assets/images/search.svg */ "./src/assets/images/search.svg");
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .header-label {\n  background: #000000;\n  min-height: 35px;\n}\nheader .header-label p {\n  font-size: 12px;\n  color: #FFFFFF;\n  letter-spacing: 2px;\n  text-align: center;\n  line-height: 15px;\n  padding: 10px 0px;\n}\nheader .main-header {\n  border-bottom: 1px solid #f1f1f1;\n}\nheader .main-header .menu-text {\n  margin-right: 40px;\n}\nheader .main-header .menu-img {\n  margin-right: 20px;\n}\nheader .main-header .menu {\n  margin: 0px 50px;\n  min-height: 90px;\n}\nheader .main-header .menu .menu-text {\n  font-size: 12px;\n  color: #000000;\n  letter-spacing: 2px;\n  line-height: 15px;\n  font-weight: 700;\n}\nheader .main-header .side-menu .menu-text {\n  font-size: 12px;\n  color: #000000;\n  letter-spacing: 2px;\n  line-height: 15px;\n  font-weight: 700;\n}\n@media only screen and (min-width: 0px) and (max-device-width : 576px) {\n  header .main-header .menu {\n    margin: 0px 20px;\n  }\n  header .main-header .menu .w20-sm {\n    width: 22%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hc3NldHMvc2Nzcy9tZWRpYS1xdWVyeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0RSO0FERVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQVo7QURHSTtFQUNJLGdDQUFBO0FDRFI7QURFUTtFQUNJLGtCQUFBO0FDQVo7QURFUTtFQUNJLGtCQUFBO0FDQVo7QURFUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBWjtBRENZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7QURHWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRGhCO0FDbEJRO0VGNEJJO0lBQ0ksZ0JBQUE7RUNOZDtFRE9jO0lBQ0ksVUFBQTtFQ0xsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtZWRpYS1xdWVyeVwiO1xuaGVhZGVyIHtcbiAgICAuaGVhZGVyLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgbWluLWhlaWdodDogMzVweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI0MSwgMjQxLCAyNDEpO1xuICAgICAgICAubWVudS10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweFxuICAgICAgICB9XG4gICAgICAgIC5tZW51LWltZyB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbiAgICAgICAgfVxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCA1MHB4O1xuICAgICAgICAgICAgbWluLWhlaWdodDogOTBweDtcbiAgICAgICAgICAgIC5tZW51LXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2lkZS1tZW51IHtcbiAgICAgICAgICAgIC5tZW51LXRleHQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGluY2x1ZGUgcmVzcG9uZC10byh4cykge1xuICAgIGhlYWRlciB7XG4gICAgICAgIC5tYWluLWhlYWRlciB7XG4gICAgICAgICAgICAubWVudSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMjBweDtcbiAgICAgICAgICAgICAgICAudzIwLXNte1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoyMiU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImhlYWRlciAuaGVhZGVyLWxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgbWluLWhlaWdodDogMzVweDtcbn1cbmhlYWRlciAuaGVhZGVyLWxhYmVsIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbmhlYWRlciAubWFpbi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMTtcbn1cbmhlYWRlciAubWFpbi1oZWFkZXIgLm1lbnUtdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbmhlYWRlciAubWFpbi1oZWFkZXIgLm1lbnUtaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuaGVhZGVyIC5tYWluLWhlYWRlciAubWVudSB7XG4gIG1hcmdpbjogMHB4IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDkwcHg7XG59XG5oZWFkZXIgLm1haW4taGVhZGVyIC5tZW51IC5tZW51LXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmhlYWRlciAubWFpbi1oZWFkZXIgLnNpZGUtbWVudSAubWVudS10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NzZweCkge1xuICBoZWFkZXIgLm1haW4taGVhZGVyIC5tZW51IHtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICB9XG4gIGhlYWRlciAubWFpbi1oZWFkZXIgLm1lbnUgLncyMC1zbSB7XG4gICAgd2lkdGg6IDIyJTtcbiAgfVxufSIsIlxuLy8gRXh0cmEgU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIGxlc3MpXG4keHM6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNTc2cHgpXCI7XG5cbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcbiRzbTogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDc2OHB4KVwiO1xuXG4vLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKVxuJG1kOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogOTkycHgpXCI7XG4vLyBMYXJnZSBkZXZpY2VzIChkZXNrdG9wcywgOTkycHggYW5kIHVwKVxuXG4kbGc6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiAxMjAwcHgpXCI7XG5cbi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKVxuJHhsOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpXCI7XG5cblxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhPT14cyB7XG4gICAgICAgIEBtZWRpYSAjeyR4c30ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmICRtZWRpYT09c20ge1xuICAgICAgICBAbWVkaWEgI3skc219IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PW1kIHtcbiAgICAgICAgQG1lZGlhICN7JG1kfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaWYgJG1lZGlhPT1sZyB7XG4gICAgICAgIEBtZWRpYSAjeyRsZ30ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmICRtZWRpYT09eGwge1xuICAgICAgICBAbWVkaWEgI3skeGx9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logo = __webpack_require__(/*! ./../../assets/images/logo-svg.svg */ "./src/assets/images/logo-svg.svg");
        this.bag = __webpack_require__(/*! ./../../assets/images/bag-svg.svg */ "./src/assets/images/bag-svg.svg");
        this.user = __webpack_require__(/*! ./../../assets/images/user-svg.svg */ "./src/assets/images/user-svg.svg");
        this.hamburger = __webpack_require__(/*! ./../../assets/images/hamburger.svg */ "./src/assets/images/hamburger.svg");
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/assets/images/bag-svg.svg":
/*!***************************************!*\
  !*** ./src/assets/images/bag-svg.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bag-svg.svg";

/***/ }),

/***/ "./src/assets/images/bread.svg":
/*!*************************************!*\
  !*** ./src/assets/images/bread.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bread.svg";

/***/ }),

/***/ "./src/assets/images/facebook-logo.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/facebook-logo.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "facebook-logo.svg";

/***/ }),

/***/ "./src/assets/images/features.svg":
/*!****************************************!*\
  !*** ./src/assets/images/features.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "features.svg";

/***/ }),

/***/ "./src/assets/images/hamburger.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/hamburger.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "hamburger.svg";

/***/ }),

/***/ "./src/assets/images/instagram.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/instagram.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "instagram.svg";

/***/ }),

/***/ "./src/assets/images/logo-svg.svg":
/*!****************************************!*\
  !*** ./src/assets/images/logo-svg.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logo-svg.svg";

/***/ }),

/***/ "./src/assets/images/search.svg":
/*!**************************************!*\
  !*** ./src/assets/images/search.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search.svg";

/***/ }),

/***/ "./src/assets/images/user-svg.svg":
/*!****************************************!*\
  !*** ./src/assets/images/user-svg.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "user-svg.svg";

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/santhoshkumar/Documents/Projects/Own Projects/Annatta/annatta/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map