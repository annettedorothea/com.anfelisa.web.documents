import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";

export function init(hash, username, password) {
    new InitAction(hash, username, password).apply();
}

export function routeChanged() {
    new RouteChangedAction().apply();
}

export function route(hash) {
    new RouteAction(hash).apply();
}

export function initialLogin() {
    new InitialLoginAction().apply();
}

export function logout() {
    new LogoutAction().apply();
}

export function displayError(error) {
    new DisplayErrorAction(error).apply();
}

export function displayErrorAndLogout(error) {
    new DisplayErrorAndLogoutAction(error).apply();
}

export function displayMessage(messageKey) {
    new DisplayMessageAction(messageKey).apply();
}

export function clearToast() {
    new ClearToastAction().apply();
}


/*       S.D.G.       */
