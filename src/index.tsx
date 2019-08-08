import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Component from "./Component"

window.addEventListener("load", function() {
    console.log("All assets are loaded");

    const message: string = "React container. ";
    const container: HTMLElement | null = document.getElementById("react-container");
    ReactDOM.render(
        React.createElement(Component.LikeButton,
            {
                caption: "Like",
                finalText: "You liked this.",
            }),
        container);
});