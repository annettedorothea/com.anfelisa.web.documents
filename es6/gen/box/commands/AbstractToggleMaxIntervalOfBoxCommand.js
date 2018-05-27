import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleMaxIntervalOfBoxOkEvent from "../../../src/box/events/ToggleMaxIntervalOfBoxOkEvent";

export default class AbstractToggleMaxIntervalOfBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ToggleMaxIntervalOfBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleMaxIntervalOfBoxOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleMaxIntervalOfBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
