import Action from "../../ace/SynchronousAction";
import EmailChangedCommand from "../../../src/common/commands/EmailChangedCommand";

export default class AbstractEmailChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.EmailChangedAction');
    }

	getCommand() {
		return new EmailChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
