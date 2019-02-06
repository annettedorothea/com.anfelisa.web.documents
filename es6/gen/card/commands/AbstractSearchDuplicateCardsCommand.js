import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SearchDuplicateCardsOkEvent from "../../../gen/card/events/SearchDuplicateCardsOkEvent";

export default class AbstractSearchDuplicateCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.SearchDuplicateCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new SearchDuplicateCardsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SearchDuplicateCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "given",value: this.commandData.given});
		    queryParams.push({key: "wanted",value: this.commandData.wanted});
		    queryParams.push({key: "naturalInputOrder",value: this.commandData.naturalInputOrder});
		    queryParams.push({key: "categoryId",value: this.commandData.categoryId});
	        
			this.httpGet(this.adjustedUrl(`/api/cards/search`), true, queryParams).then((data) => {
				this.commandData.cardList = data.cardList;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
