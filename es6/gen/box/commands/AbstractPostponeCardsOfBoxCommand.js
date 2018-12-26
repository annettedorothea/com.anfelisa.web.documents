import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractPostponeCardsOfBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.PostponeCardsOfBoxCommand");
        this.next = "next";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.next:
			new TriggerAction(new LoadNextCardAction(this.commandData)).publish();
			break;
		default:
			throw 'PostponeCardsOfBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
