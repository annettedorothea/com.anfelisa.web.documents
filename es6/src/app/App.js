import AppUtils from "./AppUtils";

import Container from "../web/Container";

import React from "react";
import ReactDOM from "react-dom";

export * from "../../gen/ace/Timeline";
export { dumpAppState } from "./AppUtils";

AppUtils.createInitialAppState();

export const container = ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

export function render(newAppState) {
    container.setState(newAppState);
}

AppUtils.initEventListenersAndActionFactories();
AppUtils.startApp();


/*       S.D.G.       */

