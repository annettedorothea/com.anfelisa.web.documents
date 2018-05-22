import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import RegisterUserAction from "../../src/common/actions/RegisterUserAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import ForgotPasswordAction from "../../src/common/actions/ForgotPasswordAction";
import ConfirmEmailAction from "../../src/common/actions/ConfirmEmailAction";
import ResetPasswordAction from "../../src/common/actions/ResetPasswordAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";

export function init(actionParam) {
    new InitAction(actionParam).apply();
}

export function routeChanged(actionParam) {
    new RouteChangedAction(actionParam).apply();
}

export function route(actionParam) {
    new RouteAction(actionParam).apply();
}

export function checkUsername(actionParam) {
    new CheckUsernameAction(actionParam).apply();
}

export function registerUser(actionParam) {
    new RegisterUserAction(actionParam).apply();
}

export function login(actionParam) {
    new LoginAction(actionParam).apply();
}

export function logout(actionParam) {
    new LogoutAction(actionParam).apply();
}

export function forgotPassword(actionParam) {
    new ForgotPasswordAction(actionParam).apply();
}

export function confirmEmail(actionParam) {
    new ConfirmEmailAction(actionParam).apply();
}

export function resetPassword(actionParam) {
    new ResetPasswordAction(actionParam).apply();
}

export function displayError(actionParam) {
    new DisplayErrorAction(actionParam).apply();
}

export function displayMessage(actionParam) {
    new DisplayMessageAction(actionParam).apply();
}


/*       S.D.G.       */
