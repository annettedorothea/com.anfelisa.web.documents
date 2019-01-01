import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/author/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor() {
        super({}, 'author.ToggleAllScheduleCardSelectionAction');
    }

	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */
