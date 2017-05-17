import { createElement } from "react";
import { selectView } from "./Dashboard.Core";
import { BuildStatus } from "./Models";
/**
 * Root dispatching component
 */
export var Dashboard = function (props) {
    if (props.views === null)
        return createElement("div", null,
            createElement("i", { className: "fa fa-spin fa-cog" }),
            " Loading views");
    if (props.selectedView === null)
        return createElement(Views, { views: props.views });
    if (props.selectedViewData === null)
        return createElement("div", null,
            createElement("i", { className: "fa fa-spin fa-cog" }),
            " Loading view data");
    return createElement(View, { view: props.selectedView, data: props.selectedViewData });
};
/**
 * List of views to choose from
 */
export var Views = function (props) { return (createElement("div", { id: "views" }, props.views.map(function (view) { return (createElement("a", { className: "btn btn-primary view", id: view.id, onClick: function () { return selectView(view); } },
    view.name,
    " ",
    createElement("span", { className: "badge" },
        view.tiles.length,
        " tiles"))); }))); };
/**
 * Details of a single view
 */
export var View = function (props) { return (createElement("div", { id: props.view.id },
    createElement("div", { id: "tiles" },
        createElement("div", { className: "tiles-wrapper" }, props.data.tiles.map(function (tile) { return createElement(Tile, { view: props.view, data: tile }); }))))); };
/**
 * A single tile of a view
 */
export var Tile = function (props) {
    var buildStatus = BuildStatus[props.data.combinedBuildStatus].toLowerCase();
    var height = "height-" + props.view.defaultNumberOfBranchesPerTile;
    return (createElement("div", { id: props.data.id, className: "tile " + buildStatus + " " + height + " col-xs-6 col-sm-4 col-md-3 col-lg-2" },
        createElement("h4", { className: "tile-title" }, props.data.label),
        createElement("div", { className: "tile-builds" }, props.data.builds.map(function (build) { return createElement(Build, { build: build }); }))));
};
/**
 * A single build in a tile
 */
export var Build = function (props) {
    var isFinished = props.build.state === "finished";
    var isRunning = props.build.state === "running";
    var isSuccess = props.build.status === BuildStatus.Success;
    var buildStatus = BuildStatus[props.build.status].toLowerCase();
    var percentageCompleted = isFinished ? 100 : props.build.percentageComplete;
    var progressBarTheme = isSuccess ? "progress-bar-success" : "progress-bar-danger";
    var progressBarAnimation = isRunning ? "progress-bar-striped active" : "";
    return (createElement("div", { id: props.build.id, className: "tile-build " + buildStatus },
        createElement("div", { className: "progress" },
            createElement("div", { className: "progress-bar " + progressBarTheme + " " + progressBarAnimation, style: { width: percentageCompleted + "%" } },
                createElement("span", { className: "branch" }, props.build.branchName),
                isFinished ? createElement("span", { className: "execution-timestamp" }, props.build.startDate) : null,
                isRunning ? createElement("span", { className: "remaining" }) : null))));
};
//# sourceMappingURL=Dashboard.Components.js.map