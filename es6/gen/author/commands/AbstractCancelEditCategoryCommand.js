import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelEditCategoryOkEvent from "../../../src/author/events/CancelEditCategoryOkEvent";

export default class AbstractCancelEditCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.CancelEditCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelEditCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelEditCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
