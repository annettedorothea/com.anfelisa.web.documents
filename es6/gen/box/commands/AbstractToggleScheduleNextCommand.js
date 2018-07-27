import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleScheduleNextOkEvent from "../../../gen/box/events/ToggleScheduleNextOkEvent";

export default class AbstractToggleScheduleNextCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ToggleScheduleNextCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleScheduleNextOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleScheduleNextCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
