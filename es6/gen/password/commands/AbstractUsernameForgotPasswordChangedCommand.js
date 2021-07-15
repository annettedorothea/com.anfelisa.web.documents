/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import SynchronousCommand from "../../ace/SynchronousCommand";
import Event from "../../ace/Event";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";

export default class AbstractUsernameForgotPasswordChangedCommand extends SynchronousCommand {
    constructor() {
        super("password.UsernameForgotPasswordChangedCommand");
    }

    initCommandData(data) {
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('password.UsernameForgotPasswordChangedOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
		}
    }
}




/******* S.D.G. *******/



