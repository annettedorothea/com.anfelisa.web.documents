/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import LoadUserOkEvent from "../../../gen/profile/events/LoadUserOkEvent";

export default class AbstractLoadUserCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "profile.LoadUserCommand");
        this.commandData.role = AppState.get_loggedInUser_role();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new LoadUserOkEvent(this.commandData).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpGet(`${Utils.settings.rootPath}/user/get`, this.commandData.uuid, true).then((data) => {
				this.commandData.email = data.email;
				this.commandData.username = data.username;
				this.commandData.userId = data.userId;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



