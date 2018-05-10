import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelDeleteCategoryOkEvent from "../../../src/author/events/CancelDeleteCategoryOkEvent";

export default class AbstractCancelDeleteCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelDeleteCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelDeleteCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelDeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
