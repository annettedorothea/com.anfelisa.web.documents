import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenOfEditedCardChangedOkEvent from "../../../src/author/events/GivenOfEditedCardChangedOkEvent";

export default class AbstractGivenOfEditedCardChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.GivenOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenOfEditedCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GivenOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
