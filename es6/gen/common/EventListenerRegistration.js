/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', AppState.set_loggedInUser);
		ACEController.registerListener('common.InitUserEvent', AppState.set_language);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_loggedInUser);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_language);
		ACEController.registerListener('common.RouteChangedLoginEvent', AppState.set_loginView);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', AppState.set_registrationView);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', AppState.set_forgotPasswordView);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', AppState.set_resetPasswordView);
		ACEController.registerListener('common.RouteChangedCategoriesEvent', AppState.set_authorView_filterNonScheduled);
		ACEController.registerListener('common.RouteChangedCategoriesEvent', AppState.set_authorView_priority);
		ACEController.registerListener('common.RouteChangedNextCardEvent', AppState.set_cardView_boxId);
		ACEController.registerListener('common.RouteChangedBoxSettingsEvent', AppState.set_boxSettingsView_boxId);
		ACEController.registerListener('common.RouteChangedAllActiveCardsEvent', AppState.set_allActiveCardsView_boxId);
		ACEController.registerListener('common.RouteChangedBoxCreateEvent', AppState.set_boxSettingsView);
		ACEController.registerListener('common.RouteOkEvent', AppState.set_hash);
		ACEController.registerListener('common.InitialLoginOkEvent', AppState.set_loggedInUser_role);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_loggedInUser);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_username);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_password);
		ACEController.registerListener('common.DisplayErrorOkEvent', AppState.set_message);
		ACEController.registerListener('common.DisplayErrorAndLogoutOkEvent', AppState.set_message);
		ACEController.registerListener('common.DisplayMessageOkEvent', AppState.set_message);
		ACEController.registerListener('common.ClearToastOkEvent', AppState.set_message);
		ACEController.registerListener('common.DisplaySaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
		ACEController.registerListener('common.CancelSaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
		ACEController.registerListener('common.HideSaveBugDialogOkEvent', AppState.set_displaySaveBugDialog);
	}

}




/******* S.D.G. *******/



