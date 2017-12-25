import InitAction from "../../src/common/actions/InitAction";
import RouteAction from "../../src/common/actions/RouteAction";
import RouteHomeAction from "../../src/common/actions/RouteHomeAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import SaveResultAction from "../../src/common/actions/SaveResultAction";
import ValidateRequiredFieldAction from "../../src/common/actions/ValidateRequiredFieldAction";
import OpenReallyDeleteDialogAction from "../../src/common/actions/OpenReallyDeleteDialogAction";
import CloseAllDialogsAction from "../../src/common/actions/CloseAllDialogsAction";
import SwitchLanguageAction from "../../src/common/actions/SwitchLanguageAction";
import RenderLoginAction from "../../src/common/actions/RenderLoginAction";
import RenderLogoutAction from "../../src/common/actions/RenderLogoutAction";
import RenderHomeAction from "../../src/common/actions/RenderHomeAction";

export function init(actionParam) {
    new InitAction(actionParam).apply();
}

export function route(actionParam) {
    new RouteAction(actionParam).apply();
}

export function routeHome(actionParam) {
    new RouteHomeAction(actionParam).apply();
}

export function login(actionParam) {
    new LoginAction(actionParam).apply();
}

export function logout(actionParam) {
    new LogoutAction(actionParam).apply();
}

export function saveResult(actionParam) {
    new SaveResultAction(actionParam).apply();
}

export function validateRequiredField(actionParam) {
    new ValidateRequiredFieldAction(actionParam).apply();
}

export function openReallyDeleteDialog(actionParam) {
    new OpenReallyDeleteDialogAction(actionParam).apply();
}

export function closeAllDialogs(actionParam) {
    new CloseAllDialogsAction(actionParam).apply();
}

export function switchLanguage(actionParam) {
    new SwitchLanguageAction(actionParam).apply();
}

export function renderLogin(actionParam) {
    new RenderLoginAction(actionParam).apply();
}

export function renderLogout(actionParam) {
    new RenderLogoutAction(actionParam).apply();
}

export function renderHome(actionParam) {
    new RenderHomeAction(actionParam).apply();
}


/*       S.D.G.       */
