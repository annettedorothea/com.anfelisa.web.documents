import Command from "../../../gen/ace/AsynchronousCommand";
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
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new SearchDuplicateCardsOkEvent(this.commandData).publish());
			break;
		case this.tooShort:
			promises.push(new SearchDuplicateCardsTooShortEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SearchDuplicateCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
