import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/author/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor(actionData) {
        super(actionData, 'author.ToggleAllScheduleCardSelectionAction', false);
    }

	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */
