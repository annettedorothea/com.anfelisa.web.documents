import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadUserOkEvent from "../../../gen/profile/events/LoadUserOkEvent";

export default class AbstractLoadUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.LoadUserCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadUserOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        
			this.httpGet(`/api/user/get`, true, queryParams).then((data) => {
				this.commandData.email = data.email;
				this.commandData.username = data.username;
				this.commandData.userId = data.userId;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
