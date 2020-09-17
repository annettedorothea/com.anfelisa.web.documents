/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractAsynchronousCommand from "../../../gen/ace/AbstractAsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import DeleteUserOkEvent from "../../../gen/profile/events/DeleteUserOkEvent";
import DeleteUserErrorEvent from "../../../gen/profile/events/DeleteUserErrorEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteUserCommand extends AbstractAsynchronousCommand {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserCommand");
        this.ok = "ok";
        this.error = "error";
        this.commandData.username = AppState.get_profileView_username();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteUserOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction()).publish());
			break;
		case this.error:
			promises.push(new DeleteUserErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadUserAction()).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    	};
	
			this.doHttpDelete(`/${Utils.getRootPath()}/user/delete?usernameToBeDeleted=${this.commandData.usernameToBeDeleted}`, true).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



