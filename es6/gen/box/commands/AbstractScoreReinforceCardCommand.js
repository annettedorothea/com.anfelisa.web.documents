import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextReinforceCardAction from "../../../src/box/actions/LoadNextReinforceCardAction";

export default class AbstractScoreReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScoreReinforceCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextReinforceCardAction(this.commandData.boxId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScoreReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	reinforceCardId : this.commandData.reinforceCardId,
	        	quality : this.commandData.quality,
	        	};

			this.httpPost(`/api/reinforce-card/score`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
