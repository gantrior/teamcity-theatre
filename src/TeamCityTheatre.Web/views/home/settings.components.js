import { createElement } from "react";
import { Views } from "./settings.components.views";
import { SelectedView } from "./settings.components.selected-view";
import { Projects } from "./settings.components.projects";
import { SelectedProject } from "./settings.components.selected-project";
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
                createElement(SelectedProject, { selectedProject: props.selectedProject, selectedView: props.selectedView })))));
};
