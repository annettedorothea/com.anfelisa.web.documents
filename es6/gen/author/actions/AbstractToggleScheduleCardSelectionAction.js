import Action from "../../ace/SynchronousAction";
import ToggleScheduleCardSelectionCommand from "../../../src/author/commands/ToggleScheduleCardSelectionCommand";

export default class AbstractToggleScheduleCardSelectionAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ToggleScheduleCardSelectionAction', false);
    }

	getCommand() {
		return new ToggleScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */
