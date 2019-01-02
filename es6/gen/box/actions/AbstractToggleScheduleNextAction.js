import Action from "../../ace/SynchronousAction";
import ToggleScheduleNextCommand from "../../../src/box/commands/ToggleScheduleNextCommand";

export default class AbstractToggleScheduleNextAction extends Action {

    constructor() {
        super({}, 'box.ToggleScheduleNextAction');
    }
    
	getCommand() {
		return new ToggleScheduleNextCommand(this.actionData);
	}


}

/*       S.D.G.       */
