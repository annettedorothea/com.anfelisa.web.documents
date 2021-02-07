/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import ToggleAllScheduleCardSelectionOkEvent from "../../../gen/box/events/ToggleAllScheduleCardSelectionOkEvent";

export default class AbstractToggleAllScheduleCardSelectionCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.ToggleAllScheduleCardSelectionCommand");
        this.commandData.outcomes = [];
        this.commandData.selectedCardIds = AppState.get_rootContainer_allActiveCardsView_selectedCardIds();
        this.commandData.activeCardList = AppState.get_rootContainer_allActiveCardsView_activeCardList();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new ToggleAllScheduleCardSelectionOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



