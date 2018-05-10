import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfEditedCategoryChangedOkEvent from "../../../src/author/events/IndexOfEditedCategoryChangedOkEvent";

export default class AbstractIndexOfEditedCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new IndexOfEditedCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'IndexOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
