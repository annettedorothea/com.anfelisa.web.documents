import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import LoginView from "../../src/login/views/LoginView";
import RegistrationView from "../../src/registration/views/RegistrationView";
import ForgotPasswordView from "../../src/password/views/ForgotPasswordView";
import ResetPasswordView from "../../src/password/views/ResetPasswordView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitUserEvent', CommonView.initUser);
		ACEController.registerListener('common.InitNoUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.RouteChangedLoginEvent', LoginView.render);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', RegistrationView.render);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', ForgotPasswordView.render);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', ResetPasswordView.render);
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.InitialLoginOkEvent', CommonView.initRole);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.resetUser);
		ACEController.registerListener('common.DisplayErrorOkEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayErrorAndLogoutOkEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayMessageOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ClearToastOkEvent', CommonView.clearToast);
	}

}

/*       S.D.G.       */
