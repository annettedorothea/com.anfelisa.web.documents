import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NameOfNewCategoryChangedOkEvent from "../../../gen/author/events/NameOfNewCategoryChangedOkEvent";

export default class AbstractNameOfNewCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.NameOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new NameOfNewCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'NameOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
