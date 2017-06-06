import { createElement } from "react";
export var ErrorAlert = function (props) {
    return (createElement("div", { className: "alert alert-error" },
        createElement("strong", null, "Error!"),
        " Can you make sense of this?",
        createElement("p", null, props.error.name),
        createElement("p", null, props.error.message),
        createElement("p", null, props.error.stack)));
};
