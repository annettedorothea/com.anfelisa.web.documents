import Action from "../../ace/SynchronousAction";
import PasswordChangedCommand from "../../../src/common/commands/PasswordChangedCommand";

export default class AbstractPasswordChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.PasswordChangedAction');
    }

	getCommand() {
		return new PasswordChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
