import Action from "../../ace/AsynchronousAction";
import CreateCardCommand from "../../../src/card/commands/CreateCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractCreateCardAction extends Action {

    constructor() {
        super({}, 'card.CreateCardAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CreateCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
