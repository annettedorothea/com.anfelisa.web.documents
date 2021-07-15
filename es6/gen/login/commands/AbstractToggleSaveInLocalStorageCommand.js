/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";

export default class AbstractToggleSaveInLocalStorageCommand extends SynchronousCommand {
    constructor() {
        super("login.ToggleSaveInLocalStorageCommand");
    }

    initCommandData(data) {
        data.saveInLocalStorage = AppState.get_rootContainer_loginView_saveInLocalStorage();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('login.ToggleSaveInLocalStorageOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
		}
    }
}




/******* S.D.G. *******/



