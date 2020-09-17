/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import GetRoleCommand from "../../../src/login/commands/GetRoleCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractGetRoleAction extends Action {

    constructor() {
        super({}, 'login.GetRoleAction');
		this.postCall = this.postCall.bind(this);
		}
		
	getCommand() {
		return new GetRoleCommand(this.actionData);
	}

	preCall() {
		AppState.set_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_displaySpinner({displaySpinner: false});
	}

}




/******* S.D.G. *******/



