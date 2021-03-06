/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import ACEController from "../ace/ACEController";
import * as AppState from "../ace/AppState";

export default class EventListenerRegistrationProfile {

	static init() {
		ACEController.registerListener('profile.LoadUserOkEvent', AppState.set_profileView);
		ACEController.registerListener('profile.DeleteUserOkEvent', AppState.set_profileView_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserErrorEvent', AppState.set_profileView_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserClickOkEvent', AppState.set_profileView_showDeleteUserDialog);
		ACEController.registerListener('profile.DeleteUserCancelOkEvent', AppState.set_profileView_showDeleteUserDialog);
	}

}




/******* S.D.G. *******/



