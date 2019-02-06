import Action from "../../ace/AsynchronousAction";
import InviteUserClickCommand from "../../../src/category/commands/InviteUserClickCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractInviteUserClickAction extends Action {

    constructor() {
        super({}, 'category.InviteUserClickAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new InviteUserClickCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
