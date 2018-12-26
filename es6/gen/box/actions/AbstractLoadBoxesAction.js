import Action from "../../ace/SynchronousAction";
import LoadBoxesCommand from "../../../src/box/commands/LoadBoxesCommand";
import CommonView from "../../../src/common/views/CommonView";

export default class AbstractLoadBoxesAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.LoadBoxesAction');
    }

	getCommand() {
		return new LoadBoxesCommand(this.actionData);
	}


}

/*       S.D.G.       */
