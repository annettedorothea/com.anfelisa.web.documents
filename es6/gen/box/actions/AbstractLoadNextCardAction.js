/********************************************************************************
 * generated by de.acegen 1.0.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import LoadNextCardCommand from "../../../src/box/commands/LoadNextCardCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractLoadNextCardAction extends Action {

    constructor() {
        super({}, 'box.LoadNextCardAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new LoadNextCardCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



