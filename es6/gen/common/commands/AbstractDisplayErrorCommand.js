import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayErrorOkEvent from "../../../gen/common/events/DisplayErrorOkEvent";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";

export default class AbstractDisplayErrorCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.DisplayErrorCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayErrorOkEvent(this.commandData).publish();
			new TriggerAction(new ClearToastAction(this.commandData)).publish();
			break;
		default:
			throw 'DisplayErrorCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
