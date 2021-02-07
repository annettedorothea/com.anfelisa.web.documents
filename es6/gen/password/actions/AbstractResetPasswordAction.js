/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import Action from "../../ace/AsynchronousAction";
import ResetPasswordCommand from "../../../src/password/commands/ResetPasswordCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractResetPasswordAction extends Action {

    constructor( password) {
        super({password}, 'password.ResetPasswordAction');
		this.postCall = this.postCall.bind(this);
	}
		
	getCommand() {
		return new ResetPasswordCommand(this.actionData);
	}

	preCall() {
		AppState.set_rootContainer_spinner({spinner: true});
	}
	
	postCall() {
		AppState.set_rootContainer_spinner({spinner: false});
	}

}




/******* S.D.G. *******/



