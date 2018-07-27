import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/password/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'password.UsernameChangedAction');
    }

	getCommand() {
		return new UsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
