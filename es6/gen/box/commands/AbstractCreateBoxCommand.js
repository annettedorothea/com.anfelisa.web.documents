import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.CreateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	categoryId : this.commandData.categoryId,
	        	};

			this.httpPost(`/api/box/create`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
