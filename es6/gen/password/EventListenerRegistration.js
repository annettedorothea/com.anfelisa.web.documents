import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationPassword {

	static init() {
		ACEController.registerListener('password.UsernameForgotPasswordChangedOkEvent', AppState.set_state_State_data_ForgotPassword_username);
		ACEController.registerListener('password.PasswordChangedOkEvent', AppState.set_state_State_data_ResetPassword_passwordMismatch);
	}

}

/*       S.D.G.       */
