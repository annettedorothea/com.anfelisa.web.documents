import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedOfNewCardChangedOkEvent from "../../../gen/author/events/WantedOfNewCardChangedOkEvent";
import SearchDuplicateCardsAction from "../../../src/author/actions/SearchDuplicateCardsAction";

export default class AbstractWantedOfNewCardChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.WantedOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedOfNewCardChangedOkEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction(this.commandData)).publish();
			break;
		default:
			throw 'WantedOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
