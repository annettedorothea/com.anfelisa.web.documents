/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CancelDeleteCategoryOkEvent from "../../../gen/category/events/CancelDeleteCategoryOkEvent";

export default class AbstractCancelDeleteCategoryCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CancelDeleteCategoryCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new CancelDeleteCategoryOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



