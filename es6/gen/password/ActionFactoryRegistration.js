import ACEController from "../ace/ACEController";
import UsernameChangedAction from "../../src/password/actions/UsernameChangedAction";
import ForgotPasswordAction from "../../src/password/actions/ForgotPasswordAction";
import PasswordChangedAction from "../../src/password/actions/PasswordChangedAction";
import ResetPasswordAction from "../../src/password/actions/ResetPasswordAction";

export default class ActionFactoryRegistrationPassword {

	static init() {
		ACEController.registerFactory('password.UsernameChangedAction', (actionData) => new UsernameChangedAction(actionData, 'password.UsernameChangedAction'));
		ACEController.registerFactory('password.ForgotPasswordAction', (actionData) => new ForgotPasswordAction(actionData, 'password.ForgotPasswordAction'));
		ACEController.registerFactory('password.PasswordChangedAction', (actionData) => new PasswordChangedAction(actionData, 'password.PasswordChangedAction'));
		ACEController.registerFactory('password.ResetPasswordAction', (actionData) => new ResetPasswordAction(actionData, 'password.ResetPasswordAction'));
	}

}

/*       S.D.G.       */
