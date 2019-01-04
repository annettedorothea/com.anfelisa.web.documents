import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleInputOrderOkEvent from "../../../gen/card/events/ToggleInputOrderOkEvent";

export default class AbstractToggleInputOrderCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.ToggleInputOrderCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleInputOrderOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleInputOrderCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
