import ACEController from "../ace/ACEController";
import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";

export default class ActionFactoryRegistrationProfile {

	static init() {
		ACEController.registerFactory('profile.LoadUserAction', (actionData) => new LoadUserAction(actionData));
		ACEController.registerFactory('profile.DeleteUserAction', (actionData) => new DeleteUserAction(actionData));
	}

}

/*       S.D.G.       */
