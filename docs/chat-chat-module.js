(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");





var routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
    ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ChatRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");












function ChatComponent_a_17_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function ChatComponent_a_17_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 52);
} }
function ChatComponent_a_17_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.unreadMessageCount);
} }
var _c0 = function (a0) { return { "selected-chat": a0 }; };
var _c1 = function (a0) { return { "align-items-center": a0 }; };
function ChatComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var user_r6 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.viewChat(user_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatComponent_a_17_i_16_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_a_17_i_17_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ChatComponent_a_17_span_18_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c1, !user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r6.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("avatar-status-", user_r6.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.lastChatTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.lastChatMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.isPinnedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.unreadMessageCount != "");
} }
function ChatComponent_div_41_div_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r17);
} }
function ChatComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_41_div_5_p_1_Template, 2, 1, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r13.messageType === "text");
} }
function ChatComponent_div_41_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](chat_r13.time);
} }
function ChatComponent_div_41_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r23);
} }
function ChatComponent_div_41_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_41_div_7_div_5_Template, 3, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.messages);
} }
var _c2 = function (a0) { return { "chat-left": a0 }; };
function ChatComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_41_div_5_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_div_41_p_6_Template, 3, 1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatComponent_div_41_div_7_Template, 6, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, chat_r13.isReceived));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", chat_r13.isReceived ? ctx_r4.activeChatUserImg : ctx_r4.loggedInUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", chat_r13.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chat_r13.time != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.messages.length > 0);
} }
var _c3 = function (a0) { return { show: a0 }; };
var ChatComponent = /** @class */ (function () {
    function ChatComponent(elRef, renderer, document, configService, cdr, chatService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.chatService = chatService;
        this.chats = [];
        this.usersChat = [];
        this.newMessage = "";
        this.searchQuery = '';
        this.placement = "bottom-right";
        this.isContentOverlay = false;
        this.config = {};
        this.messages = new Array();
        this.item = 0;
        this.config = this.configService.templateConf;
        this.usersChat = chatService.usersChat;
        this.activeChat = chatService.usersChat.find(function (_) { return _.isActiveChat; });
        this.chats = this.activeChat.chats;
        this.activeChatUser = this.activeChat.name;
        this.activeChatUserImg = this.activeChat.avatar;
        this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png";
        this.renderer.addClass(this.document.body, "chat-application");
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "chat-application");
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        if (this.newMessage != "") {
            this.activeChat.chats.push({
                isReceived: false,
                time: "",
                messages: [this.newMessage],
                messageType: 'text'
            });
            this.newMessage = "";
        }
    };
    ChatComponent.prototype.viewChat = function (chat) {
        var _this = this;
        this.usersChat.forEach(function (chat) {
            if (chat.userId === _this.activeChat.userId) {
                chat.isActiveChat = false;
            }
        });
        this.activeChat = chat;
        this.activeChat.isActiveChat = true;
        this.chats = this.activeChat.chats;
        this.activeChatUser = this.activeChat.name;
        this.activeChatUserImg = this.activeChat.avatar;
        this.isContentOverlay = false;
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"])); };
    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])], decls: 50, vars: 15, consts: [[1, "chat-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "chat-sidebar", "d-md-block", 3, "perfectScrollbar"], ["chatSidebar", ""], [1, "sidebar-close-icon", "d-md-none", 3, "click"], [1, "ft-x"], [1, "chat-sidebar-content"], [1, "chat-fixed-search", "py-2", "px-3", "my-1"], ["action", "javascript:;"], [1, "position-relative", "has-icon-left"], ["placeholder", "Search users", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control-position"], [1, "ft-user"], [1, "m-0"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], ["class", "list-group-item ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "chat-name", "p-2"], [1, "media", "p-1", "align-items-center"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [1, "media-body"], ["width", "37", "alt", "avatar", 1, "avatar", "mr-1", 3, "src"], [1, "position-relative", "float-right"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "chatOptions", "ngbDropdownToggle", "", 1, "ft-more-vertical-", "mt-1", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "chatOptions"], ["href", "javascript:;", 1, "dropdown-item"], [1, "chat-app-window", "position-relative", 3, "perfectScrollbar", "scrollTop"], ["scrollMe", ""], [1, "chats"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-app-form", "px-3", "py-2"], [1, "d-flex", "align-items-center"], ["type", "text", "name", "iconLeft4", "id", "iconLeft4", "placeholder", "Type your message here", 1, "form-control", "chat-message-send", "mr-2", 3, "ngModel", "keydown.enter", "ngModelChange"], ["it", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "d-lg-flex", "align-items-center", 3, "click"], [1, "ft-send"], [1, "d-none", "d-lg-block", "ml-1"], [1, "list-group-item", 3, "ngClass", "click"], [1, "media", "chat-list-text", "py-1", 3, "ngClass"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "list-group-item-heading", "mb-1"], [1, "chat-list-text", "font-small-2", "float-right", "chat-time"], [1, "list-group-item-text", "chat-user-list-text", "m-0"], [1, "ft-check", "primary", "font-small-2", "mr-1"], [1, "float-right", "primary"], ["class", "font-medium-1 icon-pin", 4, "ngIf"], ["class", "font-medium-1 icon-volume-off mr-1", 4, "ngIf"], ["class", "badge badge-pill bg-light-primary badge-round", 4, "ngIf"], [1, "font-medium-1", "icon-pin"], [1, "font-medium-1", "icon-volume-off", "mr-1"], [1, "badge", "badge-pill", "bg-light-primary", "badge-round"], [1, "chat", 3, "ngClass"], [1, "chat-avatar"], ["data-toggle", "tooltip", "data-placement", "[activeChatUserImg]", "title", "", "data-original-title", "", 1, "avatar", "avatar-md"], ["alt", "avatar", 3, "src"], [1, "chat-body"], ["class", "chat-content", 4, "ngFor", "ngForOf"], ["class", "time", 4, "ngIf"], ["class", "chat", 4, "ngIf"], [1, "chat-content"], [4, "ngIf"], [1, "time"], [1, "badge", "badge-secondary", "mb-1"], [1, "chat"], ["data-toggle", "tooltip", "data-placement", "right", "title", "", "data-original-title", "", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-1.png", "alt", "avatar"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_5_listener() { return ctx.isContentOverlay = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ChatComponent_a_17_Template, 19, 16, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_21_listener() { return ctx.onSidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "View Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mute Notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Clear Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Add Shortcut");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 28, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ChatComponent_div_41_Template, 8, 7, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_input_keydown_enter_44_listener($event) { ctx.onAddMessage(); return $event.preventDefault(); })("ngModelChange", function ChatComponent_Template_input_ngModelChange_44_listener($event) { return ctx.newMessage = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_46_listener() { return ctx.onAddMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 9, ctx.usersChat, "name", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.activeChatUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeChatUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", ctx.placement);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chats);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
    return ChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./chat.component.scss'],
                providers: [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chat/chat.model.ts":
/*!************************************!*\
  !*** ./src/app/chat/chat.model.ts ***!
  \************************************/
/*! exports provided: UsersChat, Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersChat", function() { return UsersChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var UsersChat = /** @class */ (function () {
    function UsersChat(userId, name, avatar, lastChatTime, status, isPinnedUser, isMuted, unreadMessageCount, isActiveChat, lastChatMessage, chats) {
        this.userId = userId;
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

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/chat/chat-routing.module.ts");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");









var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
    ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]
            ]] });
    return ChatModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["PipeModule"]
                ],
                declarations: [
                    _chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.model */ "./src/app/chat/chat.model.ts");



var ChatService = /** @class */ (function () {
    function ChatService() {
        this.chat1 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat2 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat3 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat4 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat5 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat6 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.chat7 = [
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'How can we help? We are here for you!'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'Hey John, I am looking for the best admin template.',
                'Could you please help me to find it out?',
                'It should be angular 9 bootstrap compatible.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '30 minutes ago', [
                'Absolutely!',
                'Apex admin is the responsive angular 9 bootstrap admin template.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '1 hour ago', [
                'Looks clean and fresh UI.',
                'It is perfect for my next project.',
                'How can I purchase it?'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](false, '', [
                'Thanks, from ThemeForest.'
            ], 'text'),
            new _chat_model__WEBPACK_IMPORTED_MODULE_1__["Chat"](true, '', [
                'I will purchase it for sure.',
                'Thanks.'
            ], 'text'),
        ];
        this.usersChat = [
            {
                userId: "1",
                name: "Elizabeth Elliott",
                avatar: "assets/img/portrait/small/avatar-s-2.png",
                lastChatTime: "9:04 PM",
                status: "online",
                isPinnedUser: true,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Okay",
                chats: this.chat1
            },
            {
                userId: "2",
                name: "Lucas Howell",
                avatar: "assets/img/portrait/small/avatar-s-7.png",
                lastChatTime: "4:14 AM",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "3",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat2
            },
            {
                userId: "3",
                name: "Sarah Woods",
                avatar: "assets/img/portrait/small/avatar-s-8.png",
                lastChatTime: "2:14 AM",
                status: "away",
                isPinnedUser: false,
                isMuted: true,
                unreadMessageCount: "12",
                isActiveChat: true,
                lastChatMessage: "Hello John!",
                chats: this.chat3
            },
            {
                userId: "4",
                name: "Layla Allen",
                avatar: "assets/img/portrait/small/avatar-s-20.png",
                lastChatTime: "Yesterday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "I love you",
                chats: this.chat4
            },
            {
                userId: "5",
                name: "Bruce Reid",
                avatar: "assets/img/portrait/small/avatar-s-5.png",
                lastChatTime: "Yesterday",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Will connect you",
                chats: this.chat5
            },
            {
                userId: "6",
                name: "Krish Candy",
                avatar: "assets/img/portrait/small/avatar-s-9.png",
                lastChatTime: "Wednesday",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "4",
                isActiveChat: false,
                lastChatMessage: "Thank you",
                chats: this.chat6
            },
            {
                userId: "7",
                name: "Kelly Reyes",
                avatar: "assets/img/portrait/small/avatar-s-4.png",
                lastChatTime: "Thrusday",
                status: "busy",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "😎🙂😃",
                chats: this.chat7
            },
            {
                userId: "8",
                name: "Vincent Nelson",
                avatar: "assets/img/portrait/small/avatar-s-14.png",
                lastChatTime: "Friday",
                status: "online",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "Who you are?",
                chats: this.chat1
            },
            {
                userId: "9",
                name: "William Wright",
                avatar: "assets/img/portrait/small/avatar-s-23.png",
                lastChatTime: "1 week ago",
                status: "offline",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "6",
                isActiveChat: false,
                lastChatMessage: "How was the day?",
                chats: this.chat3
            },
            {
                userId: "10",
                name: "Novah Miller",
                avatar: "assets/img/portrait/small/avatar-s-26.png",
                lastChatTime: "1 month ago",
                status: "away",
                isPinnedUser: false,
                isMuted: false,
                unreadMessageCount: "",
                isActiveChat: false,
                lastChatMessage: "There you are!",
                chats: this.chat5
            }
        ];
    }
    ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(); };
    ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac });
    return ChatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map