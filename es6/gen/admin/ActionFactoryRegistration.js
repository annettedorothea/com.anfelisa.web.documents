import ACEController from "../ace/ACEController";
import LoadAllUsersAction from "../../src/admin/actions/LoadAllUsersAction";

export default class ActionFactoryRegistrationAdmin {

	static init() {
		ACEController.registerFactory('admin.LoadAllUsersAction', (actionParam) => new LoadAllUsersAction(actionParam));
	}

}

/*       S.D.G.       */
