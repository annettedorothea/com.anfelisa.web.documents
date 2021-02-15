/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import * as AppState from "../../ace/AppState";
import PasswordRepetitionChangedOkEvent from "../../../gen/registration/events/PasswordRepetitionChangedOkEvent";

export default class AbstractPasswordRepetitionChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "registration.PasswordRepetitionChangedCommand");
        this.commandData.outcomes = [];
        this.commandData.password = AppState.get_rootContainer_registrationView_password();
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new PasswordRepetitionChangedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



