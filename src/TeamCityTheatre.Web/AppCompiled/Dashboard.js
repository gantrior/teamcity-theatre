import { createElement } from "react";
import { render } from "react-dom";
import { Dashboard } from "./Dashboard.Components";
import { state } from "./Dashboard.Core";
var root = document.getElementById("root");
state.subscribe(function (s) { return render(createElement(Dashboard, { views: s.views, selectedView: s.selectedView, selectedViewData: s.selectedViewData }), root); });
//# sourceMappingURL=Dashboard.js.map