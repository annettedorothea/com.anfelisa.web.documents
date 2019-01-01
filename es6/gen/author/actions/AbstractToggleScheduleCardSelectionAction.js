import Action from "../../ace/SynchronousAction";
import ToggleScheduleCardSelectionCommand from "../../../src/author/commands/ToggleScheduleCardSelectionCommand";

export default class AbstractToggleScheduleCardSelectionAction extends Action {

    constructor() {
        super({}, 'author.ToggleScheduleCardSelectionAction');
    }

	getCommand() {
		return new ToggleScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */
