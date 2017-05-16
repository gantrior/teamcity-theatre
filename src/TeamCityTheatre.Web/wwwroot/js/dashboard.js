webpackJsonp([0],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* unused harmony export Views */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard_Core__ = __webpack_require__(87);


var Dashboard = function (props) {
    if (props.views === null)
        return null;
    if (props.selectedView === null)
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Views, { views: props.views });
    return null;
};
var Views = function (props) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "views" }, props.views.map(function (view) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "btn btn-primary view", id: view.id, onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Dashboard_Core__["b" /* selectView */])(view); } },
    view.name,
    " ",
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "badge" },
        view.tiles.length,
        " tiles"))); }))); };
//# sourceMappingURL=Dashboard.Components.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dashboard_Components__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dashboard_Core__ = __webpack_require__(87);





var root = document.getElementById("root");
__WEBPACK_IMPORTED_MODULE_4__Dashboard_Core__["a" /* state */].subscribe(function (s) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__Dashboard_Components__["a" /* Dashboard */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, s)), root); });
//# sourceMappingURL=Dashboard.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export views */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectView; });
/* unused harmony export selectedViews */
/* unused harmony export viewData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__);

// fetching the initial set of views
var views = __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__["Observable"].ajax.getJSON("api/views");

// selecting a view
var selectedViewsSubject = new __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__["Subject"]();
var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject;

// fetching the data of a view
var viewData = selectedViews.switchMap(function (selectedView) { return __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__["Observable"].ajax.getJSON("api/viewdata/" + selectedView.id); });

var state = __WEBPACK_IMPORTED_MODULE_0__reactivex_rxjs__["Observable"].combineLatest(views.startWith(null), selectedViews.startWith(null), viewData.startWith(null), function (views, selectedView, viewData) {
    var s = {
        views: views,
        selectedView: selectedView,
        latestViewData: viewData
    };
    return s;
});
//# sourceMappingURL=Dashboard.Core.js.map

/***/ })

},[154]);