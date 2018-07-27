import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import TranslateWantedFetchedEvent from "../../../gen/author/events/TranslateWantedFetchedEvent";
import TranslateGivenFetchedEvent from "../../../gen/author/events/TranslateGivenFetchedEvent";
import SearchDuplicateCardsAction from "../../../src/author/actions/SearchDuplicateCardsAction";

export default class AbstractTranslateCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.TranslateCommand");
        this.wantedFetched = "wantedFetched";
        this.givenFetched = "givenFetched";
        this.error = "error";
        this.empty = "empty";
        this.targetNotEmtpy = "targetNotEmtpy";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.wantedFetched:
			promises.push(new TranslateWantedFetchedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SearchDuplicateCardsAction(this.commandData)).publish());
			break;
		case this.givenFetched:
			promises.push(new TranslateGivenFetchedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SearchDuplicateCardsAction(this.commandData)).publish());
			break;
		case this.error:
			break;
		case this.empty:
			break;
		case this.targetNotEmtpy:
			break;
		default:
			return new Promise((resolve, reject) => {reject('TranslateCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
