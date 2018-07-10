import Action from "../../ace/SynchronousAction";
import CancelDeleteBoxCommand from "../../../src/box/commands/CancelDeleteBoxCommand";

export default class AbstractCancelDeleteBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.CancelDeleteBoxAction');
    }

	getCommand() {
		return new CancelDeleteBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
