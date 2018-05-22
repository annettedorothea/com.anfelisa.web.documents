import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayErrorOkEvent from "../../../src/common/events/DisplayErrorOkEvent";

export default class AbstractDisplayErrorCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.DisplayErrorCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DisplayErrorOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DisplayErrorCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
