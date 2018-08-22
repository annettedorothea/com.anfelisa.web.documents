import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MaxIntervalChangedOkEvent from "../../../gen/box/events/MaxIntervalChangedOkEvent";

export default class AbstractMaxIntervalChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.MaxIntervalChangedCommand");
        this.ok = "ok";
        this.invalid = "invalid";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MaxIntervalChangedOkEvent(this.commandData).publish();
			break;
		case this.invalid:
			break;
		default:
			throw 'MaxIntervalChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
