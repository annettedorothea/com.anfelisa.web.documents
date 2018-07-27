import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/login/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'login.UsernameChangedAction');
    }

	getCommand() {
		return new UsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
