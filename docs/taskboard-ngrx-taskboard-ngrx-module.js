(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");





var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskboardNGRXRoutingModule });
    TaskboardNGRXRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskboardNGRXRoutingModule_Factory(t) { return new (t || TaskboardNGRXRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return TaskboardNGRXRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskboardNGRXRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskboardNGRXRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var app_taskboard_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/taskboard/crud-modal/crud-modal.component */ "./src/app/taskboard/crud-modal/crud-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












var _c0 = ["todoTitle"];
var _c1 = ["todoMessage"];
function TaskboardNGRXComponent_div_22_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.taskMessage);
} }
function TaskboardNGRXComponent_div_22_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", task_r4.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_22_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.createdOn);
} }
function TaskboardNGRXComponent_div_22_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.messageCount);
} }
function TaskboardNGRXComponent_div_22_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.linkCount);
} }
function TaskboardNGRXComponent_div_22_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_22_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_22_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r4.assignedTo);
} }
function TaskboardNGRXComponent_div_22_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r21.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r21.name);
} }
function TaskboardNGRXComponent_div_22_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_22_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r4.assignedTo);
} }
function TaskboardNGRXComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_22_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var task_r4 = ctx.$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.editTask(task_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_22_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); var task_r4 = ctx.$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.deleteTask(task_r4.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskboardNGRXComponent_div_22_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskboardNGRXComponent_div_22_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskboardNGRXComponent_div_22_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskboardNGRXComponent_div_22_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskboardNGRXComponent_div_22_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskboardNGRXComponent_div_22_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskboardNGRXComponent_div_22_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("task-id", task_r4.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r4.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r4.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r4.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r4.isUserImg);
} }
function TaskboardNGRXComponent_div_30_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r26.taskMessage);
} }
function TaskboardNGRXComponent_div_30_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", task_r26.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_30_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r26.createdOn);
} }
function TaskboardNGRXComponent_div_30_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r26.messageCount);
} }
function TaskboardNGRXComponent_div_30_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r26.linkCount);
} }
function TaskboardNGRXComponent_div_30_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r40, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_30_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_30_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r26.assignedTo);
} }
function TaskboardNGRXComponent_div_30_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r43.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r43.name);
} }
function TaskboardNGRXComponent_div_30_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_30_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r26.assignedTo);
} }
function TaskboardNGRXComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_30_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); var task_r26 = ctx.$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.editTask(task_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_30_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); var task_r26 = ctx.$implicit; var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.deleteTask(task_r26.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskboardNGRXComponent_div_30_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskboardNGRXComponent_div_30_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskboardNGRXComponent_div_30_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskboardNGRXComponent_div_30_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskboardNGRXComponent_div_30_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskboardNGRXComponent_div_30_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskboardNGRXComponent_div_30_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("task-id", task_r26.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r26.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r26.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r26.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r26.isUserImg);
} }
function TaskboardNGRXComponent_div_38_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r48.taskMessage);
} }
function TaskboardNGRXComponent_div_38_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", task_r48.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_38_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r48.createdOn);
} }
function TaskboardNGRXComponent_div_38_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r48.messageCount);
} }
function TaskboardNGRXComponent_div_38_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r48.linkCount);
} }
function TaskboardNGRXComponent_div_38_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_38_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_38_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r48.assignedTo);
} }
function TaskboardNGRXComponent_div_38_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r65.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r65.name);
} }
function TaskboardNGRXComponent_div_38_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_38_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r48.assignedTo);
} }
function TaskboardNGRXComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_38_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); var task_r48 = ctx.$implicit; var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.editTask(task_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_38_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68); var task_r48 = ctx.$implicit; var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r69.deleteTask(task_r48.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskboardNGRXComponent_div_38_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskboardNGRXComponent_div_38_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskboardNGRXComponent_div_38_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskboardNGRXComponent_div_38_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskboardNGRXComponent_div_38_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskboardNGRXComponent_div_38_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskboardNGRXComponent_div_38_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("task-id", task_r48.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r48.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r48.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r48.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r48.isUserImg);
} }
function TaskboardNGRXComponent_div_46_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r70.taskMessage);
} }
function TaskboardNGRXComponent_div_46_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", task_r70.taskMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_46_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r70.createdOn);
} }
function TaskboardNGRXComponent_div_46_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r70.messageCount);
} }
function TaskboardNGRXComponent_div_46_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r70.linkCount);
} }
function TaskboardNGRXComponent_div_46_ul_15_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var img_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r84, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskboardNGRXComponent_div_46_ul_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_46_ul_15_li_1_Template, 2, 1, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r70.assignedTo);
} }
function TaskboardNGRXComponent_div_46_ul_16_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var badge_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-round bg-light-", badge_r87.class, " font-small-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](badge_r87.name);
} }
function TaskboardNGRXComponent_div_46_ul_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskboardNGRXComponent_div_46_ul_16_li_1_Template, 3, 4, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r70.assignedTo);
} }
function TaskboardNGRXComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_46_Template_i_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var task_r70 = ctx.$implicit; var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r89.editTask(task_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_div_46_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); var task_r70 = ctx.$implicit; var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r91.deleteTask(task_r70.taskId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskboardNGRXComponent_div_46_p_8_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskboardNGRXComponent_div_46_div_9_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskboardNGRXComponent_div_46_div_12_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskboardNGRXComponent_div_46_div_13_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TaskboardNGRXComponent_div_46_div_14_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TaskboardNGRXComponent_div_46_ul_15_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TaskboardNGRXComponent_div_46_ul_16_Template, 2, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var task_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("task-id", task_r70.taskId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge bg-light-", task_r70.badgeClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r70.taskTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.messageType === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.messageType === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.createdOn != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.messageCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.linkCount != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", task_r70.isUserImg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !task_r70.isUserImg);
} }
var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, dragulaService, store, ref, modalService) {
        this.elRef = elRef;
        this.dragulaService = dragulaService;
        this.store = store;
        this.ref = ref;
        this.modalService = modalService;
        this.BAG = "task-group";
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.store
            .select('task')
            .subscribe(function (data) {
            _this.tasks = data.tasks;
            _this.loadTasks();
            _this.dragulaService.drop(_this.BAG)
                .subscribe(function (_a) {
                var el = _a.el, target = _a.target;
                _this.updateTaskStatus(el.getAttribute('task-id'), target.id);
            });
        });
    };
    TaskboardNGRXComponent.prototype.loadTasks = function () {
        this.marketingTasks = this.tasks.filter(function (task) { return task.status === 'Marketing'; });
        this.uiDesigningTasks = this.tasks.filter(function (task) { return task.status === 'UI-Designing'; });
        this.developingTasks = this.tasks.filter(function (task) { return task.status === 'Developing'; });
        this.managementTasks = this.tasks.filter(function (task) { return task.status === 'Management'; });
        this.ref.markForCheck();
    };
    TaskboardNGRXComponent.prototype.addTask = function () {
        var _this = this;
        var modalRef = this.modalService.open(app_taskboard_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_6__["CrudModalComponent"]);
        modalRef.componentInstance.id = 0; // should be the id
        modalRef.componentInstance.data = { title: '', message: '', type: 'Marketing' }; // should be the data
        modalRef.result.then(function (result) {
            var newTask = _this.task(result.title, result.message, result.type);
            _this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_3__["AddTask"](newTask));
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardNGRXComponent.prototype.editTask = function (task) {
        var _this = this;
        var modalRef = this.modalService.open(app_taskboard_crud_modal_crud_modal_component__WEBPACK_IMPORTED_MODULE_6__["CrudModalComponent"]);
        modalRef.componentInstance.id = task.taskId; // should be the id
        modalRef.componentInstance.data = { title: task.taskTitle, message: task.taskMessage, type: task.status }; // should be the data
        modalRef.result.then(function (result) {
            var newTaskObj = _this.createObject(task);
            newTaskObj.taskTitle = result.title;
            newTaskObj.taskMessage = result.message;
            newTaskObj.status = result.type;
            _this.updateTaskStatus(newTaskObj.taskId.toString(), newTaskObj.status, newTaskObj);
        }).catch(function (error) {
            console.log(error);
        });
    };
    TaskboardNGRXComponent.prototype.updateTaskStatus = function (id, status, task) {
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
        var newTaskObj = this.createObject(currentTask);
        newTaskObj.status = status;
        newTaskObj.badgeClass = badgeClass;
        var index = this.tasks.indexOf(this.tasks.find(function (x) { return x.taskId === currentTask.taskId; }));
        this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateTask"]({
            index: index,
            newTask: newTaskObj
        }));
    };
    TaskboardNGRXComponent.prototype.deleteTask = function (id) {
        var task = this.tasks.find(function (x) { return x.taskId === id; });
        var index = this.tasks.indexOf(task);
        this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteTask"](index));
    };
    TaskboardNGRXComponent.prototype.task = function (title, message, type) {
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
        return task;
    };
    TaskboardNGRXComponent.prototype.createObject = function (task) {
        return new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"](task.taskId, task.taskTitle, task.badgeClass, task.taskMessage, task.messageType, task.messageCount, task.linkCount, task.createdOn, task.createdBy, task.assignedTo, task.isUserImg, task.status);
    };
    TaskboardNGRXComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    TaskboardNGRXComponent.ɵfac = function TaskboardNGRXComponent_Factory(t) { return new (t || TaskboardNGRXComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
    TaskboardNGRXComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskboardNGRXComponent, selectors: [["app-ngrx-taskboard"]], viewQuery: function TaskboardNGRXComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titleInputRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageInputRef = _t.first);
        } }, decls: 47, vars: 12, consts: [["id", "taskboard", 1, "app-taskboard"], [1, "row"], [1, "col-12"], [1, "my-3"], ["type", "button", 1, "btn", "btn-primary", "mr-2", 3, "click"], [1, "d-flex", "align-items-center"], [1, "ft-plus", "mr-1"], ["type", "button", 1, "btn", "bg-light-primary"], [1, "ft-filter", "mr-1"], [1, "col-xl-3", "col-sm-6", "col-12"], [1, "mt-2", "mb-0"], [1, "ft-cast", "mr-2"], ["id", "Marketing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "ft-codepen", "mr-2"], ["id", "UI-Designing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "ft-trending-up", "mr-2"], ["id", "Developing", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "ft-briefcase", "mr-2"], ["id", "Management", 1, "dragdrop-container", 3, "dragula", "dragulaModel"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "justify-content-between", "mb-2"], [1, "ft-edit", "mr-1", "primary", "cursor-pointer", 3, "click"], [1, "ft-trash-2", "danger", "cursor-pointer", 3, "click"], [4, "ngIf"], ["class", "d-flex justify-content-center overflow-hidden rounded my-3", 4, "ngIf"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "font-small-2"], ["class", "mr-2", 4, "ngIf"], ["class", "list-unstyled users-list m-0 d-flex align-items-center", 4, "ngIf"], [1, "d-flex", "justify-content-center", "overflow-hidden", "rounded", "my-3"], ["alt", "ToDo Pic", "height", "350", 3, "src"], [1, "mr-2"], [1, "ft-clock", "mr-1"], [1, "ft-message-square", "mr-1"], [1, "ft-link", "mr-1"], [1, "list-unstyled", "users-list", "m-0", "d-flex", "align-items-center"], [4, "ngFor", "ngForOf"], ["alt", "Avatar", "height", "24", "width", "24", 1, "rounded-circle", 3, "src"]], template: function TaskboardNGRXComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskboardNGRXComponent_Template_button_click_4_listener() { return ctx.addTask(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Marketing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskboardNGRXComponent_div_22_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "UI Designing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TaskboardNGRXComponent_div_30_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Developing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TaskboardNGRXComponent_div_38_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Management");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TaskboardNGRXComponent_div_46_Template, 17, 12, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.marketingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.marketingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.uiDesigningTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.uiDesigningTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.developingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.developingTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dragula", "task-group")("dragulaModel", ctx.managementTasks);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.managementTasks);
        } }, directives: [ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n    display: table-cell;\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 25%;\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\n   * you're better off giving the draggable elements a unique class and styling that directly!\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n\n.taskboard-app-input i.ft.ft-plus-circle {\n  position: relative;\n  top: 2px;\n}\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title {\n  position: absolute;\n  left: 363px;\n  font-size: 1.2rem;\n  top: 7px;\n}\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg {\n  position: absolute;\n  left: 573px;\n  font-size: 1.2rem;\n  top: 7px;\n}\n\n@media (max-width: 992px) {\n  .taskboard-app-input i.ft.ft-plus-circle {\n    padding: 0.25rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkLW5ncngvdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUEseUNBQUE7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7O0tBSUs7O0FBQ0w7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztJQUdJOztBQUNKOztFQUtFLG9DQUFvQztBQUZ0Qzs7QUFLQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBRVosb0JBQW9CO0FBRnRCOztBQUtBO0VBQ0UsZ0JBQWdCO0VBRWhCLHdCQUF3QjtBQUYxQjs7QUFLQTtFQUNFLHlCQUF5QjtBQUYzQjs7QUFLQTtFQUNFLDBDQUEwQztBQUY1Qzs7QUFLQTs7RUFFRSxlQUFlO0FBRmpCOztBQUtBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsWUFBWTtBQUZkOztBQUtBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7QUFGcEI7O0FBS0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFGbkI7O0FBS0E7RUFFSSxrQkFBa0I7RUFDbEIsUUFBUTtBQUhaOztBQUFBO0VBT00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUTtBQUhkOztBQVBBO0VBY00sa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsUUFBUTtBQUhkOztBQVFBO0VBQ0U7SUFFSSxnQkFBZ0I7RUFOcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdoLWZvcmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4uZHJhZ2Ryb3Atd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB3aWR0aDogMjUlO1xuICB9ICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKlxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxuICAgKiB5b3UncmUgYmV0dGVyIG9mZiBnaXZpbmcgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhIHVuaXF1ZSBjbGFzcyBhbmQgc3R5bGluZyB0aGF0IGRpcmVjdGx5IVxuICAgKi9cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYsXG4uZ3UtbWlycm9yIHtcbiAgLy8gbWFyZ2luOiAxMHB4O1xuICAvLyBwYWRkaW5nOiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG59XG5cbi5ndS1taXJyb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGFjay1qb2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IHtcbiAgaS5mdC5mdC1wbHVzLWNpcmNsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtcG9zaXRpb24uY29udHJvbC1wb3NpdGlvbi1yaWdodCB7XG4gICAgLmdhbGxlcnktaWNvbi10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAzNjNweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgdG9wOiA3cHg7XG4gICAgfVxuXG4gICAgLmdhbGxlcnktaWNvbi1tc2cge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTczcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHRvcDogN3B4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRhc2tib2FyZC1hcHAtaW5wdXQge1xuICAgIGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });
    return TaskboardNGRXComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskboardNGRXComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ngrx-taskboard',
                templateUrl: './taskboard-ngrx.component.html',
                styleUrls: ['./taskboard-ngrx.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: ng2_dragula__WEBPACK_IMPORTED_MODULE_4__["DragulaService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }]; }, { titleInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['todoTitle']
        }], messageInputRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['todoMessage']
        }] }); })();


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm2015/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");










var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskboardNGRXModule });
    TaskboardNGRXModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskboardNGRXModule_Factory(t) { return new (t || TaskboardNGRXModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_4__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"].forRoot(),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__["taskReducer"])
            ]] });
    return TaskboardNGRXModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TaskboardNGRXModule, { declarations: [_taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_4__["TaskboardNGRXRoutingModule"], ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskboardNGRXModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_4__["TaskboardNGRXRoutingModule"],
                    ng2_dragula__WEBPACK_IMPORTED_MODULE_3__["DragulaModule"].forRoot(),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_6__["taskReducer"])
                ],
                declarations: [
                    _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_5__["TaskboardNGRXComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module.js.map