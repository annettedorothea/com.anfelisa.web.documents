import ACEController from "../ace/ACEController";
import UsernameChangedAction from "../../src/password/actions/UsernameChangedAction";
import ForgotPasswordAction from "../../src/password/actions/ForgotPasswordAction";
import PasswordChangedAction from "../../src/password/actions/PasswordChangedAction";
import ResetPasswordAction from "../../src/password/actions/ResetPasswordAction";

export default class ActionFactoryRegistrationPassword {

	static init() {
		ACEController.registerFactory('password.UsernameChangedAction', (actionData) => new UsernameChangedAction(actionData));
		ACEController.registerFactory('password.ForgotPasswordAction', (actionData) => new ForgotPasswordAction(actionData));
		ACEController.registerFactory('password.PasswordChangedAction', (actionData) => new PasswordChangedAction(actionData));
		ACEController.registerFactory('password.ResetPasswordAction', (actionData) => new ResetPasswordAction(actionData));
	}

}

/*       S.D.G.       */
