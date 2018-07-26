import ACEController from "../ace/ACEController";
import CommonView from "../../src/common/views/CommonView";
import LoginView from "../../src/common/views/LoginView";
import RegistrationView from "../../src/common/views/RegistrationView";
import ForgotPasswordView from "../../src/common/views/ForgotPasswordView";
import ResetPasswordView from "../../src/common/views/ResetPasswordView";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.InitNoUserEvent', CommonView.initTexts);
		ACEController.registerListener('common.RouteChangedLoginEvent', LoginView.render);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', RegistrationView.render);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', ForgotPasswordView.render);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', ResetPasswordView.render);
		ACEController.registerListener('common.RouteOkEvent', CommonView.updateHash);
		ACEController.registerListener('common.UsernameChangedOkEvent', RegistrationView.usernameChanged);
		ACEController.registerListener('common.CheckUsernameAvailableEvent', RegistrationView.usernameAvailable);
		ACEController.registerListener('common.CheckUsernameNotAvailableEvent', RegistrationView.usernameNotAvailable);
		ACEController.registerListener('common.EmailChangedValidEvent', RegistrationView.emailChanged);
		ACEController.registerListener('common.EmailChangedValidEvent', RegistrationView.emailValid);
		ACEController.registerListener('common.EmailChangedInvalidEvent', RegistrationView.emailChanged);
		ACEController.registerListener('common.EmailChangedInvalidEvent', RegistrationView.emailInvalid);
		ACEController.registerListener('common.PasswordChangedMismatchEvent', RegistrationView.passwordMismatch);
		ACEController.registerListener('common.PasswordChangedMatchEvent', RegistrationView.passwordMatch);
		ACEController.registerListener('common.PasswordRepetitionChangedMismatchEvent', RegistrationView.passwordMismatch);
		ACEController.registerListener('common.PasswordRepetitionChangedMatchEvent', RegistrationView.passwordMatch);
		ACEController.registerListener('common.InitialLoginOkEvent', CommonView.initUser);
		ACEController.registerListener('common.InitialLoginUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('common.UsernameChangedInLoginOkEvent', LoginView.usernameChanged);
		ACEController.registerListener('common.ToggleSaveInLocalStorageOkEvent', LoginView.toggleSaveInLocalStorage);
		ACEController.registerListener('common.LoginSaveInLocalStorageEvent', CommonView.initUser);
		ACEController.registerListener('common.LoginSaveInLocalStorageEvent', CommonView.saveInLocalStorage);
		ACEController.registerListener('common.LoginDoNotSaveInLocalStorageEvent', CommonView.initUser);
		ACEController.registerListener('common.LogoutOkEvent', CommonView.resetUser);
		ACEController.registerListener('common.ForgotPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ConfirmEmailErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.ResetPasswordOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ResetPasswordErrorEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayErrorOkEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayErrorAndLogoutOkEvent', CommonView.displayError);
		ACEController.registerListener('common.DisplayMessageOkEvent', CommonView.displayMessage);
		ACEController.registerListener('common.ClearToastOkEvent', CommonView.clearToast);
	}

}

/*       S.D.G.       */
