import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

export default class EventListenerRegistrationCommon {

	static init() {
		ACEController.registerListener('common.InitUserEvent', AppState.set_state_State_loggedInUser);
		ACEController.registerListener('common.InitUserEvent', AppState.set_state_State_language);
		ACEController.registerListener('common.InitUserEvent', AppState.set_state_State_hash);
		ACEController.registerListener('common.InitNoUserEvent', AppState.reset_state_State_loggedInUser);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_state_State_language);
		ACEController.registerListener('common.InitNoUserEvent', AppState.set_state_State_hash);
		ACEController.registerListener('common.RouteChangedLoginEvent', AppState.set_state_State_data);
		ACEController.registerListener('common.RouteChangedLoginEvent', AppState.set_state_State_view);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', AppState.set_state_State_data);
		ACEController.registerListener('common.RouteChangedRegistrationEvent', AppState.set_state_State_view);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', AppState.set_state_State_data);
		ACEController.registerListener('common.RouteChangedForgotPasswordEvent', AppState.set_state_State_view);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', AppState.set_state_State_data);
		ACEController.registerListener('common.RouteChangedResetPasswordEvent', AppState.set_state_State_view);
		ACEController.registerListener('common.RouteOkEvent', AppState.set_state_State_hash);
		ACEController.registerListener('common.InitialLoginOkEvent', AppState.set_state_State_loggedInUser_LoggedInUser_role);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_state_State_loggedInUser);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_state_State_username);
		ACEController.registerListener('common.LogoutOkEvent', AppState.reset_state_State_password);
		ACEController.registerListener('common.DisplayErrorOkEvent', AppState.set_state_State_message);
		ACEController.registerListener('common.DisplayErrorAndLogoutOkEvent', AppState.set_state_State_message);
		ACEController.registerListener('common.DisplayMessageOkEvent', AppState.set_state_State_message);
		ACEController.registerListener('common.ClearToastOkEvent', AppState.reset_state_State_message);
	}

}

/*       S.D.G.       */
