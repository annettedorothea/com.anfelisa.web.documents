import Action from "../../ace/AsynchronousAction";
import InviteUserCommand from "../../../src/category/commands/InviteUserCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractInviteUserAction extends Action {

    constructor( invitedUsername) {
        super({invitedUsername}, 'category.InviteUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InviteUserCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
