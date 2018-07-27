import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";

export function init(actionData) {
    new InitAction(actionData).apply();
}

export function routeChanged(actionData) {
    new RouteChangedAction(actionData).apply();
}

export function route(actionData) {
    new RouteAction(actionData).apply();
}

export function initialLogin(actionData) {
    new InitialLoginAction(actionData).apply();
}

export function logout(actionData) {
    new LogoutAction(actionData).apply();
}

export function displayError(actionData) {
    new DisplayErrorAction(actionData).apply();
}

export function displayErrorAndLogout(actionData) {
    new DisplayErrorAndLogoutAction(actionData).apply();
}

export function displayMessage(actionData) {
    new DisplayMessageAction(actionData).apply();
}

export function clearToast(actionData) {
    new ClearToastAction(actionData).apply();
}


/*       S.D.G.       */
