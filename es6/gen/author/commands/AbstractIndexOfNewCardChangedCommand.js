import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfNewCardChangedOkEvent from "../../../src/author/events/IndexOfNewCardChangedOkEvent";

export default class AbstractIndexOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new IndexOfNewCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'IndexOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
