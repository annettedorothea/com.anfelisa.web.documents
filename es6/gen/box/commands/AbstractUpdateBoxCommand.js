import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateBoxOkEvent from "../../../gen/box/events/UpdateBoxOkEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";

export default class AbstractUpdateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.UpdateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateBoxOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData.boxId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	maxInterval : this.commandData.maxInterval,
	        	maxCardsPerDay : this.commandData.maxCardsPerDay,
	        	boxId : this.commandData.boxId,
	        	};

			this.httpPut(this.adjustedUrl(`/api/box/update`), true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
