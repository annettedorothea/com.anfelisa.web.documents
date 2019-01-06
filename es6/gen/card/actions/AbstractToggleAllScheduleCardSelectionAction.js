import Action from "../../ace/SynchronousAction";
import ToggleAllScheduleCardSelectionCommand from "../../../src/card/commands/ToggleAllScheduleCardSelectionCommand";

export default class AbstractToggleAllScheduleCardSelectionAction extends Action {

    constructor() {
        super({}, 'card.ToggleAllScheduleCardSelectionAction');
    }
    
	getCommand() {
		return new ToggleAllScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */