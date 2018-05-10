import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfEditedCardChangedOkEvent from "../../../src/author/events/IndexOfEditedCardChangedOkEvent";

export default class AbstractIndexOfEditedCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new IndexOfEditedCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'IndexOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
