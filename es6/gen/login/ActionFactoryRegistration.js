import ACEController from "../ace/ACEController";
import UsernameChangedAction from "../../src/login/actions/UsernameChangedAction";
import ToggleSaveInLocalStorageAction from "../../src/login/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/login/actions/LoginAction";
import GetRoleAction from "../../src/login/actions/GetRoleAction";

export default class ActionFactoryRegistrationLogin {

	static init() {
		ACEController.registerFactory('login.UsernameChangedAction', 
			(actionData) => new UsernameChangedAction(actionData.username));
		ACEController.registerFactory('login.ToggleSaveInLocalStorageAction', 
			(actionData) => new ToggleSaveInLocalStorageAction());
		ACEController.registerFactory('login.LoginAction', 
			(actionData) => new LoginAction(actionData.password));
		ACEController.registerFactory('login.GetRoleAction', 
			(actionData) => new GetRoleAction());
	}

}

/*       S.D.G.       */
