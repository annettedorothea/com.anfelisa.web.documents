import Action from "../../ace/SynchronousAction";
import ToggleMaxIntervalCommand from "../../../src/box/commands/ToggleMaxIntervalCommand";

export default class AbstractToggleMaxIntervalAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ToggleMaxIntervalAction', false);
    }

	getCommand() {
		return new ToggleMaxIntervalCommand(this.actionData);
	}


}

/*       S.D.G.       */
