(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-patients-patients-module"],{

/***/ "./src/app/modules/patients/patients-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/patients/patients-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _patients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients.component */ "./src/app/modules/patients/patients.component.ts");





const routes = [{ path: '', component: _patients_component__WEBPACK_IMPORTED_MODULE_2__["PatientsComponent"] }];
class PatientsRoutingModule {
}
PatientsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PatientsRoutingModule });
PatientsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PatientsRoutingModule_Factory(t) { return new (t || PatientsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PatientsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/patients/patients.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/patients/patients.component.ts ***!
  \********************************************************/
/*! exports provided: PatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function() { return PatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PatientsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PatientsComponent.ɵfac = function PatientsComponent_Factory(t) { return new (t || PatientsComponent)(); };
PatientsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientsComponent, selectors: [["app-patients"]], decls: 2, vars: 0, template: function PatientsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "patients works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50cy9wYXRpZW50cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patients',
                templateUrl: './patients.component.html',
                styleUrls: ['./patients.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/patients/patients.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/patients/patients.module.ts ***!
  \*****************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/modules/patients/patients-routing.module.ts");
/* harmony import */ var _patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patients.component */ "./src/app/modules/patients/patients.component.ts");





class PatientsModule {
}
PatientsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PatientsModule });
PatientsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PatientsModule_Factory(t) { return new (t || PatientsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__["PatientsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PatientsModule, { declarations: [_patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__["PatientsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_patients_component__WEBPACK_IMPORTED_MODULE_3__["PatientsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _patients_routing_module__WEBPACK_IMPORTED_MODULE_2__["PatientsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-patients-patients-module.js.map