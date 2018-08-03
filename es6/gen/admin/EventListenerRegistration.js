import ACEController from "../ace/ACEController";
import UserListView from "../../src/admin/views/UserListView";

export default class EventListenerRegistrationAdmin {

	static init() {
		ACEController.registerListener('admin.GetAllUsersOkEvent', UserListView.render);
		ACEController.registerListener('admin.DeleteUserErrorEvent', UserListView.hideDeleteUserDialog);
		ACEController.registerListener('admin.DeleteUserClickOkEvent', UserListView.displayDeleteUserDialog);
		ACEController.registerListener('admin.DeleteUserCancelOkEvent', UserListView.hideDeleteUserDialog);
	}

}

/*       S.D.G.       */
