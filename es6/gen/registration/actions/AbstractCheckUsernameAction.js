import Action from "../../ace/AsynchronousAction";
import CheckUsernameCommand from "../../../src/registration/commands/CheckUsernameCommand";
import RegistrationView from "../../../src/registration/views/RegistrationView";

export default class AbstractCheckUsernameAction extends Action {

    constructor( username) {
        super({username}, 'registration.CheckUsernameAction');
		this.postCall = this.postCall.bind(this);
    }
    
	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

	preCall() {
		RegistrationView.displayUsernameSpinner(this.actionData);
	}
	
	postCall() {
		RegistrationView.hideUsernameSpinner(this.actionData);
	}

}

/*       S.D.G.       */
