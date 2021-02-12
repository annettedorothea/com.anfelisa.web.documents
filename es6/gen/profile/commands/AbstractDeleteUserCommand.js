/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DeleteUserOkEvent from "../../../gen/profile/events/DeleteUserOkEvent";
import DeleteUserErrorEvent from "../../../gen/profile/events/DeleteUserErrorEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayToastAction from "../../../src/common/actions/DisplayToastAction";

export default class AbstractDeleteUserCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserCommand");
        this.commandData.username = AppState.get_rootContainer_profileView_username();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}
	addErrorOutcome() {
		this.commandData.outcomes.push("error");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new DeleteUserOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction()).publish());
		}
		if (this.commandData.outcomes.includes("error")) {
			promises.push(new DeleteUserErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadUserAction()).publish());
			promises.push(new TriggerAction(new DisplayToastAction(this.commandData.message)).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpDelete(`${Utils.settings.rootPath}/user/delete?usernameToBeDeleted=${this.commandData.usernameToBeDeleted}`, this.commandData.uuid, true).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



