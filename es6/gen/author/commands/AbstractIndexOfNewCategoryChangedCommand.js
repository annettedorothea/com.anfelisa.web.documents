import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfNewCategoryChangedOkEvent from "../../../src/author/events/IndexOfNewCategoryChangedOkEvent";

export default class AbstractIndexOfNewCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new IndexOfNewCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'IndexOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
