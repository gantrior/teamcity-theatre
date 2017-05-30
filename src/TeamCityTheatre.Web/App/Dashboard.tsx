import { createElement } from "react";
import { render } from "react-dom";

import { Dashboard } from "./dashboard.components";
import { state } from "./dashboard.core";

const root = document.getElementById("root");

state.subscribe(s => render(<Dashboard {...s} />, root));