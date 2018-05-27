import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleInputOrderOkEvent from "../../../src/author/events/ToggleInputOrderOkEvent";

export default class AbstractToggleInputOrderCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.ToggleInputOrderCommand");
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
