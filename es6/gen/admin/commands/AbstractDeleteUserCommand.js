import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserErrorEvent from "../../../gen/admin/events/DeleteUserErrorEvent";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.DeleteUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new GetAllUsersAction()).publish());
			break;
		case this.error:
			promises.push(new DeleteUserErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "usernameToBeDeleted",value: this.commandData.usernameToBeDeleted});
	        
			this.httpDelete(this.adjustedUrl(`/api/user/delete`), true, queryParams).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
