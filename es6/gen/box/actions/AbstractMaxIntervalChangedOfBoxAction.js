import Action from "../../ace/SynchronousAction";
import MaxIntervalChangedOfBoxCommand from "../../../src/box/commands/MaxIntervalChangedOfBoxCommand";

export default class AbstractMaxIntervalChangedOfBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.MaxIntervalChangedOfBoxAction', false);
    }

	getCommand() {
		return new MaxIntervalChangedOfBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
