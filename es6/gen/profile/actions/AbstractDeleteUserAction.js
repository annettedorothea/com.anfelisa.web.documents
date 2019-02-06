import Action from "../../ace/AsynchronousAction";
import DeleteUserCommand from "../../../src/profile/commands/DeleteUserCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractDeleteUserAction extends Action {

    constructor( usernameToBeDeleted) {
        super({usernameToBeDeleted}, 'profile.DeleteUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteUserCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
