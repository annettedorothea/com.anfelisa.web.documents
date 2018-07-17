import Action from "../../ace/SynchronousAction";
import ClearToastCommand from "../../../src/common/commands/ClearToastCommand";

export default class AbstractClearToastAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.ClearToastAction');
    }

	getCommand() {
		return new ClearToastCommand(this.actionData);
	}


}

/*       S.D.G.       */
