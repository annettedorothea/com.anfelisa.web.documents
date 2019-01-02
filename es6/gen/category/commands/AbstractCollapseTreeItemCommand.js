import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CollapseTreeItemOkEvent from "../../../gen/category/events/CollapseTreeItemOkEvent";

export default class AbstractCollapseTreeItemCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CollapseTreeItemCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CollapseTreeItemOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CollapseTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
