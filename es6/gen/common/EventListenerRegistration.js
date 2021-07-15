/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import * as ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', AppState.set_rootContainer_loggedInUser);
		ACEController.registerListener('common.InitUserEvent', AppState.set_rootContainer_language);
		ACEController.registerListener('common.InitUserEvent', AppState.set_rootContainer_messages);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_rootContainer_loggedInUser);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_rootContainer_language);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_rootContainer_messages);
		ACEController.registerListener('common.RouteChangedLoginEvent', AppState.set_rootContainer_loginView);
		ACEController.registerListener('common.RouteChangedPrivacyPolicyEvent', AppState.set_rootContainer_privacyPolicyView);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', AppState.set_rootContainer_registrationView);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', AppState.set_rootContainer_forgotPasswordView);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', AppState.set_rootContainer_resetPasswordView);
		ACEController.registerListener('common.RouteChangedDashboardEvent', AppState.set_rootContainer_dashboardView);
		ACEController.registerListener('common.RouteChangedCategoriesEvent', AppState.set_rootContainer_authorView);
		ACEController.registerListener('common.RouteChangedProfileEvent', AppState.set_rootContainer_profileView);
		ACEController.registerListener('common.RouteChangedNextCardEvent', AppState.set_rootContainer_queryCardView);
		ACEController.registerListener('common.RouteChangedBoxSettingsEvent', AppState.set_rootContainer_boxSettingsView);
		ACEController.registerListener('common.RouteChangedAllActiveCardsEvent', AppState.set_rootContainer_allActiveCardsView);
		ACEController.registerListener('common.RouteChangedBoxCreateEvent', AppState.set_rootContainer_boxSettingsView);
		ACEController.registerListener('common.RouteOkEvent', AppState.set_rootContainer_hash);
		ACEController.registerListener('common.InitialLoginOkEvent', AppState.set_rootContainer_role);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_rootContainer_loggedInUser);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_rootContainer_username);
		ACEController.registerListener('common.LogoutOkEvent', AppState.set_rootContainer_password);
		ACEController.registerListener('common.DisplayToastOkEvent', AppState.set_rootContainer_messages);
		ACEController.registerListener('common.HideToastOkEvent', AppState.set_rootContainer_messages);
		ACEController.registerListener('common.DestroyToastOkEvent', AppState.set_rootContainer_messages);
		ACEController.registerListener('common.DisplaySaveBugDialogOkEvent', AppState.set_rootContainer_saveBugDialog_display);
		ACEController.registerListener('common.DisplayVersionMismatchDialogOkEvent', AppState.set_rootContainer_versionMismatchDialog_display);
		ACEController.registerListener('common.CancelVersionMismatchDialogOkEvent', AppState.set_rootContainer_versionMismatchDialog_display);
		ACEController.registerListener('common.DisplayVersionMismatchErrorDialogOkEvent', AppState.set_rootContainer_versionMismatchDialog_display);
		ACEController.registerListener('common.CancelSaveBugDialogOkEvent', AppState.set_rootContainer_saveBugDialog_display);
		ACEController.registerListener('common.HideSaveBugDialogOkEvent', AppState.set_rootContainer_saveBugDialog_display);
	}

}




/******* S.D.G. *******/



