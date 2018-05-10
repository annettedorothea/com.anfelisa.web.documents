import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelNewCategoryOkEvent from "../../../src/author/events/CancelNewCategoryOkEvent";

export default class AbstractCancelNewCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelNewCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelNewCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelNewCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
