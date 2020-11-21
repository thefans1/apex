(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-pages-content-pages-module"],{

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent(cdr) {
        this.cdr = cdr;
        this.pickDate = new Date().setMonth(new Date().getMonth() + 2);
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.launchDate = this.datePipe.transform(this.pickDate, 'yyyy-MM-dd');
        // Set the defaults
        this.countdown = {
            weeks: '',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var currDate = moment__WEBPACK_IMPORTED_MODULE_3__();
        var launchDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.launchDate);
        var diff = launchDate.diff(currDate, 'seconds');
        this.countdown = this.calculateRemainingTime(diff);
        // Create a subscribable interval
        var countDown = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return diff = diff - 1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
            return _this.calculateRemainingTime(value);
        }));
        // Subscribe to the countdown interval
        countDown
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (value) {
            _this.countdown = value;
            _this.cdr.detectChanges();
        });
    };
    ComingSoonPageComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ComingSoonPageComponent.prototype.calculateRemainingTime = function (seconds) {
        var timeLeft = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](seconds, 'seconds');
        return {
            weeks: timeLeft.asWeeks().toFixed(0),
            days: timeLeft.asDays().toFixed(0),
            hours: timeLeft.hours(),
            minutes: timeLeft.minutes(),
            seconds: timeLeft.seconds()
        };
    };
    ComingSoonPageComponent.ɵfac = function ComingSoonPageComponent_Factory(t) { return new (t || ComingSoonPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    ComingSoonPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingSoonPageComponent, selectors: [["app-coming-soon-page"]], decls: 44, vars: 4, consts: [["id", "coming-soon"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "card-coming-soon", "box-shadow-0", "overflow-hidden"], [1, "card-header", "text-center", "pt-4", "pb-3"], ["alt", "avtar", "src", "assets/img/gallery/coming-soon.png", "width", "200", 1, "img-fluid"], ["id", "clockFlat", 1, "getting-started", "px-sm-2"], [1, "clockCard", "d-inline-block", "text-center", "px-3", "px-sm-4", "py-3"], [1, "lead", "m-0"], [1, "card-content"], [1, "card-body", "text-center", "pt-1"], [1, "mb-4", "mt-2"], [1, "mx-4"], [1, "input-group"], ["type", "text", "placeholder", "Email", "aria-describedby", "coming-soon-subscribe", 1, "form-control"], [1, "input-group-append"], ["type", "button", "id", "coming-soon-subscribe", 1, "btn", "btn-primary"], [1, "ft-log-in", "d-sm-none", "font-medium-2"], [1, "d-none", "d-sm-block"]], template: function ComingSoonPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Days");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hours");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Minutes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Seconds");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "We Are Launching Soon.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Subscribe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countdown.days);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countdown.hours);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countdown.minutes);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countdown.seconds);
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvY29taW5nLXNvb24vY29taW5nLXNvb24tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return ComingSoonPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coming-soon-page',
                templateUrl: './coming-soon-page.component.html',
                styleUrls: ['./coming-soon-page.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/content-pages-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonPageComponent"],
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__["LockScreenPageComponent"],
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__["MaintenancePageComponent"],
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentPagesRoutingModule });
    ContentPagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentPagesRoutingModule_Factory(t) { return new (t || ContentPagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ContentPagesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/content-pages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: createTranslateLoader, ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-pages-routing.module */ "./src/app/pages/content-pages/content-pages-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");


















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentPagesModule });
    ContentPagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentPagesModule_Factory(t) { return new (t || ContentPagesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                    }
                }),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
            ]] });
    return ContentPagesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentPagesModule, { declarations: [_coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPageComponent"],
        _error_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
        _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordPageComponent"],
        _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_9__["LockScreenPageComponent"],
        _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
        _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_11__["MaintenancePageComponent"],
        _register_register_page_component__WEBPACK_IMPORTED_MODULE_12__["RegisterPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentPagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContentPagesRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                        }
                    }),
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"]
                ],
                declarations: [
                    _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_6__["ComingSoonPageComponent"],
                    _error_error_page_component__WEBPACK_IMPORTED_MODULE_7__["ErrorPageComponent"],
                    _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordPageComponent"],
                    _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_9__["LockScreenPageComponent"],
                    _login_login_page_component__WEBPACK_IMPORTED_MODULE_10__["LoginPageComponent"],
                    _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_11__["MaintenancePageComponent"],
                    _register_register_page_component__WEBPACK_IMPORTED_MODULE_12__["RegisterPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var _c0 = function () { return ["/"]; };
var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
    ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 14, vars: 2, consts: [["id", "error"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/error.png", "alt", "", "height", "300", "width", "400", 1, "img-fluid", "error-img", "mt-2"], [1, "mt-4"], [1, "w-75", "error-text", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "404 - Page Not Found!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The page you are looking for might have beel removed, had it's name changed, or is temporarily unavailable.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvZXJyb3IvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return ErrorPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





var _c0 = ["f"];
var _c1 = function () { return ["/pages/login"]; };
var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ForgotPasswordPageComponent.ɵfac = function ForgotPasswordPageComponent_Factory(t) { return new (t || ForgotPasswordPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    ForgotPasswordPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordPageComponent, selectors: [["app-forgot-password-page"]], viewQuery: function ForgotPasswordPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.forogtPasswordForm = _t.first);
        } }, decls: 20, vars: 2, consts: [["id", "forgot-password"], [1, "row", "auth-height", "full-height-vh", "m-0", "d-flex", "align-items-center", "justify-content-center"], [1, "col-md-7", "col-12"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/forgot.png", "alt", "", "width", "260", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "mb-2", "card-title"], [1, "card-text", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", "mb-3"], [1, "d-flex", "flex-sm-row", "flex-column", "justify-content-between"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", "ml-sm-1"]], template: function ForgotPasswordPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recover Password");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Please enter your email address and we'll send you instructions on how to reset your password.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Back To Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recover");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ForgotPasswordPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forgot-password-page',
                templateUrl: './forgot-password-page.component.html',
                styleUrls: ['./forgot-password-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { forogtPasswordForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var _c0 = ["f"];
var _c1 = function () { return ["/dashboard/dashboard1"]; };
var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    LockScreenPageComponent.ɵfac = function LockScreenPageComponent_Factory(t) { return new (t || LockScreenPageComponent)(); };
    LockScreenPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockScreenPageComponent, selectors: [["app-lock-screen-page"]], viewQuery: function LockScreenPageComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lockScreenForm = _t.first);
        } }, decls: 18, vars: 2, consts: [["id", "lock-screen"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-lg-flex", "justify-content-center", "align-items-center", "d-none", "text-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/lock.png", "alt", "", "height", "230", "width", "280", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "py-3", "px-4"], [1, "card-title", "mb-3"], ["type", "email", "placeholder", "Email", 1, "form-control", "mb-2"], ["type", "password", "placeholder", "Password", 1, "form-control", "mb-2"], ["href", "javascript:;"], [1, "btn", "btn-block", "btn-primary", "mt-2", 3, "routerLink"]], template: function LockScreenPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your Session is Locked");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Are You Not John Doe ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Unlock");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbG9jay1zY3JlZW4vbG9jay1zY3JlZW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return LockScreenPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockScreenPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lock-screen-page',
                templateUrl: './lock-screen-page.component.html',
                styleUrls: ['./lock-screen-page.component.scss']
            }]
    }], null, { lockScreenForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");












function LoginPageComponent_ngb_alert_14_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function LoginPageComponent_ngb_alert_14_Template_ngb_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.isLoginFailed = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login failed!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c1 = function () { return ["/pages/forgotpassword"]; };
var _c2 = function () { return ["/pages/register"]; };
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, authService, spinner, route) {
        this.router = router;
        this.authService = authService;
        this.spinner = spinner;
        this.route = route;
        this.loginFormSubmitted = false;
        this.isLoginFailed = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('guest@apex.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Password', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true)
        });
    }
    Object.defineProperty(LoginPageComponent.prototype, "lf", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    // On submit button click
    LoginPageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginFormSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.spinner.show(undefined, {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
        });
        this.authService.signinUser(this.loginForm.value.username, this.loginForm.value.password)
            .then(function (res) {
            _this.spinner.hide();
            _this.router.navigate(['/dashboard/dashboard1']);
        })
            .catch(function (err) {
            _this.isLoginFailed = true;
            _this.spinner.hide();
            console.log('error: ' + err);
        });
    };
    LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
    LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 46, vars: 16, consts: [["id", "login"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "auth-img-bg", "p-3"], ["src", "assets/img/gallery/login.png", "alt", "", "width", "300", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-12", "px-4", "py-3"], [1, "mb-2", "card-title"], ["type", "light-danger", "class", "mb-2", 3, "close", 4, "ngIf"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "username", "placeholder", "Username", "required", "", 1, "form-control", 3, "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "placeholder", "Old Password", "required", "", 1, "form-control", 3, "ngClass"], [1, "d-sm-flex", "justify-content-between", "mb-3", "font-small-2"], [1, "remember-me", "mb-2", "mb-sm-0"], [1, "checkbox", "auth-checkbox"], ["type", "checkbox", "formControlName", "rememberMe", "id", "rememberMe", 1, "form-control"], ["for", "rememberMe"], [1, "font-small-2", "mb-3", "font-weight-normal"], [3, "routerLink"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "text-primary", "m-0"], [1, "login-options"], [1, "btn", "btn-sm", "btn-social-icon", "btn-facebook", "mr-1"], [1, "fa", "fa-facebook"], [1, "btn", "btn-sm", "btn-social-icon", "btn-twitter", "mr-1"], [1, "fa", "fa-twitter"], ["type", "light-danger", 1, "mb-2", 3, "close"], [1, "mb-0"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Welcome back, please login to your account.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginPageComponent_ngb_alert_14_Template, 3, 0, "ngb-alert", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LoginPageComponent_div_18_Template, 3, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginPageComponent_div_21_Template, 3, 0, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Remember Me");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Forgot Password?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginPageComponent_Template_a_click_34_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Or Login With");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "ngx-spinner");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.loginFormSubmitted && ctx.lf.username.invalid, ctx.loginFormSubmitted && !ctx.lf.username.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.username.invalid || (ctx.lf.username.errors == null ? null : ctx.lf.username.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx.loginFormSubmitted && ctx.lf.password.invalid, ctx.loginFormSubmitted && !ctx.lf.password.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginFormSubmitted && (ctx.lf.password.invalid || (ctx.lf.password.errors == null ? null : ctx.lf.password.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlert"]], styles: [".alert-light-danger[_ngcontent-%COMP%] {\n  background-color: #FEEFD0 !important;\n  color: #F55252  !important;\n  border-color: #FEEFD0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGVudC1wYWdlcy9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250ZW50LXBhZ2VzL2xvZ2luL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtbGlnaHQtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZEMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI0Y1NTI1MiAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjRkVFRkQwO1xufVxuIl19 */"] });
    return LoginPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login-page.component.html',
                styleUrls: ['./login-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: app_shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MaintenancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageComponent", function() { return MaintenancePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



var _c0 = function () { return ["/"]; };
var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent.ɵfac = function MaintenancePageComponent_Factory(t) { return new (t || MaintenancePageComponent)(); };
    MaintenancePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenancePageComponent, selectors: [["app-maintenance-page"]], decls: 14, vars: 2, consts: [["id", "maintenance"], [1, "container-fluid"], [1, "row", "auth-height", "full-height-vh"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "row"], [1, "col-12", "text-center"], ["src", "assets/img/gallery/maintenance.png", "alt", "", "height", "300", "width", "300", 1, "img-fluid", "maintenance-img", "mt-2"], [1, "mt-4"], [1, "maintenance-text", "w-75", "mx-auto", "mt-4"], [1, "btn", "btn-warning", "my-2", 3, "routerLink"]], template: function MaintenancePageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Under Maintenance!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ice cream caramels lemon drops candy. Cake toffee topping cookie tart wafer gummies. Sweet gummi bears jujubes bonbon gingerbread apple pie marshmallow.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back To Home");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return MaintenancePageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintenancePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maintenance-page',
                templateUrl: './maintenance-page.component.html',
                styleUrls: ['./maintenance-page.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/must-match.validator */ "./src/app/shared/directives/must-match.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");


// import custom validator to validate that password and confirm password fields match






function RegisterPageComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Email must be a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Confirm Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Passwords must match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterPageComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Accept Ts & Cs is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "is-invalid": a0, "is-valid": a1 }; };
var _c1 = function () { return ["/pages/login"]; };
var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerFormSubmitted = false;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        }, {
            validator: Object(_shared_directives_must_match_validator__WEBPACK_IMPORTED_MODULE_2__["MustMatch"])('password', 'confirmPassword')
        });
    };
    Object.defineProperty(RegisterPageComponent.prototype, "rf", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    //  On submit click, reset field value
    RegisterPageComponent.prototype.onSubmit = function () {
        this.registerFormSubmitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigate(['/pages/login']);
    };
    RegisterPageComponent.ɵfac = function RegisterPageComponent_Factory(t) { return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    RegisterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterPageComponent, selectors: [["app-register-page"]], decls: 42, vars: 27, consts: [["id", "regestration"], [1, "row", "auth-height", "full-height-vh", "m-0"], [1, "col-12", "d-flex", "align-items-center", "justify-content-center"], [1, "card", "overflow-hidden"], [1, "card-content"], [1, "card-body", "auth-img"], [1, "row", "m-0"], [1, "col-lg-6", "d-none", "d-lg-flex", "justify-content-center", "align-items-center", "text-center", "auth-img-bg", "py-2"], ["src", "assets/img/gallery/register.png", "alt", "", "width", "350", "height", "230", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "px-4", "py-3"], [1, "card-title", "mb-2"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Name", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["class", "help-block mt-1 text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", "placeholder", "Email", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Confirm Password", "required", "", 1, "form-control", "mb-2", 3, "ngClass"], [1, "checkbox", "auth-checkbox"], ["type", "checkbox", "id", "auth-login", "formControlName", "acceptTerms", 1, "form-control"], ["for", "auth-login"], [1, "font-small-2", "mb-3", "font-weight-normal"], [1, "d-flex", "justify-content-between", "flex-sm-row", "flex-column"], [1, "btn", "bg-light-primary", "mb-2", "mb-sm-0", 3, "routerLink"], [1, "btn", "btn-primary", 3, "click"], [1, "help-block", "mt-1", "text-danger"], [1, "ft-alert-circle", "align-middle"]], template: function RegisterPageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fill the below form to create a new account.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterPageComponent_div_17_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegisterPageComponent_div_20_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterPageComponent_div_21_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterPageComponent_div_24_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, RegisterPageComponent_div_25_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterPageComponent_div_28_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterPageComponent_div_29_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "I accept the terms & conditions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterPageComponent_div_36_Template, 3, 0, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Back To Login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterPageComponent_Template_a_click_40_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Register");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, ctx.registerFormSubmitted && ctx.rf.name.invalid, ctx.registerFormSubmitted && !ctx.rf.name.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.name.invalid || (ctx.rf.name.errors == null ? null : ctx.rf.name.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, ctx.registerFormSubmitted && ctx.rf.email.invalid, ctx.registerFormSubmitted && !ctx.rf.email.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.email.errors == null ? null : ctx.rf.email.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.email.errors == null ? null : ctx.rf.email.errors.email));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, ctx.registerFormSubmitted && ctx.rf.password.invalid, ctx.registerFormSubmitted && !ctx.rf.password.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.password.errors == null ? null : ctx.rf.password.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (!(ctx.rf.password.errors == null ? null : ctx.rf.password.errors.required) && (ctx.rf.password.errors == null ? null : ctx.rf.password.errors.minlength)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c0, ctx.registerFormSubmitted && ctx.rf.confirmPassword.invalid, ctx.registerFormSubmitted && !ctx.rf.confirmPassword.invalid));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.confirmPassword.errors == null ? null : ctx.rf.confirmPassword.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.confirmPassword.errors == null ? null : ctx.rf.confirmPassword.errors.mustMatch));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerFormSubmitted && (ctx.rf.acceptTerms.invalid || (ctx.rf.acceptTerms.errors == null ? null : ctx.rf.acceptTerms.errors.required)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return RegisterPageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-page',
                templateUrl: './register-page.component.html',
                styleUrls: ['./register-page.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/must-match.validator.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/must-match.validator.ts ***!
  \***********************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=pages-content-pages-content-pages-module.js.map