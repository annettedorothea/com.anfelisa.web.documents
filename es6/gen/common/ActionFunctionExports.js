import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import UsernameChangedAction from "../../src/common/actions/UsernameChangedAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/common/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/common/actions/PasswordChangedAction";
import PasswordRepetitionChangedAction from "../../src/common/actions/PasswordRepetitionChangedAction";
import RegisterUserAction from "../../src/common/actions/RegisterUserAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import UsernameChangedInLoginAction from "../../src/common/actions/UsernameChangedInLoginAction";
import ToggleSaveInLocalStorageAction from "../../src/common/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import ForgotPasswordAction from "../../src/common/actions/ForgotPasswordAction";
import ConfirmEmailAction from "../../src/common/actions/ConfirmEmailAction";
import ResetPasswordAction from "../../src/common/actions/ResetPasswordAction";
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

export function usernameChanged(actionData) {
    new UsernameChangedAction(actionData).apply();
}

export function checkUsername(actionData) {
    new CheckUsernameAction(actionData).apply();
}

export function emailChanged(actionData) {
    new EmailChangedAction(actionData).apply();
}

export function passwordChanged(actionData) {
    new PasswordChangedAction(actionData).apply();
}

export function passwordRepetitionChanged(actionData) {
    new PasswordRepetitionChangedAction(actionData).apply();
}

export function registerUser(actionData) {
    new RegisterUserAction(actionData).apply();
}

export function initialLogin(actionData) {
    new InitialLoginAction(actionData).apply();
}

export function usernameChangedInLogin(actionData) {
    new UsernameChangedInLoginAction(actionData).apply();
}

export function toggleSaveInLocalStorage(actionData) {
    new ToggleSaveInLocalStorageAction(actionData).apply();
}

export function login(actionData) {
    new LoginAction(actionData).apply();
}

export function logout(actionData) {
    new LogoutAction(actionData).apply();
}

export function forgotPassword(actionData) {
    new ForgotPasswordAction(actionData).apply();
}

export function confirmEmail(actionData) {
    new ConfirmEmailAction(actionData).apply();
}

export function resetPassword(actionData) {
    new ResetPasswordAction(actionData).apply();
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
