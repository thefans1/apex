(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: FullScreenMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapComponent", function() { return FullScreenMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");



var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FullScreenMapComponent.ɵfac = function FullScreenMapComponent_Factory(t) { return new (t || FullScreenMapComponent)(); };
    FullScreenMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullScreenMapComponent, selectors: [["app-full-screen-map"]], decls: 4, vars: 4, consts: [["id", "fullscreenMap", 1, "mb-3"], [1, "row"], [2, "height", "100%", "width", "100%", "position", "absolute", "top", "0px", "left", "0px", "background-color", "rgb(229, 227, 223)", 3, "latitude", "longitude"], [3, "latitude", "longitude"]], template: function FullScreenMapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "agm-map", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "agm-marker", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvZnVsbC1zY3JlZW4tbWFwL2Z1bGwtc2NyZWVuLW1hcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return FullScreenMapComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullScreenMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-screen-map',
                templateUrl: './full-screen-map.component.html',
                styleUrls: ['./full-screen-map.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");



var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent.ɵfac = function GoogleMapComponent_Factory(t) { return new (t || GoogleMapComponent)(); };
    GoogleMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleMapComponent, selectors: [["app-google-map"]], decls: 12, vars: 4, consts: [[1, "row"], [1, "col-12"], [1, "content-header"], ["id", ""], [1, "col-sm-12"], [1, "card"], [1, "card-content"], [1, "card-body", "mt-2"], [3, "latitude", "longitude"]], template: function GoogleMapComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Google Map");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "agm-map", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "agm-marker", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        } }, directives: [_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMarker"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tYXBzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */"] });
    return GoogleMapComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-map',
                templateUrl: './google-map.component.html',
                styleUrls: ['./google-map.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/maps/maps-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_2__["FullScreenMapComponent"],
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsRoutingModule });
    MapsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsRoutingModule_Factory(t) { return new (t || MapsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return MapsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/maps/maps-routing.module.ts");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");







var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapsModule });
    MapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapsModule_Factory(t) { return new (t || MapsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]
            ]] });
    return MapsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapsModule, { declarations: [_full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_4__["FullScreenMapComponent"],
        _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
        _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]
                ],
                declarations: [
                    _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_4__["FullScreenMapComponent"],
                    _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map