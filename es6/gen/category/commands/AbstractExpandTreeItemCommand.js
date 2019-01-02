import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ExpandTreeItemOkEvent from "../../../gen/category/events/ExpandTreeItemOkEvent";

export default class AbstractExpandTreeItemCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.ExpandTreeItemCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ExpandTreeItemOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ExpandTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
