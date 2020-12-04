/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import SynchronousCommand from "../../../gen/ace/SynchronousCommand";
import CategoryNameChangedOkEvent from "../../../gen/category/events/CategoryNameChangedOkEvent";

export default class AbstractCategoryNameChangedCommand extends SynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CategoryNameChangedCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		if (this.commandData.outcomes.includes("ok")) {
			new CategoryNameChangedOkEvent(this.commandData).publish();
		}
    }
}




/******* S.D.G. *******/



