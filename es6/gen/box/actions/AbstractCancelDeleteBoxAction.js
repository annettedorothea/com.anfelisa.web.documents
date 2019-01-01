import Action from "../../ace/SynchronousAction";
import CancelDeleteBoxCommand from "../../../src/box/commands/CancelDeleteBoxCommand";

export default class AbstractCancelDeleteBoxAction extends Action {

    constructor() {
        super({}, 'box.CancelDeleteBoxAction');
    }

	getCommand() {
		return new CancelDeleteBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
