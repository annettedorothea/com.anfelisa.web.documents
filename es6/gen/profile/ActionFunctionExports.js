import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/profile/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/profile/actions/DeleteUserCancelAction";

export function loadUser(actionData) {
    new LoadUserAction(actionData).apply();
}

export function deleteUser(actionData) {
    new DeleteUserAction(actionData).apply();
}

export function deleteUserClick(actionData) {
    new DeleteUserClickAction(actionData).apply();
}

export function deleteUserCancel(actionData) {
    new DeleteUserCancelAction(actionData).apply();
}


/*       S.D.G.       */
