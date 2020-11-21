(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");









var appRoutes = [
    {
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"] },
    {
        path: '**',
        redirectTo: 'pages/error'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function () { return window.scrollTo(0, 0); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _store_app_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/app.reducer */ "./src/app/store/app.reducer.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _shared_services_window_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/services/window.service */ "./src/app/shared/services/window.service.ts");































var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID" //YOUR_MEASUREMENT_ID
};
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
            _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
            ng2_dragula__WEBPACK_IMPORTED_MODULE_12__["DragulaService"],
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
            _shared_services_window_service__WEBPACK_IMPORTED_MODULE_23__["WINDOW_PROVIDERS"]
        ], imports: [[
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_17__["appReducer"]),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: "YOUR_GOOGLE_MAP_API_KEY"
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_20__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_19__["ContentLayoutComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreRootModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"], _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_20__["FullLayoutComponent"], _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_19__["ContentLayoutComponent"]],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["StoreModule"].forRoot(_store_app_reducer__WEBPACK_IMPORTED_MODULE_17__["appReducer"]),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(firebaseConfig),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerModule"],
                    ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"].forRoot(),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                            useFactory: createTranslateLoader,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                        apiKey: "YOUR_GOOGLE_MAP_API_KEY"
                    }),
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"]
                ],
                providers: [
                    _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                    _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                    ng2_dragula__WEBPACK_IMPORTED_MODULE_12__["DragulaService"],
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                    _shared_services_window_service__WEBPACK_IMPORTED_MODULE_23__["WINDOW_PROVIDERS"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.model.ts":
/*!**********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.model.ts ***!
  \**********************************************/
/*! exports provided: UsersChat, Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersChat", function() { return UsersChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var UsersChat = /** @class */ (function () {
    function UsersChat(userId, index, name, avatar, lastChatTime, status, isPinnedUser, isMuted, unreadMessageCount, isActiveChat, lastChatMessage, chats) {
        this.userId = userId;
        this.index = index;
        this.name = name;
        this.avatar = avatar;
        this.lastChatTime = lastChatTime;
        this.status = status;
        this.isPinnedUser = isPinnedUser;
        this.isMuted = isMuted;
        this.unreadMessageCount = unreadMessageCount;
        this.isActiveChat = isActiveChat;
        this.lastChatMessage = lastChatMessage;
        this.chats = chats;
    }
    return UsersChat;
}());

var Chat = /** @class */ (function () {
    function Chat(isReceived, time, messages, messageType) {
        this.isReceived = isReceived;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.actions.ts ***!
  \*************************************************/
/*! exports provided: ADD_CHAT, AddChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT", function() { return ADD_CHAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat", function() { return AddChat; });
var ADD_CHAT = '[Chat] Add Chat';
var AddChat = /** @class */ (function () {
    function AddChat(payload) {
        this.payload = payload;
        this.type = ADD_CHAT;
    }
    return AddChat;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.reducers.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.reducers.ts ***!
  \**************************************************/
/*! exports provided: chatReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatReducer", function() { return chatReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");



var initialState = {
    usersChat: [
        {
            userId: "1",
            index: 0,
            name: "Elizabeth Elliott",
            avatar: "assets/img/portrait/small/avatar-s-2.png",
            lastChatTime: "9:04 PM",
            status: "online",
            isPinnedUser: true,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Okay",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "2",
            index: 1,
            name: "Lucas Howell",
            avatar: "assets/img/portrait/small/avatar-s-7.png",
            lastChatTime: "4:14 AM",
            status: "busy",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "3",
            isActiveChat: false,
            lastChatMessage: "Thank you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "3",
            index: 2,
            name: "Sarah Woods",
            avatar: "assets/img/portrait/small/avatar-s-8.png",
            lastChatTime: "2:14 AM",
            status: "away",
            isPinnedUser: false,
            isMuted: true,
            unreadMessageCount: "12",
            isActiveChat: true,
            lastChatMessage: "Hello John!",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "4",
            index: 3,
            name: "Layla Allen",
            avatar: "assets/img/portrait/small/avatar-s-20.png",
            lastChatTime: "Yesterday",
            status: "online",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "I love you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "5",
            index: 4,
            name: "Bruce Reid",
            avatar: "assets/img/portrait/small/avatar-s-5.png",
            lastChatTime: "Yesterday",
            status: "offline",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Will connect you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "6",
            index: 5,
            name: "Krish Candy",
            avatar: "assets/img/portrait/small/avatar-s-9.png",
            lastChatTime: "Wednesday",
            status: "away",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "4",
            isActiveChat: false,
            lastChatMessage: "Thank you",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "7",
            index: 6,
            name: "Kelly Reyes",
            avatar: "assets/img/portrait/small/avatar-s-4.png",
            lastChatTime: "Thrusday",
            status: "busy",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "😎🙂😃",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "8",
            index: 7,
            name: "Vincent Nelson",
            avatar: "assets/img/portrait/small/avatar-s-14.png",
            lastChatTime: "Friday",
            status: "online",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "Who you are?",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "9",
            index: 8,
            name: "William Wright",
            avatar: "assets/img/portrait/small/avatar-s-23.png",
            lastChatTime: "1 week ago",
            status: "offline",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "6",
            isActiveChat: false,
            lastChatMessage: "How was the day?",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        },
        {
            userId: "10",
            index: 9,
            name: "Novah Miller",
            avatar: "assets/img/portrait/small/avatar-s-26.png",
            lastChatTime: "1 month ago",
            status: "away",
            isPinnedUser: false,
            isMuted: false,
            unreadMessageCount: "",
            isActiveChat: false,
            lastChatMessage: "There you are!",
            chats: [
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'How can we help? We are here for you!'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 9 bootstrap compatible.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                    'Absolutely!',
                    'Apex admin is the responsive angular 9 bootstrap admin template.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                    'Looks clean and fresh UI.',
                    'It is perfect for my next project.',
                    'How can I purchase it?'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                    'Thanks, from ThemeForest.'
                ], 'text'),
                new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                    'I will purchase it for sure.',
                    'Thanks.'
                ], 'text'),
            ]
        }
    ]
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT"]):
            var updatedChat = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.usersChat[action.payload.index]), action.payload.newChat);
            var updatedChats = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.usersChat);
            updatedChats[action.payload.index] = updatedChat;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { usersChat: updatedChats });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ "./src/app/shared/services/customizer.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");










var _c0 = ["content-wrapper"];
var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent(configService, translate, document, renderer, cdr, customizerService) {
        this.configService = configService;
        this.translate = translate;
        this.document = document;
        this.renderer = renderer;
        this.cdr = cdr;
        this.customizerService = customizerService;
        this.config = {};
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "auth-page");
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    ContentLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    ContentLayoutComponent.prototype.loadLayout = function () {
        this.removeTransparentBGClasses();
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.config.layout.sidebar.backgroundColor);
        }
        this.renderer.removeClass(this.document.body, "menu-expanded");
        this.renderer.removeClass(this.document.body, "navbar-static");
        this.renderer.removeClass(this.document.body, "menu-open");
        this.renderer.addClass(this.document.body, "blank-page");
    };
    ContentLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    ContentLayoutComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(this.document.body, "auth-page");
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) { return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"])); };
    ContentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentLayoutComponent, selectors: [["app-content-layout"]], viewQuery: function ContentLayoutComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapper = _t.first);
        } }, decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper", "p-0"]], template: function ContentLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return ContentLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-layout',
                templateUrl: './content-layout.component.html',
                styleUrls: ['./content-layout.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"] }]; }, { wrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['content-wrapper']
        }] }); })();


/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/customizer.service */ "./src/app/shared/services/customizer.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/window.service */ "./src/app/shared/services/window.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _shared_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/horizontal-menu/horizontal-menu.component */ "./src/app/shared/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/directives/topmenu.directive */ "./src/app/shared/directives/topmenu.directive.ts");
/* harmony import */ var _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/vertical-menu/vertical-menu.component */ "./src/app/shared/vertical-menu/vertical-menu.component.ts");
























function FullLayoutComponent_app_horizontal_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-horizontal-menu", 13);
} }
var _c0 = function (a0) { return { "background-image": a0 }; };
function FullLayoutComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r3.bgImage + ")"));
} }
var _c1 = function (a0, a1, a2) { return { "main-menu": a0, "menu-fixed": a1, "menu-native-scroll": a2 }; };
function FullLayoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function FullLayoutComponent_div_3_Template_div_mouseenter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.sidebarMouseenter($event); })("mouseleave", function FullLayoutComponent_div_3_Template_div_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sidebarMouseleave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullLayoutComponent_div_3_div_2_Template, 1, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c1, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, ctx_r1.menuPosition === "Side" || ctx_r1.displayOverlayMenu, !ctx_r1.perfectScrollbarEnable));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-background-color", (ctx_r1.config == null ? null : ctx_r1.config.layout.variant) === "Transparent" ? "black" : ctx_r1.bgColor)("data-image", ctx_r1.bgImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.config == null ? null : ctx_r1.config.layout.sidebar.backgroundImage);
} }
function FullLayoutComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.scrollToTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c2 = function (a0) { return { "show-overlay": a0 }; };
var _c3 = function (a0, a1) { return { "d-none": a0, "d-block": a1 }; };
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(configService, layoutService, router, customizerService, document, window, renderer, cdr, deviceService) {
        var _this = this;
        this.configService = configService;
        this.layoutService = layoutService;
        this.router = router;
        this.customizerService = customizerService;
        this.document = document;
        this.window = window;
        this.renderer = renderer;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.hideSidebar = true;
        this.overlayContent = false;
        this.isSmallScreen = false;
        this.menuPosition = 'Side';
        this.displayOverlayMenu = false; // Vertical Side menu for screenSize < 1200
        this.config = {};
        this.isMenuCollapsedOnHover = false;
        this.isNavbarSeachTextEmpty = true;
        this.isScrollTopVisible = false;
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        // On toggle sidebar menu
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
            if (_this.hideSidebar) {
                _this.overlayContent = false;
            }
            else {
                _this.overlayContent = true;
            }
            _this.toggleSidebar();
        });
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            //load layout
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        //hide overlay class on router change
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__["NavigationEnd"]; })).subscribe(function (routeChange) {
            if (_this.config.layout.menuPosition === "Side" || _this.displayOverlayMenu) { // Vertical Menu
                if (_this.innerWidth < 1200) {
                    _this.layoutService.toggleSidebarSmallScreen(false);
                    _this.overlayContent = false;
                    _this.renderer.removeClass(_this.document.body, "overflow-hidden");
                }
            }
        });
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
        this.setMenuLayout();
    };
    FullLayoutComponent.prototype.ngOnDestroy = function () {
        //Unsubcribe subscriptions
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //adjust layout
    FullLayoutComponent.prototype.setMenuLayout = function () {
        this.overlayContent = false;
        this.renderer.removeClass(this.document.body, "blank-page");
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.displayOverlayMenu = true;
                this.hideSidebar = true;
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
                this.renderer.addClass(this.document.body, "fixed-navbar");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // Screen size > 1200
                this.displayOverlayMenu = false;
                this.hideSidebar = false;
                this.renderer.setAttribute(this.document.body, "data-menu", "horizontal-menu");
                this.renderer.removeClass(this.document.body, "vertical-layout");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
                this.renderer.removeClass(this.document.body, "fixed-navbar");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.addClass(this.document.body, "horizontal-menu");
                this.renderer.addClass(this.document.body, "horizontal-layout");
                this.renderer.addClass(this.document.body, "horizontal-menu-padding");
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu
            if (this.innerWidth < 1200) { // If Screen size < 1200
                this.displayOverlayMenu = true;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.removeClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-open");
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "vertical-layout");
                this.renderer.addClass(this.document.body, "menu-hide");
            }
            else { // If Screen size > 1200
                this.displayOverlayMenu = false;
                this.renderer.removeClass(this.document.body, "horizontal-layout");
                this.renderer.removeClass(this.document.body, "horizontal-menu");
                this.renderer.removeClass(this.document.body, "horizontal-menu-padding");
                // this.renderer.removeClass(this.document.body, "blank-page");
                this.renderer.setAttribute(this.document.body, "data-menu", "vertical-menu");
                this.renderer.addClass(this.document.body, "vertical-layout");
                if (!this.config.layout.sidebar.collapsed) {
                    this.renderer.addClass(this.document.body, "menu-expanded");
                    this.renderer.addClass(this.document.body, "menu-open");
                }
                this.renderer.addClass(this.document.body, "vertical-menu");
                this.renderer.removeClass(this.document.body, "menu-hide");
                this.renderer.removeClass(this.document.body, "vertical-overlay-menu");
            }
        }
    };
    FullLayoutComponent.prototype.loadLayout = function () {
        //menu position "SIDE" or "TOP"
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        //Hide/show sidebar menu background image
        if (!this.config.layout.sidebar.backgroundImage) {
            this.bgImage = "";
        }
        else {
            this.bgImage = this.config.layout.sidebar.backgroundImageURL;
        }
        //Set sidebar menu background color
        if (!this.config.layout.sidebar.backgroundColor) {
            this.bgColor = this.customizerService.light_dark_colors[7].code;
        }
        else {
            this.bgColor = this.config.layout.sidebar.backgroundColor;
        }
        //toggle side menu
        if (this.config.layout.menuPosition === "Side") {
            if (this.config.layout.sidebar.collapsed) {
                this.isMenuCollapsedOnHover = true;
            }
            else {
                this.isMenuCollapsedOnHover = true;
            }
            this.toggleSidebar();
        }
        this.removeTransparentBGClasses();
        // Layout variants
        if (this.config.layout.variant === "Light") {
            this.renderer.removeClass(this.document.body, "layout-dark");
            this.renderer.removeClass(this.document.body, "layout-transparent");
        }
        else if (this.config.layout.variant === "Dark") {
            this.renderer.removeClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, "layout-dark");
        }
        else if (this.config.layout.variant === "Transparent") {
            this.renderer.addClass(this.document.body, "layout-dark");
            this.renderer.addClass(this.document.body, "layout-transparent");
            this.renderer.addClass(this.document.body, this.bgColor);
            this.bgImage = "";
        }
        this.setMenuLayout();
        // For Sidebar width
        if (this.config.layout.sidebar.size === 'sidebar-sm') {
            this.renderer.removeClass(this.document.body, "sidebar-lg");
            this.renderer.addClass(this.document.body, "sidebar-sm");
        }
        else if (this.config.layout.sidebar.size === 'sidebar-lg') {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.addClass(this.document.body, "sidebar-lg");
        }
        else {
            this.renderer.removeClass(this.document.body, "sidebar-sm");
            this.renderer.removeClass(this.document.body, "sidebar-lg");
        }
        if (this.config.layout.menuPosition === "Side") {
            // vertical/Side menu expanded/collapse
            if (this.config.layout.sidebar.collapsed && !this.isSmallScreen) { // collapse side menu
                this.renderer.removeClass(this.document.body, "menu-expanded");
                this.renderer.addClass(this.document.body, "nav-collapsed");
            }
            else { // expand side menu
                this.renderer.removeClass(this.document.body, "nav-collapsed");
                this.renderer.addClass(this.document.body, "menu-expanded");
            }
        }
        //Navbar types
        if (this.config.layout.navbar.type === 'Static') {
            this.renderer.removeClass(this.document.body, "navbar-sticky");
            this.renderer.addClass(this.document.body, "navbar-static");
        }
        else if (this.config.layout.navbar.type === 'Fixed') {
            this.renderer.removeClass(this.document.body, "navbar-static");
            this.renderer.addClass(this.document.body, "navbar-sticky");
        }
    };
    FullLayoutComponent.prototype.toggleSidebar = function () {
        if (this.hideSidebar) { // on sidebar collapse
            this.renderer.removeClass(this.document.body, "menu-expanded");
            this.renderer.removeClass(this.document.body, "vertical-menu");
            this.renderer.removeClass(this.document.body, "menu-open");
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-hide");
            if (this.config.layout.menuPosition === "Top") {
                this.renderer.addClass(this.document.body, "vertical-overlay-menu");
            }
        }
        else { // on sidebar expand
            this.renderer.addClass(this.document.body, "vertical-layout");
            this.renderer.addClass(this.document.body, "menu-expanded");
            this.renderer.addClass(this.document.body, "vertical-menu");
            if (this.config.layout.sidebar.collapsed) {
                this.renderer.removeClass(this.document.body, "menu-open");
            }
            else {
                this.renderer.addClass(this.document.body, "menu-open");
            }
            this.renderer.removeClass(this.document.body, "menu-hide");
        }
        this.isTouchDevice();
    };
    FullLayoutComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            if (!this.hideSidebar) {
                this.renderer.addClass(this.document.body, "overflow-hidden");
            }
            else {
                this.renderer.removeClass(this.document.body, "overflow-hidden");
            }
        }
    };
    FullLayoutComponent.prototype.hideCompactMenuOnSmallScreen = function () {
        if (this.innerWidth < 1200) {
            var conf = this.config;
            conf.layout.sidebar.collapsed = false;
            this.configService.applyTemplateConfigChange({ layout: conf.layout });
        }
    };
    //Remove transparent layout classes
    FullLayoutComponent.prototype.removeTransparentBGClasses = function () {
        var _this = this;
        this.customizerService.transparent_colors.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
        this.customizerService.transparent_colors_with_shade.forEach(function (_) {
            _this.renderer.removeClass(_this.document.body, _.class);
        });
    };
    FullLayoutComponent.prototype.sidebarMouseenter = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = false;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    FullLayoutComponent.prototype.sidebarMouseleave = function (e) {
        if (this.config.layout.sidebar.collapsed) {
            this.isMenuCollapsedOnHover = true;
            this.layoutService.overlaySidebartoggle(this.isMenuCollapsedOnHover);
        }
    };
    //scroll to top on click
    FullLayoutComponent.prototype.scrollToTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    FullLayoutComponent.prototype.onOutsideClick = function (e) {
        if (this.innerWidth < 1200) {
            if (!e.target.classList.contains("toggleSidebarNavbarButton")) {
                this.layoutService.toggleSidebarSmallScreen(false);
            }
        }
    };
    FullLayoutComponent.prototype.onWrapperClick = function () {
        this.isNavbarSeachTextEmpty = true;
    };
    FullLayoutComponent.prototype.checkNavbarSeachTextEmpty = function ($event) {
        this.isNavbarSeachTextEmpty = $event;
    };
    FullLayoutComponent.prototype.onResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.setMenuLayout();
            _this.hideCompactMenuOnSmallScreen();
        }).bind(this), 500);
    };
    //Add/remove classes on page scroll
    FullLayoutComponent.prototype.onWindowScroll = function () {
        var number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (number > 60) {
            this.renderer.addClass(this.document.body, "navbar-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "navbar-scrolled");
        }
        if (number > 400) {
            this.isScrollTopVisible = true;
        }
        else {
            this.isScrollTopVisible = false;
        }
        if (number > 20) {
            this.renderer.addClass(this.document.body, "page-scrolled");
        }
        else {
            this.renderer.removeClass(this.document.body, "page-scrolled");
        }
    };
    FullLayoutComponent.ɵfac = function FullLayoutComponent_Factory(t) { return new (t || FullLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"])); };
    FullLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullLayoutComponent, selectors: [["app-full-layout"]], hostBindings: function FullLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function FullLayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scroll", function FullLayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 18, vars: 10, consts: [[3, "seachTextEmpty"], [1, "wrapper", 3, "ngClass", "click", "resize"], ["appTopMenu", "", 4, "ngIf"], ["appSidebar", "", "class", "app-sidebar", "data-active-color", "white", 3, "ngClass", "mouseenter", "mouseleave", 4, "ngIf"], [1, "main-panel"], [1, "main-content"], [1, "content-overlay"], [1, "content-wrapper"], ["class", "btn btn-primary scroll-top", "type", "button", 3, "click", 4, "ngIf"], [1, "buy-now"], ["href", "https://1.envato.market/apex_admin", "target", "_blank", 1, "btn", "btn-danger"], [1, "sidenav-overlay", 3, "ngClass", "click"], [1, "drag-target"], ["appTopMenu", ""], ["appSidebar", "", "data-active-color", "white", 1, "app-sidebar", 3, "ngClass", "mouseenter", "mouseleave"], ["class", "sidebar-background", 3, "ngStyle", 4, "ngIf"], [1, "sidebar-background", 3, "ngStyle"], ["type", "button", 1, "btn", "btn-primary", "scroll-top", 3, "click"], [1, "ft-arrow-up"]], template: function FullLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("seachTextEmpty", function FullLayoutComponent_Template_app_navbar_seachTextEmpty_0_listener($event) { return ctx.checkNavbarSeachTextEmpty($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_1_listener() { return ctx.onWrapperClick(); })("resize", function FullLayoutComponent_Template_div_resize_1_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FullLayoutComponent_app_horizontal_menu_2_Template, 1, 0, "app-horizontal-menu", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FullLayoutComponent_div_3_Template, 3, 8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FullLayoutComponent_button_10_Template, 2, 0, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-notification-sidebar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buy Now");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullLayoutComponent_Template_div_click_16_listener($event) { return ctx.onOutsideClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, !ctx.isNavbarSeachTextEmpty));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Top" && !ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuPosition === "Side" || ctx.displayOverlayMenu);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isScrollTopVisible);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx.displayOverlayMenu && ctx.hideSidebar && !ctx.overlayContent, ctx.displayOverlayMenu && !ctx.hideSidebar && ctx.overlayContent && ctx.innerWidth < 1200));
        } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _shared_notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["NotificationSidebarComponent"], _shared_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_12__["CustomizerComponent"], _shared_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalMenuComponent"], _shared_directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_14__["TopMenuDirective"], _shared_directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_15__["SidebarDirective"], _shared_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_16__["VerticalMenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return FullLayoutComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-full-layout",
                templateUrl: "./full-layout.component.html",
                styleUrls: ["./full-layout.component.scss"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: app_shared_services_layout_service__WEBPACK_IMPORTED_MODULE_5__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: app_shared_services_customizer_service__WEBPACK_IMPORTED_MODULE_3__["CustomizerService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [app_shared_services_window_service__WEBPACK_IMPORTED_MODULE_6__["WINDOW"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", []]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/animations/custom-animations.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/animations/custom-animations.ts ***!
  \********************************************************/
/*! exports provided: customAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAnimations", function() { return customAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

var customAnimations = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '*' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '0px' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('1 <=> 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(200))
    ])
];


/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/pages/login']);
        }
        else {
            return true;
        }
    };
    AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
    return AuthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");






var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetails = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
        // return this._firebaseAuth.signInWithEmailAndPassword(email, password)
        //uncomment above firebase auth code and remove this temp code
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 1000);
        });
    };
    AuthService.prototype.logout = function () {
        this._firebaseAuth.signOut();
        this.router.navigate(['YOUR_LOGOUT_URL']);
    };
    AuthService.prototype.isAuthenticated = function () {
        return true;
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/autocomplete/autocomplete-content.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete-content.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: AutocompleteContentDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteContentDirective", function() { return AutocompleteContentDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var AutocompleteContentDirective = /** @class */ (function () {
    function AutocompleteContentDirective(tpl) {
        this.tpl = tpl;
    }
    AutocompleteContentDirective.ɵfac = function AutocompleteContentDirective_Factory(t) { return new (t || AutocompleteContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
    AutocompleteContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutocompleteContentDirective, selectors: [["", "appAutocompleteContent", ""]] });
    return AutocompleteContentDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteContentDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutocompleteContent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/autocomplete/autocomplete.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.component.ts ***!
  \**************************************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete-content.directive */ "./src/app/shared/components/autocomplete/autocomplete-content.directive.ts");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option/option.component */ "./src/app/shared/components/autocomplete/option/option.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");







var _c0 = ["root"];
function AutocompleteComponent_ng_template_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AutocompleteComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutocompleteComponent_ng_template_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content ? ctx_r1.content.tpl : null);
} }
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
    }
    AutocompleteComponent.prototype.optionsClick = function () {
        return this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (options) {
            var clicks$ = options.map(function (option) { return option.click$; });
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"].apply(void 0, clicks$);
        }));
    };
    AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(); };
    AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], contentQueries: function AutocompleteComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__["AutocompleteContentDirective"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _option_option_component__WEBPACK_IMPORTED_MODULE_2__["OptionComponent"], false);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
        } }, viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rootTemplate = _t.first);
        } }, exportAs: ["appAutocomplete"], decls: 2, vars: 0, consts: [["root", ""], [1, "autocomplete", "search-list"], [4, "ngTemplateOutlet"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AutocompleteComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], styles: [".autocomplete[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n\n.search-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #FFFFFF;\n  width: 100%;\n  margin-top: 1rem;\n  padding-left: 0;\n  border-radius: 0.267rem;\n  z-index: 1200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRvY29tcGxldGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zZWFyY2gtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjI2N3JlbTtcbiAgei1pbmRleDogMTIwMDtcbn1cbiJdfQ== */"] });
    return AutocompleteComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autocomplete',
                template: "\n    <ng-template #root>\n      <div class=\"autocomplete search-list\" >\n        <ng-container *ngTemplateOutlet=\"content ? content.tpl : null\"></ng-container>\n      </div>\n    </ng-template>\n  ",
                exportAs: 'appAutocomplete',
                styleUrls: ['./autocomplete.component.css']
            }]
    }], null, { rootTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['root']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_1__["AutocompleteContentDirective"]]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_option_option_component__WEBPACK_IMPORTED_MODULE_2__["OptionComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/autocomplete/autocomplete.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.directive.ts ***!
  \**************************************************************************/
/*! exports provided: AutocompleteDirective, overlayClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteDirective", function() { return AutocompleteDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overlayClickOutside", function() { return overlayClickOutside; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.component */ "./src/app/shared/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/fesm2015/portal.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-take-until-destroy */ "./node_modules/ngx-take-until-destroy/fesm2015/ngx-take-until-destroy.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













var AutocompleteDirective = /** @class */ (function () {
    function AutocompleteDirective(host, ngControl, vcr, overlay, router) {
        this.host = host;
        this.ngControl = ngControl;
        this.vcr = vcr;
        this.overlay = overlay;
        this.router = router;
    }
    Object.defineProperty(AutocompleteDirective.prototype, "control", {
        get: function () {
            return this.ngControl.control;
        },
        enumerable: false,
        configurable: true
    });
    AutocompleteDirective.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.origin, 'focus').pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(function () {
            _this.openDropdown();
            _this.appAutocomplete.optionsClick()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this.overlayRef.detachments()))
                .subscribe(function (value) {
                _this.control.setValue(value);
                _this.close();
            });
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__["NavigationEnd"]; })).subscribe(function (routeChange) {
            _this.close();
        });
    };
    AutocompleteDirective.prototype.openDropdown = function () {
        var _this = this;
        this.close();
        this.overlayRef = this.overlay.create({
            width: this.origin.offsetWidth,
            maxHeight: 40 * 3,
            backdropClass: '',
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            positionStrategy: this.getOverlayPosition()
        });
        var template = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["TemplatePortal"](this.appAutocomplete.rootTemplate, this.vcr);
        this.overlayRef.attach(template);
        overlayClickOutside(this.overlayRef, this.origin).subscribe(function () { return _this.close(); });
    };
    AutocompleteDirective.prototype.ngOnDestroy = function () { };
    AutocompleteDirective.prototype.close = function () {
        if (this.overlayRef) {
            this.overlayRef.detach();
        }
        this.overlayRef = null;
    };
    AutocompleteDirective.prototype.getOverlayPosition = function () {
        var positions = [
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ConnectionPositionPair"]({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        return this.overlay
            .position()
            .flexibleConnectedTo(this.origin)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
    };
    Object.defineProperty(AutocompleteDirective.prototype, "origin", {
        get: function () {
            return this.host.nativeElement;
        },
        enumerable: false,
        configurable: true
    });
    AutocompleteDirective.ɵfac = function AutocompleteDirective_Factory(t) { return new (t || AutocompleteDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    AutocompleteDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutocompleteDirective, selectors: [["", "appAutocomplete", ""]], inputs: { appAutocomplete: "appAutocomplete" } });
    return AutocompleteDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutocomplete]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { appAutocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
function overlayClickOutside(overlayRef, origin) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click')
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
        var clickTarget = event.target;
        var notOrigin = clickTarget !== origin; // the input
        var notOverlay = !!overlayRef && (overlayRef.overlayElement.contains(clickTarget) === false); // the autocomplete
        return notOrigin && notOverlay;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(overlayRef.detachments()));
}


/***/ }),

/***/ "./src/app/shared/components/autocomplete/autocomplete.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/autocomplete.module.ts ***!
  \***********************************************************************/
/*! exports provided: AutocompleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteModule", function() { return AutocompleteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autocomplete.component */ "./src/app/shared/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autocomplete.directive */ "./src/app/shared/components/autocomplete/autocomplete.directive.ts");
/* harmony import */ var _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete-content.directive */ "./src/app/shared/components/autocomplete/autocomplete-content.directive.ts");
/* harmony import */ var _option_option_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./option/option.component */ "./src/app/shared/components/autocomplete/option/option.component.ts");







var publicApi = [
    _autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"],
    _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"],
    _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"],
    _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]
];
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutocompleteModule });
    AutocompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AutocompleteModule_Factory(t) { return new (t || AutocompleteModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return AutocompleteModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutocompleteModule, { declarations: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"],
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"],
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"],
        _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_autocomplete_component__WEBPACK_IMPORTED_MODULE_2__["AutocompleteComponent"],
        _autocomplete_directive__WEBPACK_IMPORTED_MODULE_3__["AutocompleteDirective"],
        _autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_4__["AutocompleteContentDirective"],
        _option_option_component__WEBPACK_IMPORTED_MODULE_5__["OptionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [publicApi],
                exports: [publicApi]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/autocomplete/option/option.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/autocomplete/option/option.component.ts ***!
  \***************************************************************************/
/*! exports provided: OptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionComponent", function() { return OptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




var _c0 = ["*"];
var OptionComponent = /** @class */ (function () {
    function OptionComponent(host) {
        this.host = host;
    }
    OptionComponent.prototype.ngOnInit = function () {
        this.click$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(this.value));
    };
    Object.defineProperty(OptionComponent.prototype, "element", {
        get: function () {
            return this.host.nativeElement;
        },
        enumerable: false,
        configurable: true
    });
    OptionComponent.ɵfac = function OptionComponent_Factory(t) { return new (t || OptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    OptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionComponent, selectors: [["app-option"]], inputs: { value: "value", url: "url" }, ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "option"]], template: function OptionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.no-result[_nghost-%COMP%] {\n  pointer-events: none;\n}\n\n.option[_ngcontent-%COMP%] {\n  padding: 0.8rem 1rem;\n  cursor: pointer;\n  display: block;\n}\n\n[_nghost-%COMP%]:first-child   .option[_ngcontent-%COMP%] {\n  border-top-left-radius: 0.35rem;\n  border-top-right-radius: 0.35rem;\n}\n\n[_nghost-%COMP%]:last-child   .option[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 0.35rem;\n  border-bottom-right-radius: 0.35rem;\n}\n\n.option[_ngcontent-%COMP%]:hover {\n  background-color: #F5F5F5;\n}\n\n.first-active-item[_nghost-%COMP%]   .option[_ngcontent-%COMP%] {\n  background-color: #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlL29wdGlvbi9vcHRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFFSSx5QkFBeUI7QUFBN0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hdXRvY29tcGxldGUvb3B0aW9uL29wdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0Lm5vLXJlc3VsdCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ub3B0aW9uIHtcbiAgcGFkZGluZzogMC44cmVtIDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjpob3N0OmZpcnN0LWNoaWxkIC5vcHRpb24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjM1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC4zNXJlbTtcbn1cblxuOmhvc3Q6bGFzdC1jaGlsZCAub3B0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC4zNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuMzVyZW07XG59XG5cbi5vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46aG9zdC5maXJzdC1hY3RpdmUtaXRlbSB7XG4gIC5vcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
    return OptionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-option',
                template: "\n    <div class=\"option\">\n      <ng-content></ng-content>\n    </div>\n  ",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./option.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/customizer.service */ "./src/app/shared/services/customizer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");








var _c0 = ["customizer"];
var _c1 = function (a0) { return { "selected": a0 }; };
function CustomizerComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_68_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); var color_r7 = ctx.$implicit; var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.customizerService.changeSidebarBGColor(color_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r7.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r7.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r7.code);
} }
function CustomizerComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_70_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var color_r10 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.customizerService.changeSidebarBGColor(color_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r10.class, " d-block rounded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r10.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r10.code);
} }
function CustomizerComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_77_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var color_r13 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.customizerService.changeSidebarTransparentBGColor(color_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("rounded ", color_r13.class, " ct-glass-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r13.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-image", color_r13.class);
} }
function CustomizerComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_85_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); var img_r16 = ctx.$implicit; var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.customizerService.changeSidebarBgImage(img_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r16.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, img_r16.active));
} }
function CustomizerComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_div_93_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); var color_r19 = ctx.$implicit; var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.customizerService.changeSidebarTransparentBGColor(color_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var color_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", color_r19.class, " d-block rounded  ct-color-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, color_r19.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bg-color", color_r19.class);
} }
var _c2 = function (a0) { return { "active": a0 }; };
function CustomizerComponent_div_114_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sidebar Width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeSidebarWidth("sidebar-sm"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.changeSidebarWidth("sidebar-md"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_div_114_Template_input_change_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.changeSidebarWidth("sidebar-lg"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Large");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r6.size === "sidebar-sm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c2, ctx_r6.size === "sidebar-md"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-md");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r6.size === "sidebar-lg"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r6.size === "sidebar-lg");
} }
var _c3 = function (a0) { return { open: a0 }; };
var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent(renderer, configService, customizerService) {
        this.renderer = renderer;
        this.configService = configService;
        this.customizerService = customizerService;
        this.isBgImageDisplay = true;
        this.isOpen = true;
        this.config = {};
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = this.configService.templateConf;
        this.isOpen = !this.config.layout.customizer.hidden;
        if (this.config.layout.sidebar.size) {
            this.size = this.config.layout.sidebar.size;
        }
    }
    CustomizerComponent.prototype.ngOnInit = function () {
    };
    CustomizerComponent.prototype.changeSidebarWidth = function (value) {
        this.size = value;
        this.customizerService.changeSidebarWidth(value);
    };
    CustomizerComponent.prototype.toggleCustomizer = function () {
        if (this.isOpen) {
            this.renderer.removeClass(this.customizer.nativeElement, "open");
            this.isOpen = false;
        }
        else {
            this.renderer.addClass(this.customizer.nativeElement, "open");
            this.isOpen = true;
        }
    };
    CustomizerComponent.prototype.closeCustomizer = function () {
        this.renderer.removeClass(this.customizer.nativeElement, "open");
        this.isOpen = false;
    };
    CustomizerComponent.prototype.bgImageDisplay = function (e) {
        if (e.target.checked) {
            this.isBgImageDisplay = true;
        }
        else {
            this.isBgImageDisplay = false;
        }
        //emit event to FUll Layout
        this.customizerService.bgImageDisplay(e);
    };
    CustomizerComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    CustomizerComponent.ɵfac = function CustomizerComponent_Factory(t) { return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"])); };
    CustomizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizerComponent, selectors: [["app-customizer"]], viewQuery: function CustomizerComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customizer = _t.first);
        } }, outputs: { directionEvent: "directionEvent" }, decls: 115, vars: 17, consts: [[1, "customizer", "d-none", "d-lg-none", "d-xl-block", 3, "ngClass"], ["customizer", ""], [1, "customizer-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["id", "customizer-toggle-icon", 1, "customizer-toggle", "bg-primary", 3, "click"], [1, "ft-settings", "font-medium-1", "spinner", "white", "align-middle"], ["data-ps-id", "df6a5ce4-a175-9172-4402-dabd98fc9c0a", 1, "customizer-content", "p-3", "ps-container", "ps-theme-dark", 3, "perfectScrollbar"], [1, "text-uppercase"], [1, "ct-layout"], [1, "mb-3", "d-flex", "align-items-center"], [1, "ft-layout", "font-medium-2", "mr-2"], [1, "layout-switch"], [1, "radio", "radio-sm", "d-inline-block", "light-layout", "mr-3"], ["id", "ll-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "ll-switch"], [1, "radio", "radio-sm", "d-inline-block", "dark-layout", "mr-3"], ["id", "dl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "dl-switch"], [1, "radio", "radio-sm", "d-inline-block", "transparent-layout"], ["id", "tl-switch", "type", "radio", "name", "layout-switch", 3, "checked", "click"], ["for", "tl-switch"], [1, "ct-menu-type"], [1, "ft-credit-card", "font-medium-2", "mr-2"], [1, "menu-switch"], [1, "radio", "radio-sm", "d-inline-block", "menu-side", "mr-3"], ["id", "menu-side", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-side"], [1, "radio", "radio-sm", "d-inline-block", "menu-top"], ["id", "menu-top", "type", "radio", "name", "menu-switch", 3, "checked", "click"], ["for", "menu-top"], [1, "ct-navbar-type"], [1, "ft-more-horizontal", "font-medium-2", "mr-2"], [1, "navbar-switch"], [1, "radio", "radio-sm", "d-inline-block", "nav-static", "mr-3"], ["id", "nav-static", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-static"], [1, "radio", "radio-sm", "d-inline-block", "nav-fixed"], ["id", "nav-fixed", "type", "radio", "name", "navbar-switch", 3, "checked", "click"], ["for", "nav-fixed"], [1, "ct-bg-color"], [1, "sb-options", "d-flex", "align-items-center", "mb-3"], [1, "ft-droplet", "font-medium-2", "mr-2"], [1, "cz-bg-color", "sb-color-options"], [1, "row", "mb-3"], ["class", "col px-2", 4, "ngFor", "ngForOf"], [1, "row"], [1, "tl-bg-img"], [1, "d-flex", "align-items-center", "mb-3"], [1, "ft-star", "font-medium-2", "mr-2"], [1, "cz-tl-bg-image", "row"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "ct-bg-image"], [1, "sb-bg-img", "d-flex", "align-items-center", "mb-3"], [1, "ft-sidebar", "font-medium-2", "mr-2"], [1, "cz-bg-image", "row", "sb-bg-img"], ["class", "col-2 px-2", 4, "ngFor", "ngForOf"], [1, "tl-color-option"], [1, "tl-color-options", "d-flex", "align-items-center", "mb-3"], [1, "cz-tl-bg-color"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "ct-bg-image-toggler"], [1, "togglebutton", "toggle-sb-bg-img"], [1, "float-right"], [1, "checkbox"], ["id", "sidebar-bg-img", "type", "checkbox", "checked", "", 1, "cz-bg-image-display", 3, "change"], ["for", "sidebar-bg-img"], [1, "ct-compact-toggler"], [1, "togglebutton"], ["id", "cz-compact-menu", "type", "checkbox", 1, "cz-compact-menu", 3, "checked", "change"], ["for", "cz-compact-menu"], ["class", "ct-sidebar-size", 4, "ngIf"], [1, "col", "px-2"], [2, "width", "30px", "height", "30px", 3, "ngClass", "click"], [1, "col-sm-3"], [3, "ngClass", "click"], [1, "col-2", "px-2"], ["alt", "sidebar bg image", "width", "90", 1, "rounded", 3, "src", "ngClass", "click"], [1, "col"], [1, "ct-sidebar-size"], ["id", "cz-sidebar-width", "data-toggle", "buttons", 1, "cz-sidebar-width", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-primary", 3, "ngClass"], ["id", "cz-btn-radio-1", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-sm", 3, "checked", "change"], ["id", "cz-btn-radio-2", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-md", 3, "checked", "change"], ["id", "cz-btn-radio-3", "type", "radio", "name", "cz-btn-radio", "value", "sidebar-lg", 3, "checked", "change"]], template: function CustomizerComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() { return ctx.closeCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_4_listener() { return ctx.toggleCustomizer(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Theme Customizer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customize & Preview in Real Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Layout Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_19_listener() { return ctx.customizerService.switchLayout("light", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_23_listener() { return ctx.customizerService.switchLayout("dark", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_27_listener() { return ctx.customizerService.switchLayout("transparent", ctx.isBgImageDisplay); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Navigation Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_38_listener() { return ctx.customizerService.toggleMenuPosition("Side"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vertical");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_42_listener() { return ctx.customizerService.toggleMenuPosition("Top"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h6", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Navbar Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_53_listener() { return ctx.customizerService.toggleNavbarType("Static"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomizerComponent_Template_input_click_57_listener() { return ctx.customizerService.toggleNavbarType("Fixed"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h6", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sidebar Color Options");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, CustomizerComponent_div_68_Template, 2, 7, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, CustomizerComponent_div_70_Template, 2, 7, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h6", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Background Colors with Shades");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, CustomizerComponent_div_77_Template, 2, 7, "div", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h6", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sidebar Bg Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CustomizerComponent_div_85_Template, 2, 4, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Background Colors");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CustomizerComponent_div_93_Template, 2, 7, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sidebar Bg Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "input", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_102_listener($event) { return ctx.bgImageDisplay($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "label", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Compact Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "input", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CustomizerComponent_Template_input_change_112_listener($event) { return ctx.customizerService.toggleCompactMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "label", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, CustomizerComponent_div_114_Template, 17, 12, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.isOpen));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Light");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Dark");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.variant === "Transparent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.menuPosition === "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Static");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.navbar.type === "Fixed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutGradientBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutSolidBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColorsWithShades);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.lightDarkLayoutBGImages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.customizerService.transparentLayoutBGColors);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.config.layout.sidebar.collapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.config.layout.sidebar.collapsed);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return CustomizerComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-customizer",
                templateUrl: "./customizer.component.html",
                styleUrls: ["./customizer.component.scss"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__["CustomizerService"] }]; }, { customizer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["customizer"]
        }], directionEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/data/template-search.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data/template-search.ts ***!
  \************************************************/
/*! exports provided: LISTITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LISTITEMS", function() { return LISTITEMS; });
var LISTITEMS = [
    { "url": "/dashboard/dashboard1", "name": "Dashboard 1", "icon": "ft-home" },
    { "url": "/dashboard/dashboard2", "name": "Dashboard 2", "icon": "ft-home" },
    { "url": "/uikit/colorpalettes", "name": "Color Palette", "icon": "ft-droplet" },
    { "url": "/inbox", "name": "Email", "icon": "ft-mail" },
    { "url": "/chat", "name": "Chat", "icon": "ft-message-square" },
    { "url": "/taskboard", "name": "Task Board", "icon": "ft-file-text" },
    { "url": "/calendar", "name": "Calendar", "icon": "ft-calendar" },
    { "url": "/uikit/grids", "name": "Grid", "icon": "ft-grid" },
    { "url": "/uikit/typography", "name": "Typography", "icon": "ft-type" },
    { "url": "/uikit/syntaxhighlighter", "name": "Syntax Highlighter", "icon": "ft-edit-1" },
    { "url": "/uikit/helperclasses", "name": "Helper Classes", "icon": "ft-help-circle" },
    { "url": "/uikit/textutilities", "name": "Text Utilities", "icon": "ft-underline" },
    { "url": "/uikit/feather", "name": "Feather Icon", "icon": "ft-feather" },
    { "url": "/uikit/font-awesome", "name": "Font Awesome Icon", "icon": "ft-flag" },
    { "url": "/uikit/simple-line", "name": "Simple Line Icon", "icon": "ft-navigation" },
    { "url": "/components/buttons", "name": "Buttons", "icon": "ft-plus-circle" },
    { "url": "/components/alerts", "name": "Alerts", "icon": "ft-alert-triangle" },
    { "url": "/components/badges", "name": "Badges", "icon": "ft-square" },
    { "url": "/components/dropdowns", "name": "Dropdowns", "icon": "ft-pocket" },
    { "url": "/components/media", "name": "Media Objects", "icon": "ft-image" },
    { "url": "/components/pagination", "name": "Pagination", "icon": "ft-chevrons-right" },
    { "url": "/components/progress", "name": "Progress Bars", "icon": "ft-sliders" },
    { "url": "/components/models", "name": "Modals", "icon": "ft-layout" },
    { "url": "/components/collapse", "name": "Collapse", "icon": "ft-minimize" },
    { "url": "/components/lists", "name": "List Group", "icon": "ft-list" },
    { "url": "/components/accordion", "name": "Accordion", "icon": "ft-map" },
    { "url": "/components/carousel", "name": "Carousel", "icon": "ft-map" },
    { "url": "/forms/datepicker", "name": "Datepicker", "icon": "ft-calendar" },
    { "url": "/components/popover", "name": "Popover", "icon": "ft-message-square" },
    { "url": "/components/rating", "name": "Rating", "icon": "ft-award" },
    { "url": "/tables/tables", "name": "Tables", "icon": "ft-align-justify" },
    { "url": "/components/tabs", "name": "Tabs", "icon": "ft-server" },
    { "url": "/forms/timepicker", "name": "Tabs", "icon": "ft-clock" },
    { "url": "/components/tooltip", "name": "Tooltip", "icon": "ft-message-square" },
    { "url": "/components/typeahead", "name": "Typeahead", "icon": "ft-type" },
    { "url": "/components/sweetalerts", "name": "Sweet Alert", "icon": "ft-alert-triangle" },
    { "url": "/components/toastr", "name": "Toastr", "icon": "ft-map" },
    { "url": "/forms/select", "name": "Select", "icon": "ft-chevrons-down" },
    { "url": "/components/nouislider", "name": "NoUI Slider", "icon": "ft-sliders" },
    { "url": "/forms/editor", "name": "Editor", "icon": "ft-edit" },
    { "url": "/components/upload", "name": "Upload", "icon": "ft-upload" },
    { "url": "/components/dragndrop", "name": "Drag and Drop", "icon": "ft-copy" },
    { "url": "/components/tour", "name": "Tour", "icon": "ft-send" },
    { "url": "/components/cropper", "name": "Image Cropper", "icon": "ft-crop" },
    { "url": "/forms/tags", "name": "Input Tags", "icon": "ft-tag" },
    { "url": "/forms/switch", "name": "Switch", "icon": "ft-toggle-left" },
    { "url": "/forms/inputs", "name": "Form Inputs", "icon": "ft-file-text" },
    { "url": "/forms/input-groups", "name": "Form Input Groups", "icon": "ft-book-open" },
    { "url": "/forms/radio", "name": "Radio", "icon": "ft-target" },
    { "url": "/forms/checkbox", "name": "Checkbox", "icon": "ft-check-square" },
    { "url": "/forms/layout", "name": "Form Layouts", "icon": "ft-layout" },
    { "url": "/forms/validation", "name": "Form Validation", "icon": "ft-check-circle" },
    { "url": "/forms/archwizard", "name": "Form Wizard", "icon": "ft-layers" },
    { "url": "/tables/basic", "name": "Basic Tables", "icon": "ft-sidebar" },
    { "url": "/tables/extended", "name": "Extended Tables", "icon": "ft-grid" },
    { "url": "/datatables", "name": "DataTables", "icon": "ft-layout" },
    { "url": "/cards/basic", "name": "Basic Cards", "icon": "ft-layers" },
    { "url": "/cards/advanced", "name": "Advanced Cards", "icon": "ft-grid" },
    { "url": "/maps/google", "name": "Maps", "icon": "ft-map" },
    { "url": "/charts/ngx", "name": "NGX Charts", "icon": "ft-bar-chart-2" },
    { "url": "/charts/chartjs", "name": "ChartJs", "icon": "ft-pie-chart" },
    { "url": "/charts/chartist", "name": "Chartist", "icon": "ft-bar-chart-line" },
    { "url": "/charts/apex", "name": "Apex", "icon": "ft-bar-chart-line" },
    { "url": "/pages/forgotpassword", "name": "Forgot Password", "icon": "ft-alert-octagon" },
    { "url": "/pages/login", "name": "Login", "icon": "ft-log-in" },
    { "url": "/pages/register", "name": "Register", "icon": "ft-user-plus" },
    { "url": "/pages/lockscreen", "name": "Lock Screen", "icon": "ft-lock" },
    { "url": "/pages/horizontaltimeline", "name": "Horizontal Timeline", "icon": "ft-credit-card" },
    { "url": "/pages/timeline-vertical-center", "name": "Vertical Timeline Center", "icon": "ft-sidebar" },
    { "url": "/pages/timeline-vertical-left", "name": "Vertical Timeline Left", "icon": "ft-sidebar" },
    { "url": "/pages/timeline-vertical-right", "name": "Vertical Timeline Right", "icon": "ft-sidebar" },
    { "url": "/pages/account-settings", "name": "Account Settings", "icon": "ft-settings" },
    { "url": "/pages/profile", "name": "User Profile", "icon": "ft-user" },
    { "url": "/pages/invoice", "name": "Invoice", "icon": "ft-file-text" },
    { "url": "/pages/error", "name": "Error", "icon": "ft-alert-triangle" },
    { "url": "/pages/comingsoon", "name": "Coming Soon", "icon": "ft-clock" },
    { "url": "/pages/maintenance", "name": "Maintenance", "icon": "ft-settings" },
    { "url": "/pages/gallery", "name": "Gallery", "icon": "ft-image" },
    { "url": "/pages/search", "name": "Search", "icon": "ft-search" },
    { "url": "/pages/faq", "name": "FAQ", "icon": "ft-help-circle" },
    { "url": "/pages/kb", "name": "Knowledge Base", "icon": "ft-info" },
    { "url": "/pages/users-list", "name": "Users List", "icon": "ft-search" },
    { "url": "/pages/users-view", "name": "Users View", "icon": "ft-search" },
    { "url": "/pages/users-edit", "name": "Users Edit", "icon": "ft-search" }
];


/***/ }),

/***/ "./src/app/shared/directives/sidebar-anchor-toggle.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: SidebarAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarAnchorToggleDirective", function() { return SidebarAnchorToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-link.directive */ "./src/app/shared/directives/sidebar-link.directive.ts");




var SidebarAnchorToggleDirective = /** @class */ (function () {
    function SidebarAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    SidebarAnchorToggleDirective.prototype.onClick = function () {
        this.navlink.toggle();
    };
    SidebarAnchorToggleDirective.ɵfac = function SidebarAnchorToggleDirective_Factory(t) { return new (t || SidebarAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"])); };
    SidebarAnchorToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarAnchorToggleDirective, selectors: [["", "appSidebarAnchorToggle", ""]], hostBindings: function SidebarAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarAnchorToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } } });
    return SidebarAnchorToggleDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarAnchorToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appSidebarAnchorToggle]"
            }]
    }], function () { return [{ type: _sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/sidebar-dropdown.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: SidebarDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDropdownDirective", function() { return SidebarDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var SidebarDropdownDirective = /** @class */ (function () {
    function SidebarDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    SidebarDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    SidebarDropdownDirective.ɵfac = function SidebarDropdownDirective_Factory(t) { return new (t || SidebarDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    SidebarDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDropdownDirective, selectors: [["", "appSidebarDropdown", ""]] });
    return SidebarDropdownDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appSidebarDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/sidebar-link.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/sidebar-link.directive.ts ***!
  \*************************************************************/
/*! exports provided: SidebarLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLinkDirective", function() { return SidebarLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");




var SidebarLinkDirective = /** @class */ (function () {
    function SidebarLinkDirective(sideNav) {
        this.sideNav = sideNav;
    }
    Object.defineProperty(SidebarLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "sidebarGroupActive", {
        get: function () {
            return this._sidebarGroupActive;
        },
        set: function (value) {
            this._sidebarGroupActive = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SidebarLinkDirective.prototype, "navCollapsedOpen", {
        get: function () {
            return this._navCollapsedOpen;
        },
        set: function (value) {
            this._navCollapsedOpen = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarLinkDirective.prototype.ngOnInit = function () {
        this.sideNav.addLink(this);
    };
    SidebarLinkDirective.prototype.ngOnDestroy = function () {
    };
    //when side menu (vertical menu) item gets clicked
    SidebarLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
        if (this.open) {
            this.sideNav.closeOtherLinks(this);
        }
        if (!this.open && this.level.toString() === "1" && this.hasSub) {
            this.sidebarGroupActive = false;
        }
    };
    SidebarLinkDirective.ɵfac = function SidebarLinkDirective_Factory(t) { return new (t || SidebarLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"])); };
    SidebarLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarLinkDirective, selectors: [["", "appSidebarlink", ""]], hostVars: 6, hostBindings: function SidebarLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open)("sidebar-group-active", ctx.sidebarGroupActive)("nav-collapsed-open", ctx.navCollapsedOpen);
        } }, inputs: { parent: "parent", level: "level", hasSub: "hasSub", path: "path", open: "open", sidebarGroupActive: "sidebarGroupActive", navCollapsedOpen: "navCollapsedOpen" } });
    return SidebarLinkDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appSidebarlink]"
            }]
    }], function () { return [{ type: _sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_sidebar_directive__WEBPACK_IMPORTED_MODULE_1__["SidebarDirective"]]
            }] }]; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasSub: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sidebarGroupActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar-group-active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], navCollapsedOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.nav-collapsed-open']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/sidebar.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/sidebar.directive.ts ***!
  \********************************************************/
/*! exports provided: SidebarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDirective", function() { return SidebarDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








var SidebarDirective = /** @class */ (function () {
    function SidebarDirective(cdr, router, configService, layoutService) {
        this.cdr = cdr;
        this.router = router;
        this.configService = configService;
        this.layoutService = layoutService;
        this.navlinks = [];
        this.config = {};
        this.mouseEnter = false;
        this.sidebarExpanded = true;
        this.config = this.configService.templateConf;
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
    }
    Object.defineProperty(SidebarDirective.prototype, "navExpanded", {
        get: function () {
            return this._navExpanded;
        },
        set: function (value) {
            this._navExpanded = value;
        },
        enumerable: false,
        configurable: true
    });
    SidebarDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    SidebarDirective.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    //load layout when changes in the config
    SidebarDirective.prototype.loadLayout = function () {
        this.sidebarExpanded = !this.config.layout.sidebar.collapsed;
        if (this.config.layout.sidebar.collapsed && !this.mouseEnter) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
        else {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    //add menu links to the link list
    SidebarDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    //close all other menu items other than active one
    SidebarDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.open = false;
                link.sidebarGroupActive = false;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === true) {
                link.sidebarGroupActive = true;
            }
            else if (link === openLink && (openLink.level.toString() === "1") && link.hasSub === false) {
                link.sidebarGroupActive = false;
                link.open = false;
            }
            else if (link === openLink && openLink.level.toString() != "1" && link.hasSub === false) {
                link.open = false;
                link.sidebarGroupActive = false;
                return;
            }
        });
    };
    SidebarDirective.prototype.ngAfterViewInit = function () {
    };
    // call when sidebar toggle is collapsed but still in expand mode on mouse hover
    SidebarDirective.prototype.setSidebarGroupActive = function () {
        var _this = this;
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_1 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_1) {
                var parent_1 = this.navlinks.find(function (link) { return link.parent === matched_1.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_1) {
                    parent_1.sidebarGroupActive = true;
                    parent_1.navCollapsedOpen = false;
                    parent_1.open = true;
                }
            }
        }
    };
    // call when sidebar toggle is collapsed and is in collapse mode on mouse out
    SidebarDirective.prototype.setSidebarGroupActiveCollapsed = function () {
        var _this = this;
        this.closeOtherLinks(this.navlinks.find(function (link) { return link.path === _this.router.url; }));
        if (this.navlinks.length > 0) {
            this.navlinks.forEach(function (link) {
                link.sidebarGroupActive = false;
                link.navCollapsedOpen = false;
            });
            var matched_2 = this.navlinks.find(function (link) { return link.path === _this.router.url; });
            if (matched_2) {
                var parent_2 = this.navlinks.find(function (link) { return link.parent === matched_2.parent && link.level.toString() === "1" && link.hasSub === true; });
                if (parent_2) {
                    parent_2.sidebarGroupActive = true;
                    parent_2.navCollapsedOpen = true;
                    parent_2.open = false;
                }
            }
        }
    };
    // mouse enter event of side menu
    SidebarDirective.prototype.onMouseOver = function (e) {
        this.mouseEnter = true;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActive();
            this.navExpanded = true;
        }
    };
    // mouse leave event of side menu
    SidebarDirective.prototype.onMouseOut = function (e) {
        this.mouseEnter = false;
        if (this.config.layout.sidebar.collapsed) {
            this.setSidebarGroupActiveCollapsed();
            this.navExpanded = false;
        }
    };
    SidebarDirective.ɵfac = function SidebarDirective_Factory(t) { return new (t || SidebarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"])); };
    SidebarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SidebarDirective, selectors: [["", "appSidebar", ""]], hostVars: 2, hostBindings: function SidebarDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SidebarDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseleave", function SidebarDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx.navExpanded);
        } }, inputs: { navExpanded: "navExpanded" } });
    return SidebarDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appSidebar]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }]; }, { navExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.expanded"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter", ["$event"]]
        }], onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseleave", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);



var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) { return new (t || ToggleFullscreenDirective)(); };
    ToggleFullscreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToggleFullscreenDirective, selectors: [["", "appToggleFullscreen", ""]], hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
        } } });
    return ToggleFullscreenDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullscreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToggleFullscreen]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/topmenu-anchor-toggle.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-anchor-toggle.directive.ts ***!
  \**********************************************************************/
/*! exports provided: TopMenuAnchorToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuAnchorToggleDirective", function() { return TopMenuAnchorToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmenu-link.directive */ "./src/app/shared/directives/topmenu-link.directive.ts");




var TopMenuAnchorToggleDirective = /** @class */ (function () {
    function TopMenuAnchorToggleDirective(navlink) {
        this.navlink = navlink;
    }
    // @HostListener("click", ["$event"])
    // onClick() {
    //   this.navlink.toggle();
    // }
    TopMenuAnchorToggleDirective.prototype.onMouseOver = function (e) {
        this.navlink.openDropdown();
    };
    TopMenuAnchorToggleDirective.ɵfac = function TopMenuAnchorToggleDirective_Factory(t) { return new (t || TopMenuAnchorToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"])); };
    TopMenuAnchorToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuAnchorToggleDirective, selectors: [["", "appTopMenuAnchorToggle", ""]], hostBindings: function TopMenuAnchorToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TopMenuAnchorToggleDirective_mouseenter_HostBindingHandler($event) { return ctx.onMouseOver($event); });
        } } });
    return TopMenuAnchorToggleDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuAnchorToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTopMenuAnchorToggle]"
            }]
    }], function () { return [{ type: _topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuLinkDirective"]]
            }] }]; }, { onMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseenter", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/topmenu-dropdown.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: TopMenuDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuDropdownDirective", function() { return TopMenuDropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




var TopMenuDropdownDirective = /** @class */ (function () {
    function TopMenuDropdownDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    TopMenuDropdownDirective.prototype.ngOnInit = function () {
        //write your code here!
    };
    TopMenuDropdownDirective.ɵfac = function TopMenuDropdownDirective_Factory(t) { return new (t || TopMenuDropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    TopMenuDropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDropdownDirective, selectors: [["", "appTopMenuDropdown", ""]] });
    return TopMenuDropdownDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuDropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTopMenuDropdown]'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/topmenu-link.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/topmenu-link.directive.ts ***!
  \*************************************************************/
/*! exports provided: TopMenuLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuLinkDirective", function() { return TopMenuLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _topmenu_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topmenu.directive */ "./src/app/shared/directives/topmenu.directive.ts");




var TopMenuLinkDirective = /** @class */ (function () {
    function TopMenuLinkDirective(topNav) {
        this.topNav = topNav;
    }
    Object.defineProperty(TopMenuLinkDirective.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            this._show = value;
            if (value) {
                this.topNav.closeOtherLinks(this);
            }
        },
        enumerable: false,
        configurable: true
    });
    TopMenuLinkDirective.prototype.ngOnInit = function () {
        this.topNav.addLink(this);
    };
    TopMenuLinkDirective.prototype.ngOnDestroy = function () {
    };
    // public toggle(): any {
    //   this.show = !this.show;
    // }
    TopMenuLinkDirective.prototype.openDropdown = function () {
        this.show = true;
    };
    TopMenuLinkDirective.ɵfac = function TopMenuLinkDirective_Factory(t) { return new (t || TopMenuLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"])); };
    TopMenuLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuLinkDirective, selectors: [["", "appTopMenulink", ""]], hostVars: 2, hostBindings: function TopMenuLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show);
        } }, inputs: { parent: "parent", level: "level", show: "show" } });
    return TopMenuLinkDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[appTopMenulink]"
            }]
    }], function () { return [{ type: _topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_topmenu_directive__WEBPACK_IMPORTED_MODULE_1__["TopMenuDirective"]]
            }] }]; }, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.show']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/topmenu.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/directives/topmenu.directive.ts ***!
  \********************************************************/
/*! exports provided: TopMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuDirective", function() { return TopMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var TopMenuDirective = /** @class */ (function () {
    function TopMenuDirective() {
        this.navlinks = [];
    }
    TopMenuDirective.prototype.ngOnInit = function () {
    };
    TopMenuDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    TopMenuDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link != openLink && (openLink.level.toString() === "1" || link.level === openLink.level)) {
                link.show = false;
            }
        });
    };
    TopMenuDirective.prototype.onMouseOut = function (e) {
        this.navlinks.forEach(function (link) {
            link.show = false;
        });
    };
    TopMenuDirective.ɵfac = function TopMenuDirective_Factory(t) { return new (t || TopMenuDirective)(); };
    TopMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TopMenuDirective, selectors: [["", "appTopMenu", ""]], hostBindings: function TopMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TopMenuDirective_mouseleave_HostBindingHandler($event) { return ctx.onMouseOut($event); });
        } } });
    return TopMenuDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopMenuDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[appTopMenu]' }]
    }], function () { return []; }, { onMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["mouseleave", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        //Variables
        this.currentDate = new Date();
    }
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 4, consts: [[1, "footer"], [1, "copyright", "clearfix", "text-muted", "m-0"], ["id", "pixinventLink", "href", "https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"], [1, "d-none", "d-sm-inline-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PIXINVENT");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ", All rights reserved.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.currentDate, "yyyy"), " ");
        } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/horizontal-menu/horizontal-menu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/horizontal-menu.component.ts ***!
  \*********************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation-routes.config */ "./src/app/shared/horizontal-menu/navigation-routes.config.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/topmenu-dropdown.directive */ "./src/app/shared/directives/topmenu-dropdown.directive.ts");
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/topmenu-link.directive */ "./src/app/shared/directives/topmenu-link.directive.ts");
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../directives/topmenu-anchor-toggle.directive */ "./src/app/shared/directives/topmenu-anchor-toggle.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");














var _c0 = function (a0) { return [a0]; };
function HorizontalMenuComponent_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuItem_r1.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, menuItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuItem_r1.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "dropdown-toggle dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r10.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuSubItem_r10.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", "dropdown-item d-flex align-items-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, menuSubItem_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r10.title));
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "dropdown-item d-flex align-items-center")("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, menuSubsubItem_r19.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, menuSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r19.title);
} }
var _c1 = function () { return { exact: true }; };
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_a_1_Template, 4, 8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 4, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r19 = ctx.$implicit;
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r18.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuSubsubItem_r19.isExternalLink)("ngIfElse", _r21);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_li_1_Template, 4, 6, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuSubItem_r10.submenu);
} }
function HorizontalMenuComponent_li_3_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_a_1_Template, 5, 7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_ul_4_li_1_a_2_Template, 5, 8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_ul_4_li_1_a_3_Template, 5, 10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_li_1_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r10 = ctx.$implicit;
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r9.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r1.title)("routerLinkActive", menuSubItem_r10.submenu.length != 0 ? "active" : "active")("ngClass", menuSubItem_r10.class === "dropdown-item" ? "" : "has-sub dropdown dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", menuSubItem_r10.class === "dropdown-item" ? "" : "dropdown-submenu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length === 0 && !menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r10.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r10.submenu.length > 0);
} }
function HorizontalMenuComponent_li_3_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_ul_4_li_1_Template, 5, 9, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r1.submenu);
} }
function HorizontalMenuComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HorizontalMenuComponent_li_3_a_1_Template, 5, 6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HorizontalMenuComponent_li_3_a_2_Template, 5, 7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_a_3_Template, 5, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalMenuComponent_li_3_ul_4_Template, 2, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r0.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r1.title)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, menuItem_r1.class))("routerLinkActive", menuItem_r1.submenu.length != 0 ? "active" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-menu", menuItem_r1.class === "dropdown nav-item" ? "dropdown" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length === 0 && !menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.submenu.length > 0);
} }
var _c2 = function (a0, a1) { return { "navbar-sticky": a0, "navbar-fixed": a1 }; };
var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(layoutService, configService, cdr, router) {
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.router = router;
        this.config = {};
        this.level = 0;
        this.transparentBGClass = "";
        this.menuPosition = 'Side';
        this.config = this.configService.templateConf;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        this.menuItems = _navigation_routes_config__WEBPACK_IMPORTED_MODULE_1__["HROUTES"];
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    HorizontalMenuComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    };
    HorizontalMenuComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    HorizontalMenuComponent.ɵfac = function HorizontalMenuComponent_Factory(t) { return new (t || HorizontalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
    HorizontalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalMenuComponent, selectors: [["app-horizontal-menu"]], decls: 4, vars: 8, consts: [["role", "navigation", "data-menu", "menu-wrapper", "data-nav", "brand-center", 3, "ngClass"], ["data-menu", "menu-container", 1, "navbar-container", "main-menu-content", "center-layout"], ["appTopMenuDropdown", "", "id", "main-menu-navigation", "data-menu", "menu-navigation", 1, "navigation-main", "nav", "navbar-nav"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "dropdown-toggle nav-link d-flex align-items-center", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "data-toggle", "dropdown", "class", "nav-link d-flex align-items-center", 3, "href", 4, "ngIf"], ["appTopMenuDropdown", "", "class", "dropdown-menu", 4, "ngIf"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link", "d-flex", "align-items-center"], [3, "ngClass"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "routerLink"], ["target", "_blank", "data-toggle", "dropdown", 1, "nav-link", "d-flex", "align-items-center", 3, "href"], ["appTopMenuDropdown", "", 1, "dropdown-menu"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", 3, "parent", "level", "routerLinkActive", "ngClass"], ["appTopMenuAnchorToggle", "", 3, "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass", 4, "ngIf"], [3, "href", "ngClass", 4, "ngIf"], ["appTopMenuAnchorToggle", "", 3, "ngClass"], ["appTopMenuAnchorToggle", "", 3, "routerLink", "ngClass"], [3, "href", "ngClass"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], ["appTopMenulink", "", "data-menu", "", "data-toggle", "dropdown", "routerLinkActive", "active", 3, "parent", "level", "routerLinkActiveOptions"], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""], ["appTopMenuAnchorToggle", "", "data-toggle", "dropdown", 3, "ngClass", "routerLink"], [1, ""], ["data-toggle", "dropdown", "target", "_blank", 3, "ngClass", "href"]], template: function HorizontalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HorizontalMenuComponent_li_3_Template, 5, 13, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-shadow menu-border navbar-brand-center  ", ctx.transparentBGClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Top" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__["TopMenuDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_7__["TopMenuLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_8__["TopMenuAnchorToggleDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ob3Jpem9udGFsLW1lbnUvaG9yaXpvbnRhbC1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return HorizontalMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HorizontalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-horizontal-menu',
                templateUrl: './horizontal-menu.component.html',
                styleUrls: ['./horizontal-menu.component.scss']
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/horizontal-menu/navigation-routes.config.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/horizontal-menu/navigation-routes.config.ts ***!
  \********************************************************************/
/*! exports provided: HROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HROUTES", function() { return HROUTES; });
var HROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard 1', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard 2', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Apps', icon: 'ft-box', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/inbox', title: 'Email', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat', title: 'Chat', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard', title: 'Task Board', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/calendar', title: 'Calendar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-briefcase', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Cards', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap Tables', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/tables/angular', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '/datatables', title: 'DataTables', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: []
            }
        ]
    },
    {
        path: '', title: 'Charts & Maps', icon: 'ft-bar-chart-2', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Charts', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                ]
            },
            {
                path: '', title: 'Maps', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            }
        ]
    },
    {
        path: '', title: 'Pages', icon: 'ft-file-text', class: 'dropdown nav-item has-sub', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', isExternalLink: false,
                submenu: [
                    { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: 'dropdown-item', isExternalLink: false, submenu: [] }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_template_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/template-search */ "./src/app/shared/data/template-search.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib_esmodule/index.js");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.directive */ "./src/app/shared/components/autocomplete/autocomplete.directive.ts");
/* harmony import */ var _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/autocomplete/autocomplete.component */ "./src/app/shared/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/autocomplete/autocomplete-content.directive */ "./src/app/shared/components/autocomplete/autocomplete-content.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/autocomplete/option/option.component */ "./src/app/shared/components/autocomplete/option/option.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");























var _c0 = ["search"];
var _c1 = ["searchResults"];
function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-option", 111, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template_app_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var option_r8 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.redirectTo(option_r8.url); })("mouseenter", function NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template_app_option_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.removeActiveClass(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", option_r8.url)("value", option_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", option_r8.icon, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r8.name);
} }
function NavbarComponent_ng_template_21_ng_container_0_app_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No results found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_21_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_template_21_ng_container_0_app_option_1_Template, 7, 6, "app-option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_template_21_ng_container_0_app_option_2_Template, 2, 0, "app-option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var result_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", result_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !result_r5.length);
} }
function NavbarComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_ng_template_21_ng_container_0_Template, 3, 2, "ng-container", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "filter");
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r2.listItems, ctx_r2.control.value));
} }
var _c2 = function () { return ["/"]; };
function NavbarComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "APEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var _c3 = function (a0, a1, a2, a3) { return { "navbar-brand-center": a0, "navbar-static": a1, "navbar-sticky": a2, "fixed-top": a3 }; };
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, layoutService, router, configService, cdr) {
        var _this = this;
        this.translate = translate;
        this.layoutService = layoutService;
        this.router = router;
        this.configService = configService;
        this.cdr = cdr;
        this.currentLang = "en";
        this.selectedLanguageText = "English";
        this.selectedLanguageFlag = "./assets/img/flags/us.png";
        this.toggleClass = "ft-maximize";
        this.placement = "bottom-right";
        this.logoUrl = 'assets/img/logo.png';
        this.menuPosition = 'Side';
        this.isSmallScreen = false;
        this.searchOpenClass = "";
        this.transparentBGClass = "";
        this.hideSidebar = true;
        this.isCollapsed = true;
        this.toggleHideSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.seachTextEmpty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listItems = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.config = {};
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : "en");
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.layoutSub = layoutService.toggleSidebar$.subscribe(function (isShow) {
            _this.hideSidebar = !isShow;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listItems = _data_template_search__WEBPACK_IMPORTED_MODULE_5__["LISTITEMS"];
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    NavbarComponent.prototype.onResize = function (event) {
        this.innerWidth = event.target.innerWidth;
        if (this.innerWidth < 1200) {
            this.isSmallScreen = true;
        }
        else {
            this.isSmallScreen = false;
        }
    };
    NavbarComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition && this.config.layout.menuPosition.toString().trim() != "") {
            this.menuPosition = this.config.layout.menuPosition;
        }
        if (this.config.layout.variant === "Light") {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (this.config.layout.variant === "Transparent") {
            this.transparentBGClass = this.config.layout.sidebar.backgroundColor;
        }
        else {
            this.transparentBGClass = "";
        }
    };
    NavbarComponent.prototype.onSearchKey = function (event) {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.add('first-active-item');
        }
        if (event.target.value === "") {
            this.seachTextEmpty.emit(true);
        }
        else {
            this.seachTextEmpty.emit(false);
        }
    };
    NavbarComponent.prototype.removeActiveClass = function () {
        if (this.searchResults && this.searchResults.length > 0) {
            this.searchResults.first.host.nativeElement.classList.remove('first-active-item');
        }
    };
    NavbarComponent.prototype.onEscEvent = function () {
        this.control.setValue("");
        this.searchOpenClass = '';
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.onEnter = function () {
        if (this.searchResults && this.searchResults.length > 0) {
            var url = this.searchResults.first.url;
            if (url && url != '') {
                this.control.setValue("");
                this.searchOpenClass = '';
                this.router.navigate([url]);
                this.seachTextEmpty.emit(true);
            }
        }
    };
    NavbarComponent.prototype.redirectTo = function (value) {
        this.router.navigate([value]);
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
        if (language === 'en') {
            this.selectedLanguageText = "English";
            this.selectedLanguageFlag = "./assets/img/flags/us.png";
        }
        else if (language === 'es') {
            this.selectedLanguageText = "Spanish";
            this.selectedLanguageFlag = "./assets/img/flags/es.png";
        }
        else if (language === 'pt') {
            this.selectedLanguageText = "Portuguese";
            this.selectedLanguageFlag = "./assets/img/flags/pt.png";
        }
        else if (language === 'de') {
            this.selectedLanguageText = "German";
            this.selectedLanguageFlag = "./assets/img/flags/de.png";
        }
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === "ft-maximize") {
            this.toggleClass = "ft-minimize";
        }
        else {
            this.toggleClass = "ft-maximize";
        }
    };
    NavbarComponent.prototype.toggleSearchOpenClass = function (display) {
        var _this = this;
        this.control.setValue("");
        if (display) {
            this.searchOpenClass = 'open';
            setTimeout(function () {
                _this.searchElement.nativeElement.focus();
            }, 0);
        }
        else {
            this.searchOpenClass = '';
        }
        this.seachTextEmpty.emit(true);
    };
    NavbarComponent.prototype.toggleNotificationSidebar = function () {
        this.layoutService.toggleNotificationSidebar(true);
    };
    NavbarComponent.prototype.toggleSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(this.hideSidebar);
    };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchResults = _t);
        } }, hostBindings: function NavbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, outputs: { toggleHideSidebar: "toggleHideSidebar", seachTextEmpty: "seachTextEmpty" }, decls: 224, vars: 20, consts: [[3, "ngClass"], [1, "container-fluid", "navbar-wrapper"], [1, "navbar-header", "d-flex"], ["data-toggle", "collapse", 1, "navbar-toggle", "menu-toggle", "d-xl-none", "d-block", "float-left", "align-items-center", "justify-content-center", 3, "click"], [1, "ft-menu", "font-medium-3"], [1, "navbar-nav", 3, "clickOutside"], [1, "nav-item", "mr-2", "d-none", "d-lg-block"], ["id", "navbar-fullscreen", "href", "javascript:;", "appToggleFullscreen", "", 1, "nav-link", "apptogglefullscreen", 3, "click"], [1, "nav-item", "nav-search"], ["id", "navbar-search", "href", "javascript:", 1, "nav-link", "nav-link-search", 3, "click"], [1, "ft-search", "font-medium-3"], [1, "search-input-icon"], ["type", "text", "placeholder", "Explore Apex...", "tabindex", "0", "autofocus", "", "data-search", "template-search", 1, "input", 3, "formControl", "appAutocomplete", "keyup.enter", "keydown.esc", "keyup"], ["search", ""], [1, "search-input-close", 3, "click"], [1, "ft-x", "font-medium-3"], ["autocomplete", "appAutocomplete"], ["appAutocompleteContent", ""], [1, "navbar-brand-center"], [1, "navbar-header"], [1, "navbar-nav"], [1, "nav-item"], [1, "logo"], ["class", "logo-text", 3, "routerLink", 4, "ngIf"], [1, "navbar-container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "d-block"], ["display", "dynamic", "ngbDropdown", "", 1, "i18n-dropdown", "dropdown", "nav-item", "mr-2"], ["id", "dropdown-flag", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "d-flex", "align-items-center", "dropdown-toggle", "dropdown-language"], ["alt", "flag", 1, "langimg", "selected-flag", 3, "src"], [1, "selected-language", "d-md-flex", "d-none"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown-flag", 1, "dropdown-menu", "dropdown-menu-right", "text-left"], ["href", "javascript:;", "data-language", "en", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/us.png", "alt", "flag", 1, "langimg", "mr-2"], [1, "font-small-3"], ["href", "javascript:;", "data-language", "es", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/es.png", "alt", "flag", 1, "langimg", "mr-2"], ["href", "javascript:;", "data-language", "pt", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/pt.png", "alt", "flag", 1, "langimg", "mr-2"], ["href", "javascript:;", "data-language", "de", 1, "dropdown-item", 3, "click"], ["src", "./assets/img/flags/de.png", "alt", "flag", 1, "langimg", "mr-2"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item"], ["id", "drp-notification", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "dropdown-notification", "p-0", "mt-2"], [1, "ft-bell", "font-medium-3"], [1, "notification", "badge", "badge-pill", "badge-danger"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "dropdown-menu", "dropdown-menu-media", "dropdown-menu-right", "m-0", "overflow-hidden"], [1, "dropdown-menu-header"], [1, "dropdown-header", "d-flex", "justify-content-between", "m-0", "px-3", "py-2", "white", "bg-primary"], [1, "d-flex"], [1, "ft-bell", "font-medium-3", "d-flex", "align-items-center", "mr-2"], [1, "noti-title"], [1, "text-bold-400", "cursor-pointer"], [1, "scrollable-container", 3, "perfectScrollbar"], ["href", "javascript:void(0)", 1, "d-flex", "justify-content-between"], [1, "media", "d-flex", "align-items-center"], [1, "media-left"], [1, "mr-3"], ["src", "assets/img/portrait/small/avatar-s-20.png", "alt", "avatar", "height", "45", "width", "45", 1, "avatar"], [1, "media-body"], [1, "m-0"], [1, "grey", "lighten-1", "font-italic", "float-right"], [1, "noti-text"], [1, "noti-text", "font-small-3", "m-0"], ["src", "assets/img/portrait/small/avatar-s-11.png", "alt", "avatar", "height", "45", "width", "45", 1, "avatar"], ["href", "javascript:void(0)", 1, "d-flex", "justify-content-between", "read-notification"], [1, "media", "d-flex", "align-items-center", "py-0", "pr-0"], ["src", "assets/img/icons/sketch-mac-icon.png", "alt", "avatar", "height", "45", "width", "45"], [1, "media-right"], [1, "border-left"], [1, "px-4", "py-2", "border-bottom"], [1, "m-0", "text-bold-600"], [1, "px-4", "py-2", "text-center"], [1, "avatar", "bg-primary", "bg-lighten-3", "mr-3", "p-1"], [1, "avatar-content", "font-medium-2"], [1, "cursor-pointer"], [1, "media", "d-flex", "align-items-center", "justify-content-between"], [1, "custom-switch", "custom-control"], ["type", "checkbox", "id", "custom-switch-1111", "checked", "", 1, "custom-control-input"], ["for", "custom-switch-1111", 1, "custom-control-label", "mr-1"], [1, "d-flex", "justify-content-between", "cursor-pointer", "read-notification"], [1, "avatar", "bg-danger", "bg-lighten-4", "mr-3", "p-1"], [1, "ft-heart", "text-danger"], ["src", "assets/img/portrait/small/avatar-s-6.png", "alt", "avatar", "height", "45", "width", "45", 1, "avatar"], [1, "noti-text", "font-small-3", "text-bold-500", "m-0"], [1, "avatar", "bg-info", "bg-lighten-4", "mr-3", "p-1"], [1, "ft-align-left", "text-info"], ["src", "assets/img/portrait/small/avatar-s-7.png", "alt", "avatar", "height", "45", "width", "45", 1, "avatar"], [1, "dropdown-menu-footer"], [1, "noti-footer", "text-center", "cursor-pointer", "primary", "border-top", "text-bold-400", "py-1"], ["placement", "bottom-left", "display", "static", "ngbDropdown", "", 1, "dropdown", "nav-item", "mr-1"], ["id", "dropdownBasic2", "href", "javascript:;", "data-toggle", "dropdown", "ngbDropdownToggle", "", 1, "nav-link", "dropdown-toggle", "user-dropdown", "d-flex", "align-items-end"], [1, "user", "d-md-flex", "d-none", "mr-2"], [1, "text-right"], [1, "text-right", "text-muted", "font-small-3"], ["src", "assets/img/portrait/small/avatar-s-1.png", "alt", "avatar", "height", "35", "width", "35", 1, "avatar"], ["aria-labelledby", "dropdownBasic2", "ngbDropdownMenu", "", 1, "dropdown-menu", "text-left", "dropdown-menu-right", "m-0", "pb-0"], ["routerLink", "/chat", 1, "dropdown-item"], [1, "d-flex", "align-items-center"], [1, "ft-message-square", "mr-2"], ["routerLink", "/pages/profile", 1, "dropdown-item"], [1, "ft-edit", "mr-2"], ["routerLink", "/inbox", 1, "dropdown-item"], [1, "ft-mail", "mr-2"], [1, "dropdown-divider"], ["routerLink", "/pages/login", 1, "dropdown-item"], [1, "ft-power", "mr-2"], [1, "nav-item", "d-none", "d-lg-block", "mr-2", "mt-1"], [1, "nav-link", "notification-sidebar-toggle", 3, "click"], [1, "ft-align-right", "font-medium-3"], [4, "ngIf"], [3, "url", "value", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "no-result", 4, "ngIf"], [3, "url", "value", "click", "mouseenter"], ["searchResults", ""], [1, "d-flex", "align-items-center", "justify-content-between", "w-100"], [1, "d-flex", "align-items-center", "justify-content-start"], [1, "no-result"], [1, "logo-text", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 1, "logo-img", 3, "src"], [1, "text"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_3_listener() { return ctx.toggleSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function NavbarComponent_Template_ul_clickOutside_5_listener() { return ctx.toggleSearchOpenClass(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.ToggleClass(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.toggleSearchOpenClass(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_15_listener() { return ctx.onEnter(); })("keydown.esc", function NavbarComponent_Template_input_keydown_esc_15_listener() { return ctx.onEscEvent(); })("keyup", function NavbarComponent_Template_input_keyup_15_listener($event) { return ctx.onSearchKey($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_17_listener() { return ctx.toggleSearchOpenClass(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-autocomplete", null, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_ng_template_21_Template, 2, 4, "ng-template", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NavbarComponent_a_27_Template, 5, 3, "a", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_37_listener() { return ctx.ChangeLanguage("en"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "English");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_41_listener() { return ctx.ChangeLanguage("es"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Spanish");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_45_listener() { return ctx.ChangeLanguage("pt"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Portuguese");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_49_listener() { return ctx.ChangeLanguage("de"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "German");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "7 New Notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mark all as read");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Kate Young");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "5 mins ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "small", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Commented on your photo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h6", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Great Shot John! Really enjoying the composition on this piece. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Andrew Watts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "49 mins ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "small", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Liked your album: UI/UX Inspo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Update");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "small", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "MyBook v2.0.7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h6", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Update");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "LD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Registration done");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "6 hrs ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "New Offers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "label", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Application approved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "18 hrs ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Anna Lee");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "27 hrs ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "small", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Commented on your photo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h6", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Woah!Loving these colors! Keep it up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Report generated");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "35 hrs ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h6", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Oliver Wright");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "small", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "2 days ago");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "small", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Liked your album: UI/UX Inspo");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Read All Notifications ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "John Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Available");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "a", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Edit Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "a", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "My Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "div", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "a", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "a", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_222_listener() { return ctx.toggleNotificationSidebar(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("navbar navbar-expand-lg navbar-light header-navbar ", ctx.transparentBGClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](15, _c3, ctx.menuPosition === "Top", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Static", ctx.menuPosition === "Side" && (ctx.config == null ? null : ctx.config.layout.navbar.type) === "Fixed", ctx.isSmallScreen && ctx.menuPosition === "Top"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"](" ", ctx.toggleClass, " font-medium-3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("search-input ", ctx.searchOpenClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("appAutocomplete", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Top");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedLanguageFlag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedLanguageText);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideDirective"], _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_9__["ToggleFullscreenDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _components_autocomplete_autocomplete_directive__WEBPACK_IMPORTED_MODULE_10__["AutocompleteDirective"], _components_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_11__["AutocompleteComponent"], _components_autocomplete_autocomplete_content_directive__WEBPACK_IMPORTED_MODULE_12__["AutocompleteContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDropdownMenu"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_autocomplete_option_option_component__WEBPACK_IMPORTED_MODULE_15__["OptionComponent"]], pipes: [_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_2__["LayoutService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], searchResults: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['searchResults']
        }], toggleHideSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], seachTextEmpty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







function NotificationSidebarComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Activity");
} }
function NotificationSidebarComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "System Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "New Update Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Android Pie 9.0.0_r52v availabe (658MB).");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Download Now!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reminder!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "52 min ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Your meeting is scheduled with Mr. Derrick Walters at 16:00. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Snooze");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Recieved a File");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "4 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Christina Rogers sent you a file for the next conference. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Diamond.sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Voice Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "10 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Natalya Parker sent you a voice message.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Listen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Weather Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Hi John! It is a rainy day with 16\u00B0C.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Applications Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Gmail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Just now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Victoria Hampton sent you a mail and has a file attachment with it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Register.pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "MakeMyTrip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "7 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Your next flight for San Francisco will be on 24th March. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "CNN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "16 hours ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "U.S. investigating report says email account linked to CIA Director was hacked.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Read full article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Maps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "You visited Walmart Supercenter in Chicago.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Write a Review!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Updates Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "2 days ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "19 app updates found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NotificationSidebarComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Settings");
} }
function NotificationSidebarComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Use switches when looking for yes or no answers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Show recent activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "The \"for\" attribute is necessary to bind checkbox with the input.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Product Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Message and mail me on weekly product updates.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email on Follow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mail me when someone follows me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Announcements");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Receive all the news and announcements from my clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Date and Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Show date and time on top of every page.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Email on Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Mail me when someone comments on my article.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { open: a0 }; };
var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent(layoutService) {
        var _this = this;
        this.layoutService = layoutService;
        this.isOpen = false;
        this.layoutSub = layoutService.toggleNotiSidebar$.subscribe(function (open) {
            _this.isOpen = open;
        });
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
    };
    NotificationSidebarComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    NotificationSidebarComponent.prototype.onClose = function () {
        this.layoutService.toggleNotificationSidebar(false);
    };
    NotificationSidebarComponent.ɵfac = function NotificationSidebarComponent_Factory(t) { return new (t || NotificationSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"])); };
    NotificationSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationSidebarComponent, selectors: [["app-notification-sidebar"]], decls: 13, vars: 3, consts: [["id", "notification-sidebar", 1, "notification-sidebar", "d-none", "d-sm-none", "d-md-block", 3, "ngClass"], [1, "notification-sidebar-close", 3, "click"], [1, "ft-x", "font-medium-3", "grey", "darken-1"], [1, "side-nav", "notification-sidebar-content", 3, "perfectScrollbar"], [1, "row"], [1, "col-12", "notification-tab-content"], [1, "nav-item"], ["ngbTabTitle", "", "class", "nav-link"], ["ngbTabContent", ""], ["id", "activity-tab", "role", "tabpanel", "aria-expanded", "true", "aria-labelledby", "base-tab1", 1, "row", "tab-pane"], ["id", "activity", 1, "col-12"], [1, "my-2", "text-bold-500"], ["id", "timeline-1", 1, "timeline-left", "timeline-wrapper", "mb-3"], [1, "timeline"], [1, "timeline-line", "mt-4"], [1, "timeline-item"], [1, "timeline-badge"], ["data-toggle", "tooltip", "data-placement", "right", "title", "Portfolio project work", 1, "bg-primary", "bg-lighten-4"], [1, "ft-download", "primary"], [1, "activity-list-text"], [1, "mb-1"], [1, "float-right", "grey", "font-italic", "font-small-2"], [1, "mt-0", "mb-2", "font-small-3"], [1, "notification-note"], [1, "p-1", "pl-2"], [1, "text-bold-500"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/sketch-mac-icon.png", "alt", "icon", "width", "20"], [1, "text-bold-500", "ml-2"], [1, "ft-mic", "primary"], [1, "ft-cloud-drizzle", "primary"], ["id", "timeline-2", 1, "timeline-left", "timeline-wrapper"], ["src", "assets/img/portrait/small/avatar-s-26.png", "alt", "avatar", "width", "40", 1, "avatar"], ["src", "assets/img/icons/pdf.png", "alt", "pdf icon", "width", "20"], [1, "ft-droplet", "primary"], ["src", "assets/img/portrait/small/avatar-s-23.png", "alt", "avatar", "width", "40", 1, "avatar"], [1, "ft-map", "primary"], [1, "ft-package", "primary"], ["id", "settings-tab", "aria-labelledby", "base-tab2", 1, "row", "tab-pane"], ["id", "settings", 1, "col-12"], [1, "mt-2", "mb-3"], [1, "list-unstyled", "mb-0", "mx-2"], [1, "mb-3"], [1, "float-right"], [1, "custom-switch"], ["id", "noti-s-switch-1", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-1", 1, "custom-control-label"], [1, "font-small-3", "m-0"], [1, "checkbox"], ["id", "noti-s-checkbox-1", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-1"], ["id", "noti-s-switch-4", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-4", 1, "custom-control-label"], ["id", "noti-s-switch-3", "type", "checkbox", 1, "custom-control-input"], ["for", "noti-s-switch-3", 1, "custom-control-label"], ["id", "noti-s-checkbox-2", "type", "checkbox", "checked", "checked"], ["for", "noti-s-checkbox-2"], ["id", "noti-s-checkbox-3", "type", "checkbox"], ["for", "noti-s-checkbox-3"], ["id", "noti-s-switch-2", "type", "checkbox", "checked", "checked", 1, "custom-control-input"], ["for", "noti-s-switch-2", 1, "custom-control-label"]], template: function NotificationSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationSidebarComponent_Template_a_click_1_listener() { return ctx.onClose(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-tabset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotificationSidebarComponent_ng_template_8_Template, 1, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NotificationSidebarComponent_ng_template_9_Template, 166, 0, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-tab", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NotificationSidebarComponent_ng_template_11_Template, 1, 0, "ng-template", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NotificationSidebarComponent_ng_template_12_Template, 75, 0, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9ub3RpZmljYXRpb24tc2lkZWJhci9ub3RpZmljYXRpb24tc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"] });
    return NotificationSidebarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-sidebar',
                templateUrl: './notification-sidebar.component.html',
                styleUrls: ['./notification-sidebar.component.scss']
            }]
    }], function () { return [{ type: _services_layout_service__WEBPACK_IMPORTED_MODULE_1__["LayoutService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchTerm, labelKey) {
        if (!items || !searchTerm) {
            return null;
        }
        return items.filter(function (item) {
            return item[labelKey || 'name']
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) === true;
        }).slice(0, 10);
    };
    FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
    return FilterPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/pipe.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/pipe.module.ts ***!
  \*********************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _search_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.pipe */ "./src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./short-name.pipe */ "./src/app/shared/pipes/short-name.pipe.ts");






var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipeModule });
    PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipeModule_Factory(t) { return new (t || PipeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
    return PipeModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipeModule, { declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                exports: [_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"], _search_pipe__WEBPACK_IMPORTED_MODULE_3__["SearchPipe"], _short_name_pipe__WEBPACK_IMPORTED_MODULE_4__["ShortNamePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/search.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
    SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
    return SearchPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipes/short-name.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/short-name.pipe.ts ***!
  \*************************************************/
/*! exports provided: ShortNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortNamePipe", function() { return ShortNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var ShortNamePipe = /** @class */ (function () {
    function ShortNamePipe() {
    }
    ShortNamePipe.prototype.transform = function (fullName) {
        return fullName
            .split(' ')
            .map(function (n) { return n[0]; })
            .join('');
    };
    ShortNamePipe.ɵfac = function ShortNamePipe_Factory(t) { return new (t || ShortNamePipe)(); };
    ShortNamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortName", type: ShortNamePipe, pure: true });
    return ShortNamePipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortNamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shortName'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-content-pages-content-pages-module */[__webpack_require__.e("default~charts-charts-module~pages-content-pages-content-pages-module"), __webpack_require__.e("pages-content-pages-content-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/content-pages/content-pages.module */ "./src/app/pages/content-pages/content-pages.module.ts")).then(function (m) { return m.ContentPagesModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: 'dashboard',
        loadChildren: function () { return Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../../calendar/calendar.module */ "./src/app/calendar/calendar.module.ts")).then(function (m) { return m.CalendarsModule; }); }
    },
    {
        path: 'charts',
        loadChildren: function () { return Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module"), __webpack_require__.e("default~charts-charts-module~pages-content-pages-content-pages-module"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ../../charts/charts.module */ "./src/app/charts/charts.module.ts")).then(function (m) { return m.ChartsNg2Module; }); }
    },
    {
        path: 'forms',
        loadChildren: function () { return Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~forms-forms-module~inbox-inbox-module"), __webpack_require__.e("default~forms-forms-module~pages-full-pages-full-pages-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ../../forms/forms.module */ "./src/app/forms/forms.module.ts")).then(function (m) { return m.FormModule; }); }
    },
    {
        path: 'maps',
        loadChildren: function () { return __webpack_require__.e(/*! import() | maps-maps-module */ "maps-maps-module").then(__webpack_require__.bind(null, /*! ../../maps/maps.module */ "./src/app/maps/maps.module.ts")).then(function (m) { return m.MapsModule; }); }
    },
    {
        path: 'tables',
        loadChildren: function () { return __webpack_require__.e(/*! import() | tables-tables-module */ "tables-tables-module").then(__webpack_require__.bind(null, /*! ../../tables/tables.module */ "./src/app/tables/tables.module.ts")).then(function (m) { return m.TablesModule; }); }
    },
    {
        path: 'datatables',
        loadChildren: function () { return Promise.all(/*! import() | data-tables-data-tables-module */[__webpack_require__.e("default~data-tables-data-tables-module~pages-full-pages-full-pages-module"), __webpack_require__.e("data-tables-data-tables-module")]).then(__webpack_require__.bind(null, /*! ../../data-tables/data-tables.module */ "./src/app/data-tables/data-tables.module.ts")).then(function (m) { return m.DataTablesModule; }); }
    },
    {
        path: 'uikit',
        loadChildren: function () { return Promise.all(/*! import() | ui-kit-ui-kit-module */[__webpack_require__.e("default~components-ui-components-module~ui-kit-ui-kit-module"), __webpack_require__.e("ui-kit-ui-kit-module")]).then(__webpack_require__.bind(null, /*! ../../ui-kit/ui-kit.module */ "./src/app/ui-kit/ui-kit.module.ts")).then(function (m) { return m.UIKitModule; }); }
    },
    {
        path: 'components',
        loadChildren: function () { return Promise.all(/*! import() | components-ui-components-module */[__webpack_require__.e("default~components-ui-components-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~components-ui-components-module~ui-kit-ui-kit-module"), __webpack_require__.e("components-ui-components-module")]).then(__webpack_require__.bind(null, /*! ../../components/ui-components.module */ "./src/app/components/ui-components.module.ts")).then(function (m) { return m.UIComponentsModule; }); }
    },
    {
        path: 'pages',
        loadChildren: function () { return Promise.all(/*! import() | pages-full-pages-full-pages-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~components-ui-components-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~data-tables-data-tables-module~pages-full-pages-full-pages-module"), __webpack_require__.e("default~forms-forms-module~pages-full-pages-full-pages-module"), __webpack_require__.e("pages-full-pages-full-pages-module")]).then(__webpack_require__.bind(null, /*! ../../pages/full-pages/full-pages.module */ "./src/app/pages/full-pages/full-pages.module.ts")).then(function (m) { return m.FullPagesModule; }); }
    },
    {
        path: 'cards',
        loadChildren: function () { return Promise.all(/*! import() | cards-cards-module */[__webpack_require__.e("default~cards-cards-module~charts-charts-module"), __webpack_require__.e("cards-cards-module")]).then(__webpack_require__.bind(null, /*! ../../cards/cards.module */ "./src/app/cards/cards.module.ts")).then(function (m) { return m.CardsModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ../../chat/chat.module */ "./src/app/chat/chat.module.ts")).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'chat-ngrx',
        loadChildren: function () { return __webpack_require__.e(/*! import() | chat-ngrx-chat-ngrx-module */ "chat-ngrx-chat-ngrx-module").then(__webpack_require__.bind(null, /*! ../../chat-ngrx/chat-ngrx.module */ "./src/app/chat-ngrx/chat-ngrx.module.ts")).then(function (m) { return m.ChatNGRXModule; }); }
    },
    {
        path: 'inbox',
        loadChildren: function () { return Promise.all(/*! import() | inbox-inbox-module */[__webpack_require__.e("default~forms-forms-module~inbox-inbox-module"), __webpack_require__.e("inbox-inbox-module")]).then(__webpack_require__.bind(null, /*! ../../inbox/inbox.module */ "./src/app/inbox/inbox.module.ts")).then(function (m) { return m.InboxModule; }); }
    },
    {
        path: 'taskboard',
        loadChildren: function () { return Promise.all(/*! import() | taskboard-taskboard-module */[__webpack_require__.e("common"), __webpack_require__.e("taskboard-taskboard-module")]).then(__webpack_require__.bind(null, /*! ../../taskboard/taskboard.module */ "./src/app/taskboard/taskboard.module.ts")).then(function (m) { return m.TaskboardModule; }); }
    },
    {
        path: 'taskboard-ngrx',
        loadChildren: function () { return Promise.all(/*! import() | taskboard-ngrx-taskboard-ngrx-module */[__webpack_require__.e("common"), __webpack_require__.e("taskboard-ngrx-taskboard-ngrx-module")]).then(__webpack_require__.bind(null, /*! ../../taskboard-ngrx/taskboard-ngrx.module */ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts")).then(function (m) { return m.TaskboardNGRXModule; }); }
    }
];


/***/ }),

/***/ "./src/app/shared/services/config.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.templateConfSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.templateConf);
        this.templateConf$ = this.templateConfSubject.asObservable();
        this.setConfigValue();
    }
    // Default configurations for Light layout. Please check *customizer.service.ts* for different colors and bg images options
    ConfigService.prototype.setConfigValue = function () {
        this.templateConf = {
            layout: {
                variant: "Light",
                menuPosition: "Side",
                customizer: {
                    hidden: true
                },
                navbar: {
                    type: 'Static'
                },
                sidebar: {
                    collapsed: false,
                    size: "sidebar-md",
                    backgroundColor: "man-of-steel",
                    backgroundImage: true,
                    backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
                }
            }
        };
    };
    // Default configurations for Dark layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   this.templateConf = {
    //     layout: {
    //       variant: "Dark",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "black",
    //         backgroundImage: true,
    //         backgroundImageURL: "assets/img/sidebar-bg/01.jpg"
    //       }
    //     }
    //   };
    // }
    // Default configurations for Transparent layout. Please check *customizer.service.ts* for different colors and bg images options
    // setConfigValue() {
    //   this.templateConf = {
    //     layout: {
    //       variant: "Transparent",
    //       menuPosition: "Side",
    //       customizer: {
    //         hidden: true
    //       },
    //       navbar: {
    //         type: 'Static'
    //       },
    //       sidebar: {
    //         collapsed: false,
    //         size: "sidebar-md",
    //         backgroundColor: "bg-glass-1",
    //         backgroundImage: true,
    //         backgroundImageURL: ""
    //       }
    //     }
    //   };
    // }
    ConfigService.prototype.applyTemplateConfigChange = function (tempConfig) {
        this.templateConf = Object.assign(this.templateConf, tempConfig);
        this.templateConfSubject.next(this.templateConf);
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });
    return ConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/customizer.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomizerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerService", function() { return CustomizerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/shared/services/config.service.ts");





var CustomizerService = /** @class */ (function () {
    function CustomizerService(config) {
        this.config = config;
        // sidebar BG colors for Light & Dark Layout
        this.light_dark_colors = [
            {
                code: "mint",
                class: "gradient-mint",
                active: false,
                type: 'gradient'
            },
            {
                code: "king-yna",
                class: "gradient-king-yna",
                active: false,
                type: 'gradient'
            },
            {
                code: "ibiza-sunset",
                class: "gradient-ibiza-sunset",
                active: false,
                type: 'gradient'
            },
            {
                code: "flickr",
                class: "gradient-flickr",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-bliss",
                class: "gradient-purple-bliss",
                active: false,
                type: 'gradient'
            },
            {
                code: "man-of-steel",
                class: "gradient-man-of-steel",
                active: false,
                type: 'gradient'
            },
            {
                code: "purple-love",
                class: "gradient-purple-love",
                active: false,
                type: 'gradient'
            },
            {
                code: "black",
                class: "bg-black",
                active: false,
                type: 'solid'
            },
            {
                code: "white",
                class: "bg-grey",
                active: false,
                type: 'solid'
            },
            {
                code: "primary",
                class: "bg-primary",
                active: false,
                type: 'solid'
            },
            {
                code: "success",
                class: "bg-success",
                active: false,
                type: 'solid'
            },
            {
                code: "warning",
                class: "bg-warning",
                active: false,
                type: 'solid'
            },
            {
                code: "info",
                class: "bg-info",
                active: false,
                type: 'solid'
            },
            {
                code: "danger",
                class: "bg-danger",
                active: false,
                type: 'solid'
            }
        ];
        // sidebar BG colors for Transparent Layout
        this.transparent_colors = [
            {
                class: "bg-glass-hibiscus",
                active: false
            },
            {
                class: "bg-glass-purple-pizzazz",
                active: false
            },
            {
                class: "bg-glass-blue-lagoon",
                active: false
            },
            {
                class: "bg-glass-electric-violet",
                active: false
            },
            {
                class: "bg-glass-portage",
                active: false
            },
            {
                class: "bg-glass-tundora",
                active: false
            }
        ];
        // sidebar BG images for Light & Dark Layout
        this.light_dark_bg_images = [
            {
                src: "assets/img/sidebar-bg/01.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/02.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/03.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/04.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/05.jpg",
                active: false
            },
            {
                src: "assets/img/sidebar-bg/06.jpg",
                active: false
            },
        ];
        // Background Colors with Shades for Transparent Layout
        this.transparent_colors_with_shade = [
            {
                class: "bg-glass-1",
                active: false
            },
            {
                class: "bg-glass-2",
                active: false
            },
            {
                class: "bg-glass-3",
                active: false
            },
            {
                class: "bg-glass-4",
                active: false
            },
        ];
        this.lightDarkLayoutGradientBGColors = [];
        this.lightDarkLayoutSolidBGColors = [];
        this.transparentLayoutBGColors = [];
        this.transparentLayoutBGColorsWithShades = [];
        this.lightDarkLayoutBGImages = [];
        this.getData();
    }
    CustomizerService.prototype.getData = function () {
        this.lightDarkLayoutGradientBGColors = this.getlightDarkLayoutGradientBGColors();
        this.lightDarkLayoutSolidBGColors = this.getlightDarkLayoutSolidBGColors();
        this.transparentLayoutBGColors = this.getTransparentLayoutBGColors();
        this.transparentLayoutBGColorsWithShades = this.GetTransparentLayoutBGColorsWithShades();
        this.lightDarkLayoutBGImages = this.getLightDarkLayoutBGImages();
    };
    CustomizerService.prototype.getlightDarkLayoutGradientBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'gradient'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getlightDarkLayoutSolidBGColors = function () {
        var _this = this;
        return this.light_dark_colors.filter(function (_) { return _.type === 'solid'; })
            .map(function (color) {
            color.active = (color.code === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getTransparentLayoutBGColors = function () {
        var _this = this;
        return this.transparent_colors
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.GetTransparentLayoutBGColorsWithShades = function () {
        var _this = this;
        return this.transparent_colors_with_shade
            .map(function (color) {
            color.active = (color.class === _this.config.templateConf.layout.sidebar.backgroundColor);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, color);
        });
    };
    CustomizerService.prototype.getLightDarkLayoutBGImages = function () {
        var _this = this;
        return this.light_dark_bg_images
            .map(function (image) {
            image.active = (image.src === _this.config.templateConf.layout.sidebar.backgroundImageURL);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, image);
        });
    };
    //called when click to change on any Gradient/Solid color for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.code;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any Transparent color for Transparent layout in customizer
    CustomizerService.prototype.changeSidebarTransparentBGColor = function (color) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundColor = color.class;
        conf.layout.sidebar.backgroundImage = false;
        conf.layout.sidebar.backgroundImageURL = '';
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    //called when click to change on any image for Light & Dark layout in customizer
    CustomizerService.prototype.changeSidebarBgImage = function (image) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.backgroundImageURL = image.src;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.prototype.bgImageDisplay = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.backgroundImage = true;
        }
        else {
            conf.layout.sidebar.backgroundImage = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleCompactMenu = function (e) {
        var conf = this.config.templateConf;
        if (e.target.checked) {
            conf.layout.sidebar.collapsed = true;
        }
        else {
            conf.layout.sidebar.collapsed = false;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.changeSidebarWidth = function (value) {
        var conf = this.config.templateConf;
        conf.layout.sidebar.size = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.toggleNavbarType = function (value) {
        var conf = this.config.templateConf;
        conf.layout.navbar.type = value;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    // position: "Side" for vertical menu and position: "Top" for horizontal menu
    CustomizerService.prototype.toggleMenuPosition = function (position) {
        var conf = this.config.templateConf;
        conf.layout.menuPosition = position;
        this.config.applyTemplateConfigChange({ layout: conf.layout });
    };
    CustomizerService.prototype.switchLayout = function (layout, isBgImageDisplay) {
        var conf = this.config.templateConf;
        if (layout.toLowerCase() === 'light') {
            conf.layout.variant = 'Light';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[0].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[5].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'dark') {
            conf.layout.variant = 'Dark';
            conf.layout.sidebar.backgroundImageURL = this.light_dark_bg_images[2].src;
            conf.layout.sidebar.backgroundColor = this.light_dark_colors[7].code;
            conf.layout.sidebar.backgroundImage = isBgImageDisplay;
        }
        else if (layout.toLowerCase() === 'transparent') {
            conf.layout.variant = 'Transparent';
            conf.layout.sidebar.backgroundImageURL = "";
            conf.layout.sidebar.backgroundColor = this.transparent_colors_with_shade[0].class;
        }
        this.config.applyTemplateConfigChange({ layout: conf.layout });
        this.getData();
    };
    CustomizerService.ɵfac = function CustomizerService_Factory(t) { return new (t || CustomizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"])); };
    CustomizerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomizerService, factory: CustomizerService.ɵfac, providedIn: "root" });
    return CustomizerService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomizerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/layout.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/layout.service.ts ***!
  \***************************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



var LayoutService = /** @class */ (function () {
    function LayoutService() {
        this.toggleSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // small screen
        this.overlaySidebarToggle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toggleNotiSidebar = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Observable
        this.toggleSidebar$ = this.toggleSidebar.asObservable();
        this.overlaySidebarToggle$ = this.overlaySidebarToggle.asObservable();
        this.toggleNotiSidebar$ = this.toggleNotiSidebar.asObservable();
    }
    LayoutService.prototype.toggleSidebarSmallScreen = function (toggle) {
        this.toggleSidebar.next(toggle);
    };
    LayoutService.prototype.overlaySidebartoggle = function (toggle) {
        this.overlaySidebarToggle.next(toggle);
    };
    LayoutService.prototype.toggleNotificationSidebar = function (toggle) {
        this.toggleNotiSidebar.next(toggle);
    };
    LayoutService.ɵfac = function LayoutService_Factory(t) { return new (t || LayoutService)(); };
    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LayoutService, factory: LayoutService.ɵfac, providedIn: 'root' });
    return LayoutService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/window.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/window.service.ts ***!
  \***************************************************/
/*! exports provided: WINDOW, WindowRef, BrowserWindowRef, windowFactory, browserWindowProvider, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowFactory", function() { return windowFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function() { return browserWindowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




/* Create a new injection token for injecting the window into a component. */
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('WindowToken');
/* Define abstract class for obtaining reference to the global window object. */
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error('Not implemented.');
        },
        enumerable: false,
        configurable: true
    });
    return WindowRef;
}());

/* Define class that implements the abstract class and returns the native window object. */
var BrowserWindowRef = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return window;
        },
        enumerable: false,
        configurable: true
    });
    BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) { return new (t || BrowserWindowRef)(); };
    BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: BrowserWindowRef, factory: BrowserWindowRef.ɵfac });
    return BrowserWindowRef;
}(WindowRef));

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BrowserWindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return []; }, null); })();
/* Create an factory function that returns the native window object. */
function windowFactory(browserWindowRef, platformId) {
    if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
        return browserWindowRef.nativeWindow;
    }
    return new Object();
}
/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
var windowProvider = {
    provide: WINDOW,
    useFactory: windowFactory,
    deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"]]
};
/* Create an array of providers. */
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/fesm2015/overlay.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib_esmodule/index.js");
/* harmony import */ var _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/autocomplete/autocomplete.module */ "./src/app/shared/components/autocomplete/autocomplete.module.ts");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./horizontal-menu/horizontal-menu.component */ "./src/app/shared/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vertical-menu/vertical-menu.component */ "./src/app/shared/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/sidebar-link.directive */ "./src/app/shared/directives/sidebar-link.directive.ts");
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/sidebar-dropdown.directive */ "./src/app/shared/directives/sidebar-dropdown.directive.ts");
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/sidebar-anchor-toggle.directive */ "./src/app/shared/directives/sidebar-anchor-toggle.directive.ts");
/* harmony import */ var _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/sidebar.directive */ "./src/app/shared/directives/sidebar.directive.ts");
/* harmony import */ var _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/topmenu.directive */ "./src/app/shared/directives/topmenu.directive.ts");
/* harmony import */ var _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/topmenu-link.directive */ "./src/app/shared/directives/topmenu-link.directive.ts");
/* harmony import */ var _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/topmenu-dropdown.directive */ "./src/app/shared/directives/topmenu-dropdown.directive.ts");
/* harmony import */ var _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/topmenu-anchor-toggle.directive */ "./src/app/shared/directives/topmenu-anchor-toggle.directive.ts");











//COMPONENTS






//DIRECTIVES










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"]
            ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] });
    return SharedModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_14__["VerticalMenuComponent"],
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalMenuComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["NotificationSidebarComponent"],
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__["ToggleFullscreenDirective"],
        _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarLinkDirective"],
        _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__["SidebarDropdownDirective"],
        _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__["SidebarAnchorToggleDirective"],
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_21__["SidebarDirective"],
        _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_23__["TopMenuLinkDirective"],
        _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_24__["TopMenuDropdownDirective"],
        _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_25__["TopMenuAnchorToggleDirective"],
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuDirective"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
        _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_14__["VerticalMenuComponent"],
        _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalMenuComponent"],
        _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
        _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["NotificationSidebarComponent"],
        _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__["ToggleFullscreenDirective"],
        _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_21__["SidebarDirective"],
        _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuDirective"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_14__["VerticalMenuComponent"],
                    _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalMenuComponent"],
                    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
                    _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["NotificationSidebarComponent"],
                    _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__["ToggleFullscreenDirective"],
                    _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_21__["SidebarDirective"],
                    _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuDirective"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_8__["ClickOutsideModule"],
                    _components_autocomplete_autocomplete_module__WEBPACK_IMPORTED_MODULE_9__["AutocompleteModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"]
                ],
                declarations: [
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_14__["VerticalMenuComponent"],
                    _horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_13__["HorizontalMenuComponent"],
                    _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_15__["CustomizerComponent"],
                    _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["NotificationSidebarComponent"],
                    _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_17__["ToggleFullscreenDirective"],
                    _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_18__["SidebarLinkDirective"],
                    _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_19__["SidebarDropdownDirective"],
                    _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_20__["SidebarAnchorToggleDirective"],
                    _directives_sidebar_directive__WEBPACK_IMPORTED_MODULE_21__["SidebarDirective"],
                    _directives_topmenu_link_directive__WEBPACK_IMPORTED_MODULE_23__["TopMenuLinkDirective"],
                    _directives_topmenu_dropdown_directive__WEBPACK_IMPORTED_MODULE_24__["TopMenuDropdownDirective"],
                    _directives_topmenu_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_25__["TopMenuAnchorToggleDirective"],
                    _directives_topmenu_directive__WEBPACK_IMPORTED_MODULE_22__["TopMenuDirective"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/vertical-menu/vertical-menu-routes.config.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu-routes.config.ts ***!
  \*********************************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    {
        path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/dashboard/dashboard1', title: 'Dashboard 1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/dashboard/dashboard2', title: 'Dashboard 2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/inbox', title: 'Email', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
        ]
    },
    {
        path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tabs', title: 'Tabs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
                    { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
        ]
    },
    {
        path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                ]
            },
            { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/tables/tables', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    {
        path: '/datatables', title: 'Data Tables', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            {
                path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                ]
            },
            { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            {
                path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            {
                path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
                    { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
                ]
            },
            { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/vertical-menu/vertical-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/vertical-menu/vertical-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-menu-routes.config */ "./src/app/shared/vertical-menu/vertical-menu-routes.config.ts");
/* harmony import */ var _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horizontal-menu/navigation-routes.config */ "./src/app/shared/horizontal-menu/navigation-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animations/custom-animations */ "./src/app/shared/animations/custom-animations.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _services_layout_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/layout.service */ "./src/app/shared/services/layout.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../directives/sidebar-dropdown.directive */ "./src/app/shared/directives/sidebar-dropdown.directive.ts");
/* harmony import */ var _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/sidebar-link.directive */ "./src/app/shared/directives/sidebar-link.directive.ts");
/* harmony import */ var _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/sidebar-anchor-toggle.directive */ "./src/app/shared/directives/sidebar-anchor-toggle.directive.ts");




















var _c0 = ["toggleIcon"];
var _c1 = function () { return ["/"]; };
var _c2 = function (a0, a1) { return { "ft-toggle-left": a0, "ft-toggle-right": a1 }; };
function VerticalMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "APEX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalMenuComponent_div_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.CloseSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c2, ctx_r0.config.layout.sidebar.collapsed, !ctx_r0.config.layout.sidebar.collapsed));
} }
var _c3 = function (a0) { return [a0]; };
function VerticalMenuComponent_li_4_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r6.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuItem_r6.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r6.badge);
} }
function VerticalMenuComponent_li_4_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuItem_r6.path), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, menuItem_r6.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuItem_r6.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.badge && menuItem_r6.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubItem_r21.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubItem_r21.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_a_3_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubItem_r21.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubItem_r21.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.badge && menuSubItem_r21.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, menuSubsubItem_r36.badgeClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuSubsubItem_r36.badge);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_span_5_Template, 2, 4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuSubsubItem_r36.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c3, menuSubsubItem_r36.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, menuSubsubItem_r36.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubsubItem_r36.badge && menuSubsubItem_r36.badge != "");
} }
var _c4 = function () { return { exact: true }; };
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_a_1_Template, 6, 8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_ng_template_2_Template, 6, 8, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubsubItem_r36 = ctx.$implicit;
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r35.level + 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", false)("path", menuSubsubItem_r36.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4))("ngClass", ctx_r35.config.layout.menuPosition === "Side" ? menuSubsubItem_r36.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuSubsubItem_r36.isExternalLink)("ngIfElse", _r38);
} }
function VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_li_1_Template, 4, 9, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuSubItem_r21.submenu);
} }
var _c5 = function (a0) { return { "has-sub": a0 }; };
function VerticalMenuComponent_li_4_ul_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_ul_4_li_1_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_ul_4_li_1_a_3_Template, 6, 8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_li_1_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuSubItem_r21 = ctx.$implicit;
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r20.level + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("hasSub", menuSubItem_r21.class.includes("has-sub") ? true : false)("path", menuSubItem_r21.path)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c5, menuSubItem_r21.class.includes("has-sub") ? true : false))("routerLinkActive", menuSubItem_r21.submenu.length != 0 ? "open" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length === 0 && !menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuSubItem_r21.submenu.length > 0);
} }
function VerticalMenuComponent_li_4_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_ul_4_li_1_Template, 5, 12, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r6.submenu);
} }
var _c6 = function () { return { exact: false }; };
function VerticalMenuComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalMenuComponent_li_4_a_1_Template, 6, 7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalMenuComponent_li_4_a_2_Template, 6, 8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VerticalMenuComponent_li_4_a_3_Template, 6, 10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_ul_4_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("level", ctx_r1.level + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", menuItem_r6.title)("path", menuItem_r6.path)("hasSub", menuItem_r6.class.includes("has-sub") ? true : false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c5, menuItem_r6.class.includes("has-sub") ? true : false))("routerLinkActive", menuItem_r6.submenu.length != 0 ? "open" : "active")("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length === 0 && !menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.isExternalLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r6.submenu.length > 0);
} }
var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(router, translate, layoutService, configService, cdr, deviceService) {
        this.router = router;
        this.translate = translate;
        this.layoutService = layoutService;
        this.configService = configService;
        this.cdr = cdr;
        this.deviceService = deviceService;
        this.level = 0;
        this.logoUrl = 'assets/img/logo.png';
        this.config = {};
        this.perfectScrollbarEnable = true;
        this.collapseSidebar = false;
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
        this.config = this.configService.templateConf;
        this.innerWidth = window.innerWidth;
        this.isTouchDevice();
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"];
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.configSub = this.configService.templateConf$.subscribe(function (templateConf) {
            if (templateConf) {
                _this.config = templateConf;
            }
            _this.loadLayout();
            _this.cdr.markForCheck();
        });
        this.layoutSub = this.layoutService.overlaySidebarToggle$.subscribe(function (collapse) {
            if (_this.config.layout.menuPosition === "Side") {
                _this.collapseSidebar = collapse;
            }
        });
    };
    VerticalMenuComponent.prototype.onWindowResize = function (event) {
        var _this = this;
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout((function () {
            _this.innerWidth = event.target.innerWidth;
            _this.loadLayout();
        }).bind(this), 500);
    };
    VerticalMenuComponent.prototype.loadLayout = function () {
        if (this.config.layout.menuPosition === "Top") { // Horizontal Menu
            if (this.innerWidth < 1200) { // Screen size < 1200
                this.menuItems = _horizontal_menu_navigation_routes_config__WEBPACK_IMPORTED_MODULE_2__["HROUTES"];
            }
        }
        else if (this.config.layout.menuPosition === "Side") { // Vertical Menu{
            this.menuItems = _vertical_menu_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"];
        }
        if (this.config.layout.sidebar.backgroundColor === 'white') {
            this.logoUrl = 'assets/img/logo-dark.png';
        }
        else {
            this.logoUrl = 'assets/img/logo.png';
        }
        if (this.config.layout.sidebar.collapsed) {
            this.collapseSidebar = true;
        }
        else {
            this.collapseSidebar = false;
        }
    };
    VerticalMenuComponent.prototype.toggleSidebar = function () {
        var _this = this;
        var conf = this.config;
        conf.layout.sidebar.collapsed = !this.config.layout.sidebar.collapsed;
        this.configService.applyTemplateConfigChange({ layout: conf.layout });
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    VerticalMenuComponent.prototype.CloseSidebar = function () {
        this.layoutService.toggleSidebarSmallScreen(false);
    };
    VerticalMenuComponent.prototype.isTouchDevice = function () {
        var isMobile = this.deviceService.isMobile();
        var isTablet = this.deviceService.isTablet();
        if (isMobile || isTablet) {
            this.perfectScrollbarEnable = false;
        }
        else {
            this.perfectScrollbarEnable = true;
        }
    };
    VerticalMenuComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        if (this.configSub) {
            this.configSub.unsubscribe();
        }
    };
    VerticalMenuComponent.ɵfac = function VerticalMenuComponent_Factory(t) { return new (t || VerticalMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"])); };
    VerticalMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerticalMenuComponent, selectors: [["app-sidebar"]], viewQuery: function VerticalMenuComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toggleIcon = _t.first);
        } }, hostBindings: function VerticalMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function VerticalMenuComponent_resize_HostBindingHandler($event) { return ctx.onWindowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 5, vars: 3, consts: [["class", "sidebar-header", 4, "ngIf"], [1, "sidebar-content", "main-menu-content", 3, "perfectScrollbar", "disabled"], [1, "nav-container"], ["appSidebarDropdown", "", 1, "navigation"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "sidebar-header"], [1, "logo", "clearfix"], [1, "logo-text", "float-left", 3, "routerLink"], [1, "logo-img"], ["alt", "Apex logo", 3, "src"], [1, "text", "align-middle"], ["id", "sidebarToggle", "href", "javascript:;", 1, "nav-toggle", "d-none", "d-lg-none", "d-xl-block", 3, "click"], [1, "toggle-icon", 3, "ngClass"], ["toggleIcon", ""], ["id", "sidebarClose", "href", "javascript:;", 1, "nav-close", "d-block", "d-lg-block", "d-xl-none", 3, "click"], [1, "ft-x"], ["appSidebarlink", "", 3, "parent", "path", "level", "hasSub", "ngClass", "routerLinkActive", "routerLinkActiveOptions"], ["appSidebarAnchorToggle", "", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["appSidebarDropdown", "", "class", "menu-content", 4, "ngIf"], ["appSidebarAnchorToggle", ""], [3, "ngClass"], [1, "menu-title"], [3, "ngClass", 4, "ngIf"], ["appSidebarAnchorToggle", "", 3, "routerLink"], ["target", "_blank", 3, "href"], ["appSidebarDropdown", "", 1, "menu-content"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", 3, "parent", "hasSub", "path", "level", "ngClass", "routerLinkActive"], ["target", "_blank", 3, "routerLink", 4, "ngIf"], ["target", "_blank", 3, "routerLink"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass", 4, "ngFor", "ngForOf"], ["appSidebarlink", "", "routerLinkActive", "active", 3, "parent", "hasSub", "path", "level", "routerLinkActiveOptions", "ngClass"], ["appSidebarAnchorToggle", "", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalSubSubLinkBlock", ""]], template: function VerticalMenuComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VerticalMenuComponent_div_0_Template, 12, 7, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VerticalMenuComponent_li_4_Template, 5, 14, "li", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.config == null ? null : ctx.config.layout.menuPosition) === "Side");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.perfectScrollbarEnable);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarDirective"], _directives_sidebar_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["SidebarDropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _directives_sidebar_link_directive__WEBPACK_IMPORTED_MODULE_12__["SidebarLinkDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _directives_sidebar_anchor_toggle_directive__WEBPACK_IMPORTED_MODULE_13__["SidebarAnchorToggleDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], encapsulation: 2, data: { animation: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"] } });
    return VerticalMenuComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-sidebar",
                templateUrl: "./vertical-menu.component.html",
                animations: _animations_custom_animations__WEBPACK_IMPORTED_MODULE_5__["customAnimations"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }, { type: _services_layout_service__WEBPACK_IMPORTED_MODULE_8__["LayoutService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__["DeviceDetectorService"] }]; }, { toggleIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['toggleIcon']
        }], onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/store/app.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/store/app.reducer.ts ***!
  \**************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-ngrx/store/chat.reducers */ "./src/app/chat-ngrx/store/chat.reducers.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");


var appReducer = {
    chat: _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_0__["chatReducer"],
    task: _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_1__["taskReducer"]
};


/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/*! exports provided: ADD_TASK, UPDATE_TASK, DELETE_TASK, AddTask, UpdateTask, DeleteTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TASK", function() { return ADD_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TASK", function() { return UPDATE_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TASK", function() { return DELETE_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTask", function() { return AddTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTask", function() { return UpdateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTask", function() { return DeleteTask; });
var ADD_TASK = 'ADD_TASK';
var UPDATE_TASK = 'UPDATE_TASK';
var DELETE_TASK = 'DELETE_TASK';
var AddTask = /** @class */ (function () {
    function AddTask(payload) {
        this.payload = payload;
        this.type = ADD_TASK;
    }
    return AddTask;
}());

var UpdateTask = /** @class */ (function () {
    function UpdateTask(payload) {
        this.payload = payload;
        this.type = UPDATE_TASK;
    }
    return UpdateTask;
}());

var DeleteTask = /** @class */ (function () {
    function DeleteTask(payload) {
        this.payload = payload;
        this.type = DELETE_TASK;
    }
    return DeleteTask;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    tasks: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](1, 'Responsive', 'primary', 'Check responsive and change SCSS accordingly.', 'text', "1", "3", 'Feb 6', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-2.png', 'assets/img/portrait/small/avatar-s-3.png'], true, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](2, 'Users', 'primary', 'Companies of all shapes and sizes use Apex.', 'text', "", "", 'March 19', 'Elizabeth Elliott', [{ name: 'E', class: 'warning' }], false, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](3, 'Laptops', 'primary', 'Dell laptops are among the most well known laptops.', 'text', "2", "1", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-6.png'], true, 'Marketing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](4, 'Pick up Jane', 'warning', 'assets/img/banner/banner-10.jpg', 'image', "", "", '', 'Elizabeth Elliott', [], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](5, 'Navigation', 'warning', 'Design a prototype.', 'text', "", "6", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-7.png', 'assets/img/portrait/small/avatar-s-8.png', 'assets/img/portrait/small/avatar-s-9.png', 'assets/img/portrait/small/avatar-s-10.png'], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](6, 'Bootstrap 4', 'warning', 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.', 'text', "4", "", 'Dec 3', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-11.png', 'assets/img/portrait/small/avatar-s-12.png'], true, 'UI-Designing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](7, 'Meeting Agenda', 'success', 'Polish brand idea.', 'text', "3", "2", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-13.png', 'assets/img/portrait/small/avatar-s-14.png', 'assets/img/portrait/small/avatar-s-15.png'], true, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](8, 'Angular 9', 'success', 'Angular is a platform for building mobile and desktop web applications.', 'text', "", "", 'Oct 16', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-16.png', 'assets/img/portrait/small/avatar-s-17.png'], true, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](9, 'Task', 'success', 'Develop & design feedback form.', 'text', "8", "", '', 'Elizabeth Elliott', [{ name: 'S', class: 'primary' }, { name: 'J', class: 'success' }], false, 'Developing'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](10, 'Assessment', 'info', "Don't let the outtakes take you out!", 'text', "", "", 'Sept 10', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-26.png'], true, 'Management'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](11, 'Photo shoot', 'info', 'assets/img/banner/banner-22.jpg', 'image', "2", "5", '', 'Elizabeth Elliott', [{ name: 'L', class: 'secondary' }, { name: 'F', class: 'danger' }, { name: 'T', class: 'info' }], false, 'Management'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](12, 'Unit tests', 'info', 'Implement performance improvements.', 'text', "5", "4", 'Jan 14', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-24.png', 'assets/img/portrait/small/avatar-s-20.png'], true, 'Management')
    ],
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TASK"]:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { tasks: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.tasks, [action.payload]) });
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["UPDATE_TASK"]:
            var updatedRecipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state.tasks[action.payload.index]), action.payload.newTask);
            var updatedRecipes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(state.tasks);
            updatedRecipes[action.payload.index] = updatedRecipe;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { tasks: updatedRecipes });
        case _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["DELETE_TASK"]:
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, state), { tasks: state.tasks.filter(function (recipe, index) {
                    return index !== action.payload;
                }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(taskId, taskTitle, badgeClass, taskMessage, messageType, messageCount, linkCount, createdOn, createdBy, assignedTo, isUserImg, status) {
        this.taskId = taskId;
        this.taskTitle = taskTitle;
        this.badgeClass = badgeClass;
        this.taskMessage = taskMessage;
        this.messageType = messageType;
        this.messageCount = messageCount;
        this.linkCount = linkCount;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.isUserImg = isUserImg;
        this.status = status;
    }
    return Task;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\apex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map