import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetRoleOkEvent from "../../../gen/login/events/GetRoleOkEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractGetRoleCommand extends Command {
    constructor(commandData) {
        super(commandData, "login.GetRoleCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GetRoleOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
			break;
		case this.unauthorized:
			promises.push(new TriggerAction(new LogoutAction()).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GetRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        
			this.httpGet(this.adjustedUrl(`/api/user/role`), true, queryParams).then((data) => {
				this.commandData.role = data.role;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
