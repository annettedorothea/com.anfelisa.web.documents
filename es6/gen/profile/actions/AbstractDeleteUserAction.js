/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/profile/commands/DeleteUserCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractDeleteUserAction extends Action {

    constructor() {
        super({}, 'profile.DeleteUserAction');
		this.postCall = this.postCall.bind(this);
		}
		
	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



