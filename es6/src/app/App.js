import AppUtils from "./AppUtils";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import Container from "../web/Container";
import InitAction from "../common/actions/InitAction";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";
export * from "../../gen/common/ActionFunctionExports";

AppUtils.start();

window.onhashchange = () => {
    new InitAction().apply();
};

const React = require('react');
const ReactDOM = require('react-dom');

export const container = ReactDOM.render(
    <Container />,
    document.getElementById('root')
);

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

/*       S.D.G.       */

