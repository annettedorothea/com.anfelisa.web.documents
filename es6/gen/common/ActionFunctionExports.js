import InitAction from "../../src/common/actions/InitAction";
import RouteAction from "../../src/common/actions/RouteAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import CreateUserAction from "../../src/common/actions/CreateUserAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LoadDashboardAction from "../../src/common/actions/LoadDashboardAction";
import LogoutAction from "../../src/common/actions/LogoutAction";

export function init(actionParam) {
    new InitAction(actionParam).apply();
}

export function route(actionParam) {
    new RouteAction(actionParam).apply();
}

export function checkUsername(actionParam) {
    new CheckUsernameAction(actionParam).apply();
}

export function createUser(actionParam) {
    new CreateUserAction(actionParam).apply();
}

export function login(actionParam) {
    new LoginAction(actionParam).apply();
}

export function loadDashboard(actionParam) {
    new LoadDashboardAction(actionParam).apply();
}

export function logout(actionParam) {
    new LogoutAction(actionParam).apply();
}


/*       S.D.G.       */
