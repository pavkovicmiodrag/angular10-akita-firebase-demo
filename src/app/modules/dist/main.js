(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		"default~modules-dashboard-dashboard-module~modules-user-user-module",
		"modules-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/core/auth.guard */ "./src/app/modules/core/auth.guard.ts");





const routes = [
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule'
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-module */[__webpack_require__.e("default~modules-dashboard-dashboard-module~modules-user-user-module"), __webpack_require__.e("modules-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
        data: {
            breadcrumb: 'Dashboard'
        },
        canLoad: [_modules_core_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    },
    // {
    //   path: 'diagnoses',
    //   loadChildren: () => import('./modules/diagnose/diagnose.module').then(m => m.DiagnoseModule),
    //   canLoad: [AuthGuard]
    // },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { path: 'patients', loadChildren: () => __webpack_require__.e(/*! import() | modules-patients-patients-module */ "modules-patients-patients-module").then(__webpack_require__.bind(null, /*! ./modules/patients/patients.module */ "./src/app/modules/patients/patients.module.ts")).then(m => m.PatientsModule) },
    // { path: 'diagnoses', loadChildren: () => import('./modules/diagnoses/diagnoses.module').then(m => m.DiagnosesModule) },
    { path: 'users', loadChildren: () => Promise.all(/*! import() | modules-user-user-module */[__webpack_require__.e("default~modules-dashboard-dashboard-module~modules-user-user-module"), __webpack_require__.e("modules-user-user-module")]).then(__webpack_require__.bind(null, /*! ./modules/user/user.module */ "./src/app/modules/user/user.module.ts")).then(m => m.UserModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                // providers: [AuthGuard],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _modules_core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/core/sidenav.service */ "./src/app/modules/core/sidenav.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _modules_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/layout/header/header.component */ "./src/app/modules/layout/header/header.component.ts");
/* harmony import */ var _modules_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/layout/footer/footer.component */ "./src/app/modules/layout/footer/footer.component.ts");








const _c0 = ["sidenav"];
class AppComponent {
    constructor(sidenavService) {
        this.sidenavService = sidenavService;
        this.title = 'dashboard8';
    }
    ngOnInit() {
        console.log('ngOnInit', this.sidenav);
        this.sidenavService.setSidenav(this.sidenav);
    }
    toggleRightSidenav() {
        this.sidenavService.open();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_modules_core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 17, vars: 3, consts: [["fullscreen", "", 1, "all-wrap"], ["sidenav", ""], ["mat-list-item", "", 3, "routerLink"], ["mat-list-item", "", "href", "", "mat-list-item", "", 3, "click"], [1, "page-wrap"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Patients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Doctors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Diagnoses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { return ctx.toggleRightSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/diagnoses");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _modules_layout_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _modules_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.flex-sidenav-container[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 330px !important;\n  flex-direction: row;\n  height: 100%;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  \n  align-items: stretch;\n  \n  align-content: stretch;\n  \n  background: rgba(0, 0, 0, 0.5);\n}\n\n.flexbox-item-grow[_ngcontent-%COMP%] {\n  flex: 1;\n  \n}\n\n.flexbox-item.content[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.1);\n}\n\n.fill-area[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  \n  align-items: stretch;\n  \n  align-content: stretch;\n  \n}\n\n.fill-area-content[_ngcontent-%COMP%] {\n  border: 1px solid #000000;\n  \n  overflow: auto;\n}\n\n\n\n.all-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.page-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  flex: 1;\n  display: block;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background: #efefef;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUE2Qiw2QkFBQTtFQUM3QixvQkFBQTtFQUFzQiw4QkFBQTtFQUN0QixzQkFBQTtFQUF3Qiw4QkFBQTtFQUN4Qiw4QkFBQTtBQU1KOztBQUpFO0VBQ0UsT0FBQTtFQUFTLDRCQUFBO0FBUWI7O0FBTEU7RUFDRSxnQ0FBQTtBQVFKOztBQUxFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFBNkIsNkJBQUE7RUFDN0Isb0JBQUE7RUFBc0IsOEJBQUE7RUFDdEIsc0JBQUE7RUFBd0IsOEJBQUE7QUFXNUI7O0FBVEU7RUFFRSx5QkFBQTtFQUNBLGdHQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRFOztFQUFBOztBQUdBO0VBQ0UsaUJBQUE7QUFZSjs7QUFURTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVEU7RUFDRSxPQUFBO0FBWUo7O0FBUkU7O0VBQUE7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFXSjs7QUFWSTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FBWU47O0FBVEU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFZSiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gIH1cclxuICAuZmxleC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiAzMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBhbGlnbiBpdGVtcyBpbiBNYWluIEF4aXMgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBhbGlnbiBpdGVtcyBpbiBDcm9zcyBBeGlzICovXHJcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAvKiBFeHRyYSBzcGFjZSBpbiBDcm9zcyBBeGlzICovXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICB9XHJcbiAgLmZsZXhib3gtaXRlbS1ncm93IHtcclxuICAgIGZsZXg6IDE7IC8qIHNhbWUgYXMgZmxleDogMSAxIGF1dG87ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4Ym94LWl0ZW0uY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDI1NSwgLjEpO1xyXG4gIH1cclxuICBcclxuICAuZmlsbC1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBhbGlnbiBpdGVtcyBpbiBNYWluIEF4aXMgKi9cclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoOyAvKiBhbGlnbiBpdGVtcyBpbiBDcm9zcyBBeGlzICovXHJcbiAgICBhbGlnbi1jb250ZW50OiBzdHJldGNoOyAvKiBFeHRyYSBzcGFjZSBpbiBDcm9zcyBBeGlzICovXHJcbiAgfVxyXG4gIC5maWxsLWFyZWEtY29udGVudCB7XHJcbiAgICAvL2JhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIC8qIE5lZWRlZCBmb3Igd2hlbiB0aGUgYXJlYSBnZXRzIHNxdWlzaGVkIHRvbyBmYXIgYW5kIHRoZXJlIGlzIGNvbnRlbnQgdGhhdCBjYW4ndCBiZSBkaXNwbGF5ZWQgKi9cclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAvKlxyXG4gICAqIEFjdHVhbCBTdGlja3kgRm9vdGVyIFN0eWxlc1xyXG4gICAqL1xyXG4gIC5hbGwtd3JhcCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLnBhZ2Utd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKlxyXG4gICAqIE1ha2UgdGhlIENvbXBvbmVudCBpbmplY3RlZCBieSBSb3V0ZXIgT3V0bGV0IGZ1bGwgaGVpZ2h0OlxyXG4gICAqL1xyXG4gIG1haW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICA+ICo6bm90KHJvdXRlci1vdXRsZXQpIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZvb3RlcntcclxuICAgIGJhY2tncm91bmQ6I2VmZWZlZjtcclxuICAgIHBhZGRpbmc6MTVweFxyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _modules_core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sidenav', { static: true }]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_core_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/core/auth.guard */ "./src/app/modules/core/auth.guard.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_modules_core_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _modules_layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                ],
                providers: [_modules_core_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/core/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/modules/core/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/core/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canLoad() {
        console.log("this.auth.authenticated", this.auth.authenticated);
        if (!this.auth.authenticated) {
            this.router.navigate(['/user']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/core/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");






class AuthService {
    constructor(afAuth) {
        this.afAuth = afAuth;
        this.authErrorMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isLoading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.authState = null;
        this.isLoggedIn().subscribe(user => (this.authState = user));
    }
    get authenticated() {
        return this.authState !== null;
    }
    get id() {
        return this.authenticated ? this.authState.uid : '';
    }
    isLoggedIn() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            console.log('user ', user);
            if (user) {
                const { email, uid } = user;
                this.user$.next({ email, uid });
                return { email, uid };
            }
            return null;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.isLoading$.next(false)));
    }
    getCurrentUserUid() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield (this.afAuth.currentUser)).uid;
        });
    }
    signUpFirebase({ email, password }) {
        this.isLoading$.next(true);
        this.handleErrorOrSuccess(() => {
            return this.afAuth.createUserWithEmailAndPassword(email, password);
        });
    }
    loginFirebase({ email, password }) {
        this.isLoading$.next(true);
        this.handleErrorOrSuccess(() => {
            return this.afAuth.signInWithEmailAndPassword(email, password);
        });
    }
    logOutFirebase() {
        this.isLoading$.next(true);
        return this.afAuth.signOut();
    }
    handleErrorOrSuccess(cb) {
        cb()
            .then(data => this.authenticateUser(data))
            .catch(e => this.handleSignUpLoginError(e));
    }
    authenticateUser(UserCredential) {
        const { user: { email, uid } } = UserCredential;
        this.isLoading$.next(false);
    }
    handleSignUpLoginError(error) {
        this.isLoading$.next(false);
        const errorMessage = error.message;
        this.authErrorMessages$.next(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/core/sidenav.service.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/core/sidenav.service.ts ***!
  \*************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SidenavService {
    setSidenav(sidenav) {
        this.sidenav = sidenav;
        console.log('set sidenav', sidenav);
    }
    open() {
        return this.sidenav.open();
    }
    close() {
        return this.sidenav.close();
    }
    toggle() {
        this.sidenav.toggle();
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidenavService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/layout/footer/footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/layout/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




const _c0 = function () { return ["/diagnoses/add"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 2, consts: [[1, "copyright"], [1, "adddiagnose"], ["mat-fab", "", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright Apress - Miodrag Pavkovic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "add circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["footer[_ngcontent-%COMP%] {\n  background: #3f51b5;\n  color: #fff;\n  display: flex;\n  box-sizing: border-box;\n  padding: 1rem;\n  flex-direction: column;\n  align-items: center;\n  white-space: nowrap;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.adddiagnose[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 1rem;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFHRiIsImZpbGUiOiJsYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgYmFja2dyb3VuZDogIzNmNTFiNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4uY29weXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFkZGRpYWdub3NlIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAycmVtO1xyXG4gIHJpZ2h0OiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/layout/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/layout/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sidenav.service */ "./src/app/modules/core/sidenav.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class HeaderComponent {
    constructor(sidenav) {
        this.sidenav = sidenav;
        console.log('sidenav', sidenav);
    }
    ngOnInit() { }
    openRightSidenav() {
        console.log('this.sidenav', this.sidenav);
        this.sidenav.open();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 3, consts: [["role", "banner"], ["color", "primary"], ["mat-icon-button", ""], [3, "click"], [1, "menu-spacer"], ["mat-button", "", 3, "routerLink"], ["color", "accent"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_4_listener() { return ctx.openRightSidenav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Smiletime Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Patients ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Doctors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Diagnoses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-toolbar-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/doctors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/diagnoses");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".space-between[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQUNGIiwiZmlsZSI6ImxheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLWJldHdlZW4ge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _core_sidenav_service__WEBPACK_IMPORTED_MODULE_1__["SidenavService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/layout/layout.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/layout/layout.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/modules/layout/footer/footer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








// import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
class LayoutModule {
}
LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutModule_Factory(t) { return new (t || LayoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            // BreadcrumbModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
        // BreadcrumbModule
    ], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
                    // BreadcrumbModule
                ],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const SHARED_MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    // DashboardMaterialModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
];
const SHARED_COMPONENTS = [];
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[...SHARED_MODULES], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // DashboardMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // DashboardMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // DashboardMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...SHARED_MODULES],
                declarations: [...SHARED_COMPONENTS],
                exports: [...SHARED_MODULES, ...SHARED_COMPONENTS]
            }]
    }], null, null); })();


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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBXuT37b7pXRw9B3LGaGaG0epKS3AH78VY",
        authDomain: "codecraft-smiletime.firebaseapp.com",
        databaseURL: "https://codecraft-smiletime.firebaseio.com",
        projectId: "codecraft-smiletime",
        storageBucket: "codecraft-smiletime.appspot.com",
        messagingSenderId: "370085906775",
        appId: "1:370085906775:web:fbf7ef737d14a106665612",
        measurementId: "G-GF6C95LRD1"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miodragpavkovic/development/smiletime/dashboard10/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map