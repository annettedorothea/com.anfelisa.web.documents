import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelEditBoxOkEvent from "../../../src/box/events/CancelEditBoxOkEvent";

export default class AbstractCancelEditBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "box.CancelEditBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelEditBoxOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelEditBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
