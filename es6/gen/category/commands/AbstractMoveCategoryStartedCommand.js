import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MoveCategoryStartedOkEvent from "../../../gen/category/events/MoveCategoryStartedOkEvent";

export default class AbstractMoveCategoryStartedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.MoveCategoryStartedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MoveCategoryStartedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'MoveCategoryStartedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
