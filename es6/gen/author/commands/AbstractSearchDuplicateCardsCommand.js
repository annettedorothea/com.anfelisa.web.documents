import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SearchDuplicateCardsOkEvent from "../../../gen/author/events/SearchDuplicateCardsOkEvent";
import SearchDuplicateCardsTooShortEvent from "../../../gen/author/events/SearchDuplicateCardsTooShortEvent";

export default class AbstractSearchDuplicateCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.SearchDuplicateCardsCommand");
        this.ok = "ok";
        this.tooShort = "tooShort";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new SearchDuplicateCardsOkEvent(this.commandData).publish();
			break;
		case this.tooShort:
			new SearchDuplicateCardsTooShortEvent(this.commandData).publish();
			break;
		default:
			throw 'SearchDuplicateCardsCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
