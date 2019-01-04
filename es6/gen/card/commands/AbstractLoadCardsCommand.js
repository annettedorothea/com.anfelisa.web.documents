import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCardsOkEvent from "../../../gen/card/events/LoadCardsOkEvent";
import LoadCardsNoCategorySelectedEvent from "../../../gen/card/events/LoadCardsNoCategorySelectedEvent";

export default class AbstractLoadCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.LoadCardsCommand");
        this.ok = "ok";
        this.noCategorySelected = "noCategorySelected";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCardsOkEvent(this.commandData).publish());
			break;
		case this.noCategorySelected:
			promises.push(new LoadCardsNoCategorySelectedEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "categoryId",value: this.commandData.categoryId});
	        
			this.httpGet(`/api/cards`, true, queryParams).then((data) => {
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
