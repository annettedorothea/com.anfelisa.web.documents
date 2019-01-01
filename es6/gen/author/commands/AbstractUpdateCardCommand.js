import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCardOkEvent from "../../../gen/author/events/UpdateCardOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractUpdateCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.UpdateCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UpdateCardOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction()).publish();
			break;
		default:
			throw 'UpdateCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
