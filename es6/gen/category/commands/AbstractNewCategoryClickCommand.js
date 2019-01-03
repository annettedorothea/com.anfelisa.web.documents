import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NewCategoryClickOkEvent from "../../../gen/category/events/NewCategoryClickOkEvent";

export default class AbstractNewCategoryClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.NewCategoryClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new NewCategoryClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'NewCategoryClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
