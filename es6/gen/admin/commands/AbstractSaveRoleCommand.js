import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";

export default class AbstractSaveRoleCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.SaveRoleCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new GetAllUsersAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	newRole : this.commandData.newRole,
	        	editedUserId : this.commandData.editedUserId,
	        	};

			this.httpPut(`/api/user/role`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
