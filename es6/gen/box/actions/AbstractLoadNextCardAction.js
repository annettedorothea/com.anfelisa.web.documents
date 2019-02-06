import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractLoadNextCardAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.LoadNextCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
