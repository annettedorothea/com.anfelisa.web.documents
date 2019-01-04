import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelDeleteCardOkEvent from "../../../gen/card/events/CancelDeleteCardOkEvent";

export default class AbstractCancelDeleteCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.CancelDeleteCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelDeleteCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelDeleteCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
