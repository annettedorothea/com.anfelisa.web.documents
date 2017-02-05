'use strict';

class EventListenerRegistrationProfile {

	static init() {
    	ACEController.registerListener('UserInfoLoadedEvent', UserInfoView.renderUserInfo);
    	ACEController.registerListener('CoursesLoadedEvent', UserInfoView.renderCourseSelection);
    	ACEController.registerListener('RenderBoxEvent', UserInfoView.renderBox);
    	ACEController.registerListener('RenderCourseToBoxEvent', UserInfoView.renderCourseToBox);
    	ACEController.registerListener('RenderChangePasswordEvent', UserInfoView.renderPasswordChange);
    	ACEController.registerListener('PasswordsOKEvent', UserInfoView.passwordOK);
    	ACEController.registerListener('PasswordsMismatchEvent', UserInfoView.passwordMismatch);
    	ACEController.registerListener('RenderForgotPasswordEvent', UserInfoView.renderForgotPassword);
    	ACEController.registerListener('RenderNewPasswordEvent', UserInfoView.renderNewPassword);
    	ACEController.registerListener('RenderRegistrationEvent', UserInfoView.renderRegistration);
    	ACEController.registerListener('UsernameIsAvailableEvent', UserInfoView.renderUsernameIsAvailable);
    	ACEController.registerListener('UsernameIsNotAvailableEvent', UserInfoView.renderUsernameIsNotAvailable);
    	ACEController.registerListener('PasswordEmptyEvent', UserInfoView.passwordEmpty);
	}

}

EventListenerRegistrationProfile.init();

/*       S.D.G.       */
