import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckDropAllowedOkEvent from "../../../gen/category/events/CheckDropAllowedOkEvent";

export default class AbstractCheckDropAllowedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CheckDropAllowedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CheckDropAllowedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CheckDropAllowedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
