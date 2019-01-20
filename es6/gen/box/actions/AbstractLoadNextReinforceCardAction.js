import Action from "../../ace/AsynchronousAction";
import LoadNextReinforceCardCommand from "../../../src/box/commands/LoadNextReinforceCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadNextReinforceCardAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.LoadNextReinforceCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new LoadNextReinforceCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
