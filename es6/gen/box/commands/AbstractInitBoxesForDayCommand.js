/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";

export default class AbstractInitBoxesForDayCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "box.InitBoxesForDayCommand");
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new TriggerAction(new LoadBoxesAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		todayAtMidnightInUTC : this.commandData.todayAtMidnightInUTC
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/box/init`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



