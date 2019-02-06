import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractPostponeCardsOfBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.PostponeCardsOfBoxCommand");
        this.next = "next";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.next:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData.boxId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('PostponeCardsOfBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	boxId : this.commandData.boxId,
	        	today : this.commandData.today,
	        	};

			this.httpPut(this.adjustedUrl(`/api/cards/postpone`), true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
