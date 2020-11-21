(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["data-tables-data-tables-module"],{

/***/ "./src/app/data-tables/data-tables-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/data-tables/data-tables-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DataTablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesRoutingModule", function() { return DataTablesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-tables.component */ "./src/app/data-tables/data-tables.component.ts");





var routes = [
    {
        path: '',
        component: _data_tables_component__WEBPACK_IMPORTED_MODULE_2__["DataTablesComponent"],
        data: {
            title: 'DataTable'
        },
    }
];
var DataTablesRoutingModule = /** @class */ (function () {
    function DataTablesRoutingModule() {
    }
    DataTablesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesRoutingModule });
    DataTablesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTablesRoutingModule_Factory(t) { return new (t || DataTablesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DataTablesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-tables/data-tables.component.ts":
/*!******************************************************!*\
  !*** ./src/app/data-tables/data-tables.component.ts ***!
  \******************************************************/
/*! exports provided: DataTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesComponent", function() { return DataTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_datatables_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/datatables.data */ "./src/app/data-tables/data/datatables.data.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_pipes_short_name_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/short-name.pipe */ "./src/app/shared/pipes/short-name.pipe.ts");











var _c0 = ["tableRowDetails"];
var _c1 = ["tableResponsive"];
function DataTablesComponent_ng_template_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r38.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
var _c2 = function (a0, a1, a2, a3, a4) { return { "bg-primary": a0, "bg-success": a1, "bg-danger": a2, "bg-warning": a3, "bg-info": a4 }; };
function DataTablesComponent_ng_template_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r38 = ctx_r44.row;
    var name_r39 = ctx_r44.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r38.status == "1", row_r38.status == "2", row_r38.status == "3", row_r38.status == "4", row_r38.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r39));
} }
function DataTablesComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_11_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_11_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r38 = ctx.row;
    var name_r39 = ctx.value;
    var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r38.avatar.length > 0)("ngIfElse", _r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r38.post, "");
} }
var _c3 = function (a0, a1, a2, a3, a4) { return { "bg-light-primary": a0, "bg-light-success": a1, "bg-light-danger": a2, "bg-light-warning": a3, "bg-light-info": a4 }; };
function DataTablesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r45 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r45 == "1", status_r45 == "2", status_r45 == "3", status_r45 == "4", status_r45 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r45 == 1 ? "Current" : status_r45 == 2 ? "Professional" : status_r45 == 3 ? "Rejected" : status_r45 == 4 ? "Resigned" : status_r45 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_ng_template_30_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r48.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_30_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    var row_r48 = ctx_r55.row;
    var value_r47 = ctx_r55.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r48.status == "1", row_r48.status == "2", row_r48.status == "3", row_r48.status == "4", row_r48.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, value_r47));
} }
function DataTablesComponent_ng_template_30_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function DataTablesComponent_ng_template_30_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); var rowIndex_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r56.editing[rowIndex_r46 + "-full_name"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_30_div_0_div_2_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DataTablesComponent_ng_template_30_div_0_ng_template_3_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r48 = ctx_r59.row;
    var value_r47 = ctx_r59.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r48.avatar.length > 0)("ngIfElse", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r48.post, "");
} }
function DataTablesComponent_ng_template_30_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function DataTablesComponent_ng_template_30_input_1_Template_input_blur_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61); var rowIndex_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r60.inlineEditingUpdate($event, "full_name", rowIndex_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r47);
} }
function DataTablesComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTablesComponent_ng_template_30_div_0_Template, 10, 4, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_30_input_1_Template, 1, 1, "input", 60);
} if (rf & 2) {
    var rowIndex_r46 = ctx.rowIndex;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.editing[rowIndex_r46 + "-full_name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.editing[rowIndex_r46 + "-full_name"]);
} }
function DataTablesComponent_ng_template_32_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dblclick", function DataTablesComponent_ng_template_32_div_0_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70); var rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r69.editing[rowIndex_r64 + "-status"] = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, value_r66 == "1", value_r66 == "2", value_r66 == "3", value_r66 == "4", value_r66 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r66 == 1 ? "Current" : value_r66 == 2 ? "Professional" : value_r66 == 3 ? "Rejected" : value_r66 == 4 ? "Resigned" : value_r66 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_32_select_1_Template(rf, ctx) { if (rf & 1) {
    var _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function DataTablesComponent_ng_template_32_select_1_Template_select_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (ctx_r73.editing[rowIndex_r64 + "-status"] = false); })("change", function DataTablesComponent_ng_template_32_select_1_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74); var rowIndex_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().rowIndex; var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r76.inlineEditingUpdate($event, "status", rowIndex_r64); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Professional");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Resigned");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Applied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var value_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r66);
} }
function DataTablesComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DataTablesComponent_ng_template_32_div_0_Template, 3, 8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_32_select_1_Template, 11, 1, "select", 63);
} if (rf & 2) {
    var rowIndex_r64 = ctx.rowIndex;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.editing[rowIndex_r64 + "-status"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.editing[rowIndex_r64 + "-status"]);
} }
function DataTablesComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    var value_r79 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r79, " ");
} }
function DataTablesComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_ng_template_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r80.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_53_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r80 = ctx_r86.row;
    var name_r81 = ctx_r86.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r80.status == "1", row_r80.status == "2", row_r80.status == "3", row_r80.status == "4", row_r80.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r81));
} }
function DataTablesComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_53_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_53_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r80 = ctx.row;
    var name_r81 = ctx.value;
    var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r80.avatar.length > 0)("ngIfElse", _r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r80.post, "");
} }
function DataTablesComponent_ng_template_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r87 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r87 == "1", status_r87 == "2", status_r87 == "3", status_r87 == "4", status_r87 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r87 == 1 ? "Current" : status_r87 == 2 ? "Professional" : status_r87 == 3 ? "Rejected" : status_r87 == 4 ? "Resigned" : status_r87 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "City : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Experience :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r88 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r88.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r88.experience, "");
} }
function DataTablesComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablesComponent_ng_template_75_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93); var row_r90 = ctx.row; var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r92.rowDetailsToggleExpand(row_r90); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var expanded_r91 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r91)("datatable-icon-down", expanded_r91);
} }
function DataTablesComponent_ng_template_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r94.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_77_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r94 = ctx_r100.row;
    var name_r95 = ctx_r100.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r94.status == "1", row_r94.status == "2", row_r94.status == "3", row_r94.status == "4", row_r94.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r95));
} }
function DataTablesComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_77_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_77_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r94 = ctx.row;
    var name_r95 = ctx.value;
    var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r94.avatar.length > 0)("ngIfElse", _r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r94.post, "");
} }
function DataTablesComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r101 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r101 == "1", status_r101 == "2", status_r101 == "3", status_r101 == "4", status_r101 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r101 == 1 ? "Current" : status_r101 == 2 ? "Professional" : status_r101 == 3 ? "Rejected" : status_r101 == 4 ? "Resigned" : status_r101 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTablesComponent_ng_template_98_Template_input_change_1_listener() { var allRowsSelected_r103 = ctx.allRowsSelected; var selectFn_r104 = ctx.selectFn; return selectFn_r104(!allRowsSelected_r103); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r103 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", allRowsSelected_r103);
} }
function DataTablesComponent_ng_template_99_Template(rf, ctx) { if (rf & 1) {
    var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTablesComponent_ng_template_99_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r110); var onCheckboxChangeFn_r108 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r108($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var isSelected_r107 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", isSelected_r107);
} }
function DataTablesComponent_ng_template_101_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r111.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_101_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r111 = ctx_r117.row;
    var name_r112 = ctx_r117.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r111.status == "1", row_r111.status == "2", row_r111.status == "3", row_r111.status == "4", row_r111.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r112));
} }
function DataTablesComponent_ng_template_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_101_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_101_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r111 = ctx.row;
    var name_r112 = ctx.value;
    var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r111.avatar.length > 0)("ngIfElse", _r114);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r111.post, "");
} }
function DataTablesComponent_ng_template_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r118 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r118 == "1", status_r118 == "2", status_r118 == "3", status_r118 == "4", status_r118 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r118 == 1 ? "Current" : status_r118 == 2 ? "Professional" : status_r118 == 3 ? "Rejected" : status_r118 == 4 ? "Resigned" : status_r118 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_li_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var sel_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sel_r119.full_name, " ");
} }
function DataTablesComponent_li_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No Selections");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataTablesComponent_ng_template_129_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r120.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_129_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r120 = ctx_r126.row;
    var name_r121 = ctx_r126.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r120.status == "1", row_r120.status == "2", row_r120.status == "3", row_r120.status == "4", row_r120.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r121));
} }
function DataTablesComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_129_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_129_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r120 = ctx.row;
    var name_r121 = ctx.value;
    var _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r120.avatar.length > 0)("ngIfElse", _r123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r120.post, "");
} }
function DataTablesComponent_ng_template_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r127 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r127 == "1", status_r127 == "2", status_r127 == "3", status_r127 == "4", status_r127 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r127 == 1 ? "Current" : status_r127 == 2 ? "Professional" : status_r127 == 3 ? "Rejected" : status_r127 == 4 ? "Resigned" : status_r127 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
function DataTablesComponent_ng_template_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Email : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Age : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r128 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r128.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r128.age, "");
} }
function DataTablesComponent_ng_template_151_Template(rf, ctx) { if (rf & 1) {
    var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DataTablesComponent_ng_template_151_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133); var row_r130 = ctx.row; var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r132.toggleExpandRowResponsive(row_r130); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var expanded_r131 = ctx.expanded;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("datatable-icon-right", !expanded_r131)("datatable-icon-down", expanded_r131);
} }
function DataTablesComponent_ng_template_153_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r134.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_153_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r134 = ctx_r140.row;
    var name_r135 = ctx_r140.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r134.status == "1", row_r134.status == "2", row_r134.status == "3", row_r134.status == "4", row_r134.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r135));
} }
function DataTablesComponent_ng_template_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_153_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_153_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r134 = ctx.row;
    var name_r135 = ctx.value;
    var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r134.avatar.length > 0)("ngIfElse", _r137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r134.post, "");
} }
function DataTablesComponent_ng_template_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r141 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r141 == "1", status_r141 == "2", status_r141 == "3", status_r141 == "4", status_r141 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r141 == 1 ? "Current" : status_r141 == 2 ? "Professional" : status_r141 == 3 ? "Rejected" : status_r141 == 4 ? "Resigned" : status_r141 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DataTablesComponent_ng_template_176_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTablesComponent_ng_template_176_Template_input_change_1_listener() { var allRowsSelected_r143 = ctx.allRowsSelected; var selectFn_r144 = ctx.selectFn; return selectFn_r144(!allRowsSelected_r143); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var allRowsSelected_r143 = ctx.allRowsSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", allRowsSelected_r143);
} }
function DataTablesComponent_ng_template_177_Template(rf, ctx) { if (rf & 1) {
    var _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DataTablesComponent_ng_template_177_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r150); var onCheckboxChangeFn_r148 = ctx.onCheckboxChangeFn; return onCheckboxChangeFn_r148($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var isSelected_r147 = ctx.isSelected;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", isSelected_r147);
} }
function DataTablesComponent_ng_template_179_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().row;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/img/portrait/small/", row_r151.avatar, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function DataTablesComponent_ng_template_179_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "shortName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var row_r151 = ctx_r157.row;
    var name_r152 = ctx_r157.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](4, _c2, row_r151.status == "1", row_r151.status == "2", row_r151.status == "3", row_r151.status == "4", row_r151.status == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, name_r152));
} }
function DataTablesComponent_ng_template_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DataTablesComponent_ng_template_179_div_1_Template, 2, 1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DataTablesComponent_ng_template_179_ng_template_2_Template, 4, 10, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r151 = ctx.row;
    var name_r152 = ctx.value;
    var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", row_r151.avatar.length > 0)("ngIfElse", _r154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](name_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r151.post, "");
} }
function DataTablesComponent_ng_template_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var status_r158 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction5"](2, _c3, status_r158 == "1", status_r158 == "2", status_r158 == "3", status_r158 == "4", status_r158 == "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", status_r158 == 1 ? "Current" : status_r158 == 2 ? "Professional" : status_r158 == 3 ? "Rejected" : status_r158 == 4 ? "Resigned" : status_r158 == 5 ? "Applied" : "Applied", " ");
} }
function DataTablesComponent_ng_template_185_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
} }
var DataTablesComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} http
     */
    function DataTablesComponent(http) {
        this.http = http;
        // row data
        this.rows = _data_datatables_data__WEBPACK_IMPORTED_MODULE_2__["DatatableData"];
        // column header
        this.columns = [
            { name: 'Name', prop: 'full_name' },
            { name: 'Email', prop: 'email' },
            { name: 'Age', prop: 'age' },
            { name: 'Salary', prop: 'salary' }
        ];
        // multi Purpose datatable Row data
        this.multiPurposeRows = _data_datatables_data__WEBPACK_IMPORTED_MODULE_2__["DatatableData"];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.expanded = {};
        this.editing = {};
        this.chkBoxSelected = [];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["SelectionType"];
        // private
        this.tempData = [];
        this.multiPurposeTemp = [];
        this.tempData = _data_datatables_data__WEBPACK_IMPORTED_MODULE_2__["DatatableData"];
        this.multiPurposeTemp = _data_datatables_data__WEBPACK_IMPORTED_MODULE_2__["DatatableData"];
    }
    /**
     * inlineEditingUpdate
     *
     * @param event
     * @param cell
     * @param rowIndex
     */
    DataTablesComponent.prototype.inlineEditingUpdate = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.rows);
    };
    /**
     * filterUpdate
     *
     * @param code
     */
    DataTablesComponent.prototype.filterUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.tempData.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    /**
     * rowDetailsToggleExpand
     *
     * @param row
     */
    DataTablesComponent.prototype.rowDetailsToggleExpand = function (row) {
        this.tableRowDetails.rowDetail.toggleExpandRow(row);
    };
    /**
     * toggleExpandRowResponsive
     *
     * @param row
     */
    DataTablesComponent.prototype.toggleExpandRowResponsive = function (row) {
        this.tableResponsive.rowDetail.toggleExpandRow(row);
    };
    /**
     * customChkboxOnSelect
     *
     * @param { selected }
     */
    DataTablesComponent.prototype.customChkboxOnSelect = function (_a) {
        var _b;
        var selected = _a.selected;
        this.chkBoxSelected.splice(0, this.chkBoxSelected.length);
        (_b = this.chkBoxSelected).push.apply(_b, selected);
    };
    /**
     * serverSideSetPage
     *
     * @param event
     */
    DataTablesComponent.prototype.serverSideSetPage = function (event) {
        var _this = this;
        this.http
            .get('assets/data/datatable-data.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return data; }))
            .subscribe(function (data) {
            _this.serverSideRowData = data;
        });
    };
    /**
     * MultiPurposeFilterUpdate
     *
     * @param event
     */
    DataTablesComponent.prototype.MultiPurposeFilterUpdate = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.multiPurposeTemp.filter(function (d) {
            return d.full_name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.multiPurposeRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    DataTablesComponent.prototype.ngOnInit = function () {
        // Initially load first page
        this.serverSideSetPage({ offset: 0 });
        // content header
        this.contentHeader = {
            headerTitle: 'Datatables',
            actionButton: true,
            breadcrumb: {
                type: '',
                links: [
                    {
                        name: 'Home',
                        isLink: true,
                        link: '#'
                    },
                    {
                        name: 'Forms & Tables',
                        isLink: true,
                        link: ''
                    },
                    {
                        name: 'Datatables',
                        isLink: false
                    }
                ]
            }
        };
    };
    DataTablesComponent.ɵfac = function DataTablesComponent_Factory(t) { return new (t || DataTablesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    DataTablesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DataTablesComponent, selectors: [["app-datatables"]], viewQuery: function DataTablesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tableRowDetails = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tableResponsive = _t.first);
        } }, decls: 186, vars: 127, consts: [["id", "ngx-datatable-basic"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH"], ["name", "Name", "prop", "full_name", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "Email", "prop", "email", 3, "width"], ["name", "Age", "prop", "age", 3, "width"], ["name", "Salary", "prop", "salary", 3, "width"], ["name", "Status", "prop", "status", 3, "width"], ["name", "Actions", 3, "width"], ["id", "ngx-datatable-inline-editing"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "headerHeight", "limit", "columnMode", "footerHeight", "rows", "scrollbarH"], ["id", "ngx-datatable-filter"], [1, "form-group"], ["for", "ngx-filter-ref"], ["id", "ngx-filter-ref", "type", "text", "placeholder", "Filter the Name column...", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", 3, "keyup"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "scrollbarH"], ["id", "ngx-datatable-row-details"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", "scrollbarH"], ["tableRowDetails", ""], [3, "rowHeight"], ["ngx-datatable-row-detail-template", ""], [3, "width", "resizeable", "sortable", "draggable", "canAutoResize"], ["id", "ngx-datatable-custom-checkbox"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", "header-height-50", 3, "rows", "columnMode", "headerHeight", "footerHeight", "limit", "selected", "selectionType", "scrollbarH", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable"], ["ngx-datatable-header-template", ""], [1, "w-100"], [1, "selected-column", "col-12", "mt-1"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "ngx-datatables-server-side"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", 3, "rows", "columns", "columnMode", "headerHeight", "footerHeight", "limit", "scrollbarH", "page"], ["id", "ngx-datatable-Responsive"], [1, "bootstrap", "core-bootstrap", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["tableResponsive", ""], ["name", "Name", "prop", "full_name", 3, "minWidth"], ["id", "ngx-datatable-multi-purpose"], ["id", "ngx-MultiPurposeFilter-ref", "type", "text", "placeholder", "Filter the Name column...", 1, "form-control", "form-control-sm", "d-inline-block", "width-200", 3, "keyup"], ["rowHeight", "auto", 1, "bootstrap", "core-bootstrap", "header-height-50", 3, "columns", "columnMode", "headerHeight", "footerHeight", "limit", "rows", "selectionType", "scrollbarH"], ["table", ""], [1, "d-flex", "align-items-center"], [4, "ngIf", "ngIfElse"], ["customAvatar", ""], [1, "cell-line-height"], [1, "font-medium-1", "line-height-1", "mb-0"], [1, "text-muted", "font-small-2"], ["height", "32", "width", "32", "alt", "datatable-avatar", 1, "rounded-circle", "mr-1", 3, "src"], [1, "avatar", "mr-1", "ml-0", 3, "ngClass"], [1, "avatar-content"], [1, "badge", "badge-pill", 3, "ngClass"], [1, "ft-more-vertical", "text-primary", "cursor-pointer", "mr-2"], [1, "ft-edit", "text-primary", "cursor-pointer"], ["title", "Double click to edit", 3, "dblclick", 4, "ngIf"], ["autofocus", "", "class", "form-control form-control-sm", "type", "text", 3, "value", "blur", 4, "ngIf"], ["title", "Double click to edit", 3, "dblclick"], ["autofocus", "", "type", "text", 1, "form-control", "form-control-sm", 3, "value", "blur"], ["class", "form-control form-control-sm", 3, "value", "blur", "change", 4, "ngIf"], [1, "form-control", "form-control-sm", 3, "value", "blur", "change"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], [1, "ml-5", "my-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 3, "click"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "pl-3"], [1, "ml-1"], ["href", "javascript:void(0)", "title", "Expand/Collapse Row", 1, "desktop-hidden", 3, "click"], [1, "badge", "badge-pill", "mobile-hidden", 3, "ngClass"], [1, "mobile-hidden"]], template: function DataTablesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Basic");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ngx-datatable", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DataTablesComponent_ng_template_11_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DataTablesComponent_ng_template_16_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DataTablesComponent_ng_template_18_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "section", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Inline Editing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ngx-datatable", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, DataTablesComponent_ng_template_30_Template, 2, 2, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DataTablesComponent_ng_template_32_Template, 2, 2, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, DataTablesComponent_ng_template_34_Template, 1, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, DataTablesComponent_ng_template_37_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "section", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "fieldset", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Search: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataTablesComponent_Template_input_keyup_50_listener($event) { return ctx.filterUpdate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ngx-datatable", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, DataTablesComponent_ng_template_53_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, DataTablesComponent_ng_template_58_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, DataTablesComponent_ng_template_60_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "section", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Row Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ngx-datatable", 24, 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ngx-datatable-row-detail", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DataTablesComponent_ng_template_73_Template, 9, 2, "ng-template", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ngx-datatable-column", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DataTablesComponent_ng_template_75_Template, 1, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, DataTablesComponent_ng_template_77_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DataTablesComponent_ng_template_82_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DataTablesComponent_ng_template_84_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "section", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Custom Checkbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "ngx-datatable", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("select", function DataTablesComponent_Template_ngx_datatable_select_96_listener($event) { return ctx.customChkboxOnSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "ngx-datatable-column", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](98, DataTablesComponent_ng_template_98_Template, 2, 1, "ng-template", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, DataTablesComponent_ng_template_99_Template, 2, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, DataTablesComponent_ng_template_101_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](106, DataTablesComponent_ng_template_106_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, DataTablesComponent_ng_template_108_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "hr", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Selections ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, DataTablesComponent_li_116_Template, 2, 1, "li", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, DataTablesComponent_li_117_Template, 2, 0, "li", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "section", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Server Side Paging");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "ngx-datatable", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function DataTablesComponent_Template_ngx_datatable_page_127_listener($event) { return ctx.serverSideSetPage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, DataTablesComponent_ng_template_129_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "ngx-datatable-column", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](134, DataTablesComponent_ng_template_134_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](136, DataTablesComponent_ng_template_136_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "section", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Responsive");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "ngx-datatable", 40, 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "ngx-datatable-row-detail", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, DataTablesComponent_ng_template_149_Template, 10, 2, "ng-template", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "ngx-datatable-column", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, DataTablesComponent_ng_template_151_Template, 1, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "ngx-datatable-column", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](153, DataTablesComponent_ng_template_153_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](157, DataTablesComponent_ng_template_157_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, DataTablesComponent_ng_template_159_Template, 3, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "section", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h4", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Multi Purpose");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "fieldset", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "Search: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "input", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DataTablesComponent_Template_input_keyup_172_listener($event) { return ctx.MultiPurposeFilterUpdate($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "ngx-datatable", 45, 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "ngx-datatable-column", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](176, DataTablesComponent_ng_template_176_Template, 2, 1, "ng-template", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, DataTablesComponent_ng_template_177_Template, 2, 1, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "ngx-datatable-column", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, DataTablesComponent_ng_template_179_Template, 9, 4, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "ngx-datatable-column", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "ngx-datatable-column", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "ngx-datatable-column", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, DataTablesComponent_ng_template_183_Template, 2, 8, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "ngx-datatable-column", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](185, DataTablesComponent_ng_template_185_Template, 2, 0, "ng-template", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.rows)("rowHeight", 50)("limit", 10)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("headerHeight", 50)("limit", 10)("columnMode", ctx.ColumnMode.force)("footerHeight", 50)("rows", ctx.rows)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100)("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("limit", 10)("rows", ctx.rows)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.rows)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("selected", ctx.chkBoxSelected)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length, ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chkBoxSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.chkBoxSelected == null ? null : ctx.chkBoxSelected.length));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rows", ctx.serverSideRowData)("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("rowHeight", 50)("limit", 10)("rows", ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rowHeight", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 20)("resizeable", false)("sortable", false)("draggable", false)("canAutoResize", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("minWidth", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("columns", ctx.columns)("columnMode", ctx.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("limit", 10)("rows", ctx.multiPurposeRows)("selectionType", ctx.SelectionType.checkbox)("scrollbarH", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 70);
        } }, directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailTemplateDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnHeaderDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_shared_pipes_short_name_pipe__WEBPACK_IMPORTED_MODULE_7__["ShortNamePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtdGFibGVzL2RhdGEtdGFibGVzLmNvbXBvbmVudC5zY3NzIn0= */", ".ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n  .ngx-datatable [hidden] {\n    display: none !important; }\n  .ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }\n  .ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n  .ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }\n  .ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n  .ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n  .ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n  .ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n  .ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n  .ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }\n  .ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n  .ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n  .ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n  .ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n  .ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n  .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n  .ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n  .ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n  .ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n  .ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }\n  .ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n  .ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }\n  .ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }\n  .ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }\n  .ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }\n  .ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }\n  .ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }\n  .ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n  .ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n  /*\nbootstrap table theme\n*/\n  @charset \"UTF-8\";\n  @font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n  [data-icon]:before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  [class^='datatable-icon-']:before,\n[class*=' datatable-icon-']:before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n  .datatable-icon-filter:before {\n  content: '\\62';\n}\n  .datatable-icon-collapse:before {\n  content: '\\61';\n}\n  .datatable-icon-expand:before {\n  content: '\\63';\n}\n  .datatable-icon-close:before {\n  content: '\\64';\n}\n  .datatable-icon-up:before {\n  content: '\\65';\n}\n  .datatable-icon-down:before {\n  content: '\\66';\n}\n  .datatable-icon-sort:before {\n  content: '\\67';\n}\n  .datatable-icon-done:before {\n  content: '\\68';\n}\n  .datatable-icon-done-all:before {\n  content: '\\69';\n}\n  .datatable-icon-search:before {\n  content: '\\6a';\n}\n  .datatable-icon-pin:before {\n  content: '\\6b';\n}\n  .datatable-icon-add:before {\n  content: '\\6d';\n}\n  .datatable-icon-left:before {\n  content: '\\6f';\n}\n  .datatable-icon-right:before {\n  content: '\\70';\n}\n  .datatable-icon-skip:before {\n  content: '\\71';\n}\n  .datatable-icon-prev:before {\n  content: '\\72';\n}\n  .ngx-datatable.bootstrap {\n  box-shadow: none;\n  font-size: 13px;\n}\n  .ngx-datatable.bootstrap .datatable-header {\n  height: unset !important;\n}\n  .ngx-datatable.bootstrap .datatable-header .datatable-header-cell {\n  vertical-align: bottom;\n  padding: 0.75rem;\n  border-bottom: 1px solid #d1d4d7;\n}\n  .ngx-datatable.bootstrap .datatable-header .datatable-header-cell .datatable-header-cell-label {\n  line-height: 24px;\n}\n  .ngx-datatable.bootstrap .datatable-body .datatable-body-row {\n  vertical-align: top;\n  border-top: 1px solid #d1d4d7;\n}\n  .ngx-datatable.bootstrap .datatable-body .datatable-body-row.datatable-row-even {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n  .ngx-datatable.bootstrap .datatable-body .datatable-body-row.active {\n  background-color: #1483ff;\n  color: #fff;\n}\n  .ngx-datatable.bootstrap .datatable-body .datatable-body-row .datatable-body-cell {\n  padding: 0.75rem;\n  text-align: left;\n  vertical-align: top;\n}\n  .ngx-datatable.bootstrap .datatable-body .empty-row {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n}\n  .ngx-datatable.bootstrap .datatable-footer {\n  background: #424242;\n  color: #ededed;\n  margin-top: -1px;\n}\n  .ngx-datatable.bootstrap .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager {\n  margin: 0 10px;\n  vertical-align: top;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li {\n  margin: 10px 0px;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled).active a, .ngx-datatable.bootstrap .datatable-footer .datatable-pager ul li:not(.disabled):hover a {\n  background-color: #545454;\n  font-weight: bold;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0;\n  border-radius: 3px;\n  margin: 0 3px;\n  text-align: center;\n  vertical-align: top;\n  text-decoration: none;\n  vertical-align: bottom;\n  color: #ededed;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 18px;\n  line-height: 27px;\n  padding: 0 3px;\n}\n  .ngx-datatable.bootstrap .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}\n  .ngx-datatable.bootstrap.core-bootstrap.height-70-vh {\n  height: 70vh !important;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-header {\n  background-color: #F7F7F8;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-header .datatable-header-cell {\n  border-bottom: 0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row {\n  border-color: #E0E0E0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.datatable-row-even {\n  background-color: initial;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active {\n  background-color: #975AFF;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row.active i {\n  color: #fff !important;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell-label .cell-line-height {\n  line-height: 1.25;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-body-row .datatable-body-cell {\n  display: flex;\n  align-items: center;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer {\n  background-color: transparent;\n  color: #342E49;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li {\n  margin: 0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a {\n  margin: 0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a {\n  padding: 1.1rem 1.035rem;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:first-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:last-child a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-child(2) a i, .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:nth-last-child(2) a i {\n  position: absolute;\n  top: 0.55rem;\n  left: 0.4rem;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li.disabled a {\n  color: #757575;\n  background-color: #E0E0E0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a {\n  color: #975AFF;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled) a:hover {\n  background-color: #EEEEEE !important;\n  border-color: #E0E0E0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled).active a {\n  z-index: 3;\n  color: #fff;\n  background-color: #975AFF !important;\n  border-color: #975AFF;\n  font-weight: inherit;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li:not(.disabled):hover a {\n  background-color: #F5F5F5;\n  font-weight: inherit;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a {\n  position: relative;\n  display: block;\n  padding: 1.1rem 0.75rem;\n  margin: 0 0 0 5px;\n  line-height: 0.1;\n  background-color: #F5F5F5;\n  border: 1px solid #E0E0E0;\n  border-radius: 0.35rem;\n  font-size: 15px;\n}\n  .ngx-datatable.bootstrap.core-bootstrap .datatable-footer .datatable-pager .pager li a i {\n  padding: 0;\n}\n  .ngx-datatable.bootstrap.core-bootstrap.header-height-50 .datatable-header {\n  height: 50px !important;\n}\n  .ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.bootstrap .datatable-footer .datatable-pager .datatable-icon-prev {\n  line-height: 24px;\n}\n  @media (max-width: 768px) {\n  .page-count {\n    display: none;\n  }\n  .datatable-pager {\n    text-align: center !important;\n    margin: 0 !important;\n  }\n}\n  @media screen and (max-width: 800px) {\n  .desktop-hidden {\n    display: initial;\n  }\n  .mobile-hidden {\n    display: none;\n  }\n}\n  @media screen and (min-width: 800px) {\n  .desktop-hidden {\n    display: none;\n  }\n  .mobile-hidden {\n    display: initial;\n  }\n}\n  html body.layout-dark .datatable-footer .pager li.disabled a {\n  color: #626164;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-header {\n  background-color: #101010;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: #474748;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer {\n  color: #B2B1B5;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: #1E1E1E;\n  border-color: #474748;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: #1E1E1E;\n}\n  html body.layout-dark:not(.layout-transparent) .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: #1E1E1E !important;\n  border-color: #474748 !important;\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-header {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-body-row {\n  border-color: rgba(238, 238, 238, 0.2);\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer {\n  color: #D6D5D8;\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li.disabled a,\nhtml body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li a {\n  background-color: rgba(0, 0, 0, 0.12);\n  border-color: rgba(0, 0, 0, 0.12);\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled) a {\n  color: #D6D5D8;\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):hover a {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n  html body.layout-dark.layout-transparent .ngx-datatable.bootstrap .datatable-footer .pager li:not(.disabled):not(.active) a:hover {\n  background-color: rgba(0, 0, 0, 0.12) !important;\n  border-color: rgba(0, 0, 0, 0.12) !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MiLCJub2RlX21vZHVsZXMvQHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL2Jvb3RzdHJhcC5zY3NzIiwic3JjL2Fzc2V0cy9zYXNzL2xpYnMvZGF0YXRhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MiLCJzcmMvYXNzZXRzL3Nhc3MvY29yZS92YXJpYWJsZXMvX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9zYXNzL2NvcmUvY29sb3JzL19wYWxldHRlLXZhcmlhYmxlcy5zY3NzIiwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXMuc2NzcyIsInNyYy9hc3NldHMvc2Fzcy9jb3JlL3ZhcmlhYmxlcy9hcHAtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9COztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUUsRUFBRTtFQUNKO0lBQ0Usd0JBQXdCLEVBQUU7RUFDNUI7OztJQUtFLHNCQUFzQixFQUFFO0VBQzFCO0lBQ0UsZ0JBQWdCLEVBQUU7RUFDcEI7SUFDRSxrQkFBa0IsRUFBRTtFQUN0QjtJQUNFLGdCQUFnQjtJQUNoQixpQ0FBaUMsRUFBRTtFQUNyQztJQUNFLG1CQUFtQixFQUFFO0VBQ3JCO01BQ0UsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQix1QkFBdUIsRUFBRTtFQUM3QjtJQUNFLG1CQUFtQixFQUFFO0VBQ3JCO01BQ0UsbUJBQW1CLEVBQUU7RUFDckI7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFO0VBQzNCO1FBQ0UsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUIsRUFBRTtFQUMvQjs7O0lBT0UsYUFBYTtJQUNiLG1CQUFtQjtJQUluQixpQkFBaUI7SUFDakIsY0FBYyxFQUFFO0VBQ2xCOztJQUVFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGtCQUFrQixFQUFFO0VBQ3BCOztNQUVFLGFBQWEsRUFBRTtFQUNuQjs7SUFFRSxVQUFVLEVBQUU7RUFDZDs7OztJQUlFLGtCQUFrQixFQUFFO0VBQ3RCO0lBQ0UsY0FBYztJQUNkLGdCQUFnQixFQUFFO0VBQ2xCO01BQ0Usb0JBQW9CO01BQ3BCLDRCQUE0QixFQUFFO0VBQ2hDO01BQ0Usa0JBQWtCO01BQ2xCLHFCQUFxQixFQUFFO0VBQ3ZCO1FBQ0UsZUFBZSxFQUFFO0VBQ25CO1FBQ0UsWUFBWSxFQUFFO0VBQ2hCO1FBQ0UsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsZUFBZSxFQUFFO0VBQ25COztRQUVFLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLGNBQWM7UUFDZCxrQkFBa0IsRUFBRTtFQUN0QjtRQUNFLGlCQUFpQixFQUFFO0VBQ3JCO1FBQ0UsbUJBQW1CLEVBQUU7RUFDdkI7UUFDRSxtQkFBbUIsRUFBRTtFQUN2QjtRQUNFLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUyxFQUFFO0VBQ1g7VUFDRSxRQUFRLEVBQUU7RUFDWjtVQUNFLE9BQU8sRUFBRTtFQUNiO1FBQ0UsZUFBZSxFQUFFO0VBQ3ZCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjLEVBQUU7RUFDaEI7TUFDRSxxQkFBcUIsRUFBRTtFQUN6QjtNQUNFLGtCQUFrQixFQUFFO0VBQ3RCO01BS0UsYUFBYTtNQU9iLHNCQUFzQixFQUFFO0VBQzFCO01BQ0UsYUFBYSxFQUFFO0VBQ2Y7UUFLRSxhQUFhLEVBQUU7RUFDckI7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGNBQWMsRUFBRTtFQUNoQjtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsV0FBVyxFQUFFO0VBQ2Y7TUFDRSxhQUFhLEVBQUU7RUFDakI7TUFDRSxhQUFhLEVBQUU7RUFDakI7TUFDRSxhQUFhLEVBQUU7RUFDakI7TUFDRSxhQUFhO01BQ2IsaUJBQWlCLEVBQUU7RUFDbkI7O1FBRUUsVUFBVTtRQUNWLFNBQVM7UUFDVCxxQkFBcUI7UUFDckIsZ0JBQWdCLEVBQUU7RUFDcEI7O1FBRUUsYUFBYSxFQUFFO0VBQ2pCO1FBQ0UsZUFBZTtRQUNmLHFCQUFxQixFQUFFO0VBQ3pCO1FBQ0UsbUJBQW1CLEVBQUU7RUNyTTdCOztDQ0dDO0VDSEQsZ0JBQWdCO0VBRWhCO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtFQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDO0VBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7RUFFQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUZoRkE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQ0VqQjtFREpBO0VBSUksd0JBQXdCO0FDSTVCO0VEUkE7RUFNTSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztBQ010QztFRGRBO0VBVVEsaUJBQWlCO0FDUXpCO0VEbEJBO0VBZ0JNLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUNNbkM7RUR2QkE7RUFtQlEscUNBQXFDO0FDUTdDO0VEM0JBO0VBc0JRLHlCQUF5QjtFQUN6QixXQUFXO0FDU25CO0VEaENBO0VBMEJRLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDVTNCO0VEdENBO0VBa0NNLGtCQUFrQjtFQUNsQix3QkFGeUI7RUFHekIsZ0JBQWdCO0FDUXRCO0VENUNBO0VBd0NJLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0FDUXBCO0VEbERBO0VBNENNLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FDVXZCO0VEeERBO0VBaURNLGNBQWM7RUFDZCxtQkFBbUI7QUNXekI7RUQ3REE7RUFxRFUsZ0JBQWdCO0FDWTFCO0VEakVBO0VBMERnQix5QkFBeUI7RUFDekIsaUJBQWlCO0FDV2pDO0VEdEVBO0VBa0VRLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0FDUXRCO0VEcEZBOzs7O0VBa0ZRLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQ1N0QjtFRDdGQTtFQTRGUSxpQkFBaUI7QUNLekI7RUE5RkE7RUFJUSx1QkFBdUI7QUE4Ri9CO0VBbEdBO0VBUVEseUJFOERTO0FGZ0NqQjtFQXRHQTtFQVdVLGdCQUFnQjtBQStGMUI7RUExR0E7RUFnQlEscUJFc0VjO0FGd0J0QjtFQTlHQTtFQW1CVSx5QkFBeUI7QUErRm5DO0VBbEhBO0VBdUJVLHlCRURPO0FGZ0dqQjtFQXRIQTtFQTBCWSxzQkFBd0I7QUFnR3BDO0VBMUhBO0VBZ0NZLGlCQUFpQjtBQThGN0I7RUE5SEE7RUFxQ1UsYUFBYTtFQUNiLG1CQUFtQjtBQTZGN0I7RUFuSUE7RUE0Q1EsNkJBQTZCO0VBQzdCLGNFMEJZO0FGaUVwQjtFQXhJQTtFQWlEWSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQTJGL0I7RUE5SUE7RUFzRGMsU0FBUztBQTRGdkI7RUFsSkE7RUF5RGdCLFNBQVM7QUE2RnpCO0VBdEpBO0VBaUVrQix3QkFBd0I7QUF5RjFDO0VBMUpBO0VBb0VvQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUEwRmhDO0VBaEtBO0VBNkVrQixjR01HO0VITEgseUJFc0hjO0FGL0JoQztFQXJLQTtFQW9Ga0IsY0U5REQ7QUZtSmpCO0VBektBO0VBdUZvQixvQ0FBaUQ7RUFDakQscUJFRkU7QUZ3RnRCO0VBOUtBO0VBOEZvQixVQUFVO0VBQ1YsV0V0R1I7RUZ1R1Esb0NBQXFDO0VBQ3JDLHFCRTNFSDtFRjRFRyxvQkFBb0I7QUFvRnhDO0VBdExBO0VBdUdrQix5QkVzRks7RUZyRkwsb0JBQW9CO0FBbUZ0QztFQTNMQTtFQTZHZ0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkltcUIwQjtFSmxxQjFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIseUJFMkVPO0VGMUVQLHlCRTdCTTtFRjhCTixzQkU1Qk87RUY2QlAsZUs3R0s7QUwrTHJCO0VBdk1BO0VBd0hrQixVQUFVO0FBbUY1QjtFQTNNQTtFQWtJVSx1QkFBdUI7QUE2RWpDO0VBL01BOzs7O0VBNklRLGlCQUFpQjtBQXlFekI7RUFsRUE7RUFDRTtJQUNFLGFBQWE7RUFxRWY7RUFsRUE7SUFDRSw2QkFBNkI7SUFDN0Isb0JBQW9CO0VBb0V0QjtBQUNGO0VBakVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFvRWxCO0VBakVBO0lBQ0UsYUFBYTtFQW1FZjtBQUNGO0VBaEVBO0VBQ0U7SUFDRSxhQUFhO0VBbUVmO0VBaEVBO0lBQ0UsZ0JBQWdCO0VBa0VsQjtBQUNGO0VBL0RBO0VBSUksY0t0SXVCO0FMcU0zQjtFQW5FQTtFQVdRLHlCS2xKZTtBTDhNdkI7RUF2RUE7RUFlUSxxQktoSmlCO0FMNE16QjtFQTNFQTtFQW1CUSxjS3pKZTtBTHFOdkI7RUEvRUE7O0VBeUJZLHlCSzlKUztFTCtKVCxxQkszSmE7QUxzTnpCO0VBckZBO0VBK0JjLHlCS3BLTztBTDhOckI7RUF6RkE7RUFtQ2Msb0NBQXlDO0VBQ3pDLGdDQUF5QztBQTBEdkQ7RUE5RkE7RUFnRFEscUNFaE9JO0FGa1JaO0VBbEdBO0VBb0RRLHNDS3pLbUI7QUwyTjNCO0VBdEdBO0VBd0RRLGNLbExlO0FMb092QjtFQTFHQTs7RUE4RFkscUNFOU9BO0VGK09BLGlDRS9PQTtBRmdTWjtFQWhIQTtFQW9FYyxjSzlMUztBTDhPdkI7RUFwSEE7RUF3RWMscUNFeFBGO0FGd1NaO0VBeEhBO0VBNEVjLGdEQUE4QztFQUM5Qyw0Q0FBMEM7QUFnRHhEIiwiZmlsZSI6InNyYy9hc3NldHMvc2Fzcy9saWJzL2RhdGF0YWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuYm9vdHN0cmFwIHRhYmxlIHRoZW1lXG4qL1xuXG4ubmd4LWRhdGF0YWJsZS5ib290c3RyYXAge1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC1sYWJlbCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDFkNGQ3O1xuICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgICAgfVxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ4M2ZmO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVtcHR5LXJvdyB7XG4gICAgICAkYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtICFkZWZhdWx0O1xuICAgICAgJGFsZXJ0LXBhZGRpbmcteDogMS4yNXJlbSAhZGVmYXVsdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmc6ICRhbGVydC1wYWRkaW5nLXkgJGFsZXJ0LXBhZGRpbmcteDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDI0MjQyO1xuICAgIGNvbG9yOiAjZWRlZGVkO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDAgM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgY29sb3I6ICNlZGVkZWQ7XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9ib290c3RyYXAuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiLi4vY29yZS92YXJpYWJsZXMvYXBwLXZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIi4uL2NvcmUvY29sb3JzL3BhbGV0dGUtdmFyaWFibGVzXCI7XG5cbi5uZ3gtZGF0YXRhYmxlIHtcbiAgJi5ib290c3RyYXAge1xuICAgICYuY29yZS1ib290c3RyYXAge1xuICAgICAgJi5oZWlnaHQtNzAtdmgge1xuICAgICAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcblxuICAgICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XG5cbiAgICAgICAgJi5kYXRhdGFibGUtcm93LWV2ZW4ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XG5cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbC1sYWJlbCB7XG4gICAgICAgICAgLmNlbGwtbGluZS1oZWlnaHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAkYm9keS1jb2xvcjtcblxuICAgICAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgICAgICAucGFnZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIGEge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQsXG4gICAgICAgICAgICAgICY6bGFzdC1jaGlsZCxcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMiksXG4gICAgICAgICAgICAgICY6bnRoLWxhc3QtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtIDEuMDM1cmVtO1xuXG4gICAgICAgICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDAuNTVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAuNHJlbTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBtYXAtZ2V0KCRncmV5LWNvbG9yLCBkYXJrZW4tMSk7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1kaXNhYmxlZC1iZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1jb2xvcjtcblxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWhvdmVyLWJnICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIGEge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24tYmc7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4xcmVtICRwYWdpbmF0aW9uLXBhZGRpbmcteDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDVweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC4xO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdpbmF0aW9uLWJnO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoIHNvbGlkICRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtcm9vdDtcblxuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5oZWFkZXItaGVpZ2h0LTUwIHtcbiAgICAgICAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG5cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBtZWRpYSBxdWVyeSBmb3IgU21hbGwgJiBNZWRpdW0gZGV2aWNlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLWNvdW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLmRlc2t0b3AtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cblxuaHRtbCBib2R5LmxheW91dC1kYXJrIHtcblxuICAvLyBmb3IgZGFyayBhbmQgdHJhbnNwYXJlbnQgbGF5b3V0c1xuICAuZGF0YXRhYmxlLWZvb3RlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgY29sb3I6ICRkbC1kaXNhYmxlZC1jb2xvcjtcbiAgfVxuXG4gIC8vIGZvciBkYXJrIGxheW91dFxuICAmOm5vdCgubGF5b3V0LXRyYW5zcGFyZW50KSB7XG4gICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yLWRhcms7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICAgICAgY29sb3I6ICRkbC10ZXh0LWNvbG9yO1xuXG4gICAgICAgIC5wYWdlciBsaSB7XG5cbiAgICAgICAgICAmLmRpc2FibGVkIGEsXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRkbC1ib3JkZXItY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAmOmhvdmVyIGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6bm90KC5hY3RpdmUpIGE6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGwtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGwtYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZm9yIHRyYW5zcGFyZW50IGxheW91dFxuICAmLmxheW91dC10cmFuc3BhcmVudCB7XG4gICAgLm5neC1kYXRhdGFibGUuYm9vdHN0cmFwIHtcbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgICBib3JkZXItY29sb3I6ICR0bC1ib3JkZXItY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuXG4gICAgICAgIC5wYWdlciBsaSB7XG5cbiAgICAgICAgICAmLmRpc2FibGVkIGEsXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWNhcmQtYmctY29sb3I7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpub3QoLmRpc2FibGVkKSB7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICR0bC10ZXh0LWNvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmhvdmVyIGEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGwtY2FyZC1iZy1jb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSkgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0bC1jYXJkLWJnLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHRsLWNhcmQtYmctY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cbi5kYXRhdGFibGUtaWNvbi11cDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG4uZGF0YXRhYmxlLWljb24tZG93bjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG4uZGF0YXRhYmxlLWljb24tc29ydDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG4uZGF0YXRhYmxlLWljb24tZG9uZTpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG4uZGF0YXRhYmxlLWljb24tcGluOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cbi5kYXRhdGFibGUtaWNvbi1hZGQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cbi5kYXRhdGFibGUtaWNvbi1za2lwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cbi5kYXRhdGFibGUtaWNvbi1wcmV2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJHByaW1hcnk6ICM5NzVBRkYgIWRlZmF1bHQ7XG4kc3VjY2VzczogIzQwQzA1NyAhZGVmYXVsdDtcbiRpbmZvOiAjMkY4QkU2ICFkZWZhdWx0O1xuJHdhcm5pbmc6ICNGNzdFMTcgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAjRjU1MjUyICFkZWZhdWx0O1xuJHNlY29uZGFyeTogIzYxNkQ4OSAhZGVmYXVsdDtcbiRsaWdodDogI0RCREVFNSAhZGVmYXVsdDtcbiRkYXJrOiAjMUEwNTFEICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogJHByaW1hcnksXG4gICAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogJGRhbmdlcixcbiAgICBcInNlY29uZGFyeVwiOiAkc2Vjb25kYXJ5LFxuICAgIFwibGlnaHRcIjogJGxpZ2h0LFxuICAgIFwiZGFya1wiOiAkZGFya1xuICApLFxuICAkdGhlbWUtY29sb3JzXG4pO1xuXG4vLyBTcGFjaW5nXG5cbiRzcGFjZXI6IDEuNXJlbTtcbiRzcGFjZXJzOiAoXG4gIDA6IDAsXG4gIDE6IChcbiAgICAkc3BhY2VyICogMC4yNVxuICApLFxuICAyOiAoXG4gICAgJHNwYWNlciAqIDAuNVxuICApLFxuICAzOiAkc3BhY2VyLFxuICA0OiAoXG4gICAgJHNwYWNlciAqIDEuNVxuICApLFxuICA1OiAoXG4gICAgJHNwYWNlciAqIDNcbiAgKVxuKSAhZGVmYXVsdDtcblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cbiRib2R5LWJnOiAjRjdGN0Y4O1xuJGJvZHktY29sb3I6ICMzNDJFNDkgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAkcHJpbWFyeSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGxpbmstY29sb3IsIDUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246IG5vbmUgIWRlZmF1bHQ7XG5cbi8vIENvbXBvbmVudHNcbi8vXG4vLyBEZWZpbmUgY29tbW9uIHBhZGRpbmcgYW5kIGJvcmRlciByYWRpdXMgc2l6ZXMgYW5kIG1vcmUuXG5cbiRib3JkZXItY29sb3I6ICNFMEUwRTAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAwLjM1cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtbGc6IDAuNnJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xuXG5cbi8vIFR5cG9ncmFwaHlcbi8vXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cblxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJNb250c2VycmF0XCIsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5ncy1mb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogIzE3MTAyRiAhZGVmYXVsdDtcblxuJHNtYWxsLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuXG4kdGV4dC1tdXRlZDogI0JEQkRCRCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAxLjFyZW0gIWRlZmF1bHQ7XG5cbiRoci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogMS4xNXJlbSAycmVtICFkZWZhdWx0O1xuJHRhYmxlLWFjY2VudC1iZzogcmdiYSgkYmxhY2ssIC4wMykgIWRlZmF1bHQ7XG5cbi8vIEJ1dHRvbnMgKyBGb3Jtc1xuLy9cbi8vIFNoYXJlZCB2YXJpYWJsZXMgdGhhdCBhcmUgcmVhc3NpZ25lZCB0byBgJGlucHV0LWAgYW5kIGAkYnRuLWAgc3BlY2lmaWMgdmFyaWFibGVzLlxuXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC4zNzVyZW0gIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXg6IDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWxpbmUtaGVpZ2h0OiAxLjVyZW0gIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogMC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteTogJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQ6IDEuNSAhZGVmYXVsdDtcbiRpbnB1dC1iZzogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYmc6ICRib2R5LWJnICFkZWZhdWx0O1xuJGlucHV0LWNvbG9yOiAjNzU3ODdkICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogI0UwRTBFMCAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICRwcmltYXJ5ICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6IG5vbmUgIWRlZmF1bHQ7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICR0ZXh0LW11dGVkICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodDogY2FsYygjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArIDNweCkgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3gtc2hhZG93OiAwICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6IDIuNnJlbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICM5RTlFOUUgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLXBhZGRpbmcteTogMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAxMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAyMHB4ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGluaGVyaXQgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1iZzogI0Y1RjVGNSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6IDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1jb2xvcjogJHByaW1hcnkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogI0VFRUVFRSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAjNzU3NTc1ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICNFMEUwRTAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4vLyBDYXJkc1xuXG4kY2FyZC1zcGFjZXIteTogMS41cmVtO1xuJGNhcmQtc3BhY2VyLXg6IDEuNXJlbTtcbiRjYXJkLWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4vLyBQb3BvdmVyc1xuXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjZyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAxcmVtICFkZWZhdWx0O1xuXG4vLyBUb2FzdHNcblxuJHRvYXN0LXBhZGRpbmcteTogMC40NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogLThweCA4cHggMTRweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuLy8gQmFkZ2VzXG5cbiRiYWRnZS1mb250LXNpemU6IDg1JSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogNTAwICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogMC40cmVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogMC42NjY2NjY2NjdyZW0gIWRlZmF1bHQ7XG5cbi8vIE1vZGFsc1xuXG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAwLjk1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogMS40NXJlbSAhZGVmYXVsdDtcblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAwLjhyZW0gIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogI2VlZSAhZGVmYXVsdDtcblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ob3Zlci1iZzogJGJvZHktYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogIzc1NzU3NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogOTAlICFkZWZhdWx0O1xuJGNvZGUtY29sb3I6ICRkYW5nZXIgIWRlZmF1bHQ7XG5cbi8vIFV0aWxpdGllc1xuXG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW4sIHZpc2libGUsIHNjcm9sbCAhZGVmYXVsdDtcbiIsIi8vIE92ZXJyaWRlcyB1c2VyIGNvbXBvbmVudHMtdmFyaWFibGVzXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xuXG5AaW1wb3J0IFwiLi4vdmFyaWFibGVzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcbiR3aGl0ZS1jb2xvcjogKFxuICBcImJhc2VcIjogI2ZmZmZmZlxuKTtcbiRibGFjay1jb2xvcjogKFxuICBcImJhc2VcIjogIzAwMDAwMFxuKTtcbiRwcmltYXJ5LWNvbG9yOiAoXG4gIFwibGlnaHRlbi00XCI6ICNFRkRFRkYsXG4gIFwibGlnaHRlbi0zXCI6ICNEQ0JERkYsXG4gIFwibGlnaHRlbi0yXCI6ICNDODlDRkYsXG4gIFwibGlnaHRlbi0xXCI6ICNCNTgzRkYsXG4gIFwiYmFzZVwiOiAjOTc1QUZGLFxuICBcImRhcmtlbi0xXCI6ICM3NDQxREIsXG4gIFwiZGFya2VuLTJcIjogIzU2MkRCNyxcbiAgXCJkYXJrZW4tM1wiOiAjM0IxQzkzLFxuICBcImRhcmtlbi00XCI6ICMyODExN0Fcbik7XG4kc2Vjb25kYXJ5LWNvbG9yOiAoXG4gIFwibGlnaHRlbi00XCI6ICNFQUYwRjksXG4gIFwibGlnaHRlbi0zXCI6ICNENkUxRjMsXG4gIFwibGlnaHRlbi0yXCI6ICNCNUMzREIsXG4gIFwibGlnaHRlbi0xXCI6ICM4RjlEQjgsXG4gIFwiYmFzZVwiOiAjNjE2RDg5LFxuICBcImRhcmtlbi0xXCI6ICM0NjUzNzUsXG4gIFwiZGFya2VuLTJcIjogIzMwM0M2MixcbiAgXCJkYXJrZW4tM1wiOiAjMUUyOTRGLFxuICBcImRhcmtlbi00XCI6ICMxMjFBNDFcbik7XG4kc3VjY2Vzcy1jb2xvcjogKFxuICBcImxpZ2h0ZW4tNFwiOiAjRTBGQkRBLFxuICBcImxpZ2h0ZW4tM1wiOiAjQkRGOEI2LFxuICBcImxpZ2h0ZW4tMlwiOiAjOEVFQzhELFxuICBcImxpZ2h0ZW4tMVwiOiAjNkNEOTc1LFxuICBcImJhc2VcIjogIzQwQzA1NyxcbiAgXCJkYXJrZW4tMVwiOiAjMkVBNTRGLFxuICBcImRhcmtlbi0yXCI6ICMyMDhBNDcsXG4gIFwiZGFya2VuLTNcIjogIzE0NkYzRSxcbiAgXCJkYXJrZW4tNFwiOiAjMEM1QzM4XG4pO1xuJGRhbmdlci1jb2xvcjogKFxuICBcImxpZ2h0ZW4tNFwiOiAjRkVFOERDLFxuICBcImxpZ2h0ZW4tM1wiOiAjRkVDQkJBLFxuICBcImxpZ2h0ZW4tMlwiOiAjRkNBODk3LFxuICBcImxpZ2h0ZW4tMVwiOiAjRjk4NzdDLFxuICBcImJhc2VcIjogI0Y1NTI1MixcbiAgXCJkYXJrZW4tMVwiOiAjRDIzQjQ4LFxuICBcImRhcmtlbi0yXCI6ICNCMDI5NDAsXG4gIFwiZGFya2VuLTNcIjogIzhFMUEzOCxcbiAgXCJkYXJrZW4tNFwiOiAjNzUwRjMzXG4pO1xuJHdhcm5pbmctY29sb3I6IChcbiAgXCJsaWdodGVuLTRcIjogI0ZFRUZEMCxcbiAgXCJsaWdodGVuLTNcIjogI0ZFREJBMSxcbiAgXCJsaWdodGVuLTJcIjogI0ZDQzE3MyxcbiAgXCJsaWdodGVuLTFcIjogI0ZBQTc1MCxcbiAgXCJiYXNlXCI6ICNGNzdFMTcsXG4gIFwiZGFya2VuLTFcIjogI0Q0NjAxMCxcbiAgXCJkYXJrZW4tMlwiOiAjQjE0NjBCLFxuICBcImRhcmtlbi0zXCI6ICM4RjJGMDcsXG4gIFwiZGFya2VuLTRcIjogIzc2MjAwNFxuKTtcbiRpbmZvLWNvbG9yOiAoXG4gIFwibGlnaHRlbi00XCI6ICNENUYxRkQsXG4gIFwibGlnaHRlbi0zXCI6ICNBQ0UwRkMsXG4gIFwibGlnaHRlbi0yXCI6ICM4MUM4RjcsXG4gIFwibGlnaHRlbi0xXCI6ICM2MEFGRjAsXG4gIFwiYmFzZVwiOiAjMkY4QkU2LFxuICBcImRhcmtlbi0xXCI6ICMyMjZDQzUsXG4gIFwiZGFya2VuLTJcIjogIzE3NTBBNSxcbiAgXCJkYXJrZW4tM1wiOiAjMEUzODg1LFxuICBcImRhcmtlbi00XCI6ICMwOTI3NkVcbik7XG4kbGlnaHQ6IChcbiAgXCJiYXNlXCI6ICNEQkRFRTVcbik7XG4kZGFyazogKFxuICBcImJhc2VcIjogIzFBMDUxRFxuKTtcblxuJGdyZXktY29sb3I6IChcbiAgXCJsaWdodGVuLTRcIjogI2Y1ZjVmNSxcbiAgXCJsaWdodGVuLTNcIjogI2VlZSxcbiAgXCJsaWdodGVuLTJcIjogI2UwZTBlMCxcbiAgXCJsaWdodGVuLTFcIjogI2JkYmRiZCxcbiAgXCJiYXNlXCI6ICM5ZTllOWUsXG4gIFwiZGFya2VuLTFcIjogIzc1NzU3NSxcbiAgXCJkYXJrZW4tMlwiOiAjNjE2MTYxLFxuICBcImRhcmtlbi0zXCI6ICM0MjQyNDIsXG4gIFwiZGFya2VuLTRcIjogIzIxMjEyMVxuKTtcblxuJHNoYWRlczogKFxuICBcImJsYWNrXCI6ICMwMDAwMDAsXG4gIFwid2hpdGVcIjogI2ZmZmZmZixcbiAgXCJ0cmFuc3BhcmVudFwiOiB0cmFuc3BhcmVudFxuKTtcblxuJGNvbG9yczogKFxuICBcIndoaXRlXCI6ICR3aGl0ZS1jb2xvcixcbiAgXCJibGFja1wiOiAkYmxhY2stY29sb3IsXG4gIFwicHJpbWFyeVwiOiAkcHJpbWFyeS1jb2xvcixcbiAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeS1jb2xvcixcbiAgXCJzdWNjZXNzXCI6ICRzdWNjZXNzLWNvbG9yLFxuICBcImRhbmdlclwiOiAkZGFuZ2VyLWNvbG9yLFxuICBcIndhcm5pbmdcIjogJHdhcm5pbmctY29sb3IsXG4gIFwiaW5mb1wiOiAkaW5mby1jb2xvcixcbiAgXCJsaWdodFwiOiAkbGlnaHQsXG4gIFwiZGFya1wiOiAkZGFyayxcbiAgXCJncmV5XCI6ICRncmV5LWNvbG9yXG4pO1xuXG4kZ3JhZGllbnQtY29sb3JzOiAoXG4gIGdyYWRpZW50LW1pbnQ6IChcbiAgICBcInN0YXJ0LWNvbG9yXCI6ICMyMjZDQzUsXG4gICAgXCJlbmQtY29sb3JcIjogIzZDRDk3NVxuICApLFxuICBncmFkaWVudC1wb21lZ3JhbmF0ZTogKFxuICAgIFwic3RhcnQtY29sb3JcIjogIzQ2NTM3NSxcbiAgICBcImVuZC1jb2xvclwiOiAjRjU1MjUyXG4gICksXG4gIGdyYWRpZW50LWJsYWNrYmVycnk6IChcbiAgICBcInN0YXJ0LWNvbG9yXCI6ICMzMDNDNjIsXG4gICAgXCJlbmQtY29sb3JcIjogI0I1QzNEQlxuICApLFxuICBncmFkaWVudC1raW5nLXluYTogKFxuICAgIFwic3RhcnQtY29sb3JcIjogIzc0NDFEQixcbiAgICBcImVuZC1jb2xvclwiOiAjRjk4NzdDXG4gICksXG4gIGdyYWRpZW50LWliaXphLXN1bnNldDogKFxuICAgIFwic3RhcnQtY29sb3JcIjogI0IwMjk0MCxcbiAgICBcImVuZC1jb2xvclwiOiAjRkNDMTczXG4gICksXG4gIGdyYWRpZW50LWZsaWNrcjogKFxuICAgIFwic3RhcnQtY29sb3JcIjogI0Y3N0UxNyxcbiAgICBcImVuZC1jb2xvclwiOiAjMkY4QkU2XG4gICksXG4gIGdyYWRpZW50LXB1cnBsZS1ibGlzczogKFxuICAgIFwic3RhcnQtY29sb3JcIjogIzU2MkRCNyxcbiAgICBcImVuZC1jb2xvclwiOiAjNjBBRkYwXG4gICksXG4gIGdyYWRpZW50LW1hbi1vZi1zdGVlbDogKFxuICAgIFwic3RhcnQtY29sb3JcIjogIzJGM0VBMCxcbiAgICBcImVuZC1jb2xvclwiOiAjQUUzNDJEXG4gICksXG4gIGdyYWRpZW50LXB1cnBsZS1sb3ZlOiAoXG4gICAgXCJzdGFydC1jb2xvclwiOiAjNzQ0MURCLFxuICAgIFwiZW5kLWNvbG9yXCI6ICNDODlDRkZcbiAgKSxcbiAgZ3JhZGllbnQtc3RhcmZhbGw6IChcbiAgICBcInN0YXJ0LWNvbG9yXCI6ICNEMjNCNDgsXG4gICAgXCJlbmQtY29sb3JcIjogIzJGOEJFNlxuICApXG4pO1xuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXG4vLyBjb25zaXN0ZW50IG5hbWluZy4gRXg6ICRuYXYtbGluay1kaXNhYmxlZC1jb2xvciBhbmQgJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14cy5cblxuLy8gQ29sb3Igc3lzdGVtXG5cbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcblxuJGdyYXlzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kZ3JheXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcbiAgICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcbiAgICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcbiAgICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gICAgXCI5MDBcIjogJGdyYXktOTAwXG4gICksXG4gICRncmF5c1xuKTtcblxuJGJsdWU6ICAgICMwMDdiZmYgIWRlZmF1bHQ7XG4kaW5kaWdvOiAgIzY2MTBmMiAhZGVmYXVsdDtcbiRwdXJwbGU6ICAjNmY0MmMxICFkZWZhdWx0O1xuJHBpbms6ICAgICNlODNlOGMgIWRlZmF1bHQ7XG4kcmVkOiAgICAgI2RjMzU0NSAhZGVmYXVsdDtcbiRvcmFuZ2U6ICAjZmQ3ZTE0ICFkZWZhdWx0O1xuJHllbGxvdzogICNmZmMxMDcgIWRlZmF1bHQ7XG4kZ3JlZW46ICAgIzI4YTc0NSAhZGVmYXVsdDtcbiR0ZWFsOiAgICAjMjBjOTk3ICFkZWZhdWx0O1xuJGN5YW46ICAgICMxN2EyYjggIWRlZmF1bHQ7XG5cbiRjb2xvcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRjb2xvcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgICBcImluZGlnb1wiOiAgICAgJGluZGlnbyxcbiAgICBcInB1cnBsZVwiOiAgICAgJHB1cnBsZSxcbiAgICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gICAgXCJyZWRcIjogICAgICAgICRyZWQsXG4gICAgXCJvcmFuZ2VcIjogICAgICRvcmFuZ2UsXG4gICAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gICAgXCJncmVlblwiOiAgICAgICRncmVlbixcbiAgICBcInRlYWxcIjogICAgICAgJHRlYWwsXG4gICAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICAgIFwid2hpdGVcIjogICAgICAkd2hpdGUsXG4gICAgXCJncmF5XCI6ICAgICAgICRncmF5LTYwMCxcbiAgICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4gICksXG4gICRjb2xvcnNcbik7XG5cbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuXG4kdGhlbWUtY29sb3JzOiAoKSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICBcInByaW1hcnlcIjogICAgJHByaW1hcnksXG4gICAgXCJzZWNvbmRhcnlcIjogICRzZWNvbmRhcnksXG4gICAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICAgIFwiaW5mb1wiOiAgICAgICAkaW5mbyxcbiAgICBcIndhcm5pbmdcIjogICAgJHdhcm5pbmcsXG4gICAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gICAgXCJsaWdodFwiOiAgICAgICRsaWdodCxcbiAgICBcImRhcmtcIjogICAgICAgJGRhcmtcbiAgKSxcbiAgJHRoZW1lLWNvbG9yc1xuKTtcblxuLy8gU2V0IGEgc3BlY2lmaWMganVtcCBwb2ludCBmb3IgcmVxdWVzdGluZyBjb2xvciBqdW1wc1xuJHRoZW1lLWNvbG9yLWludGVydmFsOiAgICAgIDglICFkZWZhdWx0O1xuXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cbiR5aXEtY29udHJhc3RlZC10aHJlc2hvbGQ6ICAxNTAgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbWl6ZSB0aGUgbGlnaHQgYW5kIGRhcmsgdGV4dCBjb2xvcnMgZm9yIHVzZSBpbiBvdXIgWUlRIGNvbG9yIGNvbnRyYXN0IGZ1bmN0aW9uLlxuJHlpcS10ZXh0LWRhcms6ICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiR5aXEtdGV4dC1saWdodDogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG5cbi8vIENoYXJhY3RlcnMgd2hpY2ggYXJlIGVzY2FwZWQgYnkgdGhlIGVzY2FwZS1zdmcgZnVuY3Rpb25cbiRlc2NhcGVkLWNoYXJhY3RlcnM6IChcbiAgKFwiPFwiLFwiJTNjXCIpLFxuICAoXCI+XCIsXCIlM2VcIiksXG4gIChcIiNcIixcIiUyM1wiKSxcbikgIWRlZmF1bHQ7XG5cblxuLy8gT3B0aW9uc1xuLy9cbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cblxuJGVuYWJsZS1jYXJldDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJvdW5kZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6ICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiAgICAgICAgICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcbiRlbmFibGUtZ3JpZC1jbGFzc2VzOiAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByaW50LXN0eWxlczogICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiAgICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogICAgICAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNwYWNlcnM6IG1hcC1tZXJnZShcbiAgKFxuICAgIDA6IDAsXG4gICAgMTogKCRzcGFjZXIgKiAuMjUpLFxuICAgIDI6ICgkc3BhY2VyICogLjUpLFxuICAgIDM6ICRzcGFjZXIsXG4gICAgNDogKCRzcGFjZXIgKiAxLjUpLFxuICAgIDU6ICgkc3BhY2VyICogMylcbiAgKSxcbiAgJHNwYWNlcnNcbik7XG5cbi8vIFRoaXMgdmFyaWFibGUgYWZmZWN0cyB0aGUgYC5oLSpgIGFuZCBgLnctKmAgY2xhc3Nlcy5cbiRzaXplczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJHNpemVzOiBtYXAtbWVyZ2UoXG4gIChcbiAgICAyNTogMjUlLFxuICAgIDUwOiA1MCUsXG4gICAgNzU6IDc1JSxcbiAgICAxMDA6IDEwMCUsXG4gICAgYXV0bzogYXV0b1xuICApLFxuICAkc2l6ZXNcbik7XG5cblxuLy8gQm9keVxuLy9cbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cblxuJGJvZHktYmc6ICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSAhZGVmYXVsdDtcbiRsaW5rLWRlY29yYXRpb246ICAgICAgICAgICAgICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBkYXJrZW4oJGxpbmstY29sb3IsIDE1JSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxuJGVtcGhhc2l6ZWQtbGluay1ob3Zlci1kYXJrZW4tcGVyY2VudGFnZTogMTUlICFkZWZhdWx0O1xuXG4vLyBQYXJhZ3JhcGhzXG4vL1xuLy8gU3R5bGUgcCBlbGVtZW50LlxuXG4kcGFyYWdyYXBoLW1hcmdpbi1ib3R0b206ICAgMXJlbSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzXG4vL1xuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4XG4pICFkZWZhdWx0O1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuJGNvbnRhaW5lci1tYXgtd2lkdGhzOiAoXG4gIHNtOiA1NDBweCxcbiAgbWQ6IDcyMHB4LFxuICBsZzogOTYwcHgsXG4gIHhsOiAxMTQwcHhcbikgIWRlZmF1bHQ7XG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRncmlkLXJvdy1jb2x1bW5zOiAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGxpbmUtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuJGxpbmUtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgMS41ICFkZWZhdWx0O1xuXG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC4zcmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRyb3VuZGVkLXBpbGw6ICAgICAgICAgICAgICAgIDUwcmVtICFkZWZhdWx0O1xuXG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjE1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGNvbXBvbmVudC1hY3RpdmUtY29sb3I6ICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICAgICAgdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuXG4kdHJhbnNpdGlvbi1iYXNlOiAgICAgICAgICAgICBhbGwgLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJHRyYW5zaXRpb24tZmFkZTogICAgICAgICAgICAgb3BhY2l0eSAuMTVzIGxpbmVhciAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiAgICAgICAgIGhlaWdodCAuMzVzIGVhc2UgIWRlZmF1bHQ7XG5cbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6IGpvaW4oXG4gIChcbiAgICAoMjEgOSksXG4gICAgKDE2IDkpLFxuICAgICg0IDMpLFxuICAgICgxIDEpLFxuICApLFxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXG4pO1xuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWVuYWJsZSB2YWx1ZS1rZXl3b3JkLWNhc2VcblxuJGZvbnQtc2l6ZS1iYXNlOiAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDsgLy8gQXNzdW1lcyB0aGUgYnJvd3NlciBkZWZhdWx0LCB0eXBpY2FsbHkgYDE2cHhgXG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6ICAgICAgICAgbGlnaHRlciAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1saWdodDogICAgICAgICAgIDMwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ub3JtYWw6ICAgICAgICAgIDQwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkOiAgICAgICAgICAgIDcwMCAhZGVmYXVsdDtcbiRmb250LXdlaWdodC1ib2xkZXI6ICAgICAgICAgIGJvbGRlciAhZGVmYXVsdDtcblxuJGZvbnQtd2VpZ2h0LWJhc2U6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGgxLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogICAgICAkc3BhY2VyIC8gMiAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6ICAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgICAxLjIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtY29sb3I6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtc2l6ZTogICAgICAgICAgICAgICA2cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkyLXNpemU6ICAgICAgICAgICAgICAgNS41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXkzLXNpemU6ICAgICAgICAgICAgICAgNC41cmVtICFkZWZhdWx0O1xuJGRpc3BsYXk0LXNpemU6ICAgICAgICAgICAgICAgMy41cmVtICFkZWZhdWx0O1xuXG4kZGlzcGxheTEtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTItd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTMtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheTQtd2VpZ2h0OiAgICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZGlzcGxheS1saW5lLWhlaWdodDogICAgICAgICAkaGVhZGluZ3MtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICAgICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kYmxvY2txdW90ZS1zbWFsbC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1zbWFsbC1mb250LXNpemU6ICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcblxuJGhyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4yZW0gIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuXG4ka2JkLWJveC1zaGFkb3c6ICAgICAgICAgICAgICBpbnNldCAwIC0uMXJlbSAwIHJnYmEoJGJsYWNrLCAuMjUpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG5cbi8vIFRhYmxlc1xuLy9cbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cblxuJHRhYmxlLWNlbGwtcGFkZGluZzogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0YWJsZS1hY2NlbnQtYmc6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgJHRhYmxlLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgJGJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWhlYWQtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHRhYmxlLWhlYWQtY29sb3I6ICAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuXG4kdGFibGUtZGFyay1jb2xvcjogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1iZzogICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kdGFibGUtZGFyay1hY2NlbnQtYmc6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjA1KSAhZGVmYXVsdDtcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICR0YWJsZS1kYXJrLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstaG92ZXItYmc6ICAgICAgICAgcmdiYSgkd2hpdGUsIC4wNzUpICFkZWZhdWx0O1xuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiAgICAgbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSkgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1sZXZlbDogICAgICAgICAgICAgIC05ICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1sZXZlbDogICAgICAgICAgLTYgIWRlZmF1bHQ7XG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbiRpbnB1dC1idG4tcGFkZGluZy15OiAgICAgICAgIC4zNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLXBhZGRpbmcteDogICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtZmFtaWx5OiAgICAgICBudWxsICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LXNpemU6ICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRpbnB1dC1idG4tZm9jdXMtd2lkdGg6ICAgICAgIC4ycmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgLjI1KSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogIDAgMCAwICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTogICAgJGxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogICAgJGxpbmUtaGVpZ2h0LWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cblxuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtc206ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc20gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy15LWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGcgIWRlZmF1bHQ7XG5cbiRidG4tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYnRuLWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAkZm9udC13ZWlnaHQtbm9ybWFsICFkZWZhdWx0O1xuJGJ0bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRidG4tZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNjUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiAgICAgICBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuXG4kYnRuLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRidG4tYmxvY2stc3BhY2luZy15OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kbGFiZWwtbWFyZ2luLWJvdHRvbTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtcGFkZGluZy15LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb250LXNpemUtbGcgIWRlZmF1bHQ7XG4kaW5wdXQtbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cbiRpbnB1dC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXktNDAwICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuJGlucHV0LWZvY3VzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAyNSUpICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRpbnB1dC1mb2N1cy13aWR0aDogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICAgICAgICAgICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggKiAyICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWlubmVyOiAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgJGlucHV0LXBhZGRpbmcteSAqIDIpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuNWVtLCAkaW5wdXQtcGFkZGluZy15KSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogLjI1ZW0sICRpbnB1dC1wYWRkaW5nLXkgLyAyKSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodC1zbSAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0LWxnICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtZ3V0dGVyOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teTogICAgICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1tYXJnaW4teDogICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6ICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5saW5lLWlucHV0LW1hcmdpbi14OiAgICAgIC4zMTI1cmVtICFkZWZhdWx0O1xuXG4kZm9ybS1ncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgICAgICAgMTBweCAhZGVmYXVsdDtcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtZ3V0dGVyOiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1jdXJzb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogICAgICA1MCUgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAgICRpbnB1dC1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtY29sb3I6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWxhYmVsLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiAgcmdiYSh0aGVtZS1jb2xvcihcInByaW1hcnlcIiksIC41KSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmcgIWRlZmF1bHQ7XG5cbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1mb2N1cy1ib3JkZXItY29sb3I6ICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpICFkZWZhdWx0O1xuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogICAgbm9uZSAhZGVmYXVsdDtcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24tY2hlY2tlZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCc+PHBhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjZsMi45NzQgMi45OUw4IDIuMTkzeicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWljb24taW5kZXRlcm1pbmF0ZTogICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiAgIG5vbmUgIWRlZmF1bHQ7XG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTInIGhlaWdodD0nMTInIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc3dpdGNoLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzUgIWRlZmF1bHQ7XG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogICAgICAgICAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUgLyAyICFkZWZhdWx0O1xuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLXNpemU6ICAgICAgICAgICAgICAgICAgc3VidHJhY3QoJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplLCAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJvcmRlci13aWR0aCAqIDQpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtZmFtaWx5OiAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZvbnQtc2l6ZTogICAgICAgICAgICRpbnB1dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICAgICAgICAgICAgICAkaW5wdXQtaGVpZ2h0ICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6ICAgMXJlbSAhZGVmYXVsdDsgLy8gRXh0cmEgcGFkZGluZyB0byBhY2NvdW50IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIGJhY2tncm91bmQtaW1hZ2UgYmFzZWQgaW5kaWNhdG9yXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAkaW5wdXQtbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAkaW5wdXQtYmcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiAgICAgICAgICAgICA4cHggMTBweCAhZGVmYXVsdDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAgICAgJGdyYXktODAwICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiAgICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nNCcgaGVpZ2h0PSc1JyB2aWV3Qm94PScwIDAgNCA1Jz48cGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAgICAgICAgICBlc2NhcGUtc3ZnKCRjdXN0b20tc2VsZWN0LWluZGljYXRvcikgbm8tcmVwZWF0IHJpZ2h0ICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgLyAkY3VzdG9tLXNlbGVjdC1iZy1zaXplICFkZWZhdWx0OyAvLyBVc2VkIHNvIHdlIGNhbiBoYXZlIG11bHRpcGxlIGJhY2tncm91bmQgZWxlbWVudHMgKGUuZy4sIGFycm93IGFuZCBmZWVkYmFjayBpY29uKVxuXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGFkZCgxZW0gKiAuNzUsICgyICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15ICogLjc1KSArICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgICAgY2VudGVyIHJpZ2h0ICgkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggKyAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZykgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICAgICAgICAgICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGYgIWRlZmF1bHQ7XG5cbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICBpbnNldCAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm94LXNoYWRvdzogICAgMCAwIDAgJGN1c3RvbS1zZWxlY3QtZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICAgICAgICAkaW5wdXQtZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LXNtOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1zbSAhZGVmYXVsdDtcblxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15LWxnOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1sZyAhZGVmYXVsdDtcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICAgICAgICAkaW5wdXQtZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJGN1c3RvbS1zZWxlY3QtaGVpZ2h0LWxnOiAgICAgICAgICAgJGlucHV0LWhlaWdodC1sZyAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10cmFjay1jdXJzb3I6ICAgICAgICAgcG9pbnRlciAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogIDFyZW0gIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJveC1zaGFkb3c6ICAgICBpbnNldCAwIC4yNXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAgICAgICAgICAgICAgICAgICRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAgICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdzogICAgICAgIDAgMCAwIDFweCAkYm9keS1iZywgJGlucHV0LWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3ctd2lkdGg6ICAkaW5wdXQtZm9jdXMtd2lkdGggIWRlZmF1bHQ7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSkgIWRlZmF1bHQ7XG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICAgICAgICAgICAgICAgICRpbnB1dC1oZWlnaHQgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAgICAgICAgICAkaW5wdXQtaGVpZ2h0LWlubmVyICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWZvY3VzLWJvcmRlci1jb2xvcjogICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAgICAgICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAgICAgICAgICAgJGlucHV0LWRpc2FibGVkLWJnICFkZWZhdWx0O1xuXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAgICAgICAgICAgICAkaW5wdXQtcGFkZGluZy15ICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogICAgICAgICAgICRpbnB1dC1mb250LWZhbWlseSAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICAgICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAgICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGN1c3RvbS1maWxlLWJvcmRlci1yYWRpdXM6ICAgICAgICAgJGlucHV0LWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY3VzdG9tLWZpbGUtYm94LXNoYWRvdzogICAgICAgICAgICAkaW5wdXQtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tY29sb3I6ICAgICAgICAgICRjdXN0b20tZmlsZS1jb2xvciAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICAgICAgICAgICAgICRpbnB1dC1ncm91cC1hZGRvbi1iZyAhZGVmYXVsdDtcbiRjdXN0b20tZmlsZS10ZXh0OiAoXG4gIGVuOiBcIkJyb3dzZVwiXG4pICFkZWZhdWx0O1xuXG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG4kZm9ybS1mZWVkYmFjay1tYXJnaW4tdG9wOiAgICAgICAgICAkZm9ybS10ZXh0LW1hcmdpbi10b3AgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I6ICAgICAgICAgdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjogICAgICAgdGhlbWUtY29sb3IoXCJkYW5nZXJcIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzNMLjYgNC41M2MtLjQtMS4wNC40Ni0xLjQgMS4xLS44bDEuMSAxLjQgMy40LTMuOGMuNi0uNjMgMS42LS4yNyAxLjIuN2wtNCA0LjZjLS40My41LS44LjQtMS4xLjF6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yOiAgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEyJyBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nMCAwIDEyIDEyJz48Y2lyY2xlIGN4PSc2JyBjeT0nNicgcj0nNC41Jy8+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgZD0nTTUuOCAzLjZoLjRMNiA2LjV6Jy8+PGNpcmNsZSBjeD0nNicgY3k9JzguMicgcj0nLjYnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgc3Ryb2tlPSdub25lJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCkgIWRlZmF1bHQ7XG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6IG1hcC1tZXJnZShcbiAgKFxuICAgIFwidmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcixcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICAgKSxcbiAgICBcImludmFsaWRcIjogKFxuICAgICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZFxuICAgICksXG4gICksXG4gICRmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4pO1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6ICAgICAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAgICAgICAgICAgICAxMDUwICFkZWZhdWx0O1xuJHppbmRleC1wb3BvdmVyOiAgICAgICAgICAgICAgICAgICAgMTA2MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9vbHRpcDogICAgICAgICAgICAgICAgICAgIDEwNzAgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJvcmRlci1jb2xvcjogJGdyYXktMzAwICRncmF5LTMwMCAkbmF2LXRhYnMtbGluay1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1kaXZpZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJG5hdi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICAgICAgJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG5cblxuLy8gTmF2YmFyXG5cbiRuYXZiYXItcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICRzcGFjZXIgLyAyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAgICAgICAgICAgICRmb250LXNpemUtbGcgIWRlZmF1bHQ7XG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcbiRuYXYtbGluay1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqICRsaW5lLWhlaWdodC1iYXNlICsgJG5hdi1saW5rLXBhZGRpbmcteSAqIDIgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLWhlaWdodDogICAgICAgICAgICAgICAkbmF2YmFyLWJyYW5kLWZvbnQtc2l6ZSAqICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6ICAgICAgICAgICAgKCRuYXYtbGluay1oZWlnaHQgLSAkbmF2YmFyLWJyYW5kLWhlaWdodCkgLyAyICFkZWZhdWx0O1xuXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAgICAgICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWJvcmRlci1yYWRpdXM6ICAgICAgJGJ0bi1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMwJyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogIHJnYmEoJHdoaXRlLCAuMSkgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWhvdmVyLWNvbG9yOiAgICAgICAgICByZ2JhKCRibGFjaywgLjcpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC45KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6ICAgICAgIHJnYmEoJGJsYWNrLCAuMykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIERyb3Bkb3duc1xuLy9cbi8vIERyb3Bkb3duIG1lbnUgY29udGFpbmVyIGFuZCBjb250ZW50cy5cblxuJGRyb3Bkb3duLW1pbi13aWR0aDogICAgICAgICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgc3VidHJhY3QoJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsICRkcm9wZG93bi1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJG5hdi1kaXZpZGVyLW1hcmdpbi15ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgMCAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgZGFya2VuKCRncmF5LTkwMCwgNSUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2luYXRpb25cblxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktc206ICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRsaW5rLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgJGxpbmstaG92ZXItY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogICRncmF5LTMwMCAhZGVmYXVsdDtcblxuXG4vLyBKdW1ib3Ryb25cblxuJGp1bWJvdHJvbi1wYWRkaW5nOiAgICAgICAgICAgICAgICAgMnJlbSAhZGVmYXVsdDtcbiRqdW1ib3Ryb24tY29sb3I6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kanVtYm90cm9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG5cblxuLy8gQ2FyZHNcblxuJGNhcmQtc3BhY2VyLXk6ICAgICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcmQtZ3JvdXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgJGdyaWQtZ3V0dGVyLXdpZHRoIC8gMiAhZGVmYXVsdDtcbiRjYXJkLWRlY2stbWFyZ2luOiAgICAgICAgICAgICAgICAgICRjYXJkLWdyb3VwLW1hcmdpbiAhZGVmYXVsdDtcblxuJGNhcmQtY29sdW1ucy1jb3VudDogICAgICAgICAgICAgICAgMyAhZGVmYXVsdDtcbiRjYXJkLWNvbHVtbnMtZ2FwOiAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHggIWRlZmF1bHQ7XG4kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b29sdGlwLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgIC45ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmcgIWRlZmF1bHQ7XG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy15OiAgICAgJHRvb2x0aXAtcGFkZGluZy15ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogICAgICR0b29sdGlwLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtbGluZS1oZWlnaHQ6ICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cblxuLy8gUG9wb3ZlcnNcblxuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgIHN1YnRyYWN0KCRwb3BvdmVyLWJvcmRlci1yYWRpdXMsICRwb3BvdmVyLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gVG9hc3RzXG5cbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjg3NXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kdG9hc3QtYmFja2dyb3VuZC1jb2xvcjogICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgLjEpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgICAgMCAuMjVyZW0gLjc1cmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgwLCAwLCAwLCAuMDUpICFkZWZhdWx0O1xuXG5cbi8vIEJhZGdlc1xuXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICA3NSUgIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjRlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kYmFkZ2UtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAuNmVtICFkZWZhdWx0O1xuLy8gVXNlIGEgaGlnaGVyIHRoYW4gbm9ybWFsIHZhbHVlIHRvIGVuc3VyZSBjb21wbGV0ZWx5IHJvdW5kZWQgZWRnZXMgd2hlblxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogICAgICAgICAgMTByZW0gIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuLy8gTWFyZ2luIGJldHdlZW4gZWxlbWVudHMgaW4gZm9vdGVyLCBtdXN0IGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gMiAqICRtb2RhbC1pbm5lci1wYWRkaW5nXG4kbW9kYWwtZm9vdGVyLW1hcmdpbi1iZXR3ZWVuOiAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLWRpYWxvZy1tYXJnaW46ICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtZGlhbG9nLW1hcmdpbi15LXNtLXVwOiAgICAgICAxLjc1cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICAgICAgICAgICAkbGluZS1oZWlnaHQtYmFzZSAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJnOiAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogICAgICAgIHJnYmEoJGJsYWNrLCAuMikgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC41KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgIDAgLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgLjUpICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAgICAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteSAkbW9kYWwtaGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gS2VlcCB0aGlzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtYmctbGV2ZWw6ICAgICAgICAgICAgICAgICAgICAtMTAgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLWxldmVsOiAgICAgICAgICAgICAgICAtOSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1sZXZlbDogICAgICAgICAgICAgICAgIDYgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICBpbnNldCAwIC4xcmVtIC4xcmVtIHJnYmEoJGJsYWNrLCAuMSkgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICB0aGVtZS1jb2xvcihcInByaW1hcnlcIikgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6ICAgICAxcyBsaW5lYXIgaW5maW5pdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLXRyYW5zaXRpb246ICAgICAgICAgICB3aWR0aCAuNnMgZWFzZSAhZGVmYXVsdDtcblxuXG4vLyBMaXN0IGdyb3VwXG5cbiRsaXN0LWdyb3VwLWNvbG9yOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTEwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAkbGlzdC1ncm91cC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAgICAgICAgICAgICRsaXN0LWdyb3VwLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tY29sb3I6ICAgICAgICAgICAkZ3JheS03MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICAgICAkbGlzdC1ncm91cC1hY3Rpb24tY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1iZzogICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG5cbi8vIEltYWdlIHRodW1ibmFpbHNcblxuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgkYmxhY2ssIC4wNzUpICFkZWZhdWx0O1xuXG5cbi8vIEZpZ3VyZXNcblxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgOTAlICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbiRicmVhZGNydW1iLWZvbnQtc2l6ZTogICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG5cbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmc6ICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuXG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBDYXJvdXNlbFxuXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItdHJhbnNpdGlvbjogICAgICBvcGFjaXR5IC42cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi13aWR0aDogICAgICAgICAgICAgNzAlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDIwcHggIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjVMNC4yNSA0bDIuNS0yLjVMNS4yNSAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGNhcm91c2VsLWNvbnRyb2wtY29sb3J9JyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBkPSdNMi43NSAwbC0xLjUgMS41TDMuNzUgNGwtMi41IDIuNUwyLjc1IDhsNC00LTQtNHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuXG5cbi8vIFNwaW5uZXJzXG5cbiRzcGlubmVyLXdpZHRoOiAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAkc3Bpbm5lci13aWR0aCAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aDogIC4yNWVtICFkZWZhdWx0O1xuXG4kc3Bpbm5lci13aWR0aC1zbTogICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQtc206ICAgICAgICRzcGlubmVyLXdpZHRoLXNtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoLXNtOiAuMmVtICFkZWZhdWx0O1xuXG5cbi8vIENsb3NlXG5cbiRjbG9zZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRjbG9zZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNsb3NlLXRleHQtc2hhZG93OiAgICAgICAgICAgICAgICAgMCAxcHggMCAkd2hpdGUgIWRlZmF1bHQ7XG5cblxuLy8gQ29kZVxuXG4kY29kZS1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICRwaW5rICFkZWZhdWx0O1xuXG4ka2JkLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAuMnJlbSAhZGVmYXVsdDtcbiRrYmQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogICAgICAgICAzNDBweCAhZGVmYXVsdDtcblxuXG4vLyBVdGlsaXRpZXNcblxuJGRpc3BsYXlzOiBub25lLCBpbmxpbmUsIGlubGluZS1ibG9jaywgYmxvY2ssIHRhYmxlLCB0YWJsZS1yb3csIHRhYmxlLWNlbGwsIGZsZXgsIGlubGluZS1mbGV4ICFkZWZhdWx0O1xuJG92ZXJmbG93czogYXV0bywgaGlkZGVuICFkZWZhdWx0O1xuJHBvc2l0aW9uczogc3RhdGljLCByZWxhdGl2ZSwgYWJzb2x1dGUsIGZpeGVkLCBzdGlja3kgIWRlZmF1bHQ7XG5cblxuLy8gUHJpbnRpbmdcblxuJHByaW50LXBhZ2Utc2l6ZTogICAgICAgICAgICAgICAgICAgYTMgIWRlZmF1bHQ7XG4kcHJpbnQtYm9keS1taW4td2lkdGg6ICAgICAgICAgICAgICBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpICFkZWZhdWx0O1xuIiwiQGltcG9ydCBcIn5ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbi8vIHZlcnRpY2FsIG1lbnVcbiRtZW51LWV4cGFuZGVkLXdpZHRoLXNtOiAyMjBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoOiAyNTBweDtcbiRtZW51LWV4cGFuZGVkLXdpZHRoLWxnOiAyODBweDtcbiRtZW51LWNvbGxhcHNlZC13aWR0aDogNjBweDtcblxuLy8gSG9yaXpvbnRhbCBNZW51XG4kbWVudS1hY3RpdmUtYmc6ICNFN0U5RUM7XG5cbiRmb250LXNpemUtcm9vdDogMTVweDtcblxuLy8gQXZhdGFyXG4kYXZhdGFyLWJnOiAjRTBFMEUwO1xuJGF2YXRhci10ZXh0LWNvbG9yOiAjNjE2MTYxO1xuJGF2YXRhci1zaXplOiAzMnB4O1xuJGF2YXRhci1zaXplLXhsOiA3MHB4O1xuJGF2YXRhci1zaXplLWxnOiA1MHB4O1xuJGF2YXRhci1zaXplLW1kOiA0MHB4O1xuJGF2YXRhci1zaXplLXNtOiAyNHB4O1xuJGF2YXRhci1zdGF0dXMtc2l6ZTogMTFweDtcbiRhdmF0YXItc3RhdHVzLXNpemUtbGc6IDE3cHg7XG5cbi8vIFNoYWRvd3NcbiRzaGFkb3ctdW1icmEtb3BhY2l0eTogMC4yICFkZWZhdWx0O1xuJHNoYWRvdy1wZW51bWJyYS1vcGFjaXR5OiAwLjE0ICFkZWZhdWx0O1xuJHNoYWRvdy1hbWJpZW50LW9wYWNpdHk6IDAuMTIgIWRlZmF1bHQ7XG5cbi8vdmFyaWFibGVzIGZvciBzb2NpYWxcbiRzb2NpYWwtZmFjZWJvb2s6ICMzYjU5OTg7XG4kc29jaWFsLXR3aXR0ZXI6ICM1NWFjZWU7XG4kc29jaWFsLXBpbnRlcmVzdDogI2NjMjEyNztcbiRzb2NpYWwtZ29vZ2xlOiAjZGQ0YjM5O1xuJHNvY2lhbC1saW5rZWRpbjogIzA5NzZiNDtcbiRzb2NpYWwtZHJpYmJibGU6ICNlYTRjODk7XG4kc29jaWFsLWdpdGh1YjogIzMzMzMzMztcbiRzb2NpYWwteW91dHViZTogI2U1MmQyNztcbiRzb2NpYWwtaW5zdGFncmFtOiAjMTI1Njg4O1xuJHNvY2lhbC1yZWRkaXQ6ICNmZjQ1MDA7XG4kc29jaWFsLXR1bWJscjogIzM1NDY1YztcbiRzb2NpYWwtYmVoYW5jZTogIzE3NjlmZjtcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gVmFyaWFibGVzIGZvciBEYXJrIExheW91dFxuJGRhcmstc3R5bGU6IHRydWU7XG4kYmctY29sb3ItZGFyazogIzEwMTAxMDtcbiRkbC10ZXh0LWNvbG9yOiAjQjJCMUI1O1xuJGRsLWJnLWNvbG9yOiAjMUUxRTFFO1xuJGRsLWhlYWRpbmdzLWNvbG9yOiAjQkZCRUMyO1xuJGRsLXRleHQtbXV0ZWQtY29sb3I6ICM4NDg0ODQ7XG4kZGwtZGlzYWJsZWQtY29sb3I6ICM2MjYxNjQ7XG4kZGwtYm9yZGVyLWNvbG9yOiAjNDc0NzQ4O1xuJGRsLWNhcmQtc2hhZG93OiAtOHB4IDhweCAxNHB4IDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8vIFZhcmlhYmxlcyBGb3IgVHJhbnNwYXJlbnQgTGF5b3V0XG5cbiR0bC10ZXh0LWNvbG9yOiAjRDZENUQ4O1xuJHRsLWhlYWRpbmdzLWNvbG9yOiAjRTlFOUVBO1xuJHRsLWJnLWNvbG9yOiB0cmFuc3BhcmVudDtcbiR0bC10ZXh0LW11dGVkLWNvbG9yOiAjQzNDMkM1O1xuJHRsLWRpc2FibGVkLWNvbG9yOiAjOUU5RTlFO1xuJHRsLWJvcmRlci1jb2xvcjogcmdiYSgjZWVlLCAwLjIpO1xuJHRsLWNhcmQtYmctY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEyKTtcblxuJGJnLWdsYXNzLWhpYmlzY3VzOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIHJpZ2h0IGJvdHRvbSxcbiAgI2YwNWY1NyxcbiAgI2M4M2Q1YyxcbiAgIzk5MjQ1YSxcbiAgIzY3MTM1MSxcbiAgIzM2MDk0MFxuKTtcbiRiZy1nbGFzcy1wdXJwbGUtcGl6emF6ejogbGluZWFyLWdyYWRpZW50KFxuICB0byByaWdodCBib3R0b20sXG4gICM2NjJkODYsXG4gICM4YjJhOGEsXG4gICNhZTIzODksXG4gICNjZjFkODMsXG4gICNlZDFlNzlcbik7XG4kYmctZ2xhc3MtYmx1ZS1sYWdvb246IGxpbmVhci1ncmFkaWVudChcbiAgdG8gcmlnaHQgYm90dG9tLFxuICAjMTQ0ZTY4LFxuICAjMDA2ZDgzLFxuICAjMDA4ZDkyLFxuICAjMDBhZDkxLFxuICAjNTdjYTg1XG4pO1xuJGJnLWdsYXNzLWVsZWN0cmljLXZpb2xldDogbGluZWFyLWdyYWRpZW50KFxuICB0byBsZWZ0IHRvcCxcbiAgIzRhMDBlMCxcbiAgIzYwMGRlMCxcbiAgIzcxMTllMSxcbiAgIzgwMjNlMSxcbiAgIzhlMmRlMlxuKTtcbiRiZy1nbGFzcy1wb3J0YWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gIHRvIGxlZnQgdG9wLFxuICAjOTdhYmZmLFxuICAjNzk4Y2U1LFxuICAjNWI2ZWNiLFxuICAjM2I1MWIxLFxuICAjMTIzNTk3XG4pO1xuJGJnLWdsYXNzLXR1bmRvcmE6IGxpbmVhci1ncmFkaWVudChcbiAgdG8gbGVmdCB0b3AsXG4gICNlZjQ2NzMsXG4gICNmZmM4NDZcbik7XG4iXX0= */"], encapsulation: 2 });
    return DataTablesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-datatables',
                templateUrl: './data-tables.component.html',
                styleUrls: ['./data-tables.component.scss', '/assets/sass/libs/datatables.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }], tableRowDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tableRowDetails']
        }], tableResponsive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tableResponsive']
        }] }); })();


/***/ }),

/***/ "./src/app/data-tables/data-tables.module.ts":
/*!***************************************************!*\
  !*** ./src/app/data-tables/data-tables.module.ts ***!
  \***************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-tables-routing.module */ "./src/app/data-tables/data-tables-routing.module.ts");
/* harmony import */ var _data_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-tables.component */ "./src/app/data-tables/data-tables.component.ts");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");







var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataTablesModule });
    DataTablesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataTablesModule_Factory(t) { return new (t || DataTablesModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataTablesRoutingModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
            ]] });
    return DataTablesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTablesModule, { declarations: [_data_tables_component__WEBPACK_IMPORTED_MODULE_4__["DataTablesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataTablesRoutingModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _data_tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["DataTablesRoutingModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["NgxDatatableModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_5__["PipeModule"]
                ],
                declarations: [
                    _data_tables_component__WEBPACK_IMPORTED_MODULE_4__["DataTablesComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-tables/data/datatables.data.ts":
/*!*****************************************************!*\
  !*** ./src/app/data-tables/data/datatables.data.ts ***!
  \*****************************************************/
/*! exports provided: DatatableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableData", function() { return DatatableData; });
var DatatableData = [
    {
        responsive_id: '',
        id: 1,
        avatar: 'avatar-s-10.png',
        full_name: "Korrie O'Crevy",
        post: 'Nuclear Power Engineer',
        email: 'kocrevy0@thetimes.co.uk',
        city: 'Krasnosilka',
        start_date: '09/23/2016',
        salary: '$23896.35',
        age: '61',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 2,
        avatar: 'avatar-s-1.png',
        full_name: 'Bailie Coulman',
        post: 'VP Quality Control',
        email: 'bcoulman1@yolasite.com',
        city: 'Hinigaran',
        start_date: '05/20/2018',
        salary: '$13633.69',
        age: '63',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 3,
        avatar: 'avatar-s-9.png',
        full_name: 'Stella Ganderton',
        post: 'Operator',
        email: 'sganderton2@tuttocitta.it',
        city: 'Golcowa',
        start_date: '03/24/2018',
        salary: '$13076.28',
        age: '66',
        experience: '6 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 4,
        avatar: 'avatar-s-10.png',
        full_name: 'Dorolice Crossman',
        post: 'Cost Accountant',
        email: 'dcrossman3@google.co.jp',
        city: 'Paquera',
        start_date: '12/03/2017',
        salary: '$12336.17',
        age: '22',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 5,
        avatar: '',
        full_name: 'Harmonia Nisius',
        post: 'Senior Cost Accountant',
        email: 'hnisius4@gnu.org',
        city: 'Lucan',
        start_date: '08/25/2017',
        salary: '$10909.52',
        age: '33',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 6,
        avatar: '',
        full_name: 'Genevra Honeywood',
        post: 'Geologist',
        email: 'ghoneywood5@narod.ru',
        city: 'Maofan',
        start_date: '06/01/2017',
        salary: '$17803.80',
        age: '61',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 7,
        avatar: '',
        full_name: 'Eileen Diehn',
        post: 'Environmental Specialist',
        email: 'ediehn6@163.com',
        city: 'Lampuyang',
        start_date: '10/15/2017',
        salary: '$18991.67',
        age: '59',
        experience: '9 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 8,
        avatar: 'avatar-s-9.png',
        full_name: 'Richardo Aldren',
        post: 'Senior Sales Associate',
        email: 'raldren7@mtv.com',
        city: 'Skoghall',
        start_date: '11/05/2016',
        salary: '$19230.13',
        age: '55',
        experience: '5 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 9,
        avatar: 'avatar-s-2.png',
        full_name: 'Allyson Moakler',
        post: 'Safety Technician',
        email: 'amoakler8@shareasale.com',
        city: 'Mogilany',
        start_date: '12/29/2018',
        salary: '$11677.32',
        age: '39',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 10,
        avatar: 'avatar-s-9.png',
        full_name: 'Merline Penhalewick',
        post: 'Junior Executive',
        email: 'mpenhalewick9@php.net',
        city: 'Kanuma',
        start_date: '04/19/2019',
        salary: '$15939.52',
        age: '23',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 11,
        avatar: '',
        full_name: 'De Falloon',
        post: 'Sales Representative',
        email: 'dfalloona@ifeng.com',
        city: 'Colima',
        start_date: '06/12/2018',
        salary: '$19252.12',
        age: '30',
        experience: '0 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 12,
        avatar: '',
        full_name: 'Cyrus Gornal',
        post: 'Senior Sales Associate',
        email: 'cgornalb@fda.gov',
        city: 'Boro Utara',
        start_date: '12/09/2017',
        salary: '$16745.47',
        age: '22',
        experience: '2 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 13,
        avatar: '',
        full_name: 'Tallou Balf',
        post: 'Staff Accountant',
        email: 'tbalfc@sina.com.cn',
        city: 'Siliana',
        start_date: '01/21/2016',
        salary: '$15488.53',
        age: '36',
        experience: '6 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 14,
        avatar: '',
        full_name: 'Othilia Extill',
        post: 'Associate Professor',
        email: 'oextilld@theatlantic.com',
        city: 'Brzyska',
        start_date: '02/01/2016',
        salary: '$18442.34',
        age: '43',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 15,
        avatar: '',
        full_name: 'Wilmar Bourton',
        post: 'Administrative Assistant',
        email: 'wbourtone@sakura.ne.jp',
        city: 'Bích Động',
        start_date: '04/25/2018',
        salary: '$13304.45',
        age: '19',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 16,
        avatar: 'avatar-s-4.png',
        full_name: 'Robinson Brazenor',
        post: 'General Manager',
        email: 'rbrazenorf@symantec.com',
        city: 'Gendiwu',
        start_date: '12/23/2017',
        salary: '$11953.08',
        age: '66',
        experience: '6 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 17,
        avatar: '',
        full_name: 'Nadia Bettenson',
        post: 'Environmental Tech',
        email: 'nbettensong@joomla.org',
        city: 'Chabařovice',
        start_date: '07/11/2018',
        salary: '$20484.44',
        age: '64',
        experience: '4 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 18,
        avatar: '',
        full_name: 'Titus Hayne',
        post: 'Web Designer',
        email: 'thayneh@kickstarter.com',
        city: 'Yangon',
        start_date: '05/25/2019',
        salary: '$16871.48',
        age: '59',
        experience: '9 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 19,
        avatar: 'avatar-s-5.png',
        full_name: 'Roxie Huck',
        post: 'Administrative Assistant',
        email: 'rhucki@ed.gov',
        city: 'Polýkastro',
        start_date: '04/04/2019',
        salary: '$19653.56',
        age: '41',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 20,
        avatar: 'avatar-s-7.png',
        full_name: 'Latashia Lewtey',
        post: 'Actuary',
        email: 'llewteyj@sun.com',
        city: 'Hougong',
        start_date: '08/03/2017',
        salary: '$18303.87',
        age: '35',
        experience: '5 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 21,
        avatar: '',
        full_name: 'Natalina Tyne',
        post: 'Software Engineer',
        email: 'ntynek@merriam-webster.com',
        city: 'Yanguan',
        start_date: '03/16/2019',
        salary: '$15256.40',
        age: '30',
        experience: '0 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 22,
        avatar: '',
        full_name: 'Faun Josefsen',
        post: 'Analog Circuit Design manager',
        email: 'fjosefsenl@samsung.com',
        city: 'Wengyang',
        start_date: '07/08/2017',
        salary: '$11209.16',
        age: '40',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 23,
        avatar: 'avatar-s-9.png',
        full_name: 'Rosmunda Steed',
        post: 'Assistant Media Planner',
        email: 'rsteedm@xing.com',
        city: 'Manzanares',
        start_date: '12/23/2017',
        salary: '$13778.34',
        age: '21',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 24,
        avatar: '',
        full_name: 'Scott Jiran',
        post: 'Graphic Designer',
        email: 'sjirann@simplemachines.org',
        city: 'Pinglin',
        start_date: '05/26/2016',
        salary: '$23081.71',
        age: '23',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 25,
        avatar: '',
        full_name: 'Carmita Medling',
        post: 'Accountant',
        email: 'cmedlingo@hp.com',
        city: 'Bourges',
        start_date: '07/31/2019',
        salary: '$13602.24',
        age: '47',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 26,
        avatar: 'avatar-s-2.png',
        full_name: 'Morgen Benes',
        post: 'Senior Sales Associate',
        email: 'mbenesp@ted.com',
        city: 'Cà Mau',
        start_date: '04/10/2016',
        salary: '$16969.63',
        age: '42',
        experience: '2 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 27,
        avatar: '',
        full_name: 'Onfroi Doughton',
        post: 'Civil Engineer',
        email: 'odoughtonq@aboutads.info',
        city: 'Utrecht (stad)',
        start_date: '09/29/2018',
        salary: '$23796.62',
        age: '28',
        experience: '8 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 28,
        avatar: '',
        full_name: 'Kliment McGinney',
        post: 'Chief Design Engineer',
        email: 'kmcginneyr@paginegialle.it',
        city: 'Xiaocheng',
        start_date: '07/09/2018',
        salary: '$24027.81',
        age: '28',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 29,
        avatar: '',
        full_name: 'Devin Bridgland',
        post: 'Tax Accountant',
        email: 'dbridglands@odnoklassniki.ru',
        city: 'Baoli',
        start_date: '07/17/2016',
        salary: '$13508.15',
        age: '48',
        experience: '8 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 30,
        avatar: 'avatar-s-6.png',
        full_name: 'Gilbert McFade',
        post: 'Biostatistician',
        email: 'gmcfadet@irs.gov',
        city: 'Deje',
        start_date: '08/28/2018',
        salary: '$21632.30',
        age: '20',
        experience: '0 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 31,
        avatar: '',
        full_name: 'Teressa Bleakman',
        post: 'Senior Editor',
        email: 'tbleakmanu@phpbb.com',
        city: 'Žebrák',
        start_date: '09/03/2016',
        salary: '$24875.41',
        age: '37',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 32,
        avatar: '',
        full_name: 'Marcelia Alleburton',
        post: 'Safety Technician',
        email: 'malleburtonv@amazon.com',
        city: 'Basail',
        start_date: '06/02/2016',
        salary: '$23888.98',
        age: '53',
        experience: '3 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 33,
        avatar: 'avatar-s-7.png',
        full_name: 'Aili De Coursey',
        post: 'Environmental Specialist',
        email: 'adew@etsy.com',
        city: 'Łazy',
        start_date: '09/30/2016',
        salary: '$14082.44',
        age: '27',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 34,
        avatar: 'avatar-s-6.png',
        full_name: 'Charlton Chatres',
        post: 'Analyst Programmer',
        email: 'cchatresx@goo.gl',
        city: 'Reguengos de Monsaraz',
        start_date: '04/07/2016',
        salary: '$21386.52',
        age: '22',
        experience: '2 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 35,
        avatar: 'avatar-s-1.png',
        full_name: 'Nat Hugonnet',
        post: 'Financial Advisor',
        email: 'nhugonnety@wufoo.com',
        city: 'Pimentel',
        start_date: '09/11/2019',
        salary: '$13835.97',
        age: '46',
        experience: '6 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 36,
        avatar: '',
        full_name: 'Lorine Hearsum',
        post: 'Payment Adjustment Coordinator',
        email: 'lhearsumz@google.co.uk',
        city: 'Shuiying',
        start_date: '03/05/2019',
        salary: '$22093.91',
        age: '47',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 37,
        avatar: 'avatar-s-8.png',
        full_name: 'Sheila-kathryn Haborn',
        post: 'Environmental Specialist',
        email: 'shaborn10@about.com',
        city: 'Lewolang',
        start_date: '11/10/2018',
        salary: '$24624.23',
        age: '51',
        experience: '1 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 38,
        avatar: 'avatar-s-3.png',
        full_name: 'Alma Harvatt',
        post: 'Administrative Assistant',
        email: 'aharvatt11@addtoany.com',
        city: 'Ulundi',
        start_date: '11/04/2016',
        salary: '$21782.82',
        age: '41',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 39,
        avatar: 'avatar-s-2.png',
        full_name: 'Beatrix Longland',
        post: 'VP Quality Control',
        email: 'blongland12@gizmodo.com',
        city: 'Damu',
        start_date: '07/18/2016',
        salary: '$22794.60',
        age: '62',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 40,
        avatar: 'avatar-s-4.png',
        full_name: 'Hammad Condell',
        post: 'Project Manager',
        email: 'hcondell13@tiny.cc',
        city: 'Bulung’ur',
        start_date: '11/04/2018',
        salary: '$10872.83',
        age: '37',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 41,
        avatar: '',
        full_name: 'Parker Bice',
        post: 'Technical Writer',
        email: 'pbice14@ameblo.jp',
        city: 'Shanlian',
        start_date: '03/02/2016',
        salary: '$17471.92',
        age: '65',
        experience: '5 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 42,
        avatar: '',
        full_name: 'Lowrance Orsi',
        post: 'Biostatistician',
        email: 'lorsi15@wp.com',
        city: 'Dengteke',
        start_date: '12/10/2018',
        salary: '$24719.51',
        age: '64',
        experience: '4 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 43,
        avatar: 'avatar-s-10.png',
        full_name: 'Ddene Chaplyn',
        post: 'Environmental Tech',
        email: 'dchaplyn16@nymag.com',
        city: 'Lattes',
        start_date: '01/23/2019',
        salary: '$11958.33',
        age: '38',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 44,
        avatar: '',
        full_name: 'Washington Bygraves',
        post: 'Human Resources Manager',
        email: 'wbygraves17@howstuffworks.com',
        city: 'Zlaté Hory',
        start_date: '09/07/2016',
        salary: '$10552.43',
        age: '37',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 45,
        avatar: 'avatar-s-7.png',
        full_name: 'Meghann Bodechon',
        post: 'Operator',
        email: 'mbodechon18@1und1.de',
        city: 'Itō',
        start_date: '07/23/2018',
        salary: '$23024.28',
        age: '61',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 46,
        avatar: 'avatar-s-1.png',
        full_name: 'Moshe De Ambrosis',
        post: 'Recruiting Manager',
        email: 'mde19@purevolume.com',
        city: 'San Diego',
        start_date: '02/10/2018',
        salary: '$10409.90',
        age: '47',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 47,
        avatar: 'avatar-s-5.png',
        full_name: 'Had Chatelot',
        post: 'Cost Accountant',
        email: 'hchatelot1a@usatoday.com',
        city: 'Mercedes',
        start_date: '11/23/2016',
        salary: '$11446.30',
        age: '64',
        experience: '4 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 48,
        avatar: '',
        full_name: 'Georgia McCrum',
        post: 'Registered Nurse',
        email: 'gmccrum1b@icio.us',
        city: 'Nggalak',
        start_date: '04/19/2018',
        salary: '$14002.31',
        age: '63',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 49,
        avatar: 'avatar-s-8.png',
        full_name: 'Krishnah Stilldale',
        post: 'VP Accounting',
        email: 'kstilldale1c@chronoengine.com',
        city: 'Slavs’ke',
        start_date: '03/18/2017',
        salary: '$10704.29',
        age: '56',
        experience: '6 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 50,
        avatar: 'avatar-s-4.png',
        full_name: 'Mario Umbert',
        post: 'Research Assistant',
        email: 'mumbert1d@digg.com',
        city: 'Chorotis',
        start_date: '05/13/2019',
        salary: '$21813.54',
        age: '43',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 51,
        avatar: '',
        full_name: 'Edvard Dixsee',
        post: 'Graphic Designer',
        email: 'edixsee1e@unblog.fr',
        city: 'Rancharia',
        start_date: '04/23/2019',
        salary: '$18053.11',
        age: '46',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 52,
        avatar: 'avatar-s-9.png',
        full_name: 'Tammie Davydoch',
        post: 'VP Quality Control',
        email: 'tdavydoch1f@examiner.com',
        city: 'Mamedkala',
        start_date: '04/19/2016',
        salary: '$17617.08',
        age: '47',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 53,
        avatar: '',
        full_name: 'Benito Rodolico',
        post: 'Safety Technician',
        email: 'brodolico1g@sciencedirect.com',
        city: 'Wonosobo',
        start_date: '10/06/2018',
        salary: '$18866.55',
        age: '21',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 54,
        avatar: '',
        full_name: 'Marco Pennings',
        post: 'Compensation Analyst',
        email: 'mpennings1h@bizjournals.com',
        city: 'Umag',
        start_date: '06/15/2017',
        salary: '$13722.18',
        age: '30',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 55,
        avatar: '',
        full_name: "Tommie O'Corr",
        post: 'Quality Engineer',
        email: 'tocorr1i@nyu.edu',
        city: 'Olhos de Água',
        start_date: '09/26/2018',
        salary: '$15228.80',
        age: '51',
        experience: '1 Year',
        status: 1
    },
    {
        responsive_id: '',
        id: 56,
        avatar: 'avatar-s-1.png',
        full_name: 'Cybill Poyle',
        post: 'Cost Accountant',
        email: 'cpoyle1j@amazon.com',
        city: 'Hamm',
        start_date: '01/03/2016',
        salary: '$13951.96',
        age: '29',
        experience: '9 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 57,
        avatar: 'avatar-s-6.png',
        full_name: 'Norry Stoller',
        post: 'Human Resources Manager',
        email: 'nstoller1k@noaa.gov',
        city: 'Ruukki',
        start_date: '02/04/2018',
        salary: '$15100.00',
        age: '27',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 58,
        avatar: '',
        full_name: 'Wendi Somerlie',
        post: 'Systems Administrator',
        email: 'wsomerlie1l@accuweather.com',
        city: 'Meicheng',
        start_date: '04/22/2016',
        salary: '$20023.52',
        age: '28',
        experience: '9 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 59,
        avatar: '',
        full_name: 'Ferdie Georgeon',
        post: 'Geologist',
        email: 'fgeorgeon1m@nhs.uk',
        city: 'Tanahbeureum',
        start_date: '04/08/2019',
        salary: '$12630.26',
        age: '28',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 60,
        avatar: '',
        full_name: 'Jules Auten',
        post: 'Desktop Support Technician',
        email: 'jauten1n@foxnews.com',
        city: 'Mojo',
        start_date: '08/13/2019',
        salary: '$13870.62',
        age: '48',
        experience: '5 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 61,
        avatar: 'avatar-s-3.png',
        full_name: 'Nichole Dacres',
        post: 'Mechanical Systems Engineer',
        email: 'ndacres1o@apache.org',
        city: 'Kimanuit',
        start_date: '11/06/2017',
        salary: '$18220.51',
        age: '20',
        experience: '0 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 62,
        avatar: 'avatar-s-1.png',
        full_name: 'Holly Edgworth',
        post: 'Junior Executive',
        email: 'hedgworth1p@craigslist.org',
        city: 'Pedreira',
        start_date: '08/05/2017',
        salary: '$13999.88',
        age: '37',
        experience: '0 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 63,
        avatar: 'avatar-s-9.png',
        full_name: 'Henriette Croft',
        post: 'Food Chemist',
        email: 'hcroft1q@desdev.cn',
        city: 'Taizhou',
        start_date: '09/12/2019',
        salary: '$11049.79',
        age: '53',
        experience: '1 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 64,
        avatar: '',
        full_name: 'Annetta Glozman',
        post: 'Staff Accountant',
        email: 'aglozman1r@storify.com',
        city: 'Pendawanbaru',
        start_date: '08/25/2017',
        salary: '$10745.32',
        age: '27',
        experience: '3 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 65,
        avatar: '',
        full_name: 'Cletis Cervantes',
        post: 'Health Coach',
        email: 'ccervantes1s@de.vu',
        city: 'Solnechnyy',
        start_date: '05/24/2018',
        salary: '$24769.08',
        age: '22',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 66,
        avatar: 'avatar-s-9.png',
        full_name: 'Christos Kiley',
        post: 'Geologist',
        email: 'ckiley1t@buzzfeed.com',
        city: 'El Bolsón',
        start_date: '02/27/2019',
        salary: '$16053.15',
        age: '46',
        experience: '2 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 67,
        avatar: 'avatar-s-7.png',
        full_name: 'Silvain Siebert',
        post: 'VP Sales',
        email: 'ssiebert1u@domainmarket.com',
        city: 'Cadiz',
        start_date: '09/23/2017',
        salary: '$23347.17',
        age: '47',
        experience: '8 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 68,
        avatar: '',
        full_name: 'Sharla Ibberson',
        post: 'Payment Adjustment Coordinator',
        email: 'sibberson1v@virginia.edu',
        city: 'Lamam',
        start_date: '11/01/2016',
        salary: '$15658.40',
        age: '51',
        experience: '8 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 69,
        avatar: 'avatar-s-7.png',
        full_name: 'Ripley Rentcome',
        post: 'Physical Therapy Assistant',
        email: 'rrentcome1w@youtu.be',
        city: 'Dashkawka',
        start_date: '07/15/2018',
        salary: '$15396.66',
        age: '41',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 70,
        avatar: '',
        full_name: 'Chrisse Birrane',
        post: 'Chemical Engineer',
        email: 'cbirrane1x@google.com.br',
        city: 'Las Toscas',
        start_date: '05/22/2016',
        salary: '$15823.40',
        age: '62',
        experience: '0 Year',
        status: 5
    },
    {
        responsive_id: '',
        id: 71,
        avatar: '',
        full_name: 'Georges Tesyro',
        post: 'Human Resources Manager',
        email: 'gtesyro1y@last.fm',
        city: 'Gabao',
        start_date: '01/27/2019',
        salary: '$19051.25',
        age: '37',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 72,
        avatar: '',
        full_name: 'Bondon Hazard',
        post: 'Geological Engineer',
        email: 'bhazard1z@over-blog.com',
        city: 'Llano de Piedra',
        start_date: '01/17/2019',
        salary: '$11632.84',
        age: '65',
        experience: '3 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 73,
        avatar: 'avatar-s-5.png',
        full_name: 'Aliza MacElholm',
        post: 'VP Sales',
        email: 'amacelholm20@printfriendly.com',
        city: 'Sosnovyy Bor',
        start_date: '11/17/2017',
        salary: '$16741.31',
        age: '64',
        experience: '7 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 74,
        avatar: 'avatar-s-2.png',
        full_name: 'Lucas Witherdon',
        post: 'Senior Quality Engineer',
        email: 'lwitherdon21@storify.com',
        city: 'Staré Křečany',
        start_date: '09/26/2016',
        salary: '$19387.76',
        age: '38',
        experience: '2 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 75,
        avatar: '',
        full_name: 'Pegeen Peasegod',
        post: 'Web Designer',
        email: 'ppeasegod22@slideshare.net',
        city: 'Keda',
        start_date: '05/21/2016',
        salary: '$24014.04',
        age: '59',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 76,
        avatar: '',
        full_name: 'Elyn Watkinson',
        post: 'Structural Analysis Engineer',
        email: 'ewatkinson23@blogspot.com',
        city: 'Osan',
        start_date: '09/30/2016',
        salary: '$14493.51',
        age: '55',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 77,
        avatar: 'avatar-s-10.png',
        full_name: 'Babb Skirving',
        post: 'Analyst Programmer',
        email: 'bskirving24@cbsnews.com',
        city: 'Balky',
        start_date: '09/27/2016',
        salary: '$24733.28',
        age: '39',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 78,
        avatar: '',
        full_name: 'Shelli Ondracek',
        post: 'Financial Advisor',
        email: 'sondracek25@plala.or.jp',
        city: 'Aoluguya Ewenke Minzu',
        start_date: '03/28/2016',
        salary: '$21922.17',
        age: '23',
        experience: '1 Year',
        status: 3
    },
    {
        responsive_id: '',
        id: 79,
        avatar: 'avatar-s-9.png',
        full_name: 'Stanislaw Melloy',
        post: 'Sales Associate',
        email: 'smelloy26@fastcompany.com',
        city: 'Funafuti',
        start_date: '04/13/2017',
        salary: '$16944.42',
        age: '30',
        experience: '2 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 80,
        avatar: '',
        full_name: 'Seamus Eisikovitsh',
        post: 'Legal Assistant',
        email: 'seisikovitsh27@usgs.gov',
        city: 'Cangkringan',
        start_date: '05/28/2018',
        salary: '$21963.69',
        age: '22',
        experience: '7 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 81,
        avatar: 'avatar-s-2.png',
        full_name: 'Tammie Wattins',
        post: 'Web Designer',
        email: 'twattins28@statcounter.com',
        city: 'Xilin',
        start_date: '08/07/2018',
        salary: '$16049.93',
        age: '36',
        experience: '5 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 82,
        avatar: 'avatar-s-8.png',
        full_name: 'Aila Quailadis',
        post: 'Technical Writer',
        email: 'aquail29@prlog.org',
        city: 'Shuangchahe',
        start_date: '02/11/2018',
        salary: '$24137.29',
        age: '43',
        experience: '4 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 83,
        avatar: '',
        full_name: 'Myrvyn Gilogly',
        post: 'Research Associate',
        email: 'mgilogly2a@elpais.com',
        city: 'Prince Rupert',
        start_date: '05/13/2018',
        salary: '$10089.96',
        age: '19',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 84,
        avatar: 'avatar-s-5.png',
        full_name: 'Hanna Langthorne',
        post: 'Analyst Programmer',
        email: 'hlangthorne2b@stumbleupon.com',
        city: 'Guaynabo',
        start_date: '11/11/2018',
        salary: '$14227.10',
        age: '21',
        experience: '7 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 85,
        avatar: '',
        full_name: 'Ruby Gimblet',
        post: 'Registered Nurse',
        email: 'rgimblet2c@1688.com',
        city: 'Nanyulinxi',
        start_date: '03/28/2016',
        salary: '$19562.59',
        age: '30',
        experience: '1 Year',
        status: 2
    },
    {
        responsive_id: '',
        id: 86,
        avatar: 'avatar-s-4.png',
        full_name: 'Louis Paszak',
        post: 'Programmer',
        email: 'lpaszak2d@behance.net',
        city: 'Chiscas',
        start_date: '04/25/2016',
        salary: '$17178.86',
        age: '51',
        experience: '7 Years',
        status: 5
    },
    {
        responsive_id: '',
        id: 87,
        avatar: '',
        full_name: 'Glennie Riolfi',
        post: 'Computer Systems Analyst',
        email: 'griolfi2e@drupal.org',
        city: 'Taung',
        start_date: '06/18/2018',
        salary: '$15089.83',
        age: '29',
        experience: '4 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 88,
        avatar: '',
        full_name: 'Jemimah Morgan',
        post: 'Staff Accountant',
        email: 'jmorgan2f@nifty.com',
        city: 'La Esperanza',
        start_date: '01/17/2016',
        salary: '$18330.72',
        age: '27',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 89,
        avatar: 'avatar-s-10.png',
        full_name: 'Talya Brandon',
        post: 'Food Chemist',
        email: 'tbrandon2g@ucoz.com',
        city: 'Zaječar',
        start_date: '10/08/2018',
        salary: '$16284.64',
        age: '28',
        experience: '6 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 90,
        avatar: 'avatar-s-6.png',
        full_name: 'Renate Shay',
        post: 'Recruiter',
        email: 'rshay2h@tumblr.com',
        city: 'Pueblo Viejo',
        start_date: '03/15/2017',
        salary: '$18523.75',
        age: '28',
        experience: '3 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 91,
        avatar: '',
        full_name: 'Julianne Bartosik',
        post: 'Senior Cost Accountant',
        email: 'jbartosik2i@state.gov',
        city: 'Botlhapatlou',
        start_date: '02/06/2017',
        salary: '$17607.66',
        age: '48',
        experience: '6 Years',
        status: 3
    },
    {
        responsive_id: '',
        id: 92,
        avatar: 'avatar-s-3.png',
        full_name: 'Yvonne Emberton',
        post: 'Recruiter',
        email: 'yemberton2j@blog.com',
        city: 'Nagcarlan',
        start_date: '02/13/2017',
        salary: '$17550.18',
        age: '20',
        experience: '1 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 93,
        avatar: 'avatar-s-8.png',
        full_name: 'Danya Faichnie',
        post: 'Social Worker',
        email: 'dfaichnie2k@weather.com',
        city: 'Taling',
        start_date: '07/29/2019',
        salary: '$18469.35',
        age: '37',
        experience: '3 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 94,
        avatar: '',
        full_name: 'Ronica Hasted',
        post: 'Software Consultant',
        email: 'rhasted2l@hexun.com',
        city: 'Gangkou',
        start_date: '07/04/2019',
        salary: '$24866.66',
        age: '53',
        experience: '7 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 95,
        avatar: 'avatar-s-2.png',
        full_name: 'Edwina Ebsworth',
        post: 'Human Resources Assistant',
        email: 'eebsworth2m@sbwire.com',
        city: 'Puzi',
        start_date: '09/27/2018',
        salary: '$19586.23',
        age: '27',
        experience: '2 Years',
        status: 1
    },
    {
        responsive_id: '',
        id: 96,
        avatar: '',
        full_name: 'Alaric Beslier',
        post: 'Tax Accountant',
        email: 'abeslier2n@zimbio.com',
        city: 'Ocucaje',
        start_date: '04/16/2017',
        salary: '$19366.53',
        age: '22',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 97,
        avatar: '',
        full_name: 'Reina Peckett',
        post: 'Quality Control Specialist',
        email: 'rpeckett2o@timesonline.co.uk',
        city: 'Anyang',
        start_date: '05/20/2018',
        salary: '$16619.40',
        age: '46',
        experience: '8 Years',
        status: 4
    },
    {
        responsive_id: '',
        id: 98,
        avatar: 'avatar-s-7.png',
        full_name: 'Olivette Gudgin',
        post: 'Paralegal',
        email: 'ogudgin2p@gizmodo.com',
        city: 'Fujinomiya',
        start_date: '04/09/2019',
        salary: '$15211.60',
        age: '47',
        experience: '8 Years',
        status: 2
    },
    {
        responsive_id: '',
        id: 99,
        avatar: 'avatar-s-10.png',
        full_name: 'Evangelina Carnock',
        post: 'Cost Accountant',
        email: 'ecarnock2q@washington.edu',
        city: 'Doushaguan',
        start_date: '01/26/2017',
        salary: '$23704.82',
        age: '51',
        experience: '0 Year',
        status: 4
    },
    {
        responsive_id: '',
        id: 100,
        avatar: '',
        full_name: 'Glyn Giacoppo',
        post: 'Software Test Engineer',
        email: 'ggiacoppo2r@apache.org',
        city: 'Butha-Buthe',
        start_date: '04/15/2017',
        salary: '$24973.48',
        age: '41',
        experience: '7 Years',
        status: 2
    }
];


/***/ })

}]);
//# sourceMappingURL=data-tables-data-tables-module.js.map