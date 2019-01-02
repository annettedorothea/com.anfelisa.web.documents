import ACEController from "../ace/ACEController";
import CheckUsernameAction from "../../src/registration/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/registration/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/registration/actions/PasswordChangedAction";
import RegisterUserAction from "../../src/registration/actions/RegisterUserAction";
import ConfirmEmailAction from "../../src/registration/actions/ConfirmEmailAction";

export default class ActionFactoryRegistrationRegistration {

	static init() {
		ACEController.registerFactory('registration.CheckUsernameAction', (actionData) => new CheckUsernameAction(actionData, 'registration.CheckUsernameAction'));
		ACEController.registerFactory('registration.EmailChangedAction', (actionData) => new EmailChangedAction(actionData, 'registration.EmailChangedAction'));
		ACEController.registerFactory('registration.PasswordChangedAction', (actionData) => new PasswordChangedAction(actionData, 'registration.PasswordChangedAction'));
		ACEController.registerFactory('registration.RegisterUserAction', (actionData) => new RegisterUserAction(actionData, 'registration.RegisterUserAction'));
		ACEController.registerFactory('registration.ConfirmEmailAction', (actionData) => new ConfirmEmailAction(actionData, 'registration.ConfirmEmailAction'));
	}

}

/*       S.D.G.       */
