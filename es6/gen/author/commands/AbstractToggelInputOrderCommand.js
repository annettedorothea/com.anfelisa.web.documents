import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggelInputOrderOkEvent from "../../../src/author/events/ToggelInputOrderOkEvent";

export default class AbstractToggelInputOrderCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.ToggelInputOrderCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggelInputOrderOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggelInputOrderCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
