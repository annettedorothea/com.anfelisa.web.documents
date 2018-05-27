import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCategoryOkEvent from "../../../src/author/events/EditCategoryOkEvent";

export default class AbstractEditCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.EditCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
