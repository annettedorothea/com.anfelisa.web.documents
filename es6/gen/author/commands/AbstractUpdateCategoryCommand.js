import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCategoryOkEvent from "../../../gen/author/events/UpdateCategoryOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractUpdateCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.UpdateCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UpdateCategoryOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		default:
			throw 'UpdateCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
