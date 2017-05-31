import * as tslib_1 from "tslib";
import { createElement } from "react";
import { render } from "react-dom";
import { Dashboard } from "./dashboard.components";
import { state } from "./dashboard.core";
var root = document.getElementById("root");
state.subscribe(function (s) { return render(createElement(Dashboard, tslib_1.__assign({}, s)), root); });
