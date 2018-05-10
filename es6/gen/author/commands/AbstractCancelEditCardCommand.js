import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelEditCardOkEvent from "../../../src/author/events/CancelEditCardOkEvent";

export default class AbstractCancelEditCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelEditCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelEditCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelEditCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
