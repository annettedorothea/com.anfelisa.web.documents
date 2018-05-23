import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RemoveEditedCardImageOkEvent from "../../../src/author/events/RemoveEditedCardImageOkEvent";

export default class AbstractRemoveEditedCardImageCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.RemoveEditedCardImageCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RemoveEditedCardImageOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RemoveEditedCardImageCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
