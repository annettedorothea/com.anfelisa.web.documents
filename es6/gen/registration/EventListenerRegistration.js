/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationRegistration {

	static init() {
		ACEController.registerListener('registration.CheckUsernameOkEvent', AppState.set_registrationView_available);
		ACEController.registerListener('registration.UsernameChangedOkEvent', AppState.set_registrationView_username);
		ACEController.registerListener('registration.EmailChangedOkEvent', AppState.set_registrationView_emailInvalid);
		ACEController.registerListener('registration.EmailChangedOkEvent', AppState.set_registrationView_email);
		ACEController.registerListener('registration.PasswordChangedOkEvent', AppState.set_registrationView_passwordMismatch);
	}

}




/******* S.D.G. *******/



