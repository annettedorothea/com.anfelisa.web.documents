import LoadAllUsersAction from "../../src/admin/actions/LoadAllUsersAction";
import UpdateUserRoleAction from "../../src/admin/actions/UpdateUserRoleAction";
import UpdatePasswordAdminAction from "../../src/admin/actions/UpdatePasswordAdminAction";
import DeleteUserAdminAction from "../../src/admin/actions/DeleteUserAdminAction";

export function loadAllUsers(actionParam) {
    new LoadAllUsersAction(actionParam).apply();
}

export function updateUserRole(actionParam) {
    new UpdateUserRoleAction(actionParam).apply();
}

export function updatePasswordAdmin(actionParam) {
    new UpdatePasswordAdminAction(actionParam).apply();
}

export function deleteUserAdmin(actionParam) {
    new DeleteUserAdminAction(actionParam).apply();
}


/*       S.D.G.       */
