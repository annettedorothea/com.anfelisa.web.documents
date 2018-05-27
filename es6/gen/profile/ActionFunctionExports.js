import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";

export function loadUser(actionData) {
    new LoadUserAction(actionData).apply();
}

export function deleteUser(actionData) {
    new DeleteUserAction(actionData).apply();
}


/*       S.D.G.       */
