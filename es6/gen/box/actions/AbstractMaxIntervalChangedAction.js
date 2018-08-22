import Action from "../../ace/SynchronousAction";
import MaxIntervalChangedCommand from "../../../src/box/commands/MaxIntervalChangedCommand";

export default class AbstractMaxIntervalChangedAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.MaxIntervalChangedAction');
    }

	getCommand() {
		return new MaxIntervalChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
