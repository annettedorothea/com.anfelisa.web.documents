/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import MaxCardsPerDayChangedOkEvent from "../../../gen/box/events/MaxCardsPerDayChangedOkEvent";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";

export default class AbstractMaxCardsPerDayChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.MaxCardsPerDayChangedCommand");
        this.commandData.outcomes = [];
        this.commandData.maxInterval = AppState.get_rootContainer_boxSettingsView_maxInterval();
        this.commandData.allActiveCards = AppState.get_rootContainer_boxSettingsView_allActiveCards();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new MaxCardsPerDayChangedOkEvent(this.commandData).publish();
			new TriggerAction(new TooManyCardsStatusAction()).publish();
		}
    }
}




/******* S.D.G. *******/



