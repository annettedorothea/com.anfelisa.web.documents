import ACEController from "../ace/ACEController";
import LoadAllUsersAction from "../../src/admin/actions/LoadAllUsersAction";
import UpdateUserRoleAction from "../../src/admin/actions/UpdateUserRoleAction";
import UpdatePasswordAdminAction from "../../src/admin/actions/UpdatePasswordAdminAction";
import DeleteUserAdminAction from "../../src/admin/actions/DeleteUserAdminAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.LoadAllUsersAction', (actionParam) => new LoadAllUsersAction(actionParam));
		ACEController.registerFactory('admin.UpdateUserRoleAction', (actionParam) => new UpdateUserRoleAction(actionParam));
		ACEController.registerFactory('admin.UpdatePasswordAdminAction', (actionParam) => new UpdatePasswordAdminAction(actionParam));
		ACEController.registerFactory('admin.DeleteUserAdminAction', (actionParam) => new DeleteUserAdminAction(actionParam));
	}

}

/*       S.D.G.       */
