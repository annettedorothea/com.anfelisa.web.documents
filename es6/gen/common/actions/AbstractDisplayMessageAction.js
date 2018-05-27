import Action from "../../ace/SynchronousAction";
import DisplayMessageCommand from "../../../src/common/commands/DisplayMessageCommand";

export default class AbstractDisplayMessageAction extends Action {

    constructor(actionData) {
        super(actionData, 'common.DisplayMessageAction', false);
    }

	getCommand() {
		return new DisplayMessageCommand(this.actionData);
	}


}

/*       S.D.G.       */
