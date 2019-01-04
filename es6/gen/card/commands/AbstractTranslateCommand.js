import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import TranslateWantedFetchedEvent from "../../../gen/card/events/TranslateWantedFetchedEvent";
import TranslateGivenFetchedEvent from "../../../gen/card/events/TranslateGivenFetchedEvent";
import SearchDuplicateCardsAction from "../../../src/card/actions/SearchDuplicateCardsAction";

export default class AbstractTranslateCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.TranslateCommand");
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
			promises.push(new TriggerAction(new SearchDuplicateCardsAction()).publish());
			break;
		case this.givenFetched:
			promises.push(new TranslateGivenFetchedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SearchDuplicateCardsAction()).publish());
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
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "sourceValue",value: this.commandData.sourceValue});
		    queryParams.push({key: "sourceLanguage",value: this.commandData.sourceLanguage});
		    queryParams.push({key: "targetLanguage",value: this.commandData.targetLanguage});
	        
			this.httpGet(`/api/card/translation`, true, queryParams).then((data) => {
				this.commandData.targetValue = data.targetValue;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
