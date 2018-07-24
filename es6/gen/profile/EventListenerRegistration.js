import ACEController from "../ace/ACEController";
import ProfileView from "../../src/profile/views/ProfileView";
import CommonView from "../../src/common/views/CommonView";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', ProfileView.render);
		ACEController.registerListener('profile.LoadUserUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('profile.DeleteUserUnauthorizedEvent', CommonView.displayError);
		ACEController.registerListener('profile.DeleteUserBadRequestEvent', CommonView.displayError);
	}

}

/*       S.D.G.       */
