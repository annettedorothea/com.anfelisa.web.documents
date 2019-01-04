import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedOfNewCardChangedOkEvent from "../../../gen/card/events/WantedOfNewCardChangedOkEvent";
import SearchDuplicateCardsAction from "../../../src/card/actions/SearchDuplicateCardsAction";

export default class AbstractWantedOfNewCardChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.WantedOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedOfNewCardChangedOkEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction()).publish();
			break;
		default:
			throw 'WantedOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
