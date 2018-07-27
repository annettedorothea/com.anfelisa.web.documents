import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/admin/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/admin/actions/DeleteUserCancelAction";

export function getAllUsers(actionData) {
    new GetAllUsersAction(actionData).apply();
}

export function saveRole(actionData) {
    new SaveRoleAction(actionData).apply();
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
