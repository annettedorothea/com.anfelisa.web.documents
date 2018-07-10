import Action from "../../ace/SynchronousAction";
import ToggleMaxIntervalOfBoxCommand from "../../../src/box/commands/ToggleMaxIntervalOfBoxCommand";

export default class AbstractToggleMaxIntervalOfBoxAction extends Action {

    constructor(actionData) {
        super(actionData, 'box.ToggleMaxIntervalOfBoxAction', false, false);
    }

	getCommand() {
		return new ToggleMaxIntervalOfBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
