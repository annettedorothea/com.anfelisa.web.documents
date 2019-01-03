import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NameOfNewCategoryChangedOkEvent from "../../../gen/category/events/NameOfNewCategoryChangedOkEvent";

export default class AbstractNameOfNewCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.NameOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new NameOfNewCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'NameOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
