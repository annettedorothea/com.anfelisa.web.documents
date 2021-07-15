/********************************************************************************
 * generated by de.acegen 1.3.0
 ********************************************************************************/




import AsynchronousCommand from "../../ace/AsynchronousCommand";
import Event from "../../ace/Event";
import TriggerAction from "../../ace/TriggerAction";
import * as Utils from "../../ace/Utils";
import * as AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractChangeOrderCategoryCommand extends AsynchronousCommand {
    constructor() {
        super("category.ChangeOrderCategoryCommand");
    }
    
    initCommandData(data) {
        data.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_categoryId();
        data.selectedCategoryId = AppState.get_rootContainer_authorView_categoryTree_movedCategory_categoryId();
        data.targetCategoryId = AppState.get_rootContainer_authorView_categoryTree_dropTargetCategoryId();
        data.movedCategoryId = AppState.get_rootContainer_authorView_categoryTree_movedCategory_categoryId();
        data.outcomes = [];
    }

	addOkOutcome(data) {
		data.outcomes.push("ok");
	}

	execute(data) {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		movedCategoryId : data.movedCategoryId,
	    		targetCategoryId : data.targetCategoryId
	    	};
			AppUtils.httpPut(`${Utils.settings.rootPath}/category/changeorder`, data.uuid, true, payload).then(() => {
				this.handleResponse(data, resolve, reject);
			}, (error) => {
				data.error = error;
				this.handleError(data, resolve, reject);
			});
	    });
	}

    publishEvents(data) {
		if (data.outcomes.includes("ok")) {
			new Event('category.ChangeOrderCategoryOkEvent').publish(data);
			AppUtils.stateUpdated(AppState.getAppState());
			new TriggerAction().publish(
				new ReloadCategoryTreeAction(), 
					{
						selectedCategoryId: data.selectedCategoryId, 
						categoryIdToBeExpanded: data.categoryIdToBeExpanded
					}
			)
		}
    }

}



/******* S.D.G. *******/



