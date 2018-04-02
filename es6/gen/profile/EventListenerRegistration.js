import ACEController from "../ace/ACEController";
import UserInfoView from "../../src/profile/views/UserInfoView";
import ErrorView from "../../src/common/views/ErrorView";
import CommonView from "../../src/common/views/CommonView";
import MessageView from "../../src/common/views/MessageView";
import ValidationView from "../../src/common/views/ValidationView";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.OpenProfileUserInfoReadEvent', UserInfoView.renderUserInfo);
		ACEController.registerListener('profile.OpenProfileErrorEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SaveProfileDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.OpenCourseSelectionCoursesReadEvent', UserInfoView.renderCourseSelection);
		ACEController.registerListener('profile.OpenCourseSelectionErrorEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SaveBoxDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.LoadBoxLoadedEvent', UserInfoView.renderBox);
		ACEController.registerListener('profile.LoadBoxErrorEvent', ErrorView.renderError);
		ACEController.registerListener('profile.OpenBoxCreationOkEvent', UserInfoView.renderBox);
		ACEController.registerListener('profile.LoadCoursesLoadedEvent', UserInfoView.renderCourseToBox);
		ACEController.registerListener('profile.LoadCoursesErrorEvent', ErrorView.renderError);
		ACEController.registerListener('profile.UpdatePasswordDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.UpdatePasswordMismatchEvent', ErrorView.renderError);
		ACEController.registerListener('profile.UpdatePasswordSavedEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('profile.OpenChangePasswordOkEvent', UserInfoView.renderPasswordChange);
		ACEController.registerListener('profile.ValidatePasswordEmptyEvent', UserInfoView.passwordEmpty);
		ACEController.registerListener('profile.ValidatePasswordOkEvent', UserInfoView.passwordOK);
		ACEController.registerListener('profile.ValidatePasswordMismatchEvent', UserInfoView.passwordMismatch);
		ACEController.registerListener('profile.OpenForgotPasswordOkEvent', UserInfoView.renderForgotPassword);
		ACEController.registerListener('profile.SubmitForgotPasswordRequestDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SubmitForgotPasswordRequestOkEvent', MessageView.renderMessage);
		ACEController.registerListener('profile.OpenNewPasswordOkEvent', UserInfoView.renderNewPassword);
		ACEController.registerListener('profile.SubmitNewPasswordDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SubmitNewPasswordMismatchEvent', ErrorView.renderError);
		ACEController.registerListener('profile.OpenRegistrationOkEvent', UserInfoView.renderRegistration);
		ACEController.registerListener('profile.SubmitRegistrationDataInvalidEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SubmitRegistrationMismatchEvent', ErrorView.renderError);
		ACEController.registerListener('profile.SubmitRegistrationSavedEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('profile.SubmitRegistrationErrorEvent', ErrorView.renderError);
		ACEController.registerListener('profile.CheckUsernameEmptyEvent', ValidationView.fieldEmpty);
		ACEController.registerListener('profile.CheckUsernameAvailableEvent', UserInfoView.renderUsernameIsAvailable);
		ACEController.registerListener('profile.CheckUsernameNotAvailableEvent', UserInfoView.renderUsernameIsNotAvailable);
		ACEController.registerListener('profile.ConfirmEmailSavedEvent', CommonView.initUserInLocalStorage);
	}

}

/*       S.D.G.       */
