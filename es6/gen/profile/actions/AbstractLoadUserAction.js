import Action from "../../ace/AsynchronousAction";
import LoadUserCommand from "../../../src/profile/commands/LoadUserCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractLoadUserAction extends Action {

    constructor() {
        super({}, 'profile.LoadUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadUserCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
