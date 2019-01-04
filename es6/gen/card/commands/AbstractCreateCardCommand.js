import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateCardOkEvent from "../../../gen/card/events/CreateCardOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractCreateCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.CreateCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CreateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction(this.commandData.categoryId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	wanted : this.commandData.wanted,
	        	given : this.commandData.given,
	        	image : this.commandData.image,
	        	cardIndex : this.commandData.cardIndex,
	        	categoryId : this.commandData.categoryId,
	        	};

			this.httpPost(`/api/card/create`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
