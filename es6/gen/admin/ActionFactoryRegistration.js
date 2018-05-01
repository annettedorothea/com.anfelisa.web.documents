import ACEController from "../ace/ACEController";
import GetAllUsersAction from "../../src/admin/actions/GetAllUsersAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.GetAllUsersAction', (actionParam) => new GetAllUsersAction(actionParam));
	}

}

/*       S.D.G.       */
