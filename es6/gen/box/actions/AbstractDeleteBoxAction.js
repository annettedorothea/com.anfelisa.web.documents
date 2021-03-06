/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import DeleteBoxCommand from "../../../src/box/commands/DeleteBoxCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractDeleteBoxAction extends Action {

    constructor() {
        super({}, 'box.DeleteBoxAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new DeleteBoxCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



