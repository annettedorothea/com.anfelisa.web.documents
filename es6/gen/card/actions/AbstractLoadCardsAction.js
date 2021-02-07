/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadCardsCommand from "../../../src/card/commands/LoadCardsCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadCardsAction extends Action {

    constructor() {
        super({}, 'card.LoadCardsAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadCardsCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner({spinner: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner({spinner: false});
	}

}




/******* S.D.G. *******/



