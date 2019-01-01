import Command from "../../../gen/ace/SynchronousCommand";
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
		switch (this.commandData.outcome) {
		case this.wantedFetched:
			new TranslateWantedFetchedEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction()).publish();
			break;
		case this.givenFetched:
			new TranslateGivenFetchedEvent(this.commandData).publish();
			new TriggerAction(new SearchDuplicateCardsAction()).publish();
			break;
		case this.error:
			break;
		case this.empty:
			break;
		case this.targetNotEmtpy:
			break;
		default:
			throw 'TranslateCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
