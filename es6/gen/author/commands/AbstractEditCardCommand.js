import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCardOkEvent from "../../../src/author/events/EditCardOkEvent";

export default class AbstractEditCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.EditCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditCardOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
