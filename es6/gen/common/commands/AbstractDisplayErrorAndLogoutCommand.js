/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import * as AppState from "../../ace/AppState";
import DisplayErrorAndLogoutOkEvent from "../../../gen/common/events/DisplayErrorAndLogoutOkEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDisplayErrorAndLogoutCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.DisplayErrorAndLogoutCommand");
        this.commandData.outcomes = [];
        this.commandData.language = AppState.get_rootContainer_language();
        this.commandData.texts = AppState.get_rootContainer_texts();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DisplayErrorAndLogoutOkEvent(this.commandData).publish();
			new TriggerAction(new LogoutAction()).publish();
		}
    }
}




/******* S.D.G. *******/



