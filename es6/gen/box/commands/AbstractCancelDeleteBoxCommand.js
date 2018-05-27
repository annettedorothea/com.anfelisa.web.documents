import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelDeleteBoxOkEvent from "../../../src/box/events/CancelDeleteBoxOkEvent";

export default class AbstractCancelDeleteBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.CancelDeleteBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelDeleteBoxOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelDeleteBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
