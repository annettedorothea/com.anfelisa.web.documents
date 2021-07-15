/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractCreateReverseBoxCommand extends AsynchronousCommand {
    constructor() {
        super("category.CreateReverseBoxCommand");
    }
    
    initCommandData(data) {
        data.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_rootCategoryId();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		rootCategoryId : data.rootCategoryId
	    	};
			AppUtils.httpPost(`${Utils.settings.rootPath}/box/create-reverse`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new TriggerAction().publish(
				new RouteAction(), 
					{
						hash: data.hash
					}
			)
		}
    }

}



/******* S.D.G. *******/



