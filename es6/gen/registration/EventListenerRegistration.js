import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationRegistration {

	static init() {
		ACEController.registerListener('registration.CheckUsernameOkEvent', AppState.set_state_State_data_Registration_available);
		ACEController.registerListener('registration.UsernameChangedOkEvent', AppState.set_state_State_data_Registration_username);
		ACEController.registerListener('registration.EmailChangedOkEvent', AppState.set_state_State_data_Registration_emailInvalid);
		ACEController.registerListener('registration.EmailChangedOkEvent', AppState.set_state_State_data_Registration_email);
		ACEController.registerListener('registration.PasswordChangedOkEvent', AppState.set_state_State_data_Registration_passwordMismatch);
	}

}

/*       S.D.G.       */
