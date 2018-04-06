import ACEController from "../ace/ACEController";
import AdminView from "../../src/admin/views/AdminView";
import ErrorView from "../../src/common/views/ErrorView";

export default class EventListenerRegistrationAdmin {

	static init() {
		ACEController.registerListener('admin.LoadAllUsersOkEvent', AdminView.renderAllUsers);
		ACEController.registerListener('admin.LoadAllUsersUnauthorizedEvent', ErrorView.renderError);
	}

}

/*       S.D.G.       */
