import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractScheduleSelectedCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.ScheduleSelectedCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleSelectedCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	cardIds : this.commandData.cardIds,
	        	};

			this.httpPost(`/api/cards/schedule`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
