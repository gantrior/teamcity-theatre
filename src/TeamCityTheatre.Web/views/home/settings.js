import * as tslib_1 from "tslib";
import { createElement } from "react";
import { render } from "react-dom";
import { Settings } from "./settings.components";
import { state } from "./settings.core";
var root = document.getElementById("root");
state.subscribe(function (s) { return render(createElement(Settings, tslib_1.__assign({}, s)), root); });
