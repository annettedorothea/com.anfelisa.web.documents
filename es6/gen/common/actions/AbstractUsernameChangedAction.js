import Action from "../../ace/SynchronousAction";
import UsernameChangedCommand from "../../../src/common/commands/UsernameChangedCommand";

export default class AbstractUsernameChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.UsernameChangedAction');
    }

	getCommand() {
		return new UsernameChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
