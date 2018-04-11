import ACEController from "../ace/ACEController";
import AdminView from "../../src/admin/views/AdminView";
import ErrorView from "../../src/common/views/ErrorView";
import MessageView from "../../src/common/views/MessageView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationAdmin {

	static init() {
		ACEController.registerListener('admin.LoadAllUsersOkEvent', AdminView.renderAllUsers);
		ACEController.registerListener('admin.LoadAllUsersUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('admin.UpdateUserRoleDefaultAdminEvent', MessageView.renderMessage);
		ACEController.registerListener('admin.UpdateUserRoleUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('admin.UpdatePasswordAdminSelfEvent', CommonView.initUserInLocalStorage);
		ACEController.registerListener('admin.UpdatePasswordAdminUnauthorizedEvent', ErrorView.renderError);
		ACEController.registerListener('admin.DeleteUserAdminDefaultAdminEvent', MessageView.renderMessage);
		ACEController.registerListener('admin.DeleteUserAdminUnauthorizedEvent', ErrorView.renderError);
	}

}

/*       S.D.G.       */
