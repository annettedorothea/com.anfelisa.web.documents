import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MaxIntervalChangedOfBoxOkEvent from "../../../src/box/events/MaxIntervalChangedOfBoxOkEvent";

export default class AbstractMaxIntervalChangedOfBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "box.MaxIntervalChangedOfBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MaxIntervalChangedOfBoxOkEvent(this.commandData).publish();
			break;
		default:
			throw 'MaxIntervalChangedOfBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
