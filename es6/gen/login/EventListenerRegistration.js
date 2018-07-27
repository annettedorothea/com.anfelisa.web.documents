import ACEController from "../ace/ACEController";
import LoginView from "../../src/login/views/LoginView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationLogin {

	static init() {
		ACEController.registerListener('login.UsernameChangedOkEvent', LoginView.usernameChanged);
		ACEController.registerListener('login.ToggleSaveInLocalStorageOkEvent', LoginView.toggleSaveInLocalStorage);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', CommonView.initUser);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', CommonView.saveInLocalStorage);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', CommonView.initUser);
	}

}

/*       S.D.G.       */
