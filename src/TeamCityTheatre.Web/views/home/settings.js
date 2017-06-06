import * as tslib_1 from "tslib";
import { createElement } from "react";
import { render } from "react-dom";
import { Settings } from "./settings.components";
import { ErrorAlert } from "./erroralert.components";
import { state } from "./settings.observables";
var root = document.getElementById("root");
state.subscribe({
    next: function (s) { return render(createElement(Settings, tslib_1.__assign({}, s)), root); },
    error: function (err) { return render(createElement(ErrorAlert, { error: err }), root); }
});
