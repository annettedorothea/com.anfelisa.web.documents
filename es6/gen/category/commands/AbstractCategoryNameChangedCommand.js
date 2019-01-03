import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CategoryNameChangedOkEvent from "../../../gen/category/events/CategoryNameChangedOkEvent";

export default class AbstractCategoryNameChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CategoryNameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CategoryNameChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CategoryNameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
