import { createElement } from "react";
import { Views } from "./settings.components.views";
import { SelectedView } from "./settings.components.selected-view";
import { Projects } from "./settings.components.projects";
export var Settings = function (props) {
    return (createElement("div", { id: "config" },
        createElement("div", { id: "views-section", className: "section row" },
            createElement("div", { className: "col-md-4" },
                createElement(Views, { views: props.views, selectedView: props.selectedView })),
            createElement("div", { className: "col-md-8" },
                createElement(SelectedView, { selectedView: props.selectedView }))),
        createElement("div", { id: "projects-section", className: "section row" },
            createElement("div", { className: "col-md-4" },
                createElement(Projects, { rootProject: props.rootProject, selectedProject: props.selectedProject })),
            createElement("div", { className: "col-md-8" },
                createElement("div", null, "TODO")))));
};
