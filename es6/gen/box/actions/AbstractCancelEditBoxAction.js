import Action from "../../ace/SynchronousAction";
import CancelEditBoxCommand from "../../../src/box/commands/CancelEditBoxCommand";

export default class AbstractCancelEditBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.CancelEditBoxAction', false);
    }

	getCommand() {
		return new CancelEditBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
