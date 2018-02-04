import InitAction from "../common/actions/InitAction";

export * from "../../gen/common/ActionFunctionExports";
export * from "../../gen/card/ActionFunctionExports";
export * from "../../gen/multiplechoice/ActionFunctionExports";
export * from "../../gen/navigation/ActionFunctionExports";
export * from "../../gen/profile/ActionFunctionExports";
export * from "../../gen/vocabulary/ActionFunctionExports";

export * from "../../gen/ace/Scenario";
export * from "../../gen/ace/Bug";

import AppUtils from './AppUtils';
import ReplayUtils from './ReplayUtils';
import EventListenerRegistrationCard from "../../gen/card/EventListenerRegistration";
import ActionFactoryRegistrationCard from "../../gen/card/ActionFactoryRegistration";
import EventListenerRegistrationCommon from "../../gen/common/EventListenerRegistration";
import ActionFactoryRegistrationCommon from "../../gen/common/ActionFactoryRegistration";
import EventListenerRegistrationMultipleChoice from "../../gen/multiplechoice/EventListenerRegistration";
import ActionFactoryRegistrationMultipleChoice from "../../gen/multiplechoice/ActionFactoryRegistration";
import EventListenerRegistrationNavigation from "../../gen/navigation/EventListenerRegistration";
import ActionFactoryRegistrationNavigation from "../../gen/navigation/ActionFactoryRegistration";
import EventListenerRegistrationProfile from "../../gen/profile/EventListenerRegistration";
import ActionFactoryRegistrationProfile from "../../gen/profile/ActionFactoryRegistration";
import EventListenerRegistrationVocabulary from "../../gen/vocabulary/EventListenerRegistration";
import ActionFactoryRegistrationVocabulary from "../../gen/vocabulary/ActionFactoryRegistration";

import CommonView from "../common/views/CommonView";

window.onhashchange = () => {
    new InitAction().apply();
};

$.ajaxSetup({cache: false});

$('.ajax-busy').hide();

$(document).ajaxStart(function () {
    $('.ajax-busy').show();
}).ajaxStop(function () {
    $('.ajax-busy').hide();
});

if (screen.width < 992) {
    $('div.header div.container').addClass('container-fluid').removeClass('container');
    $('div.main-pane').addClass('container-fluid').removeClass('container');
} else {
    $('div.header div.form-inline').addClass('pull-right');
    const random = Math.random();
    const index = Math.floor(random * 5);
    if (index === 0) {
        $('body').addClass('water');
    } else if (index === 1) {
        $('body').addClass('flower');
    } else if (index === 2) {
        $('body').addClass('grass');
    } else if (index === 3) {
        $('body').addClass('sunflowers');
    } else if (index === 4) {
        $('body').addClass('sea');
    }
}

let focusedElement = null;

export function insertSpecialCharacter(character) {

    if (focusedElement !== null) {
        focusedElement.val(focusedElement.val() + character);
        focusedElement.focus();
    }
}

export function setFocusedElement(element) {
    focusedElement = element;
}

export function replay(pauseInMillis) {
    ReplayUtils.replay(pauseInMillis);
}

export function e2e(pauseInMillis) {
    ReplayUtils.e2e(pauseInMillis);
}

export function toggleVisibilityOfRow(rowId) {
    ReplayUtils.toggleVisibilityOfRow(rowId);
}

export function reportBug() {
    const reporter = CommonView.getUsername();
    AppUtils.saveBug(new Date(), reporter ? reporter : "anonymous");
}

EventListenerRegistrationCard.init();
ActionFactoryRegistrationCard.init();

EventListenerRegistrationCommon.init();
ActionFactoryRegistrationCommon.init();

EventListenerRegistrationMultipleChoice.init();
ActionFactoryRegistrationMultipleChoice.init();

EventListenerRegistrationNavigation.init();
ActionFactoryRegistrationNavigation.init();

EventListenerRegistrationProfile.init();
ActionFactoryRegistrationProfile.init();

EventListenerRegistrationVocabulary.init();
ActionFactoryRegistrationVocabulary.init();

AppUtils.start();

/*       S.D.G.       */

