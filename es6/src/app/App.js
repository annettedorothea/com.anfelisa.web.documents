import InitAction from "../common/actions/InitAction";
import RouteAction from "../common/actions/RouteAction";
import RouteHomeAction from "../common/actions/RouteHomeAction";
import RecalculateScheduledCardsAction from "../card/actions/RecalculateScheduledCardsAction";
import ShowNextCardItemAction from "../card/actions/ShowNextCardItemAction";
import ScoreReinforcedCardAction from "../card/actions/ScoreReinforcedCardAction";
import ScoreCardAction from "../card/actions/ScoreCardAction";
import OpenReallyDeleteDialogAction from "../common/actions/OpenReallyDeleteDialogAction";
import CheckUsernameAction from "../profile/actions/CheckUsernameAction";
import ValidatePasswordAction from "../profile/actions/ValidatePasswordAction";
import ValidateRequiredFieldAction from "../common/actions/ValidateRequiredFieldAction";
import ReadStatisticsAction from "../navigation/actions/ReadStatisticsAction";
import LoginAction from "../common/actions/LoginAction";
import LogoutAction from "../common/actions/LogoutAction";
import SwitchLanguageAction from "../common/actions/SwitchLanguageAction";
import CorrectWordAction from "../vocabulary/actions/CorrectWordAction";
import ShowNextWordOfTestAction from "../vocabulary/actions/ShowNextWordOfTestAction";
import RateWordAction from "../vocabulary/actions/RateWordAction";
import ShowWordAction from "../vocabulary/actions/ShowWordAction";
import SubmitRegistrationAction from "../profile/actions/SubmitRegistrationAction";
import SaveBoxAction from "../profile/actions/SaveBoxAction";
import SaveBoxConfigAction from "../profile/actions/SaveBoxConfigAction";
import SubmitNewPasswordAction from "../profile/actions/SubmitNewPasswordAction";
import SaveProfileAction from "../profile/actions/SaveProfileAction";
import UpdatePasswordAction from "../profile/actions/UpdatePasswordAction";
import SaveCourseSelectionAction from "../profile/actions/SaveCourseSelectionAction";
import SubmitForgotPasswordRequestAction from "../profile/actions/SubmitForgotPasswordRequestAction";

import AppUtils from './AppUtils';
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

function insertSpecialCharacter(character) {
    if (focusedElement !== null) {
        focusedElement.val(focusedElement.val() + character);
        focusedElement.focus();
    }
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

export function route(actionParam) {
    new RouteAction(actionParam).apply();
}

export function routeHome() {
    new RouteHomeAction().apply();
}

export function recalculateScheduledCards(actionParam) {
    new RecalculateScheduledCardsAction(actionParam).apply();
}

export function showNextCardItem(actionParam) {
    console.log("showNextCardItem", actionParam);
    new ShowNextCardItemAction(actionParam).apply();
}

export function scoreCard(actionParam) {
    new ScoreCardAction(actionParam).apply();
}

export function openReallyDeleteDialog(actionParam) {
    new OpenReallyDeleteDialogAction(actionParam).apply();
}

export function checkUsername(actionParam) {
    new CheckUsernameAction(actionParam).apply();
}

export function validatePassword(actionParam) {
    new ValidatePasswordAction(actionParam).apply();
}

export function validateRequiredField(actionParam) {
    new ValidateRequiredFieldAction(actionParam).apply();
}

export function readStatistics(actionParam) {
    new ReadStatisticsAction(actionParam).apply();
}

export function scoreReinforcedCard(actionParam) {
    new ScoreReinforcedCardAction(actionParam).apply();
}

export function login(actionParam) {
    new LoginAction(actionParam).apply();
}

export function logout(actionParam) {
    new LogoutAction(actionParam).apply();
}

export function switchLanguage(actionParam) {
    new SwitchLanguageAction(actionParam).apply();
}

export function correctWord(actionParam) {
    new CorrectWordAction(actionParam).apply();
}

export function showNextWordOfTest(actionParam) {
    new ShowNextWordOfTestAction(actionParam).apply();
}

export function rateWord(actionParam) {
    new RateWordAction(actionParam).apply();
}

export function showWord(actionParam) {
    new ShowWordAction(actionParam).apply();
}

export function submitRegistration(actionParam) {
    new SubmitRegistrationAction(actionParam).apply();
}

export function saveBox(actionParam) {
    new SaveBoxAction(actionParam).apply();
}

export function saveBoxConfig(actionParam) {
    new SaveBoxConfigAction(actionParam).apply();
}

export function submitNewPassword(actionParam) {
    new SubmitNewPasswordAction(actionParam).apply();
}

export function saveProfile(actionParam) {
    new SaveProfileAction(actionParam).apply();
}

export function updatePassword(actionParam) {
    new UpdatePasswordAction(actionParam).apply();
}

export function saveCourseSelection(actionParam) {
    new SaveCourseSelectionAction(actionParam).apply();
}

export function submitForgotPasswordRequest(actionParam) {
    new SubmitForgotPasswordRequestAction(actionParam).apply();
}


/*       S.D.G.       */

