import Action from "../../ace/AsynchronousAction";
import PostponeCardsOfBoxCommand from "../../../src/box/commands/PostponeCardsOfBoxCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractPostponeCardsOfBoxAction extends Action {

    constructor( boxId) {
        super({boxId}, 'box.PostponeCardsOfBoxAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new PostponeCardsOfBoxCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
