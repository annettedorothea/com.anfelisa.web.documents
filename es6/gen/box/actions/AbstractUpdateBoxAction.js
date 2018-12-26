import Action from "../../ace/SynchronousAction";
import UpdateBoxCommand from "../../../src/box/commands/UpdateBoxCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractUpdateBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.UpdateBoxAction');
    }

	getCommand() {
		return new UpdateBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
