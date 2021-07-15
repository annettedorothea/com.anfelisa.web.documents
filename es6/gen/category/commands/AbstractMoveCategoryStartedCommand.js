/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";

export default class AbstractMoveCategoryStartedCommand extends SynchronousCommand {
    constructor() {
        super("category.MoveCategoryStartedCommand");
    }

    initCommandData(data) {
        data.rootCategory = AppState.get_rootContainer_authorView_categoryTree_rootCategory();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.MoveCategoryStartedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
		}
    }
}




/******* S.D.G. *******/



