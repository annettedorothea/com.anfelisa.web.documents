import ACEController from "../ace/ACEController";
import UsernameChangedAction from "../../src/login/actions/UsernameChangedAction";
import ToggleSaveInLocalStorageAction from "../../src/login/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/login/actions/LoginAction";

export default class ActionFactoryRegistrationLogin {

	static init() {
		ACEController.registerFactory('login.UsernameChangedAction', (actionData) => new UsernameChangedAction(actionData));
		ACEController.registerFactory('login.ToggleSaveInLocalStorageAction', (actionData) => new ToggleSaveInLocalStorageAction(actionData));
		ACEController.registerFactory('login.LoginAction', (actionData) => new LoginAction(actionData));
	}

}

/*       S.D.G.       */
