import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayMessageOkEvent from "../../../src/common/events/DisplayMessageOkEvent";

export default class AbstractDisplayMessageCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.DisplayMessageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayMessageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayMessageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
