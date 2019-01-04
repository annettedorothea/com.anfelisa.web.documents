import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCardOkEvent from "../../../gen/card/events/EditCardOkEvent";

export default class AbstractEditCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.EditCardCommand");
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
