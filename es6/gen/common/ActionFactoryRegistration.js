import ACEController from "../ace/ACEController";
import InitAction from "../../src/common/actions/InitAction";
import RouteChangedAction from "../../src/common/actions/RouteChangedAction";
import RouteAction from "../../src/common/actions/RouteAction";
import UsernameChangedAction from "../../src/common/actions/UsernameChangedAction";
import CheckUsernameAction from "../../src/common/actions/CheckUsernameAction";
import EmailChangedAction from "../../src/common/actions/EmailChangedAction";
import PasswordChangedAction from "../../src/common/actions/PasswordChangedAction";
import PasswordRepetitionChangedAction from "../../src/common/actions/PasswordRepetitionChangedAction";
import RegisterUserAction from "../../src/common/actions/RegisterUserAction";
import InitialLoginAction from "../../src/common/actions/InitialLoginAction";
import UsernameChangedInLoginAction from "../../src/common/actions/UsernameChangedInLoginAction";
import ToggleSaveInLocalStorageAction from "../../src/common/actions/ToggleSaveInLocalStorageAction";
import LoginAction from "../../src/common/actions/LoginAction";
import LogoutAction from "../../src/common/actions/LogoutAction";
import ForgotPasswordAction from "../../src/common/actions/ForgotPasswordAction";
import ConfirmEmailAction from "../../src/common/actions/ConfirmEmailAction";
import ResetPasswordAction from "../../src/common/actions/ResetPasswordAction";
import DisplayErrorAction from "../../src/common/actions/DisplayErrorAction";
import DisplayErrorAndLogoutAction from "../../src/common/actions/DisplayErrorAndLogoutAction";
import DisplayMessageAction from "../../src/common/actions/DisplayMessageAction";
import ClearToastAction from "../../src/common/actions/ClearToastAction";

export default class ActionFactoryRegistrationCommon {

	static init() {
		ACEController.registerFactory('common.InitAction', (actionData) => new InitAction(actionData));
		ACEController.registerFactory('common.RouteChangedAction', (actionData) => new RouteChangedAction(actionData));
		ACEController.registerFactory('common.RouteAction', (actionData) => new RouteAction(actionData));
		ACEController.registerFactory('common.UsernameChangedAction', (actionData) => new UsernameChangedAction(actionData));
		ACEController.registerFactory('common.CheckUsernameAction', (actionData) => new CheckUsernameAction(actionData));
		ACEController.registerFactory('common.EmailChangedAction', (actionData) => new EmailChangedAction(actionData));
		ACEController.registerFactory('common.PasswordChangedAction', (actionData) => new PasswordChangedAction(actionData));
		ACEController.registerFactory('common.PasswordRepetitionChangedAction', (actionData) => new PasswordRepetitionChangedAction(actionData));
		ACEController.registerFactory('common.RegisterUserAction', (actionData) => new RegisterUserAction(actionData));
		ACEController.registerFactory('common.InitialLoginAction', (actionData) => new InitialLoginAction(actionData));
		ACEController.registerFactory('common.UsernameChangedInLoginAction', (actionData) => new UsernameChangedInLoginAction(actionData));
		ACEController.registerFactory('common.ToggleSaveInLocalStorageAction', (actionData) => new ToggleSaveInLocalStorageAction(actionData));
		ACEController.registerFactory('common.LoginAction', (actionData) => new LoginAction(actionData));
		ACEController.registerFactory('common.LogoutAction', (actionData) => new LogoutAction(actionData));
		ACEController.registerFactory('common.ForgotPasswordAction', (actionData) => new ForgotPasswordAction(actionData));
		ACEController.registerFactory('common.ConfirmEmailAction', (actionData) => new ConfirmEmailAction(actionData));
		ACEController.registerFactory('common.ResetPasswordAction', (actionData) => new ResetPasswordAction(actionData));
		ACEController.registerFactory('common.DisplayErrorAction', (actionData) => new DisplayErrorAction(actionData));
		ACEController.registerFactory('common.DisplayErrorAndLogoutAction', (actionData) => new DisplayErrorAndLogoutAction(actionData));
		ACEController.registerFactory('common.DisplayMessageAction', (actionData) => new DisplayMessageAction(actionData));
		ACEController.registerFactory('common.ClearToastAction', (actionData) => new ClearToastAction(actionData));
	}

}

/*       S.D.G.       */
