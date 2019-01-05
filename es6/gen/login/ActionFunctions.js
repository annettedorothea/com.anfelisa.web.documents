import UsernameChangedAction from "../../src/login/actions/UsernameChangedAction";
import ToggleSaveInLocalStorageAction from "../../src/login/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/login/actions/LoginAction";
import GetRoleAction from "../../src/login/actions/GetRoleAction";

export function usernameChanged(username) {
    new UsernameChangedAction(username).apply();
}

export function toggleSaveInLocalStorage(saveInLocalStorage) {
    new ToggleSaveInLocalStorageAction(saveInLocalStorage).apply();
}

export function login(password) {
    new LoginAction(password).apply();
}

export function getRole() {
    new GetRoleAction().apply();
}


/*       S.D.G.       */
