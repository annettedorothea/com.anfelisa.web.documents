import Action from "../../ace/SynchronousAction";
import DisplayMessageCommand from "../../../src/common/commands/DisplayMessageCommand";

export default class AbstractDisplayMessageAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'common.DisplayMessageAction', false);
    }

	getCommand() {
		return new DisplayMessageCommand(this.actionData);
	}


}

/*       S.D.G.       */
