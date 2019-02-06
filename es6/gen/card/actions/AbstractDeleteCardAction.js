import Action from "../../ace/AsynchronousAction";
import DeleteCardCommand from "../../../src/card/commands/DeleteCardCommand";
import * as AppState from "../../ace/WriteAppState";

export default class AbstractDeleteCardAction extends Action {

    constructor() {
        super({}, 'card.DeleteCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new DeleteCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
