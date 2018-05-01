import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import LoginView from "../../src/common/views/LoginView";
import RegistrationView from "../../src/common/views/RegistrationView";
import ForgotPasswordView from "../../src/common/views/ForgotPasswordView";
import ResetPasswordView from "../../src/common/views/ResetPasswordView";
import DashboardView from "../../src/common/views/DashboardView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitNoUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.RouteChangedLoginEvent', LoginView.render);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', RegistrationView.render);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', ForgotPasswordView.render);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', ResetPasswordView.render);
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.CheckUsernameAvailableEvent', RegistrationView.usernameAvailable);
		ACEController.registerListener('common.CheckUsernameNotAvailableEvent', RegistrationView.usernameNotAvailable);
		ACEController.registerListener('common.RegisterUserOkEvent', CommonView.initUser);
		ACEController.registerListener('common.RegisterUserErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.LoginOkEvent', CommonView.initUser);
		ACEController.registerListener('common.LoginUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('common.LoadDashboardOkEvent', DashboardView.render);
		ACEController.registerListener('common.LoadDashboardOkEvent', CommonView.initRole);
		ACEController.registerListener('common.LoadDashboardUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.resetUser);
		ACEController.registerListener('common.ForgotPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.ResetPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ResetPasswordErrorEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
