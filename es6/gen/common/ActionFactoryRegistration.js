import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import RegisterUserAction from "../../src/common/actions/RegisterUserAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import ForgotPasswordAction from "../../src/common/actions/ForgotPasswordAction";
import ConfirmEmailAction from "../../src/common/actions/ConfirmEmailAction";
import ResetPasswordAction from "../../src/common/actions/ResetPasswordAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', (actionData) => new InitAction(actionData));
		ACEController.registerFactory('common.RouteChangedAction', (actionData) => new RouteChangedAction(actionData));
		ACEController.registerFactory('common.RouteAction', (actionData) => new RouteAction(actionData));
		ACEController.registerFactory('common.CheckUsernameAction', (actionData) => new CheckUsernameAction(actionData));
		ACEController.registerFactory('common.RegisterUserAction', (actionData) => new RegisterUserAction(actionData));
		ACEController.registerFactory('common.LoginAction', (actionData) => new LoginAction(actionData));
		ACEController.registerFactory('common.LogoutAction', (actionData) => new LogoutAction(actionData));
		ACEController.registerFactory('common.ForgotPasswordAction', (actionData) => new ForgotPasswordAction(actionData));
		ACEController.registerFactory('common.ConfirmEmailAction', (actionData) => new ConfirmEmailAction(actionData));
		ACEController.registerFactory('common.ResetPasswordAction', (actionData) => new ResetPasswordAction(actionData));
		ACEController.registerFactory('common.DisplayErrorAction', (actionData) => new DisplayErrorAction(actionData));
		ACEController.registerFactory('common.DisplayMessageAction', (actionData) => new DisplayMessageAction(actionData));
	}

}

/*       S.D.G.       */
