import ACEController from "../ace/ACEController";
import UserListView from "../../src/admin/views/UserListView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationAdmin {

	static init() {
		ACEController.registerListener('admin.GetAllUsersOkEvent', UserListView.render);
		ACEController.registerListener('admin.GetAllUsersUnauthorizedEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
