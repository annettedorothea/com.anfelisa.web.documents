import Action from "../../ace/AsynchronousAction";
import CreateBoxCommand from "../../../src/box/commands/CreateBoxCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractCreateBoxAction extends Action {

    constructor() {
        super({}, 'box.CreateBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CreateBoxCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
