import Action from "../../ace/SynchronousAction";
import DisplayErrorCommand from "../../../src/common/commands/DisplayErrorCommand";

export default class AbstractDisplayErrorAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.DisplayErrorAction');
    }

	getCommand() {
		return new DisplayErrorCommand(this.actionData);
	}


}

/*       S.D.G.       */
