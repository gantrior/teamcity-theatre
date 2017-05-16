import * as React from "react";
import { selectView } from "./Dashboard.Core";
export var Dashboard = function (props) {
    if (props.views === null)
        return null;
    if (props.selectedView === null)
        return React.createElement(Views, { views: props.views });
    return null;
};
export var Views = function (props) { return (React.createElement("div", { id: "views" }, props.views.map(function (view) { return (React.createElement("a", { className: "btn btn-primary view", id: view.id, onClick: function () { return selectView(view); } },
    view.name,
    " ",
    React.createElement("span", { className: "badge" },
        view.tiles.length,
        " tiles"))); }))); };
//# sourceMappingURL=Dashboard.Components.js.map