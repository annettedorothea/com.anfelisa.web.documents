import AppUtils from "./AppUtils";

import {RootContainerComponent} from "../../gen/components/RootContainerComponent";

import React from "react";
import ReactDOM from "react-dom";

export * from "../../gen/ace/Timeline";
export {dumpAppState} from "./AppUtils";
export {getAppState} from "./AppUtils";
export {addNonDeterministicValueClient} from "./AppUtils";
export {addNonDeterministicValueServer} from "./AppUtils";
export {getValueFromLocalStorage} from "./AppUtils";

AppUtils.createInitialAppState();

export const container = ReactDOM.render(
    <RootContainerComponent />,
    document.getElementById('root')
);

AppUtils.initEventListenersAndActionFactories();
AppUtils.startApp();


/*       S.D.G.       */

