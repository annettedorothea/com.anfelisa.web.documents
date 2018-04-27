import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";

export function loadUser(actionParam) {
    new LoadUserAction(actionParam).apply();
}

export function deleteUser(actionParam) {
    new DeleteUserAction(actionParam).apply();
}


/*       S.D.G.       */
