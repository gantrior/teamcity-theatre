import * as React from "react";
import { render } from "react-dom";

import { Dashboard } from "./Dashboard.Components";
import { state } from "./Dashboard.Core";

const root = document.getElementById("root");
state.subscribe(s => render(<Dashboard {...s}/>, root));