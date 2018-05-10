import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCardClickOkEvent from "../../../src/author/events/DeleteCardClickOkEvent";

export default class AbstractDeleteCardClickCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.DeleteCardClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteCardClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteCardClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
