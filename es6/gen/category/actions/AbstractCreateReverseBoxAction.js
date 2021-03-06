/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import CreateReverseBoxCommand from "../../../src/category/commands/CreateReverseBoxCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractCreateReverseBoxAction extends Action {

    constructor() {
        super({}, 'category.CreateReverseBoxAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new CreateReverseBoxCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



