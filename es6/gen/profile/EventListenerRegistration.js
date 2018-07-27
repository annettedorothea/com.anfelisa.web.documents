import ACEController from "../ace/ACEController";
import ProfileView from "../../src/profile/views/ProfileView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', ProfileView.render);
		ACEController.registerListener('profile.DeleteUserBadRequestEvent', CommonView.displayError);
		ACEController.registerListener('profile.DeleteUserClickOkEvent', ProfileView.displayDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', ProfileView.hideDeleteUserDialog);
	}

}

/*       S.D.G.       */
