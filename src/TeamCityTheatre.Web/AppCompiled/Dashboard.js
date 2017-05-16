import * as tslib_1 from "tslib";
import * as React from "react";
import { render } from "react-dom";
import { Dashboard } from "./Dashboard.Components";
import { state } from "./Dashboard.Core";
var root = document.getElementById("root");
state.subscribe(function (s) { return render(React.createElement(Dashboard, tslib_1.__assign({}, s)), root); });
//# sourceMappingURL=Dashboard.js.map