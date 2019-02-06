import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserClickAction from "../../../src/category/actions/InviteUserClickAction";

export default class AbstractRevokeUserAccessCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.RevokeUserAccessCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new InviteUserClickAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RevokeUserAccessCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
		    queryParams.push({key: "revokedUserId",value: this.commandData.revokedUserId});
		    queryParams.push({key: "categoryId",value: this.commandData.categoryId});
	        
			this.httpDelete(this.adjustedUrl(`/api/category/revoke`), true, queryParams).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
