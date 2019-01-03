import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCategoryClickOkEvent from "../../../gen/category/events/DeleteCategoryClickOkEvent";

export default class AbstractDeleteCategoryClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.DeleteCategoryClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteCategoryClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteCategoryClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
