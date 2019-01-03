import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCategoryClickOkEvent from "../../../gen/category/events/EditCategoryClickOkEvent";

export default class AbstractEditCategoryClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.EditCategoryClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditCategoryClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditCategoryClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
