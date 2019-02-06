import Action from "../../ace/AsynchronousAction";
import UpdateCardCommand from "../../../src/card/commands/UpdateCardCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractUpdateCardAction extends Action {

    constructor() {
        super({}, 'card.UpdateCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new UpdateCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
