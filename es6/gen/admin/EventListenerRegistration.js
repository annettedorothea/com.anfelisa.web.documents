import ACEController from "../ace/ACEController";
import * as AppState from "../ace/WriteAppState";

export default class EventListenerRegistrationAdmin {

	static init() {
		ACEController.registerListener('admin.GetAllUsersOkEvent', AppState.set_state_State_data);
		ACEController.registerListener('admin.GetAllUsersOkEvent', AppState.set_state_State_view);
		ACEController.registerListener('admin.DeleteUserErrorEvent', AppState.reset_state_State_data_UserList_usernameToBeDeleted);
		ACEController.registerListener('admin.DeleteUserErrorEvent', AppState.reset_state_State_data_UserList_showDeleteUserDialog);
		ACEController.registerListener('admin.DeleteUserClickOkEvent', AppState.merge_state_State_data);
		ACEController.registerListener('admin.DeleteUserCancelOkEvent', AppState.reset_state_State_data_UserList_usernameToBeDeleted);
		ACEController.registerListener('admin.DeleteUserCancelOkEvent', AppState.reset_state_State_data_UserList_showDeleteUserDialog);
	}

}

/*       S.D.G.       */
