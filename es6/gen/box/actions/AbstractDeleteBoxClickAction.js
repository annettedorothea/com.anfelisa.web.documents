import Action from "../../ace/SynchronousAction";
import DeleteBoxClickCommand from "../../../src/box/commands/DeleteBoxClickCommand";

export default class AbstractDeleteBoxClickAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.DeleteBoxClickAction', false);
    }

	getCommand() {
		return new DeleteBoxClickCommand(this.actionData);
	}


}

/*       S.D.G.       */
