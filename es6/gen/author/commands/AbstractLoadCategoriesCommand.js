import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoriesOkEvent from "../../../gen/author/events/LoadCategoriesOkEvent";

export default class AbstractLoadCategoriesCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.LoadCategoriesCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadCategoriesOkEvent(this.commandData).publish();
			break;
		default:
			throw 'LoadCategoriesCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
