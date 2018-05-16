import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenOfNewCardChangedOkEvent from "../../../src/author/events/GivenOfNewCardChangedOkEvent";
import SearchDuplicateCardsAction from "../../../src/author/actions/SearchDuplicateCardsAction";

export default class AbstractGivenOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.GivenOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenOfNewCardChangedOkEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction(this.commandData)).publish();
			break;
		default:
			throw 'GivenOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */