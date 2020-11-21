(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inbox-inbox-module"],{

/***/ "./src/app/inbox/inbox-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/inbox/inbox-routing.module.ts ***!
  \***********************************************/
/*! exports provided: InboxRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutingModule", function() { return InboxRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");





var routes = [
    {
        path: '',
        component: _inbox_component__WEBPACK_IMPORTED_MODULE_2__["InboxComponent"],
        data: {
            title: 'Inbox'
        },
    }
];
var InboxRoutingModule = /** @class */ (function () {
    function InboxRoutingModule() {
    }
    InboxRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InboxRoutingModule });
    InboxRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InboxRoutingModule_Factory(t) { return new (t || InboxRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return InboxRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InboxRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_inbox_component__WEBPACK_IMPORTED_MODULE_2__["InboxComponent"]];


/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox.service */ "./src/app/inbox/inbox.service.ts");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");














function InboxComponent_a_79_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r7.imageText);
} }
function InboxComponent_a_79_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 104);
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", mail_r7.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_a_79_i_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 105);
} }
function InboxComponent_a_79_span_17_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 108);
} }
function InboxComponent_a_79_span_17_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 109);
} }
function InboxComponent_a_79_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InboxComponent_a_79_span_17_i_3_Template, 1, 0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InboxComponent_a_79_span_17_i_4_Template, 1, 0, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge mr-1 ", mail_r7.labelClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r7.labelType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.isEmailImportant);
} }
function InboxComponent_a_79_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0, a1) { return { "selected-email": a0, "border-0": a1 }; };
function InboxComponent_a_79_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_a_79_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var mail_r7 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.DisplayMessage([mail_r7.mailId]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InboxComponent_a_79_span_3_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InboxComponent_a_79_img_4_Template, 1, 1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InboxComponent_a_79_i_10_Template, 1, 0, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InboxComponent_a_79_span_17_Template, 5, 6, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InboxComponent_a_79_span_18_Template, 2, 0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var mail_r7 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, mail_r7.mailId == ctx_r2.selectedMailId, mail_r7.mailId != ctx_r2.selectedMailId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("avatar ", mail_r7.imageClass, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !mail_r7.hasImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mail_r7.hasImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mail_r7.mailFrom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mail_r7.hasAttachment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", mail_r7.isRead === false ? "email-list-text font-small-2 email-time text-bold-400" : "email-list-text font-small-2 email-time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r7.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", mail_r7.isRead === false ? "list-group-item-text text-truncate text-bold-500" : "list-group-item-text text-truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mail_r7.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mail_r7.body, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mail_r7.hasLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !mail_r7.hasLabel);
} }
function InboxComponent_p_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "There are no messages!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InboxComponent_div_84_button_30_Template(rf, ctx) { if (rf & 1) {
    var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_84_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.markAsImportant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark as important");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InboxComponent_div_84_button_31_Template(rf, ctx) { if (rf & 1) {
    var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_84_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.markAsUnimportant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mark as unimportant");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InboxComponent_div_84_i_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 148);
} }
function InboxComponent_div_84_i_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 149);
} }
function InboxComponent_div_84_div_48_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](messageDetail_r29.avatarText);
} }
function InboxComponent_div_84_div_48_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 104);
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", messageDetail_r29.avatarPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_div_84_div_48_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](messageDetail_r29.time);
} }
function InboxComponent_div_84_div_48_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InboxComponent_div_84_div_48_div_19_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var attachment_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", attachment_r39.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function InboxComponent_div_84_div_48_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Attachments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InboxComponent_div_84_div_48_div_19_div_3_Template, 2, 1, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", messageDetail_r29.attachments);
} }
var _c1 = function (a0, a1) { return { "collapsed": a0, "opened-email": a1 }; };
function InboxComponent_div_84_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_84_div_48_Template_a_click_2_listener() { var messageDetail_r29 = ctx.$implicit; return messageDetail_r29.collapsed = !messageDetail_r29.collapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InboxComponent_div_84_div_48_span_5_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InboxComponent_div_84_div_48_img_6_Template, 1, 1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InboxComponent_div_84_div_48_span_12_Template, 2, 1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InboxComponent_div_84_div_48_span_13_Template, 4, 0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InboxComponent_div_84_div_48_div_19_Template, 4, 1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var messageDetail_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c1, messageDetail_r29.collapsed, !messageDetail_r29.collapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !messageDetail_r29.collapsed)("aria-controls", messageDetail_r29.messageId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("avatar ", messageDetail_r29.avatarClass, " mr-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !messageDetail_r29.hasAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", messageDetail_r29.hasAvatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](messageDetail_r29.mailFrom);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("to ", messageDetail_r29.mailTo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", messageDetail_r29.messageId)("ngbCollapse", messageDetail_r29.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", messageDetail_r29.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", messageDetail_r29.hasAttachment);
} }
function InboxComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_84_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.OnBackToInbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Back to inbox");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_div_84_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.markAsUnread(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Mark as unread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InboxComponent_div_84_button_30_Template, 2, 0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, InboxComponent_div_84_button_31_Template, 2, 0, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Add to task");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Filter mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, InboxComponent_div_84_i_46_Template, 1, 0, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, InboxComponent_div_84_i_47_Template, 1, 0, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, InboxComponent_div_84_div_48_Template, 21, 19, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", ctx_r5.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.message.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.isEmailImportant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.message.messages);
} }
function InboxComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select a message to read");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c2 = function (a0) { return { show: a0 }; };
var _c3 = function (a0) { return { "active": a0 }; };
var _c4 = function (a0) { return { "show-email-content": a0 }; };
var InboxComponent = /** @class */ (function () {
    function InboxComponent(elRef, renderer, modalService, inboxService, document, configService, cdr) {
        var _this = this;
        this.elRef = elRef;
        this.renderer = renderer;
        this.modalService = modalService;
        this.inboxService = inboxService;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.placement = "bottom-right";
        this.editorModel = [{
                attributes: {
                    font: 'roboto'
                },
                insert: 'test'
            }];
        this.config = {};
        this.searchQuery = '';
        this.activeTypeButton = "Inbox";
        this.isContentOverlay = false;
        this.isEmailSidebarShow = false;
        this.isComposeShow = false;
        this.selectedMailId = 4;
        this.isEmailImportant = false;
        this.isCollapsed = true;
        this.isCollapsed1 = false;
        this.isMessageSelected = true;
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === 'Inbox'; });
        this.message = this.inboxService.message.filter(function (message) { return message.mailId === _this.selectedMailId; })[0];
        this.markAsRead();
        this.checkEmailImportantStatus();
        this.config = this.configService.templateConf;
        this.renderer.addClass(this.document.body, "email-application");
    }
    InboxComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
    };
    InboxComponent.prototype.ngAfterViewInit = function () {
        if (this.innerWidth < 768) {
            this.isMessageSelected = false;
        }
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "email-application");
    };
    InboxComponent.prototype.markAsRead = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = true;
    };
    InboxComponent.prototype.markAsUnread = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isRead = false;
    };
    InboxComponent.prototype.markAsImportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = true;
        this.isEmailImportant = true;
    };
    InboxComponent.prototype.markAsUnimportant = function () {
        var _this = this;
        var updateItem = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        var index = this.mail.indexOf(updateItem);
        this.mail[index].isImportant = false;
        this.isEmailImportant = false;
    };
    InboxComponent.prototype.checkEmailImportantStatus = function () {
        var _this = this;
        var selectedEmail = this.mail.find(function (item) { return item.mailId.toString() === _this.selectedMailId.toString(); });
        this.isEmailImportant = selectedEmail.isImportant;
    };
    //inbox user list click event function
    InboxComponent.prototype.DisplayMessage = function (mailId) {
        this.selectedMailId = mailId;
        this.message = this.inboxService.message.filter(function (message) { return message.mailId.toString() === mailId.toString(); })[0];
        this.isMessageSelected = true;
        this.markAsRead();
        this.checkEmailImportantStatus();
    };
    //compose start
    InboxComponent.prototype.compose = function (show) {
        this.isComposeShow = show;
        this.isEmailSidebarShow = false;
        if (!show) {
            this.isContentOverlay = false;
        }
        else {
            this.isContentOverlay = true;
        }
    };
    //inbox labels click event function
    InboxComponent.prototype.GetEmailsByLabel = function (labelType) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.labelType === labelType; });
        this.activeTypeButton = labelType;
    };
    //inbox type click event function
    InboxComponent.prototype.GetEmailsByType = function (type) {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.mailType === type; });
        this.activeTypeButton = type;
    };
    //inbox Starred click event function
    InboxComponent.prototype.GetStarredEmails = function () {
        this.mail = this.inboxService.inbox.filter(function (mail) { return mail.isImportant === true; });
        this.activeTypeButton = 'Starred';
    };
    InboxComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth < 768) {
            this.isMessageSelected = false;
        }
        if (this.innerWidth > 768) {
            this.isMessageSelected = true;
        }
    };
    InboxComponent.prototype.onListItemClick = function () {
        this.isMessageSelected = true;
    };
    InboxComponent.prototype.OnBackToInbox = function () {
        this.isMessageSelected = false;
    };
    InboxComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
        this.isEmailSidebarShow = true;
    };
    InboxComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
        this.isEmailSidebarShow = false;
        this.isComposeShow = false;
    };
    InboxComponent.ɵfac = function InboxComponent_Factory(t) { return new (t || InboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    InboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InboxComponent, selectors: [["app-inbox"]], hostBindings: function InboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function InboxComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]])], decls: 139, vars: 49, consts: [[1, "email-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "email-app-sidebar", "d-xl-block", 3, "ngClass"], ["emailSidebar", ""], [1, "sidebar-close-icon", "d-xl-none", 3, "click"], [1, "ft-x"], [1, "email-app-sidebar-content", 3, "perfectScrollbar"], [1, "email-app-menu"], [1, "form-group", "form-group-compose", "text-center", "mb-0"], ["type", "button", 1, "btn", "btn-danger", "btn-block", "mb-2", "mt-1", 3, "click"], [1, "ft-mail", "mr-2"], [1, "m-0"], [1, "grey", "my-2", "d-block", "font-small-3", "text-uppercase"], [1, "list-group", "list-group-messages"], [1, "list-group-item", "list-group-item-action", "border-0", 3, "ngClass", "click"], [1, "ft-inbox", "mr-2"], [1, "badge", "bg-light-secondary", "badge-pill", "float-right"], [1, "ft-send", "mr-2"], [1, "ft-file", "mr-2"], [1, "ft-star", "mr-2"], [1, "badge", "bg-light-danger", "badge-pill", "float-right"], [1, "list-group-item", "list-group-item-action", "border-0", "m-0", 3, "ngClass", "click"], [1, "ft-trash-2", "mr-2"], [1, "my-2"], [1, "list-group", "list-group-messages", "border-0"], [1, "list-group-item", "list-group-item-action", "border-0", "d-flex", "justify-content-between", 3, "ngClass", "click"], [1, "d-flex", "align-items-center"], [1, "ft-circle", "warning", "font-small-1", "mr-2"], [1, "badge", "bg-light-warning", "badge-pill", "float-right"], [1, "list-group-item", "list-group-item-action", "border-0", "d-flex", "align-items-center", 3, "ngClass", "click"], [1, "ft-circle", "danger", "font-small-1", "mr-2"], [1, "ft-circle", "primary", "font-small-1", "mr-2"], [1, "ft-circle", "success", "font-small-1", "mr-2"], [1, "badge", "bg-light-success", "badge-pill", "float-right"], [1, "email-app-content", "row"], [1, "email-search-box", "w-100", "p-2"], [1, "media", "px-2", "d-flex", "align-items-center"], [1, "email-app-sidebar-toggle", "ft-menu", "cursor-pointer", "font-large-1", "mr-3", "d-xl-none", 3, "click"], [1, "media-body", "pr-1"], ["type", "text", "placeholder", "Search for emails", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "email-app-content-area", "w-100"], [1, "email-app-list-mails", "p-0", 3, "click"], [1, "email-app-list", 3, "perfectScrollbar"], ["id", "users-list"], [1, "list-group"], [1, "users-list-padding"], ["class", "list-group-item list-group-item-action", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "primary text-center", 4, "ngIf"], [1, "email-app-mail-content", 3, "ngClass"], ["emailContent", ""], ["class", "email-app-mail-content-detail px-4 py-3 py-md-1", 3, "perfectScrollbar", 4, "ngIf"], ["class", "email-app-mail-content-detail", 4, "ngIf"], [1, "compose-new-mail-sidebar", 3, "ngClass"], [1, "compose-sidebar-close-icon", 3, "click"], [1, "card", "bg-transparent", "shadow-none", "quill-wrapper", "m-0"], [1, "card-header"], [1, "card-title"], ["action", "#", "id", "compose-form"], [1, "card-content"], [1, "card-body"], [1, "form-group"], ["for", "compose-email-from"], ["type", "text", "id", "compose-email-from", "placeholder", "user@example.com", "disabled", "", 1, "form-control"], ["for", "compose-email-to", 1, "sr-only"], ["type", "email", "id", "compose-email-to", "placeholder", "To", "required", "", 1, "form-control"], ["for", "compose-email-subject", 1, "sr-only"], ["type", "text", "id", "compose-email-subject", "placeholder", "Subject", 1, "form-control"], ["for", "compose-email-cc", 1, "sr-only"], ["type", "text", "id", "compose-email-cc", "placeholder", "CC", 1, "form-control"], ["for", "compose-email-bcc", 1, "sr-only"], ["type", "text", "id", "compose-email-bcc", "placeholder", "BCC", 1, "form-control"], [1, "snow-container", "border", "rounded"], ["customToolbarPosition", "bottom", "format", "object"], ["quill-editor-toolbar", ""], [1, "ql-formats"], [1, "ql-bold", 3, "title"], [1, "ql-italic"], [1, "ql-underline"], [1, "ql-link"], [1, "ql-image"], [1, "form-group", "mt-2"], [1, "custom-file"], ["type", "file", "id", "compose-email-attach", 1, "custom-file-input"], ["for", "compose-email-attach", 1, "custom-file-label"], [1, "card-footer", "d-flex", "justify-content-end", "pt-0"], ["type", "reset", 1, "btn", "bg-light-secondary", "compose-cancel-btn", "mr-2"], [1, "ft-x", "m-0", "mr-sm-1"], [1, "d-sm-inline-block", "d-none"], ["type", "submit", 1, "btn-send", "btn", "btn-primary"], [1, "ft-send", "m-0", "mr-sm-1"], [1, "list-group-item", "list-group-item-action", 3, "ngClass", "click"], [1, "media", "email-list-text", "p-0"], ["class", "avatar-content", 4, "ngIf"], ["width", "32", "height", "32", "alt", "avatar", 3, "src", 4, "ngIf"], [1, "media-body"], [1, "list-group-item-heading"], [1, "float-right"], ["class", "ft-paperclip mr-1", 4, "ngIf"], [3, "ngClass"], [1, "list-group-item-text"], ["class", "float-right", 4, "ngIf"], ["class", "float-right primary", 4, "ngIf"], [1, "avatar-content"], ["width", "32", "height", "32", "alt", "avatar", 3, "src"], [1, "ft-paperclip", "mr-1"], ["class", "font-medium-1 ft-star warning", 4, "ngIf"], ["class", "font-medium-1 ft-star", 4, "ngIf"], [1, "font-medium-1", "ft-star", "warning"], [1, "font-medium-1", "ft-star"], [1, "float-right", "primary"], [1, "font-medium-1", "ft-star", "blue-grey", "lighten-3"], [1, "primary", "text-center"], [1, "email-app-mail-content-detail", "px-4", "py-3", "py-md-1", 3, "perfectScrollbar"], [1, "email-app-options"], [1, "row", "d-md-none"], [1, "btn", "btn-primary", "ml-2", "back-to-inbox", "mb-2", 3, "click"], [1, "ft-chevron-left", "mr-2"], [1, "row"], [1, "col-sm-6", "col-12", "text-left"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Replay", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-corner-up-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Replay All", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevrons-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Report SPAM", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-alert-octagon", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Delete", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-trash-2", "font-small-3"], [1, "col-sm-6", "col-12", "text-right"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Previous", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevron-left", "font-small-3"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Next", 1, "btn", "btn-sm", "bg-light-secondary"], [1, "ft-chevron-right", "font-small-3"], [1, "btn-group", "ml-1"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "bg-light-secondary", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item", 3, "click"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item"], [1, "dropdown-divider"], [1, "email-app-title", "card-body", "px-0"], [1, "primary"], [1, "badge", "bg-light-primary"], ["class", "float-right font-medium-3 ft-star warning", 4, "ngIf"], ["class", "float-right font-medium-3 ft-star", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "float-right", "font-medium-3", "ft-star", "warning"], [1, "float-right", "font-medium-3", "ft-star"], ["id", "headingCollapse2", 1, "card-header", "p-0"], [1, "email-app-sender", "list-group-item", "list-group-item-action", "border-0", 3, "ngClass", "click"], [1, "media"], [1, "list-group-item-text", "m-0"], ["class", "float-right text muted", 4, "ngIf"], [3, "id", "ngbCollapse"], [1, "email-app-text", "card-body", "py-0"], [1, "email-app-message", "mt-2"], [3, "innerHTML"], [4, "ngIf"], [1, "email-app-text-action", "card-content"], [1, "float-right", "text", "muted"], [1, "ft-corner-up-left", "mr-1"], [1, "ft-arrow-right", "mr-1"], [1, "ft-more-vertical-"], ["class", "float-left mr-2", 4, "ngFor", "ngForOf"], [1, "float-left", "mr-2"], ["alt", "Generic placeholder image", 1, "media-object", "width-100", 3, "src"], [1, "email-app-mail-content-detail"]], template: function InboxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_5_listener() { ctx.isContentOverlay = false; return ctx.isEmailSidebarShow = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_button_click_10_listener() { return ctx.compose(true); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Compose");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Messages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_17_listener() { return ctx.GetEmailsByType("Inbox"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Inbox");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_23_listener() { return ctx.GetEmailsByType("Sent"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_27_listener() { return ctx.GetEmailsByType("Draft"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Draft");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_31_listener() { return ctx.GetStarredEmails(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Starred");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_37_listener() { return ctx.GetEmailsByType("Trash"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Trash");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Labels");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_45_listener() { return ctx.GetEmailsByLabel("Work"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_52_listener() { return ctx.GetEmailsByLabel("Family"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Family");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_56_listener() { return ctx.GetEmailsByLabel("Friends"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Friends");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_a_click_60_listener() { return ctx.GetEmailsByLabel("Private"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Private");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_70_listener() { return ctx.onSidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InboxComponent_Template_input_ngModelChange_72_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_div_click_74_listener() { return ctx.onListItemClick(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, InboxComponent_a_79_Template, 19, 18, "a", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, InboxComponent_p_81_Template, 2, 0, "p", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 49, 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, InboxComponent_div_84_Template, 49, 7, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, InboxComponent_div_85_Template, 3, 0, "div", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InboxComponent_Template_span_click_87_listener() { return ctx.compose(false); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "New Message");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "form", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "from");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "To");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Subject");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "CC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "label", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "BCC");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "quill-editor", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "button", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "button", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "input", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Attach file");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c2, ctx.isEmailSidebarShow));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c3, ctx.activeTypeButton == "Inbox"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c3, ctx.activeTypeButton == "Sent"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c3, ctx.activeTypeButton == "Draft"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c3, ctx.activeTypeButton == "Starred"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c3, ctx.activeTypeButton == "Trash"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c3, ctx.activeTypeButton == "Work"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](39, _c3, ctx.activeTypeButton == "Family"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](41, _c3, ctx.activeTypeButton == "Friends"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](43, _c3, ctx.activeTypeButton == "Private"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](80, 19, ctx.mail, "mailFrom,subject,body", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mail.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c4, ctx.isMessageSelected));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMessageSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMessageSelected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](47, _c2, ctx.isComposeShow));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Bold");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], ngx_quill__WEBPACK_IMPORTED_MODULE_7__["QuillEditorComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return InboxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inbox',
                templateUrl: './inbox.component.html',
                styleUrls: ['./inbox.component.scss'],
                providers: [_inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }, { type: _inbox_service__WEBPACK_IMPORTED_MODULE_2__["InboxService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/inbox/inbox.model.ts":
/*!**************************************!*\
  !*** ./src/app/inbox/inbox.model.ts ***!
  \**************************************/
/*! exports provided: Mail, Message, MessageDetail, Attachments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDetail", function() { return MessageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attachments", function() { return Attachments; });
var Mail = /** @class */ (function () {
    function Mail(mailId, mailFrom, subject, body, time, isRead, isImportant, hasAttachment, hasImage, imagePath, imageText, imageClass, mailType, hasLabel, labelType, labelClass, isDefault) {
        this.mailId = mailId;
        this.mailFrom = mailFrom;
        this.subject = subject;
        this.body = body;
        this.time = time;
        this.isRead = isRead;
        this.isImportant = isImportant;
        this.hasAttachment = hasAttachment;
        this.hasImage = hasImage;
        this.imagePath = imagePath;
        this.imageText = imageText;
        this.imageClass = imageClass;
        this.mailType = mailType;
        this.hasLabel = hasLabel;
        this.labelType = labelType;
        this.labelClass = labelClass;
        this.isDefault = isDefault;
    }
    return Mail;
}());

var Message = /** @class */ (function () {
    function Message(mailId, subject, messagesCount, messages) {
        this.mailId = mailId;
        this.subject = subject;
        this.messagesCount = messagesCount;
        this.messages = messages;
    }
    return Message;
}());

var MessageDetail = /** @class */ (function () {
    function MessageDetail(messageId, mailFrom, mailTo, body, time, collapsed, hasAttachment, hasAvatar, avatarPath, avatarText, avatarClass, attachments) {
        this.messageId = messageId;
        this.mailFrom = mailFrom;
        this.mailTo = mailTo;
        this.body = body;
        this.time = time;
        this.collapsed = collapsed;
        this.hasAttachment = hasAttachment;
        this.hasAvatar = hasAvatar;
        this.avatarPath = avatarPath;
        this.avatarText = avatarText;
        this.avatarClass = avatarClass;
        this.attachments = attachments;
    }
    return MessageDetail;
}());

var Attachments = /** @class */ (function () {
    function Attachments(attachmentId, url) {
        this.attachmentId = attachmentId;
        this.url = url;
    }
    return Attachments;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.module.ts":
/*!***************************************!*\
  !*** ./src/app/inbox/inbox.module.ts ***!
  \***************************************/
/*! exports provided: InboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxModule", function() { return InboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm2015/ngx-quill.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _inbox_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox-routing.module */ "./src/app/inbox/inbox-routing.module.ts");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");
/* harmony import */ var _inbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inbox.component */ "./src/app/inbox/inbox.component.ts");











var InboxModule = /** @class */ (function () {
    function InboxModule() {
    }
    InboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InboxModule });
    InboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InboxModule_Factory(t) { return new (t || InboxModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inbox_routing_module__WEBPACK_IMPORTED_MODULE_6__["InboxRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]
            ]] });
    return InboxModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InboxModule, { declarations: [_inbox_component__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _inbox_routing_module__WEBPACK_IMPORTED_MODULE_6__["InboxRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _inbox_routing_module__WEBPACK_IMPORTED_MODULE_6__["InboxRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    ngx_quill__WEBPACK_IMPORTED_MODULE_3__["QuillModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]
                ],
                declarations: [
                    _inbox_component__WEBPACK_IMPORTED_MODULE_8__["InboxComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/inbox/inbox.service.ts":
/*!****************************************!*\
  !*** ./src/app/inbox/inbox.service.ts ***!
  \****************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _inbox_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.model */ "./src/app/inbox/inbox.model.ts");



var InboxService = /** @class */ (function () {
    function InboxService() {
        this.inbox = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](1, 'Tonny Deep', 'PixInvent, I found you...', 'I would be good.', '4:14 AM', false, true, false, false, '', 'T', 'bg-info', 'Inbox', true, 'Family', 'badge bg-light-danger mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](2, 'Louis Welch', 'Thanks, Let us do it.', 'Can we connect today...', '2:15 AM', false, false, true, false, '', 'L', 'bg-danger', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](3, 'Envato Market', 'You have new comment...', 'Hi Pixinvent...', '11:18 PM', false, false, false, false, '', 'E', 'bg-warning', 'Inbox', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](4, 'Wayne Burton', 'Project ABC Status...', 'Andy, Let us...', 'Today', true, true, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', 'Inbox', true, 'Private', 'badge bg-light-success mr-1', true),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](5, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', 'Inbox', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](6, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, false, true, false, '', 'H', 'bg-success', 'Inbox', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](7, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Inbox', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](8, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Sent', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](9, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Sent', false, '', '', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](10, 'Sarah Montgomery', 'Your New UI.', 'Everything looks good.', 'Yesterday', true, true, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', 'Sent', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](11, 'Heather Howell', 'Thanks, Let us do it.', 'Can we connect today...', '15 July', true, true, false, false, '', 'H', 'bg-success', 'Sent', true, 'Private', 'badge bg-light-success mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](12, 'Kelly Reyes', 'I paid it, Thanks.', 'Check once...', '12 July', false, false, true, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', 'Trash', true, 'Work', 'badge bg-light-warning mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](13, 'Vincent Nelson', 'Where are you John?', 'Party tonight ?', '11 July', true, false, false, false, '', 'V', 'bg-warning', 'Trash', true, 'Friends', 'badge bg-light-primary mr-1', false),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Mail"](14, 'Elizabeth Elliott', 'Okay, I will call you.', 'Here they are.', '8 July', true, false, false, false, '', 'E', 'bg-info', 'Trash', false, '', '', false),
        ];
        this.message = [
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](1, 'PixInvent, I found you...', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Tonny Deep', "<p>Hi Tonny,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Tonny Deep', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Today', false, false, false, '', 'T', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](2, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Louis Welch', "<p>Hi Louis,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Louis Welch', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '2:15 AM', false, true, false, '', 'L', 'bg-danger', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](3, 'You have a new comment...', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'Envato Market', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11:18 PM', false, false, false, '', 'E', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](4, 'Project ABC Status Report', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Wayne Burton', "<p>Hi Wayne,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Wayne Burton', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-7.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](5, 'Your New UI', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", 'Yesterday', false, false, true, 'assets/img/portrait/small/avatar-s-5.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](6, 'Thanks, Let us do it.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Heather Howell', "<p>Hi Heather,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '13 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Heather Howell', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '15 July', false, true, false, '', 'H', 'bg-success', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](1, 'assets/img/gallery/16.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](2, 'assets/img/gallery/17.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](7, 'I paid it, Thanks.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '12 July', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](8, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 August', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](9, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '31 May', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '8 July', false, false, false, '', 'E', 'bg-info', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](10, 'Your New UI.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Sarah Montgomery', "<p>Hi Sarah,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Sarah Montgomery', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Yesterday', false, true, true, 'assets/img/portrait/small/avatar-s-6.png', '', '', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](11, 'Thanks, Let us do it.', 1, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'Heather Howell', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '15 July', false, false, false, '', 'H', 'bg-success', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](12, 'I paid it, Thanks.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Kelly Reyes', "<p>Hi Kelly,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '12 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Kelly Reyes', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", 'Today', false, false, true, 'assets/img/portrait/small/avatar-s-8.png', '', '', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](13, 'Where are you John?', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Vincent Nelson', "<p>Hi Vincent,</p>\n                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                     <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                     <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                     <p>Regards,<br/>John</p>", '21 July', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Vincent Nelson', 'me', "<p>Hi John,</p>\n                     <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                     <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                     <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                     <p>Cheers~</p>", '11 July', false, false, false, '', 'V', 'bg-warning', []),
            ]),
            new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Message"](14, 'Okay, I will call you.', 2, [
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('1', 'John Doe', 'Elizabeth Elliott', "<p>Hi Elizabeth,</p>\n                    <p>Ut varius purus ut mi consectetur, sed hendrerit nisi facilisis. Sed vitae neque vitae urna mattis condimentum. Suspendisse eu blandit enim, sed semper quam. Vivamus sed convallis ex</p>\n                    <p>Curabitur a euismod dui. Vivamus ut luctus nisl. In tincidunt tellus vel lobortis hendrerit. Quisque odio tortor, accumsan vel hendrerit in, volutpat nec mi. Nulla imperdiet, nunc quis dictum dignissim, dolor ligula ultrices diam, non tristique magna ipsum ac metus</p>\n                    <p>Suspendisse vitae pharetra eros. Proin eu elit et diam ultricies efficitur.</p>\n                    <p>Regards,<br/>John</p>", '15 April', true, false, true, 'assets/img/portrait/small/avatar-s-1.png', '', '', []),
                new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["MessageDetail"]('2', 'Elizabeth Elliott', 'me', "<p>Hi John,</p>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam urna quam, rhoncus vitae lacinia vitae, gravida eleifend urna. Sed mattis posuere urna, iaculis ornare mi ultrices rhoncus. Phasellus elementum suscipit ante eu consectetur</p>\n                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris enim nisi, bibendum at tincidunt vel, aliquam a mi. Vivamus non interdum nisi, at bibendum arcu. Integer sagittis, erat in imperdiet aliquam, erat sem mollis enim, nec tincidunt lectus sapien a diam. Pellentesque pulvinar sit amet nunc ac mattis</p>\n                    <p>Ut sagittis dictum metus, dapibus faucibus risus facilisis sed. Vivamus scelerisque arcu vel dolor aliquet, vitae molestie risus dignissim. Donec id odio interdum, ornare nisl ac, mattis sem. Curabitur id magna nunc</p>\n                    <p>Cheers~</p>", '8 July', false, true, false, '', 'E', 'bg-info', [
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](1, 'assets/img/gallery/1.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](2, 'assets/img/gallery/3.jpg'),
                    new _inbox_model__WEBPACK_IMPORTED_MODULE_1__["Attachments"](3, 'assets/img/gallery/21.jpg')
                ]),
            ])
        ];
    }
    InboxService.ɵfac = function InboxService_Factory(t) { return new (t || InboxService)(); };
    InboxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InboxService, factory: InboxService.ɵfac });
    return InboxService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InboxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=inbox-inbox-module.js.map