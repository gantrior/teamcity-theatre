import { createElement } from "react";
import { selectView } from "./settings.core";
export var Settings = function (props) {
    return (createElement("div", { id: "config" },
        createElement("div", { id: "views-section", className: "section" },
            createElement("div", { className: "col-md-4" },
                createElement(ViewsList, { views: props.views, selectedView: props.selectedView })),
            createElement("div", { className: "col-md-8" },
                createElement(SelectedViewDetails, { selectedView: props.selectedView }))),
        createElement("div", { id: "projects-section", className: "section" })));
};
export var ViewsList = function (props) {
    if (props.views === null)
        return (createElement("div", null,
            createElement("i", { className: "fa fa-spin fa-cog" }),
            " Loading views"));
    return (createElement("div", { id: "views-wrapper" },
        createElement("div", { className: "panel panel-primary" },
            createElement("div", { className: "panel-heading" },
                createElement("h2", null, "Views")),
            createElement("div", { className: "panel-body" },
                createElement("div", null,
                    createElement(CreateViewButton, null))),
            createElement(ViewsTable, { views: props.views, selectedView: props.selectedView }))));
};
export var CreateViewButton = function (props) { return (createElement("button", { className: "add-view-button btn btn-success", onClick: function () {
    } },
    createElement("i", { className: "fa fa-plus" }),
    " Create a new view")); };
export var ViewsTable = function (props) {
    return (createElement("table", { id: "views-table", className: "table table-striped" },
        createElement("thead", null,
            createElement("tr", null,
                createElement("th", null, "Name"),
                createElement("th", null))),
        createElement("tbody", null, props.views.map(function (view) { return createElement(ViewRow, { view: view, selectedView: props.selectedView }); }))));
};
export var ViewRow = function (props) {
    var isSelected = props.view === props.selectedView;
    var selectedClassName = isSelected ? "selected" : "";
    return (createElement("tr", { className: "view " + selectedClassName },
        createElement("td", { className: "view-name", onClick: function () { return selectView(props.view); } }, props.view.name),
        createElement("td", null,
            createElement(ConfigureViewButton, { view: props.view }),
            createElement(EditViewButton, { view: props.view }),
            createElement(DeleteViewButton, { view: props.view }))));
};
export var ConfigureViewButton = function (props) { return (createElement("button", { className: "configure-view-button btn btn-primary", onClick: function () { return selectView(props.view); } },
    createElement("i", { className: "fa fa-cogs" }),
    " Configure")); };
export var EditViewButton = function (props) { return (createElement("button", { className: "edit-view-button btn btn-default", onClick: function () {
    }, title: "Edit" },
    createElement("i", { className: "fa fa-pencil" }))); };
export var DeleteViewButton = function (props) { return (createElement("button", { className: "delete-view-button btn btn-danger", onClick: function () {
    }, title: "Delete" },
    createElement("i", { className: "fa fa-remove" }))); };
export var SelectedViewDetails = function (props) {
    if (props.selectedView === null)
        return createElement("div", null);
    return (createElement("div", { id: "view-details" },
        createElement("div", { className: "panel panel-default" },
            createElement("div", { className: "panel-heading" },
                createElement("div", { className: "panel-title" },
                    createElement("h2", null,
                        "Tiles of ",
                        props.selectedView.name))),
            createElement("div", { className: "panel-body" }),
            createElement(TilesTable, { view: props.selectedView }))));
};
export var TilesTable = function (props) {
    return (createElement("table", { className: "table table-striped" },
        createElement("thead", null,
            createElement("tr", null,
                createElement("th", null, "Label"),
                createElement("th", null, "Build configuration"),
                createElement("th", null))),
        createElement("tbody", null, props.view.tiles.map(function (tile) { return createElement(TileRow, { view: props.view, tile: tile }); }))));
};
export var TileRow = function (props) {
    return (createElement("tr", null,
        createElement("td", null, props.tile.label),
        createElement("td", null, props.tile.buildConfigurationDisplayName),
        createElement("td", null,
            createElement(EditTileButton, { view: props.view, tile: props.tile }),
            createElement(DeleteTileButton, { view: props.view, tile: props.tile }))));
};
export var EditTileButton = function (props) { return (createElement("button", { className: "edit-tile-button btn btn-default", onClick: function () { }, title: "Edit" },
    createElement("i", { className: "fa fa-pencil" }))); };
export var DeleteTileButton = function (props) { return (createElement("button", { className: "delete-tile-button btn btn-danger", onClick: function () { }, title: "Delete" },
    createElement("i", { className: "fa fa-remove" }))); };
//# sourceMappingURL=settings.components.js.map