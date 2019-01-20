import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('profile.LoadUserOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('profile.DeleteUserOkEvent', AppState.reset_state_State_data_Profile_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserErrorEvent', AppState.reset_state_State_data_Profile_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserClickOkEvent', AppState.set_state_State_data_Profile_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', AppState.reset_state_State_data_Profile_showDeleteUserDialog);
	}

}

/*       S.D.G.       */
