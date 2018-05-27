import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MaxIntervalChangedOkEvent from "../../../src/box/events/MaxIntervalChangedOkEvent";

export default class AbstractMaxIntervalChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.MaxIntervalChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MaxIntervalChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'MaxIntervalChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
