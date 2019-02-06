import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserClickAction from "../../../src/category/actions/InviteUserClickAction";

export default class AbstractInviteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.InviteUserCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new InviteUserClickAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InviteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	categoryId : this.commandData.categoryId,
	        	invitedUsername : this.commandData.invitedUsername,
	        	};

			this.httpPost(this.adjustedUrl(`/api/category/invite`), true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
