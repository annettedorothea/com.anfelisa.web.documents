import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleScheduleCardSelectionOkEvent from "../../../gen/card/events/ToggleScheduleCardSelectionOkEvent";

export default class AbstractToggleScheduleCardSelectionCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.ToggleScheduleCardSelectionCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleScheduleCardSelectionOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleScheduleCardSelectionCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
