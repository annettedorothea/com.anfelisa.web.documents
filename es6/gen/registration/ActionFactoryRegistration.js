import ACEController from "../ace/ACEController";
import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export default class ActionFactoryRegistrationRegistration {

	static init() {
		ACEController.registerFactory('registration.CheckUsernameAction', 
			(actionData) => new CheckUsernameAction(actionData.username));
		ACEController.registerFactory('registration.EmailChangedAction', 
			(actionData) => new EmailChangedAction(actionData.email));
		ACEController.registerFactory('registration.PasswordChangedAction', 
			(actionData) => new PasswordChangedAction(actionData.password, actionData.passwordRepetition));
		ACEController.registerFactory('registration.RegisterUserAction', 
			(actionData) => new RegisterUserAction(actionData.username, actionData.password));
		ACEController.registerFactory('registration.ConfirmEmailAction', 
			(actionData) => new ConfirmEmailAction(actionData.username, actionData.token));
	}

}

/*       S.D.G.       */
