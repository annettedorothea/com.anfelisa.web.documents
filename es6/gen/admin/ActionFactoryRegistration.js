import ACEController from "../ace/ACEController";
import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersAction', (actionData) => new GetAllUsersAction(actionData));
		ACEController.registerFactory('admin.SaveRoleAction', (actionData) => new SaveRoleAction(actionData));
		ACEController.registerFactory('admin.DeleteUserAction', (actionData) => new DeleteUserAction(actionData));
	}

}

/*       S.D.G.       */
