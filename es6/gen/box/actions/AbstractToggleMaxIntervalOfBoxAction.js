import Action from "../../ace/SynchronousAction";
import ToggleMaxIntervalOfBoxCommand from "../../../src/box/commands/ToggleMaxIntervalOfBoxCommand";

export default class AbstractToggleMaxIntervalOfBoxAction extends Action {

    constructor(actionParam) {
        super(actionParam, 'box.ToggleMaxIntervalOfBoxAction', false);
    }

	getCommand() {
		return new ToggleMaxIntervalOfBoxCommand(this.actionData);
	}


}

/*       S.D.G.       */
