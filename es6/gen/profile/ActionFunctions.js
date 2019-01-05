import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/profile/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/profile/actions/DeleteUserCancelAction";

export function loadUser() {
    new LoadUserAction().apply();
}

export function deleteUser(usernameToBeDeleted) {
    new DeleteUserAction(usernameToBeDeleted).apply();
}

export function deleteUserClick() {
    new DeleteUserClickAction().apply();
}

export function deleteUserCancel() {
    new DeleteUserCancelAction().apply();
}


/*       S.D.G.       */
