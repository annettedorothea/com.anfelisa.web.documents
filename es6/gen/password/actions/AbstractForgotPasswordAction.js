import Action from "../../ace/AsynchronousAction";
import ForgotPasswordCommand from "../../../src/password/commands/ForgotPasswordCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractForgotPasswordAction extends Action {

    constructor() {
        super({}, 'password.ForgotPasswordAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new ForgotPasswordCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
