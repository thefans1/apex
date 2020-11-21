(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-ngrx-chat-ngrx-module"],{

/***/ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatNGRXRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXRoutingModule", function() { return ChatNGRXRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");





var routes = [
    {
        path: '',
        component: _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
var ChatNGRXRoutingModule = /** @class */ (function () {
    function ChatNGRXRoutingModule() {
    }
    ChatNGRXRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatNGRXRoutingModule });
    ChatNGRXRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatNGRXRoutingModule_Factory(t) { return new (t || ChatNGRXRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ChatNGRXRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatNGRXRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatNGRXRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();
var routedComponents = [_chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");
/* harmony import */ var app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/config.service */ "./src/app/shared/services/config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/pipes/search.pipe */ "./src/app/shared/pipes/search.pipe.ts");















function ChatComponent_a_17_i_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 51);
} }
function ChatComponent_a_17_i_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 52);
} }
function ChatComponent_a_17_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.unreadMessageCount);
} }
var _c0 = function (a0) { return { "selected-chat": a0 }; };
var _c1 = function (a0) { return { "align-items-center": a0 }; };
function ChatComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); var user_r6 = ctx.$implicit; var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.viewChat(user_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ChatComponent_a_17_i_16_Template, 1, 0, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ChatComponent_a_17_i_17_Template, 1, 0, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ChatComponent_a_17_span_18_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var user_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, !user_r6.isActiveChat));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r6.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("avatar-status-", user_r6.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", user_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.lastChatTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r6.lastChatMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r6.isPinnedUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r6.isMuted);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r6.unreadMessageCount != "");
} }
function ChatComponent_div_41_div_5_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r17);
} }
function ChatComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_div_41_div_5_p_1_Template, 2, 1, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r13.messageType === "text");
} }
function ChatComponent_div_41_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](chat_r13.time);
} }
function ChatComponent_div_41_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var message_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r23);
} }
function ChatComponent_div_41_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatComponent_div_41_div_7_div_5_Template, 3, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.messages);
} }
var _c2 = function (a0) { return { "chat-left": a0 }; };
function ChatComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatComponent_div_41_div_5_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ChatComponent_div_41_p_6_Template, 3, 1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatComponent_div_41_div_7_Template, 6, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var chat_r13 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, chat_r13.isReceived));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", chat_r13.isReceived ? ctx_r4.activeChatUserImg : ctx_r4.loggedInUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", chat_r13.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", chat_r13.time != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.messages.length > 0);
} }
var _c3 = function (a0) { return { show: a0 }; };
var ChatComponent = /** @class */ (function () {
    function ChatComponent(elRef, renderer, document, configService, cdr, store) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.document = document;
        this.configService = configService;
        this.cdr = cdr;
        this.store = store;
        this.chats = [];
        this.usersChat = [];
        this.newMessage = "";
        this.searchQuery = '';
        this.placement = "bottom-right";
        this.isContentOverlay = false;
        this.config = {};
        this.messages = new Array();
        this.item = 0;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.config = this.configService.templateConf;
        this.subscription = this.store
            .select('chat')
            .subscribe(function (data) {
            _this.usersChat = data.usersChat;
            _this.activeChat = data.usersChat.find(function (_) { return _.isActiveChat; });
            _this.chats = _this.activeChat ? _this.activeChat.chats : [];
            _this.activeChatUser = _this.activeChat ? _this.activeChat.name : '';
            _this.activeChatUserImg = _this.activeChat ? _this.activeChat.avatar : '';
            _this.loggedInUserImg = "assets/img/portrait/small/avatar-s-1.png";
        });
        this.renderer.addClass(this.document.body, "chat-application");
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
        this.renderer.removeClass(this.document.body, "chat-application");
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.isContentOverlay = true;
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.isContentOverlay = false;
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        if (this.newMessage != "") {
            var newChat = new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["UsersChat"](this.activeChat.userId, this.activeChat.index, this.activeChat.name, this.activeChat.avatar, this.activeChat.lastChatTime, this.activeChat.status, this.activeChat.isPinnedUser, this.activeChat.isMuted, this.activeChat.unreadMessageCount, this.activeChat.isActiveChat, this.activeChat.lastChatMessage, this.activeChat.chats.concat({
                isReceived: false,
                time: "",
                messages: [this.newMessage],
                messageType: 'text'
            }));
            this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat"]({
                index: newChat.index,
                newChat: newChat
            }));
        }
        this.newMessage = "";
    };
    ChatComponent.prototype.viewChat = function (chat) {
        var _this = this;
        var allChats = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(this.usersChat);
        var deactivateChat;
        allChats.forEach(function (thisChat) {
            if (thisChat.userId === _this.activeChat.userId) {
                deactivateChat = new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["UsersChat"](thisChat.userId, thisChat.index, thisChat.name, thisChat.avatar, thisChat.lastChatTime, thisChat.status, thisChat.isPinnedUser, thisChat.isMuted, thisChat.unreadMessageCount, false, thisChat.lastChatMessage, thisChat.chats);
            }
        });
        var activeNewChat = new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["UsersChat"](chat.userId, chat.index, chat.name, chat.avatar, chat.lastChatTime, chat.status, chat.isPinnedUser, chat.isMuted, chat.unreadMessageCount, true, chat.lastChatMessage, chat.chats);
        [new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat"]({
                index: deactivateChat.index,
                newChat: deactivateChat
            }), new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat"]({
                index: activeNewChat.index,
                newChat: activeNewChat
            })].forEach(function (action) { return _this.store.dispatch(action); });
        this.isContentOverlay = false;
    };
    ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-ngrx-chat"]], decls: 50, vars: 15, consts: [[1, "chat-application", "overflow-hidden"], [1, "app-content-overlay", 3, "ngClass", "click"], ["contentOverlay", ""], [1, "chat-sidebar", "d-md-block", 3, "perfectScrollbar"], ["chatSidebar", ""], [1, "sidebar-close-icon", "d-md-none", 3, "click"], [1, "ft-x"], [1, "chat-sidebar-content"], [1, "chat-fixed-search", "py-2", "px-3", "my-1"], ["action", "javascript:;"], [1, "position-relative", "has-icon-left"], ["placeholder", "Search users", "id", "timesheetinput1", "name", "employeename", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control-position"], [1, "ft-user"], [1, "m-0"], ["id", "users-list", 1, "list-group"], [1, "users-list-padding", "position-relative"], ["class", "list-group-item ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "chat-name", "p-2"], [1, "media", "p-1", "align-items-center"], [1, "chat-app-sidebar-toggle", "ft-menu", "font-medium-4", "mr-3", "d-block", "d-md-none", 3, "click"], [1, "media-body"], ["width", "37", "alt", "avatar", 1, "avatar", "mr-1", 3, "src"], [1, "position-relative", "float-right"], ["ngbDropdown", "", "display", "dynamic", 1, "d-inline-block", 3, "placement"], ["id", "chatOptions", "ngbDropdownToggle", "", 1, "ft-more-vertical-", "mt-1", "dropdown-toggle"], ["ngbDropdownMenu", "", "aria-labelledby", "chatOptions"], ["href", "javascript:;", 1, "dropdown-item"], [1, "chat-app-window", "position-relative", 3, "perfectScrollbar", "scrollTop"], ["scrollMe", ""], [1, "chats"], ["class", "chat", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-app-form", "px-3", "py-2"], [1, "d-flex", "align-items-center"], ["type", "text", "name", "iconLeft4", "id", "iconLeft4", "placeholder", "Type your message here", 1, "form-control", "chat-message-send", "mr-2", 3, "ngModel", "keydown.enter", "ngModelChange"], ["it", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "d-lg-flex", "align-items-center", 3, "click"], [1, "ft-send"], [1, "d-none", "d-lg-block", "ml-1"], [1, "list-group-item", 3, "ngClass", "click"], [1, "media", "py-1", 3, "ngClass"], [1, "avatar", "avatar-md", "mr-2"], ["alt", "Avatar", 3, "src"], [1, "list-group-item-heading", "mb-1"], [1, "font-small-2", "float-right", "chat-time"], [1, "list-group-item-text", "chat-user-list-text", "m-0"], [1, "ft-check", "primary", "font-small-2", "mr-1"], [1, "float-right", "primary"], ["class", "font-medium-1 icon-pin", 4, "ngIf"], ["class", "font-medium-1 icon-volume-off mr-1", 4, "ngIf"], ["class", "badge badge-pill bg-light-primary badge-round", 4, "ngIf"], [1, "font-medium-1", "icon-pin"], [1, "font-medium-1", "icon-volume-off", "mr-1"], [1, "badge", "badge-pill", "bg-light-primary", "badge-round"], [1, "chat", 3, "ngClass"], [1, "chat-avatar"], ["data-toggle", "tooltip", "data-placement", "[activeChatUserImg]", "title", "", "data-original-title", "", 1, "avatar", "avatar-md"], ["alt", "avatar", 3, "src"], [1, "chat-body"], ["class", "chat-content", 4, "ngFor", "ngForOf"], ["class", "time", 4, "ngIf"], ["class", "chat", 4, "ngIf"], [1, "chat-content"], [4, "ngIf"], [1, "time"], [1, "badge", "badge-secondary", "mb-1"], [1, "chat"], ["data-toggle", "tooltip", "data-placement", "right", "title", "", "data-original-title", "", 1, "avatar"], ["src", "assets/img/portrait/small/avatar-s-1.png", "alt", "avatar"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_1_listener() { return ctx.onContentOverlay(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_5_listener() { return ctx.isContentOverlay = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ChatComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchQuery = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "hr", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ChatComponent_a_17_Template, 19, 16, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "search");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_span_click_21_listener() { return ctx.onSidebarToggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mute Notification");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Clear Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Add Shortcut");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "section", 28, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ChatComponent_div_41_Template, 8, 7, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "section", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 34, 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_input_keydown_enter_44_listener($event) { ctx.onAddMessage(); return $event.preventDefault(); })("ngModelChange", function ChatComponent_Template_input_ngModelChange_44_listener($event) { return ctx.newMessage = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_46_listener() { return ctx.onAddMessage(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Send");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c3, ctx.isContentOverlay));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](18, 9, ctx.usersChat, "name", ctx.searchQuery));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.activeChatUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.activeChatUser);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placement", ctx.placement);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scrollTop", _r3.scrollHeight);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.chats);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.newMessage);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtbmdyeC9jaGF0LW5ncnguY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
    return ChatComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-ngrx-chat',
                templateUrl: './chat-ngrx.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./chat-ngrx.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"]]
            }] }, { type: app_shared_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.module.ts ***!
  \***********************************************/
/*! exports provided: ChatNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXModule", function() { return ChatNGRXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-ngrx-routing.module */ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts");
/* harmony import */ var app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/pipes/pipe.module */ "./src/app/shared/pipes/pipe.module.ts");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");
/* harmony import */ var _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chat-ngrx/store/chat.reducers */ "./src/app/chat-ngrx/store/chat.reducers.ts");












var ChatNGRXModule = /** @class */ (function () {
    function ChatNGRXModule() {
    }
    ChatNGRXModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatNGRXModule });
    ChatNGRXModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatNGRXModule_Factory(t) { return new (t || ChatNGRXModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatNGRXRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('chat', _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_9__["chatReducer"]),
            ]] });
    return ChatNGRXModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatNGRXModule, { declarations: [_chat_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatNGRXRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
        app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatNGRXModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__["ChatNGRXRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
                    app_shared_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('chat', _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_9__["chatReducer"]),
                ],
                declarations: [
                    _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=chat-ngrx-chat-ngrx-module.js.map