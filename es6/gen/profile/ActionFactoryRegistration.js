import ACEController from "../ace/ACEController";
import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";

export default class ActionFactoryRegistrationProfile {

	static init() {
		ACEController.registerFactory('profile.LoadUserAction', (actionParam) => new LoadUserAction(actionParam));
		ACEController.registerFactory('profile.DeleteUserAction', (actionParam) => new DeleteUserAction(actionParam));
	}

}

/*       S.D.G.       */
