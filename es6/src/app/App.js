import AppUtils from "./AppUtils";

import EventListenerRegistrationAdmin from "../../gen/admin/EventListenerRegistration";
import ActionFactoryRegistrationAdmin from "../../gen/admin/ActionFactoryRegistration";

import EventListenerRegistrationAuthor from "../../gen/author/EventListenerRegistration";
import ActionFactoryRegistrationAuthor from "../../gen/author/ActionFactoryRegistration";

import EventListenerRegistrationBox from "../../gen/box/EventListenerRegistration";
import ActionFactoryRegistrationBox from "../../gen/box/ActionFactoryRegistration";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";

import Container from "../web/Container";
import RouteChangedAction from "../common/actions/RouteChangedAction";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";
export * from "../../gen/common/ActionFunctionExports";


const React = require('react');
const ReactDOM = require('react-dom');

export let appState = {
    route: "",
    data: {
        username: "",
        saveInLocalStorage: false
    }
};

export const container = ReactDOM.render(
    <Container/>,
    document.getElementById('root')
);


export function deepMergeState(newAppState) {
    appState = AppUtils.deepMerge(newAppState, appState);
    container.setState(appState);
}

export function mergeState(newAppState) {
    appState = AppUtils.merge(newAppState, appState);
    container.setState(appState);
}

window.onhashchange = () => {
    new RouteChangedAction(
        {
            hash: window.location.hash,
            username: container.state.username,
            password: container.state.password
        }
    ).apply();
    window.scrollTo(0, 0);
};

EventListenerRegistrationAdmin.init();
ActionFactoryRegistrationAdmin.init();

EventListenerRegistrationAuthor.init();
ActionFactoryRegistrationAuthor.init();

EventListenerRegistrationBox.init();
ActionFactoryRegistrationBox.init();

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

EventListenerRegistrationProfile.init();
ActionFactoryRegistrationProfile.init();

AppUtils.start();

/*       S.D.G.       */

