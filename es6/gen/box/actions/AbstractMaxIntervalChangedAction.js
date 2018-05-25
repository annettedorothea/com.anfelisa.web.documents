import Action from "../../ace/SynchronousAction";
import MaxIntervalChangedCommand from "../../../src/box/commands/MaxIntervalChangedCommand";

export default class AbstractMaxIntervalChangedAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.MaxIntervalChangedAction', false);
    }

	getCommand() {
		return new MaxIntervalChangedCommand(this.actionData);
	}


}

/*       S.D.G.       */
