/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import TriggerAction from "../../ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import TooManyCardsStatusAction from "../../../src/box/actions/TooManyCardsStatusAction";

export default class AbstractMaxCardsPerDayChangedCommand extends SynchronousCommand {
    constructor() {
        super("box.MaxCardsPerDayChangedCommand");
    }

    initCommandData(data) {
        data.maxInterval = AppState.get_rootContainer_boxSettingsView_maxInterval();
        data.allActiveCards = AppState.get_rootContainer_boxSettingsView_allActiveCards();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('box.MaxCardsPerDayChangedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publish(
				new TooManyCardsStatusAction(), 
					{
					}
			)
		}
    }
}




/******* S.D.G. *******/



