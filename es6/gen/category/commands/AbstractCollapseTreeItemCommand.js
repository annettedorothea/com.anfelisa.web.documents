import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CollapseTreeItemOkEvent from "../../../gen/category/events/CollapseTreeItemOkEvent";
import CollapseTreeItemDeselectCategoryEvent from "../../../gen/category/events/CollapseTreeItemDeselectCategoryEvent";

export default class AbstractCollapseTreeItemCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CollapseTreeItemCommand");
        this.ok = "ok";
        this.deselectCategory = "deselectCategory";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CollapseTreeItemOkEvent(this.commandData).publish();
			break;
		case this.deselectCategory:
			new CollapseTreeItemDeselectCategoryEvent(this.commandData).publish();
			break;
		default:
			throw 'CollapseTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
