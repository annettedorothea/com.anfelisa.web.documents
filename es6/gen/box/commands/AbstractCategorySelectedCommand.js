import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CategorySelectedOkEvent from "../../../src/box/events/CategorySelectedOkEvent";

export default class AbstractCategorySelectedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "box.CategorySelectedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CategorySelectedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CategorySelectedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
