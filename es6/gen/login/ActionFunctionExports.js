import UsernameChangedAction from "../../src/login/actions/UsernameChangedAction";
import ToggleSaveInLocalStorageAction from "../../src/login/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/login/actions/LoginAction";
import GetRoleAction from "../../src/login/actions/GetRoleAction";

export function usernameChanged(actionData) {
    new UsernameChangedAction(actionData).apply();
}

export function toggleSaveInLocalStorage(actionData) {
    new ToggleSaveInLocalStorageAction(actionData).apply();
}

export function login(actionData) {
    new LoginAction(actionData).apply();
}

export function getRole(actionData) {
    new GetRoleAction(actionData).apply();
}


/*       S.D.G.       */