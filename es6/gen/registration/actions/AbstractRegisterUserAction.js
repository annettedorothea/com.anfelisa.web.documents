import Action from "../../ace/AsynchronousAction";
import RegisterUserCommand from "../../../src/registration/commands/RegisterUserCommand";
import * as AppState from "../../ace/AppState";

export default class AbstractRegisterUserAction extends Action {

    constructor( password) {
        super({password}, 'registration.RegisterUserAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new RegisterUserCommand(this.actionData);
	}

	preCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: true});
	}
	
	postCall() {
		AppState.set_state_State_displaySpinner({displaySpinner: false});
	}

}

/*       S.D.G.       */
