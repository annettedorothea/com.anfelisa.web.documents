import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";

export function getAllUsers(actionData) {
    new GetAllUsersAction(actionData).apply();
}

export function saveRole(actionData) {
    new SaveRoleAction(actionData).apply();
}

export function deleteUser(actionData) {
    new DeleteUserAction(actionData).apply();
}


/*       S.D.G.       */
