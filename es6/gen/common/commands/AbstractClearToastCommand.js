import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ClearToastOkEvent from "../../../gen/common/events/ClearToastOkEvent";

export default class AbstractClearToastCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.ClearToastCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ClearToastOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ClearToastCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
