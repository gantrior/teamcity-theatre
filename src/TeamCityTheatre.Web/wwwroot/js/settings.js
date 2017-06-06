webpackJsonp([0],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_observables__ = __webpack_require__(21);


var Projects = function (props) {
    if (props.rootProject === null)
        return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-spin fa-cog" }),
            " Loading projects"));
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel panel-default" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-heading" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("h3", { className: "panel-title" }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("h2", null, "Available projects")),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "panel-body" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("ul", { className: "list-unstyled" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Project, { project: props.rootProject, selectedProject: props.selectedProject })))));
};
// recursive components require type annotations
var Project = function (props) {
    var hasChildren = props.project.hasChildren() ? "has-children" : "";
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("li", { id: props.project.id, className: "project " + hasChildren },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ToggleProjectChildrenButton, { project: props.project }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ShowProjectDetailsButton, { project: props.project, selectedProject: props.selectedProject }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ProjectChildren, { project: props.project, selectedProject: props.selectedProject })));
};
var ToggleProjectChildrenButton = function (props) {
    var iconClass = props.project.isExpanded ? "fa fa-minus-circle" : "fa fa-plus-circle";
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "toggle-children-button btn btn-sm btn-default", onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_observables__["b" /* updateProject */])(props.project.toggleExpandOrCollapse()); } },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: iconClass })));
};
var ShowProjectDetailsButton = function (props) {
    var buttonClass = props.project === props.selectedProject ? "btn-primary" : "btn-default";
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "project-name btn btn-sm " + buttonClass, onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_observables__["c" /* selectProject */])(props.project); } }, props.project.name));
};
var ProjectChildren = function (props) {
    if (!props.project.isExpanded)
        return null;
    if (!props.project.hasChildren())
        return null;
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("ul", { className: "project-children" }, props.project.children.map(function (c) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Project, { project: c, selectedProject: props.selectedProject }); })));
};


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var SelectedView = function (props) {
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
var EditTileButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "edit-tile-button btn btn-default", onClick: function () {
    }, title: "Edit" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-pencil" }))); };
var DeleteTileButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "delete-tile-button btn btn-danger", onClick: function () {
    }, title: "Delete" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-remove" }))); };


/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Views; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_observables__ = __webpack_require__(21);


var Views = function (props) {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", { className: "view-name", onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_observables__["d" /* selectView */])(props.view); } }, props.view.name),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("td", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(ConfigureViewButton, { view: props.view }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(EditViewButton, { view: props.view }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(DeleteViewButton, { view: props.view }))));
};
var ConfigureViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "configure-view-button btn btn-primary", onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__settings_observables__["d" /* selectView */])(props.view); } },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-cogs" }),
    " Configure")); };
var EditViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "edit-view-button btn btn-default", onClick: function () {
    }, title: "Edit" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-pencil" }))); };
var DeleteViewButton = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("button", { className: "delete-view-button btn btn-danger", onClick: function () {
    }, title: "Delete" },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-remove" }))); };


/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_components__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__erroralert_components__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_observables__ = __webpack_require__(21);






var root = document.getElementById("root");
__WEBPACK_IMPORTED_MODULE_5__settings_observables__["a" /* state */].subscribe({
    next: function (s) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__settings_components__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, s)), root); },
    error: function (err) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_4__erroralert_components__["a" /* ErrorAlert */], { error: err }), root); }
});


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(16);

var Project = (function () {
    function Project(params) {
        if (!params)
            throw new Error("Invalid constructor parameters in BasicProject: params");
        this.isArchived = params.isArchived;
        this.href = params.href;
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.webUrl = params.webUrl;
        this.parentProjectId = params.parentProjectId;
        this.children = params.children || [];
        this.buildConfigurations = params.buildConfigurations || null;
        this.isExpanded = false;
    }
    Project.prototype.withChildren = function (children) {
        return new Project(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this, { children: children }));
    };
    Project.prototype.withBuildConfigurations = function (buildConfigurations) {
        return new Project(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this, { buildConfigurations: buildConfigurations }));
    };
    Project.prototype.expand = function () {
        return new Project(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this, { isExpanded: true }));
    };
    Project.prototype.collapse = function () {
        return new Project(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this, { isExpanded: false }));
    };
    Project.prototype.toggleExpandOrCollapse = function () {
        return this.isExpanded ? this.collapse() : this.expand();
    };
    // propagate updates to a project down the chain
    Project.prototype.withProject = function (project) {
        if (this.id === project.id)
            return project; // if this is the project that was updated, return the new version
        return new Project(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this, { children: this.children.map(function (c) { return c.withProject(project); }) }));
    };
    Project.prototype.hasChildren = function () {
        return this.children.length > 0;
    };
    return Project;
}());



/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return selectProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_dom_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_scan__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_scan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_scan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_models__ = __webpack_require__(131);












var allViews = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
    .defer(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/views"); })
    .do(function (x) { return console.log("Loaded " + x.length + " views"); })
    .startWith(null);
var toProjects = function (basicProjects) {
    var projects = basicProjects.map(function (p) { return new __WEBPACK_IMPORTED_MODULE_11__shared_models__["a" /* Project */](p); });
    var findChildren = function (id) { return projects.filter(function (p) { return p.parentProjectId === id; }); };
    return projects.map(function (p) { return p.withChildren(findChildren(p.id)); });
};
var initialRootProjects = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
    .defer(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/projects"); })
    .map(toProjects)
    .map(function (projects) { return projects.filter(function (p) { return p.parentProjectId === null; })[0]; })
    .do(function (x) { return console.log("Initial root project loaded: " + x.name); });
var selectedViewsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject
    .startWith(null)
    .do(function (x) { return console.log("Selected a view: " + JSON.stringify(x)); });
var selectedProjectsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var selectProject = function (project) { return selectedProjectsSubject.next(project); };
var manualProjectUpdates = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var updateProject = function (project) { return manualProjectUpdates.next(project); };
var selectedProjects = selectedProjectsSubject
    .switchMap(function (project) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/projects/" + project.id)
    .map(function (detailedProject) { return project.withBuildConfigurations(detailedProject.buildConfigurations); }); })
    .do(function (x) { return console.log("Selected a project: " + x.name); })
    .startWith(null);
var projectUpdates = manualProjectUpdates.merge(selectedProjects)
    .do(function (x) { return console.log("Registered update for project: " + (x ? x.name : null)); });
var rootProjects = initialRootProjects.switchMap(function (initialRootProject) {
    return projectUpdates
        .scan(function (previousRootProject, projectUpdate) { return projectUpdate !== null ? previousRootProject.withProject(projectUpdate) : previousRootProject; }, initialRootProject)
        .startWith(initialRootProject);
})
    .do(function (x) { return console.log("New root project"); });
var state = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest(allViews, selectedViews, rootProjects, selectedProjects, function (vs, sv, rp, sp) { return ({
    views: vs,
    selectedView: sv,
    rootProject: rp,
    selectedProject: sp
}); }).do(function (x) { return console.log("New state"); });


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var ErrorAlert = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "alert alert-error" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("strong", null, "Error!"),
        " Can you make sense of this?",
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("p", null, props.error.name),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("p", null, props.error.message),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("p", null, props.error.stack)));
};


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_components_views__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_components_selected_view__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_components_projects__ = __webpack_require__(126);




var Settings = function (props) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "config" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "views-section", className: "section row" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-4" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_1__settings_components_views__["a" /* Views */], { views: props.views, selectedView: props.selectedView })),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-8" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__settings_components_selected_view__["a" /* SelectedView */], { selectedView: props.selectedView }))),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "projects-section", className: "section row" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-4" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__settings_components_projects__["a" /* Projects */], { rootProject: props.rootProject, selectedProject: props.selectedProject })),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "col-md-8" },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null, "TODO")))));
};


/***/ })

},[129]);