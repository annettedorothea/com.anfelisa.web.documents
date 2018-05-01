import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";

export function getAllUsers(actionParam) {
    new GetAllUsersAction(actionParam).apply();
}

export function saveRole(actionParam) {
    new SaveRoleAction(actionParam).apply();
}

export function deleteUser(actionParam) {
    new DeleteUserAction(actionParam).apply();
}


/*       S.D.G.       */
