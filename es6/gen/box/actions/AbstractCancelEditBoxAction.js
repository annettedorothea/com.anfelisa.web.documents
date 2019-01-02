import Action from "../../ace/SynchronousAction";
import CancelEditBoxCommand from "../../../src/box/commands/CancelEditBoxCommand";

export default class AbstractCancelEditBoxAction extends Action {

    constructor() {
        super({}, 'box.CancelEditBoxAction');
    }
    
	getCommand() {
		return new CancelEditBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
