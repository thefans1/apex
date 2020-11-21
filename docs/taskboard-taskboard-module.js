(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-taskboard-module"],{

/***/ "./src/app/taskboard/taskboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/taskboard/taskboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardRoutingModule", function() { return TaskboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");





var routes = [
    {
        path: '',
        component: _taskboard_component__WEBPACK_IMPORTED_MODULE_2__["TaskboardComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardRoutingModule = /** @class */ (function () {
    function TaskboardRoutingModule() {
    }
    TaskboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskboardRoutingModule });
    TaskboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskboardRoutingModule_Factory(t) { return new (t || TaskboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TaskboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/taskboard/taskboard.component.ts ***!
  \**************************************************/
/*! exports provided: TaskboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardComponent", function() { return TaskboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _taskboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard.service */ "./src/app/taskboard/taskboard.service.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











var _c0 = ["marketingTitle"];
var _c1 = ["marketingMessage"];
function TaskboardComponent_div_22_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r4.taskMessage);
} }
function TaskboardComponent_div_22_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", task_r4.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_22_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r4.createdOn);
} }
function TaskboardComponent_div_22_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r4.messageCount);
} }
function TaskboardComponent_div_22_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r4.linkCount);
} }
function TaskboardComponent_div_22_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_22_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_22_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r4.assignedTo);
} }
function TaskboardComponent_div_22_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r21.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](badge_r21.name);
} }
function TaskboardComponent_div_22_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_22_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r4.assignedTo);
} }
function TaskboardComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_22_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); var task_r4 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.editTask(task_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_22_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); var task_r4 = ctx.$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.deleteTask(task_r4.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskboardComponent_div_22_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskboardComponent_div_22_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskboardComponent_div_22_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TaskboardComponent_div_22_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TaskboardComponent_div_22_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TaskboardComponent_div_22_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TaskboardComponent_div_22_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("task-id", task_r4.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r4.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r4.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r4.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !task_r4.isUserImg);
} }
function TaskboardComponent_div_30_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r26.taskMessage);
} }
function TaskboardComponent_div_30_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", task_r26.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_30_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r26.createdOn);
} }
function TaskboardComponent_div_30_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r26.messageCount);
} }
function TaskboardComponent_div_30_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r26.linkCount);
} }
function TaskboardComponent_div_30_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r40, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_30_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_30_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r26.assignedTo);
} }
function TaskboardComponent_div_30_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r43.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](badge_r43.name);
} }
function TaskboardComponent_div_30_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_30_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r26.assignedTo);
} }
function TaskboardComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_30_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); var task_r26 = ctx.$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.editTask(task_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_30_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); var task_r26 = ctx.$implicit; var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.deleteTask(task_r26.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskboardComponent_div_30_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskboardComponent_div_30_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskboardComponent_div_30_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TaskboardComponent_div_30_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TaskboardComponent_div_30_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TaskboardComponent_div_30_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TaskboardComponent_div_30_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("task-id", task_r26.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r26.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r26.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r26.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !task_r26.isUserImg);
} }
function TaskboardComponent_div_38_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r48.taskMessage);
} }
function TaskboardComponent_div_38_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", task_r48.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_38_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r48.createdOn);
} }
function TaskboardComponent_div_38_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r48.messageCount);
} }
function TaskboardComponent_div_38_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r48.linkCount);
} }
function TaskboardComponent_div_38_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r62, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_38_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_38_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r48.assignedTo);
} }
function TaskboardComponent_div_38_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r65.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](badge_r65.name);
} }
function TaskboardComponent_div_38_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_38_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r48.assignedTo);
} }
function TaskboardComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_38_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var task_r48 = ctx.$implicit; var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r67.editTask(task_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_38_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68); var task_r48 = ctx.$implicit; var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r69.deleteTask(task_r48.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskboardComponent_div_38_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskboardComponent_div_38_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskboardComponent_div_38_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TaskboardComponent_div_38_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TaskboardComponent_div_38_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TaskboardComponent_div_38_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TaskboardComponent_div_38_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("task-id", task_r48.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r48.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r48.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r48.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !task_r48.isUserImg);
} }
function TaskboardComponent_div_46_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r70.taskMessage);
} }
function TaskboardComponent_div_46_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", task_r70.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_46_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r70.createdOn);
} }
function TaskboardComponent_div_46_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r70.messageCount);
} }
function TaskboardComponent_div_46_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r70.linkCount);
} }
function TaskboardComponent_div_46_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TaskboardComponent_div_46_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_46_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r70.assignedTo);
} }
function TaskboardComponent_div_46_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r87.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](badge_r87.name);
} }
function TaskboardComponent_div_46_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskboardComponent_div_46_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", task_r70.assignedTo);
} }
function TaskboardComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_46_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); var task_r70 = ctx.$implicit; var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r89.editTask(task_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_div_46_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90); var task_r70 = ctx.$implicit; var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r91.deleteTask(task_r70.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TaskboardComponent_div_46_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TaskboardComponent_div_46_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TaskboardComponent_div_46_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TaskboardComponent_div_46_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TaskboardComponent_div_46_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TaskboardComponent_div_46_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TaskboardComponent_div_46_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("task-id", task_r70.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r70.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](task_r70.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", task_r70.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !task_r70.isUserImg);
} }
var TaskboardComponent = /** @class */ (function () {
    function TaskboardComponent(dragulaService, elRef, taskBoardService, modalService, ref) {
        var _this = this;
        this.dragulaService = dragulaService;
        this.elRef = elRef;
        this.taskBoardService = taskBoardService;
        this.modalService = modalService;
        this.ref = ref;
        this.BAG = "task-group";
        this.tasks = this.taskBoardService.tasks;
        this.loadTasks();
        dragulaService.drop(this.BAG)
            .subscribe(function (_a) {
            var el = _a.el, target = _a.target;
            _this.updateTaskStatus(el.getAttribute('task-id'), target.id);
        });
    }
    TaskboardComponent.prototype.loadTasks = function () {
        this.marketingTasks = this.tasks.filter(function (task) { return task.status === 'Marketing'; });
        this.uiDesigningTasks = this.tasks.filter(function (task) { return task.status === 'UI-Designing'; });
        this.developingTasks = this.tasks.filter(function (task) { return task.status === 'Developing'; });
        this.managementTasks = this.tasks.filter(function (task) { return task.status === 'Management'; });
        this.ref.markForCheck();
    };
    TaskboardComponent.prototype.editTask = function (task) {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = task.taskId; // should be the id
        modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage, type: task.status }; // should be the data
        modalRef.result.then(function (result) {
            task.taskTitle = result.title;
            task.taskMessage = result.message;
            task.status = result.type;
            _this.updateTaskStatus(task.taskId.toString(), task.status, task);
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.prototype.updateTaskStatus = function (id, status, task) {
        var badgeClass = 'primary';
        if (status === 'Marketing') {
            badgeClass = 'primary';
        }
        else if (status === 'UI-Designing') {
            badgeClass = 'warning';
        }
        else if (status === 'Developing') {
            badgeClass = 'success';
        }
        else if (status === 'Management') {
            badgeClass = 'info';
        }
        var currentTask;
        if (task) {
            currentTask = task;
        }
        else {
            currentTask = this.tasks.find(function (x) { return x.taskId === +id; });
        }
        var index = this.tasks.indexOf(currentTask);
        currentTask.status = status;
        currentTask.badgeClass = badgeClass;
        this.tasks.splice(index, 1, currentTask);
        this.tasks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tasks);
        this.loadTasks();
    };
    TaskboardComponent.prototype.deleteTask = function (id) {
        var task = this.tasks.find(function (x) { return x.taskId === id; });
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
        this.tasks = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.tasks);
        this.loadTasks();
    };
    TaskboardComponent.prototype.addTask = function () {
        var _this = this;
        var modalRef = this.modalService.open(_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_4__["CrudModalComponent"]);
        modalRef.componentInstance.id = 0; // should be the id
        modalRef.componentInstance.data = { title: '', message: '', type: 'Marketing' }; // should be the data
        modalRef.result.then(function (result) {
            _this.taskBoardService.addNewTask(result.title, result.message, result.type).subscribe(function (data) {
                _this.tasks = data;
                _this.loadTasks();
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardComponent.ɵfac = function TaskboardComponent_Factory(t) { return new (t || TaskboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    TaskboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaskboardComponent, selectors: [["app-taskboard"]], viewQuery: function TaskboardComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleInputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messageInputRef = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"]])], decls: 47, vars: 12, consts: [["id", "taskboard", 1, "app-taskboard"], [1, "row"], [1, "col-12"], [1, "my-3"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 3, "click"], [1, "d-flex", "align-items-center"], [1, "ft-plus", "mr-1"], ["type", "button", 1, "btn", "bg-light-primary"], [1, "ft-filter", "mr-1"], [1, "col-xl-3", "col-sm-6", "col-12"], [1, "mt-2", "mb-0"], [1, "ft-cast", "mr-2"], ["id", "Marketing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "ft-codepen", "mr-2"], ["id", "UI-Designing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "ft-trending-up", "mr-2"], ["id", "Developing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "ft-briefcase", "mr-2"], ["id", "Management", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "ft-edit", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-trash-2", "danger", "cursor-pointer", 3, "click"], [4, "ngIf"], ["class", "d-flex justify-content-center overflow-hidden rounded my-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "font-small-2"], ["class", "mr-2", 4, "ngIf"], ["class", "list-unstyled users-list m-0 d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-center", "overflow-hidden", "rounded", "my-3"], ["alt", "ToDo Pic", "height", "350", 3, "src"], [1, "mr-2"], [1, "ft-clock", "mr-1"], [1, "ft-message-square", "mr-1"], [1, "ft-link", "mr-1"], [1, "list-unstyled", "users-list", "m-0", "d-flex", "align-items-center"], [4, "ngFor", "ngForOf"], ["alt", "Avatar", "height", "24", "width", "24", 1, "rounded-circle", 3, "src"]], template: function TaskboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TaskboardComponent_Template_button_click_4_listener() { return ctx.addTask(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Create");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Marketing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TaskboardComponent_div_22_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "UI Designing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TaskboardComponent_div_30_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Developing");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, TaskboardComponent_div_38_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TaskboardComponent_div_46_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.marketingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.marketingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.uiDesigningTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.uiDesigningTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.developingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.developingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.managementTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.managementTasks);
        } }, directives: [ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n    display: table-cell;\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 25%;\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\n   * you're better off giving the draggable elements a unique class and styling that directly!\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n\n.taskboard-modal-footer .btn-save {\n  color: #fff !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkL3Rhc2tib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQztFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7QUFDWjs7QUFFQyx5Q0FBQTs7QUFDQTtFQUNFLGNBQWM7QUFDakI7O0FBRUM7Ozs7S0FJSTs7QUFDSjtFQUNFLG9DQUFvQztBQUN2Qzs7QUFFQzs7O0lBR0c7O0FBQ0g7O0VBS0Usb0NBQW9DO0FBRnZDOztBQUtDO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFFWixvQkFBb0I7QUFGdkI7O0FBS0M7RUFDRSxnQkFBZ0I7RUFFaEIsd0JBQXdCO0FBRjNCOztBQUtDO0VBQ0UseUJBQXlCO0FBRjVCOztBQUtDO0VBQ0UsMENBQTBDO0FBRjdDOztBQUtDOztFQUVFLGVBQWU7QUFGbEI7O0FBS0M7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZO0FBRmY7O0FBS0M7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtBQUZyQjs7QUFLQztFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUZwQjs7QUFLQztFQUVJLHNCQUFzQjtBQUgzQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC90YXNrYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmdoLWZvcmsge1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgdG9wOiAwO1xuICAgcmlnaHQ6IDA7XG4gICBib3JkZXI6IDA7XG4gfVxuXG4gLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4gLmRyYWdkcm9wLXdyYXBwZXIge1xuICAgZGlzcGxheTogdGFibGU7XG4gfVxuXG4gLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgd2lkdGg6IDI1JTtcbiAgfSAqL1xuIC5kcmFnZHJvcC1jb250YWluZXI6bnRoLWNoaWxkKG9kZCkge1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuIH1cblxuIC8qXG4gICAqIG5vdGUgdGhhdCBzdHlsaW5nIGd1LW1pcnJvciBkaXJlY3RseSBpcyBhIGJhZCBwcmFjdGljZSBiZWNhdXNlIGl0J3MgdG9vIGdlbmVyaWMuXG4gICAqIHlvdSdyZSBiZXR0ZXIgb2ZmIGdpdmluZyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRzIGEgdW5pcXVlIGNsYXNzIGFuZCBzdHlsaW5nIHRoYXQgZGlyZWN0bHkhXG4gICAqL1xuIC5kcmFnZHJvcC1jb250YWluZXI+ZGl2LFxuIC5ndS1taXJyb3Ige1xuICAgLy8gbWFyZ2luOiAxMHB4O1xuICAgLy8gcGFkZGluZzogMTBweDtcbiAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbiB9XG5cbiAuZHJhZ2Ryb3AtY29udGFpbmVyPmRpdiB7XG4gICBjdXJzb3I6IG1vdmU7XG4gICBjdXJzb3I6IGdyYWI7XG4gICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuIH1cblxuIC5ndS1taXJyb3Ige1xuICAgY3Vyc29yOiBncmFiYmluZztcbiAgIGN1cnNvcjogLW1vei1ncmFiYmluZztcbiAgIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiB9XG5cbiAuZHJhZ2Ryb3AtY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xuIH1cblxuIC5kcmFnZHJvcC1jb250YWluZXIuZXgtb3ZlciB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gfVxuXG4gI2xlZnQtbG92ZWhhbmRsZXM+ZGl2LFxuICNyaWdodC1sb3ZlaGFuZGxlcz5kaXYge1xuICAgY3Vyc29yOiBpbml0aWFsO1xuIH1cblxuIC5oYW5kbGUge1xuICAgcGFkZGluZzogMCA1cHg7XG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgIGN1cnNvcjogbW92ZTtcbiB9XG5cbiAuaW1hZ2UtdGhpbmcge1xuICAgbWFyZ2luOiAyMHB4IDA7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cbiAuc2xhY2stam9pbiB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgcmlnaHQ6IDEwcHg7XG4gICB0b3A6IDUwJTtcbiAgIG1hcmdpbi10b3A6IC04cHg7XG4gICBsaW5lLWhlaWdodDogMTZweDtcbiB9XG5cbiAudGFza2JvYXJkLW1vZGFsLWZvb3RlciB7XG4gICAuYnRuLXNhdmUge1xuICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgfVxuIH1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });
    return TaskboardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-taskboard',
                templateUrl: './taskboard.component.html',
                styleUrls: ['./taskboard.component.scss'],
                providers: [_taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _taskboard_service__WEBPACK_IMPORTED_MODULE_3__["TaskBoardService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { titleInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['marketingTitle']
        }], messageInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['marketingMessage']
        }] }); })();


/***/ }),

/***/ "./src/app/taskboard/taskboard.model.ts":
/*!**********************************************!*\
  !*** ./src/app/taskboard/taskboard.model.ts ***!
  \**********************************************/
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

/***/ "./src/app/taskboard/taskboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/taskboard/taskboard.module.ts ***!
  \***********************************************/
/*! exports provided: TaskboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-routing.module */ "./src/app/taskboard/taskboard-routing.module.ts");
/* harmony import */ var _taskboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard.component */ "./src/app/taskboard/taskboard.component.ts");
/* harmony import */ var _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");










var TaskboardModule = /** @class */ (function () {
    function TaskboardModule() {
    }
    TaskboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskboardModule });
    TaskboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskboardModule_Factory(t) { return new (t || TaskboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
            ]] });
    return TaskboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskboardModule, { declarations: [_taskboard_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardComponent"],
        _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__["CrudModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardRoutingModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _taskboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskboardRoutingModule"],
                    ng2_dragula__WEBPACK_IMPORTED_MODULE_2__["DragulaModule"].forRoot(),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
                ],
                declarations: [
                    _taskboard_component__WEBPACK_IMPORTED_MODULE_6__["TaskboardComponent"],
                    _crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_7__["CrudModalComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/taskboard/taskboard.service.ts":
/*!************************************************!*\
  !*** ./src/app/taskboard/taskboard.service.ts ***!
  \************************************************/
/*! exports provided: TaskBoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardService", function() { return TaskBoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taskboard_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskboard.model */ "./src/app/taskboard/taskboard.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





var TaskBoardService = /** @class */ (function () {
    function TaskBoardService() {
        this.tasks = [
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](1, 'Responsive', 'primary', 'Check responsive and change SCSS accordingly.', 'text', "1", "3", 'Feb 6', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-2.png', 'assets/img/portrait/small/avatar-s-3.png'], true, 'Marketing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](2, 'Users', 'primary', 'Companies of all shapes and sizes use Apex.', 'text', "", "", 'March 19', 'Elizabeth Elliott', [{ name: 'E', class: 'warning' }], false, 'Marketing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](3, 'Laptops', 'primary', 'Dell laptops are among the most well known laptops.', 'text', "2", "1", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-6.png'], true, 'Marketing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](4, 'Pick up Jane', 'warning', 'assets/img/banner/banner-10.jpg', 'image', "", "", '', 'Elizabeth Elliott', [], true, 'UI-Designing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](5, 'Navigation', 'warning', 'Design a prototype.', 'text', "", "6", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-7.png', 'assets/img/portrait/small/avatar-s-8.png', 'assets/img/portrait/small/avatar-s-9.png', 'assets/img/portrait/small/avatar-s-10.png'], true, 'UI-Designing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](6, 'Bootstrap 4', 'warning', 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.', 'text', "4", "", 'Dec 3', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-11.png', 'assets/img/portrait/small/avatar-s-12.png'], true, 'UI-Designing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](7, 'Meeting Agenda', 'success', 'Polish brand idea.', 'text', "3", "2", '', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-13.png', 'assets/img/portrait/small/avatar-s-14.png', 'assets/img/portrait/small/avatar-s-15.png'], true, 'Developing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](8, 'Angular 9', 'success', 'Angular is a platform for building mobile and desktop web applications.', 'text', "", "", 'Oct 16', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-16.png', 'assets/img/portrait/small/avatar-s-17.png'], true, 'Developing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](9, 'Task', 'success', 'Develop & design feedback form.', 'text', "8", "", '', 'Elizabeth Elliott', [{ name: 'S', class: 'primary' }, { name: 'J', class: 'success' }], false, 'Developing'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](10, 'Assessment', 'info', "Don't let the outtakes take you out!", 'text', "", "", 'Sept 10', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-26.png'], true, 'Management'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](11, 'Photo shoot', 'info', 'assets/img/banner/banner-22.jpg', 'image', "2", "5", '', 'Elizabeth Elliott', [{ name: 'L', class: 'secondary' }, { name: 'F', class: 'danger' }, { name: 'T', class: 'info' }], false, 'Management'),
            new _taskboard_model__WEBPACK_IMPORTED_MODULE_1__["Task"](12, 'Unit tests', 'info', 'Implement performance improvements.', 'text', "5", "4", 'Jan 14', 'Elizabeth Elliott', ['assets/img/portrait/small/avatar-s-24.png', 'assets/img/portrait/small/avatar-s-20.png'], true, 'Management')
        ];
    }
    TaskBoardService.prototype.addNewTask = function (title, message, type) {
        var badgeClass = 'primary';
        if (type === 'Marketing') {
            badgeClass = 'primary';
        }
        else if (type === 'UI-Designing') {
            badgeClass = 'warning';
        }
        else if (type === 'Developing') {
            badgeClass = 'success';
        }
        else if (type === 'Management') {
            badgeClass = 'info';
        }
        var task = {
            taskId: Math.round(Math.random() * 10000000000),
            taskTitle: title,
            taskMessage: message,
            createdOn: 'Nov 12',
            createdBy: 'Elizabeth Elliott',
            assignedTo: ['assets/img/portrait/small/avatar-s-4.png'],
            status: type,
            badgeClass: badgeClass,
            messageType: 'text',
            messageCount: '',
            linkCount: '',
            isUserImg: true,
        };
        this.tasks.unshift(task);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.tasks.slice()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(100));
    };
    TaskBoardService.ɵfac = function TaskBoardService_Factory(t) { return new (t || TaskBoardService)(); };
    TaskBoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskBoardService, factory: TaskBoardService.ɵfac });
    return TaskBoardService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskBoardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=taskboard-taskboard-module.js.map