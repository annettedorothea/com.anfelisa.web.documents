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
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
