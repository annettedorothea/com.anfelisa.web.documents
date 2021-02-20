/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ChangeCardOrderCommand from "../../../src/card/commands/ChangeCardOrderCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractChangeCardOrderAction extends Action {

    constructor() {
        super({}, 'card.ChangeCardOrderAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ChangeCardOrderCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner_display({display: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner_display({display: false});
	}

}




/******* S.D.G. *******/



