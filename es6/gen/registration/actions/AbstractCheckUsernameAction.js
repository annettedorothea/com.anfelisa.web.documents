import Action from "../../ace/AsynchronousAction";
import CheckUsernameCommand from "../../../src/registration/commands/CheckUsernameCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractCheckUsernameAction extends Action {

    constructor() {
        super({}, 'registration.CheckUsernameAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_data_Registration_displayUsernameSpinner({displayUsernameSpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_data_Registration_displayUsernameSpinner({displayUsernameSpinner: false});
	}

}

/*       S.D.G.       */
