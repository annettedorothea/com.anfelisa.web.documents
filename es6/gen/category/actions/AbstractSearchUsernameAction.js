/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import SearchUsernameCommand from "../../../src/category/commands/SearchUsernameCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractSearchUsernameAction extends Action {

    constructor() {
        super({}, 'category.SearchUsernameAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new SearchUsernameCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



