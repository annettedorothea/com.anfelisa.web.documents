import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CheckUsernameAvailableEvent from "../../../gen/registration/events/CheckUsernameAvailableEvent";
import CheckUsernameNotAvailableEvent from "../../../gen/registration/events/CheckUsernameNotAvailableEvent";

export default class AbstractCheckUsernameCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.CheckUsernameCommand");
        this.empty = "empty";
        this.available = "available";
        this.notAvailable = "notAvailable";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.empty:
			break;
		case this.available:
			promises.push(new CheckUsernameAvailableEvent(this.commandData).publish());
			break;
		case this.notAvailable:
			promises.push(new CheckUsernameNotAvailableEvent(this.commandData).publish());
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
	        
			this.httpGet(`/api/users/username`, false, queryParams).then((data) => {
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
