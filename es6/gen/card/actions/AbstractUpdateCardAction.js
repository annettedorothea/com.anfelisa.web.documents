/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import UpdateCardCommand from "../../../src/card/commands/UpdateCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractUpdateCardAction extends Action {

    constructor() {
        super({}, 'card.UpdateCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new UpdateCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner({spinner: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner({spinner: false});
	}

}




/******* S.D.G. *******/



