import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckUsernameOkEvent from "../../../gen/registration/events/CheckUsernameOkEvent";

export default class AbstractCheckUsernameCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.CheckUsernameCommand");
        this.empty = "empty";
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.empty:
			break;
		case this.ok:
			promises.push(new CheckUsernameOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CheckUsernameCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "username",value: this.commandData.username});
	        
			this.httpGet(this.adjustedUrl(`/api/users/username`), false, queryParams).then((data) => {
				this.commandData.available = data.available;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
