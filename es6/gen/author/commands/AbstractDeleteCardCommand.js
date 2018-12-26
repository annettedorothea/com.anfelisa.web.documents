import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCardOkEvent from "../../../gen/author/events/DeleteCardOkEvent";
import DeleteCardErrorEvent from "../../../gen/author/events/DeleteCardErrorEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.DeleteCardCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteCardOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		case this.error:
			new DeleteCardErrorEvent(this.commandData).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'DeleteCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
