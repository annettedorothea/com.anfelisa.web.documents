import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserClickOkEvent from "../../../gen/category/events/InviteUserClickOkEvent";

export default class AbstractInviteUserClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.InviteUserClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new InviteUserClickOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InviteUserClickCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "categoryId",value: this.commandData.categoryId});
	        
			this.httpGet(`/api/category/users`, true, queryParams).then((data) => {
				this.commandData.userList = data.userList;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
