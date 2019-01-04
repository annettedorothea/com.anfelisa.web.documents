import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenOfNewCardChangedOkEvent from "../../../gen/card/events/GivenOfNewCardChangedOkEvent";
import SearchDuplicateCardsAction from "../../../src/card/actions/SearchDuplicateCardsAction";

export default class AbstractGivenOfNewCardChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.GivenOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenOfNewCardChangedOkEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction()).publish();
			break;
		default:
			throw 'GivenOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
