import Action from "../../ace/AsynchronousAction";
import UpdateBoxCommand from "../../../src/box/commands/UpdateBoxCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractUpdateBoxAction extends Action {

    constructor() {
        super({}, 'box.UpdateBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateBoxCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
