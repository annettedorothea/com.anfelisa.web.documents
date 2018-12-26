import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateCardOkEvent from "../../../gen/author/events/CreateCardOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractCreateCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.CreateCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CreateCardOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		default:
			throw 'CreateCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
