import AppUtils from "./AppUtils";
import * as AppState from "../../gen/ace/AppState";

import {RootContainerComponent} from "../../gen/components/RootContainerComponent";

import React from "react";
import ReactDOM from "react-dom";

export * from "../../gen/ace/Timeline";
export {dumpAppState} from "./AppUtils";

AppUtils.createInitialAppState();
console.log(AppState.getAppState());
const state = AppState.getAppState();
export const container = ReactDOM.render(
    <RootContainerComponent />,
    document.getElementById('root')
);

AppUtils.initEventListenersAndActionFactories();
AppUtils.startApp();


/*       S.D.G.       */

