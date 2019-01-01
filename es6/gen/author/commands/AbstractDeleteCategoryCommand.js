import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCategoryOkEvent from "../../../gen/author/events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "../../../gen/author/events/DeleteCategoryErrorEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.DeleteCategoryCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteCategoryOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction()).publish();
			break;
		case this.error:
			new DeleteCategoryErrorEvent(this.commandData).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish();
			break;
		default:
			throw 'DeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
