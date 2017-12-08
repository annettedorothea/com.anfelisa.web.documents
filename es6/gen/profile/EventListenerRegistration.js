import ACEController from "../ace/ACEController";
import UserInfoView from "../../src/profile/views/UserInfoView";

export default class EventListenerRegistrationProfile {

	static init() {
	    	ACEController.registerListener('profile.UserInfoLoadedEvent', UserInfoView.renderUserInfo);
	    	ACEController.registerListener('profile.CoursesLoadedEvent', UserInfoView.renderCourseSelection);
	    	ACEController.registerListener('profile.RenderBoxEvent', UserInfoView.renderBox);
	    	ACEController.registerListener('profile.RenderCourseToBoxEvent', UserInfoView.renderCourseToBox);
	    	ACEController.registerListener('profile.RenderChangePasswordEvent', UserInfoView.renderPasswordChange);
	    	ACEController.registerListener('profile.PasswordsOKEvent', UserInfoView.passwordOK);
	    	ACEController.registerListener('profile.PasswordsMismatchEvent', UserInfoView.passwordMismatch);
	    	ACEController.registerListener('profile.RenderForgotPasswordEvent', UserInfoView.renderForgotPassword);
	    	ACEController.registerListener('profile.RenderNewPasswordEvent', UserInfoView.renderNewPassword);
	    	ACEController.registerListener('profile.RenderRegistrationEvent', UserInfoView.renderRegistration);
	    	ACEController.registerListener('profile.UsernameIsAvailableEvent', UserInfoView.renderUsernameIsAvailable);
	    	ACEController.registerListener('profile.UsernameIsNotAvailableEvent', UserInfoView.renderUsernameIsNotAvailable);
	    	ACEController.registerListener('profile.PasswordEmptyEvent', UserInfoView.passwordEmpty);
	}

}

/*       S.D.G.       */
