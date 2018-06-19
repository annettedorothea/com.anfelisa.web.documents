import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleAllScheduleCardSelectionOkEvent from "../../../src/author/events/ToggleAllScheduleCardSelectionOkEvent";

export default class AbstractToggleAllScheduleCardSelectionCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.ToggleAllScheduleCardSelectionCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleAllScheduleCardSelectionOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleAllScheduleCardSelectionCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
