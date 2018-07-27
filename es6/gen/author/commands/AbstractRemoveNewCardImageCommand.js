import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RemoveNewCardImageOkEvent from "../../../gen/author/events/RemoveNewCardImageOkEvent";

export default class AbstractRemoveNewCardImageCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.RemoveNewCardImageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RemoveNewCardImageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RemoveNewCardImageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
