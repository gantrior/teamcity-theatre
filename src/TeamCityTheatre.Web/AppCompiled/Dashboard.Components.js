import { createElement } from "react";
import { selectView } from "./Dashboard.Core";
export var Views = function (props) { return (createElement("div", { id: "views" }, props.views.map(function (view) { return (createElement("a", { className: "btn btn-primary view", id: view.id, onClick: function () { return selectView(view); } },
    view.name,
    " ",
    createElement("span", { className: "badge" },
        view.tiles.length,
        " tiles"))); }))); };
export var Dashboard = function (props) {
    if (props.views === null)
        return createElement("div", null);
    if (props.selectedView === null)
        return createElement(Views, { views: props.views });
    return createElement("div", null);
};
//# sourceMappingURL=Dashboard.Components.js.map