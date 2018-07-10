import Action from "../../ace/SynchronousAction";
import CancelEditBoxCommand from "../../../src/box/commands/CancelEditBoxCommand";

export default class AbstractCancelEditBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.CancelEditBoxAction', false, false);
    }

	getCommand() {
		return new CancelEditBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
