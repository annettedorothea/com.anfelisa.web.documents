import AppUtils from "./AppUtils";

import EventListenerRegistrationAdmin from "../../gen/admin/EventListenerRegistration";
import ActionFactoryRegistrationAdmin from "../../gen/admin/ActionFactoryRegistration";

import EventListenerRegistrationAuthor from "../../gen/author/EventListenerRegistration";
import ActionFactoryRegistrationAuthor from "../../gen/author/ActionFactoryRegistration";

import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";

import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";

import Container from "../web/Container";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";
export * from "../../gen/common/ActionFunctionExports";

AppUtils.start();

const React = require('react');
const ReactDOM = require('react-dom');

export const container = ReactDOM.render(
    <Container />,
    document.getElementById('root')
);

EventListenerRegistrationAdmin.init();
ActionFactoryRegistrationAdmin.init();

EventListenerRegistrationAuthor.init();
ActionFactoryRegistrationAuthor.init();

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

EventListenerRegistrationProfile.init();
ActionFactoryRegistrationProfile.init();

/*       S.D.G.       */

