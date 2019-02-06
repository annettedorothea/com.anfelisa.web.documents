import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

export default class EventListenerRegistrationLogin {

	static init() {
		ACEController.registerListener('login.UsernameChangedOkEvent', AppState.set_state_State_data_Login_username);
		ACEController.registerListener('login.ToggleSaveInLocalStorageOkEvent', AppState.set_state_State_data_Login_saveInLocalStorage);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_loggedInUser);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_username);
		ACEController.registerListener('login.LoginSaveInLocalStorageEvent', AppState.set_state_State_password);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.set_state_State_loggedInUser);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.reset_state_State_username);
		ACEController.registerListener('login.LoginDoNotSaveInLocalStorageEvent', AppState.reset_state_State_password);
		ACEController.registerListener('login.GetRoleOkEvent', AppState.merge_state_State_loggedInUser);
	}

}

/*       S.D.G.       */
