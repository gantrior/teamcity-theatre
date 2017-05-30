import { createElement } from "react";
import { render } from "react-dom";

import { Settings } from "./settings.components";
import { state } from "./settings.core";

const root = document.getElementById("root");

state.subscribe(s => render(<Settings {...s} />, root));