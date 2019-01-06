import Action from "../../ace/SynchronousAction";
import ToggleScheduleCardSelectionCommand from "../../../src/card/commands/ToggleScheduleCardSelectionCommand";

export default class AbstractToggleScheduleCardSelectionAction extends Action {

    constructor( cardId) {
        super({cardId}, 'card.ToggleScheduleCardSelectionAction');
    }
    
	getCommand() {
		return new ToggleScheduleCardSelectionCommand(this.actionData);
	}


}

/*       S.D.G.       */