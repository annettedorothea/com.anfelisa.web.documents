/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import TriggerAction from "../../ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractHideSaveBugDialogCommand extends SynchronousCommand {
    constructor() {
        super("common.HideSaveBugDialogCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('common.HideSaveBugDialogOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publish(
				new DisplayToastAction(), 
					{
						message: data.message
					}
			)
		}
    }
}




/******* S.D.G. *******/



