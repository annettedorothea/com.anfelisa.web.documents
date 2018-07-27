import ACEController from "../ace/ACEController";
import LoadUserAction from "../../src/profile/actions/LoadUserAction";
import DeleteUserAction from "../../src/profile/actions/DeleteUserAction";
import DeleteUserClickAction from "../../src/profile/actions/DeleteUserClickAction";
import DeleteUserCancelAction from "../../src/profile/actions/DeleteUserCancelAction";

export default class ActionFactoryRegistrationProfile {

	static init() {
		ACEController.registerFactory('profile.LoadUserAction', (actionData) => new LoadUserAction(actionData));
		ACEController.registerFactory('profile.DeleteUserAction', (actionData) => new DeleteUserAction(actionData));
		ACEController.registerFactory('profile.DeleteUserClickAction', (actionData) => new DeleteUserClickAction(actionData));
		ACEController.registerFactory('profile.DeleteUserCancelAction', (actionData) => new DeleteUserCancelAction(actionData));
	}

}

/*       S.D.G.       */
