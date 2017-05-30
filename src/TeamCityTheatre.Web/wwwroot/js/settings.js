webpackJsonp([1],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Settings = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null, "Hello world")); };
//# sourceMappingURL=settings.components.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export selectView */
/* unused harmony export selectProject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_defer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);






var allViews = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
    .defer(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/views"); })
    .startWith(null);
var allProjects = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
    .defer(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/projects"); })
    .startWith(null);
var selectedViewsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject
    .startWith(null);
var selectedProjectsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var selectProject = function (project) { return selectedProjectsSubject.next(project); };
var selectedProjects = selectedProjectsSubject
    .switchMap(function (p) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/projects/" + p.id); }).startWith(null);
var state = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest(allViews, allProjects, selectedViews, selectedProjects, function (vs, ps, sv, sp) { return ({
    views: vs,
    projects: ps,
    selectedView: sv,
    selectedProject: sp
}); });
//# sourceMappingURL=settings.core.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_components__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_core__ = __webpack_require__(45);





var root = document.getElementById("root");
__WEBPACK_IMPORTED_MODULE_4__settings_core__["a" /* state */].subscribe(function (s) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__settings_components__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, s)), root); });
//# sourceMappingURL=settings.js.map

/***/ })

},[47]);