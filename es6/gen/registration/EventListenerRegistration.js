import ACEController from "../ace/ACEController";
import RegistrationView from "../../src/registration/views/RegistrationView";

export default class EventListenerRegistrationRegistration {

	static init() {
		ACEController.registerListener('registration.UsernameChangedOkEvent', RegistrationView.usernameChanged);
		ACEController.registerListener('registration.CheckUsernameAvailableEvent', RegistrationView.usernameAvailable);
		ACEController.registerListener('registration.CheckUsernameNotAvailableEvent', RegistrationView.usernameNotAvailable);
		ACEController.registerListener('registration.EmailChangedValidEvent', RegistrationView.emailChanged);
		ACEController.registerListener('registration.EmailChangedValidEvent', RegistrationView.emailValid);
		ACEController.registerListener('registration.EmailChangedInvalidEvent', RegistrationView.emailChanged);
		ACEController.registerListener('registration.EmailChangedInvalidEvent', RegistrationView.emailInvalid);
		ACEController.registerListener('registration.PasswordChangedMismatchEvent', RegistrationView.passwordMismatch);
		ACEController.registerListener('registration.PasswordChangedMatchEvent', RegistrationView.passwordMatch);
	}

}

/*       S.D.G.       */
