import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelNewCardOkEvent from "../../../src/author/events/CancelNewCardOkEvent";

export default class AbstractCancelNewCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelNewCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelNewCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelNewCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */