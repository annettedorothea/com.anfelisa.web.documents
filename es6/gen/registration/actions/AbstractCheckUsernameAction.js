import Action from "../../ace/SynchronousAction";
import CheckUsernameCommand from "../../../src/registration/commands/CheckUsernameCommand";
import RegistrationView from "../../../src/registration/views/RegistrationView";

export default class AbstractCheckUsernameAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.CheckUsernameAction');
    }

	getCommand() {
		return new CheckUsernameCommand(this.actionData);
	}


}

/*       S.D.G.       */
