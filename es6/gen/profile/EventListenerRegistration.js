import ACEController from "../ace/ACEController";
import ProfileView from "../../src/profile/views/ProfileView";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', ProfileView.render);
		ACEController.registerListener('profile.DeleteUserOkEvent', ProfileView.hideDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserErrorEvent', ProfileView.hideDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserClickOkEvent', ProfileView.displayDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', ProfileView.hideDeleteUserDialog);
	}

}

/*       S.D.G.       */
