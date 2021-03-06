/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelVersionMismatchDialogOkEvent from "../../../gen/common/events/CancelVersionMismatchDialogOkEvent";

export default class AbstractCancelVersionMismatchDialogCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "common.CancelVersionMismatchDialogCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new CancelVersionMismatchDialogOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



