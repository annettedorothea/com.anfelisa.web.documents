import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/registration/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.PasswordChangedAction');
    }

	getCommand() {
		return new PasswordChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
