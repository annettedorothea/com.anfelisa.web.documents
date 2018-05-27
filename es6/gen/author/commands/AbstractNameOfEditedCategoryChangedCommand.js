import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NameOfEditedCategoryChangedOkEvent from "../../../src/author/events/NameOfEditedCategoryChangedOkEvent";

export default class AbstractNameOfEditedCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.NameOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new NameOfEditedCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'NameOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
