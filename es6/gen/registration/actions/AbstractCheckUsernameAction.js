import Action from "../../ace/AsynchronousAction";
import CheckUsernameCommand from "../../../src/registration/commands/CheckUsernameCommand";
import RegistrationView from "../../../src/registration/views/RegistrationView";

export default class AbstractCheckUsernameAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.CheckUsernameAction');
		this.postUpdateUI = this.postUpdateUI.bind(this);
    }

	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}

		preUpdateUI() {
			RegistrationView.displayUsernameSpinner(this.actionData);
		}
	
		postUpdateUI() {
			RegistrationView.hideUsernameSpinner(this.actionData);
		}

}

/*       S.D.G.       */
