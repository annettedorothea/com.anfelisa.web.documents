import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeselectTreeItemOkEvent from "../../../gen/category/events/DeselectTreeItemOkEvent";

export default class AbstractDeselectTreeItemCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.DeselectTreeItemCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeselectTreeItemOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeselectTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
