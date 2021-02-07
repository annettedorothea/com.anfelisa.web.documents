/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractForgotPasswordCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "password.ForgotPasswordCommand");
        this.commandData.language = AppState.get_rootContainer_language();
        this.commandData.username = AppState.get_rootContainer_forgotPasswordView_username();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData.hash)).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		username : this.commandData.username,
	    		language : this.commandData.language
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/users/forgot-password`, this.commandData.uuid, false, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



