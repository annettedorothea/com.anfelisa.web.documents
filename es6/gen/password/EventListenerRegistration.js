import ACEController from "../ace/ACEController";
import ForgotPasswordView from "../../src/password/views/ForgotPasswordView";
import ResetPasswordView from "../../src/password/views/ResetPasswordView";

export default class EventListenerRegistrationPassword {

	static init() {
		ACEController.registerListener('password.UsernameChangedOkEvent', ForgotPasswordView.usernameChanged);
		ACEController.registerListener('password.PasswordChangedMismatchEvent', ResetPasswordView.passwordMismatch);
		ACEController.registerListener('password.PasswordChangedMatchEvent', ResetPasswordView.passwordMatch);
	}

}

/*       S.D.G.       */
