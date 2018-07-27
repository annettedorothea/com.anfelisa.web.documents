import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/registration/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'registration.UsernameChangedAction');
    }

	getCommand() {
		return new UsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
