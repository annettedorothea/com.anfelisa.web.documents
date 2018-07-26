import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SearchDuplicateCardsOkEvent from "../../../src/author/events/SearchDuplicateCardsOkEvent";
import SearchDuplicateCardsTooShortEvent from "../../../src/author/events/SearchDuplicateCardsTooShortEvent";
import SearchDuplicateCardsUnauthorizedEvent from "../../../src/author/events/SearchDuplicateCardsUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractSearchDuplicateCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.SearchDuplicateCardsCommand");
        this.ok = "ok";
        this.tooShort = "tooShort";
        this.unauthorized = "unauthorized";
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
		case this.unauthorized:
			promises.push(new SearchDuplicateCardsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SearchDuplicateCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
