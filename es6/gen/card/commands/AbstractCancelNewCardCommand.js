import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelNewCardOkEvent from "../../../gen/card/events/CancelNewCardOkEvent";

export default class AbstractCancelNewCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.CancelNewCardCommand");
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