import { createElement } from "react";
export var SelectedView = function (props) {
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
var TilesTable = function (props) {
    return (createElement("table", { className: "table table-striped" },
        createElement("thead", null,
            createElement("tr", null,
                createElement("th", null, "Label"),
                createElement("th", null, "Build configuration"),
                createElement("th", null))),
        createElement("tbody", null, props.view.tiles.map(function (tile) { return createElement(TileRow, { view: props.view, tile: tile }); }))));
};
var TileRow = function (props) {
    return (createElement("tr", null,
        createElement("td", null, props.tile.label),
        createElement("td", null, props.tile.buildConfigurationDisplayName),
        createElement("td", null,
            createElement(EditTileButton, { view: props.view, tile: props.tile }),
            createElement(DeleteTileButton, { view: props.view, tile: props.tile }))));
};
var EditTileButton = function (props) { return (createElement("button", { className: "edit-tile-button btn btn-default", onClick: function () {
    }, title: "Edit" },
    createElement("i", { className: "fa fa-pencil" }))); };
var DeleteTileButton = function (props) { return (createElement("button", { className: "delete-tile-button btn btn-danger", onClick: function () {
    }, title: "Delete" },
    createElement("i", { className: "fa fa-remove" }))); };
