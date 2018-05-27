import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleMaxIntervalOkEvent from "../../../src/box/events/ToggleMaxIntervalOkEvent";

export default class AbstractToggleMaxIntervalCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ToggleMaxIntervalCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleMaxIntervalOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleMaxIntervalCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
