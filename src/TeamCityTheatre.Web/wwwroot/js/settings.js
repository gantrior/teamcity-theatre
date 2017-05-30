webpackJsonp([1],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* unused harmony export ViewsList */
/* unused harmony export CreateViewButton */
/* unused harmony export ViewsTable */
/* unused harmony export ViewRow */
/* unused harmony export ConfigureViewButton */
/* unused harmony export EditViewButton */
/* unused harmony export DeleteViewButton */
/* unused harmony export SelectedViewDetails */
/* unused harmony export TilesTable */
/* unused harmony export TileRow */
/* unused harmony export EditTileButton */
/* unused harmony export DeleteTileButton */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_core__ = __webpack_require__(45);


var Settings = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "config" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "views-section", className: "section" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-4" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ViewsList, { views: props.views, selectedView: props.selectedView })),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-8" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(SelectedViewDetails, { selectedView: props.selectedView }))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "projects-section", className: "section" })));
};
var ViewsList = function (props) {
    if (props.views === null)
        return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-spin fa-cog" }),
            " Loading views"));
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "views-wrapper" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel panel-primary" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-heading" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("h2", null, "Views")),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-body" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null,
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(CreateViewButton, null))),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ViewsTable, { views: props.views, selectedView: props.selectedView }))));
};
var CreateViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "add-view-button btn btn-success", onClick: function () {
    } },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-plus" }),
    " Create a new view")); };
var ViewsTable = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("table", { id: "views-table", className: "table table-striped" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("thead", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tr", null,
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("th", null, "Name"),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("th", null))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tbody", null, props.views.map(function (view) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ViewRow, { view: view, selectedView: props.selectedView }); }))));
};
var ViewRow = function (props) {
    var isSelected = props.view === props.selectedView;
    var selectedClassName = isSelected ? "selected" : "";
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tr", { className: "view " + selectedClassName },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", { className: "view-name", onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_core__["b" /* selectView */])(props.view); } }, props.view.name),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ConfigureViewButton, { view: props.view }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EditViewButton, { view: props.view }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(DeleteViewButton, { view: props.view }))));
};
var ConfigureViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "configure-view-button btn btn-primary", onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_core__["b" /* selectView */])(props.view); } },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-cogs" }),
    " Configure")); };
var EditViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "edit-view-button btn btn-default", onClick: function () {
    }, title: "Edit" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-pencil" }))); };
var DeleteViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "delete-view-button btn btn-danger", onClick: function () {
    }, title: "Delete" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-remove" }))); };
var SelectedViewDetails = function (props) {
    if (props.selectedView === null)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null);
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "view-details" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel panel-default" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-heading" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-title" },
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("h2", null,
                        "Tiles of ",
                        props.selectedView.name))),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-body" }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(TilesTable, { view: props.selectedView }))));
};
var TilesTable = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("table", { className: "table table-striped" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("thead", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tr", null,
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("th", null, "Label"),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("th", null, "Build configuration"),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("th", null))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tbody", null, props.view.tiles.map(function (tile) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(TileRow, { view: props.view, tile: tile }); }))));
};
var TileRow = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("tr", null,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", null, props.tile.label),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", null, props.tile.buildConfigurationDisplayName),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EditTileButton, { view: props.view, tile: props.tile }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(DeleteTileButton, { view: props.view, tile: props.tile }))));
};
var EditTileButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "edit-tile-button btn btn-default", onClick: function () { }, title: "Edit" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-pencil" }))); };
var DeleteTileButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "delete-tile-button btn btn-danger", onClick: function () { }, title: "Delete" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-remove" }))); };
//# sourceMappingURL=settings.components.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectView; });
/* unused harmony export selectProject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);







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