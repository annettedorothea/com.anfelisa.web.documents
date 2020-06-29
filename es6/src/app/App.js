import AppUtils from "./AppUtils";

import Container from "../web/Container";
import {routeChanged} from "../../gen/common/ActionFunctions";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";

const React = require('react');
const ReactDOM = require('react-dom');

AppUtils.createInitialAppState();

export const container = ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);

export function render(newAppState) {
    container.setState(newAppState);
}

window.onhashchange = () => {
    routeChanged();
    window.scrollTo(0, 0);
};

AppUtils.initEventListenersAndActionFactories();
AppUtils.start();


/*       S.D.G.       */

