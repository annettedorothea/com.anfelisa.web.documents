import ACEController from "../ace/ACEController";
import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";
import SaveRoleAction from "../../src/admin/actions/SaveRoleAction";
import DeleteUserAction from "../../src/admin/actions/DeleteUserAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersAction', (actionParam) => new GetAllUsersAction(actionParam));
		ACEController.registerFactory('admin.SaveRoleAction', (actionParam) => new SaveRoleAction(actionParam));
		ACEController.registerFactory('admin.DeleteUserAction', (actionParam) => new DeleteUserAction(actionParam));
	}

}

/*       S.D.G.       */
