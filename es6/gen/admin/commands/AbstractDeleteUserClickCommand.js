/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import DeleteUserClickOkEvent from "../../../gen/admin/events/DeleteUserClickOkEvent";

export default class AbstractDeleteUserClickCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "admin.DeleteUserClickCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new DeleteUserClickOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



