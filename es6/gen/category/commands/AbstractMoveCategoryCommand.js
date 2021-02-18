/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import MoveCategoryOkEvent from "../../../gen/category/events/MoveCategoryOkEvent";
import ReloadCategoryTreeAction from "../../../src/category/actions/ReloadCategoryTreeAction";

export default class AbstractMoveCategoryCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.MoveCategoryCommand");
        this.commandData.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_rootContainer_authorView_categoryTree_dropTargetCategoryId();
        this.commandData.targetCategoryId = AppState.get_rootContainer_authorView_categoryTree_dropTargetCategoryId();
        this.commandData.movedCategoryId = AppState.get_rootContainer_authorView_categoryTree_movedCategory_categoryId();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new MoveCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ReloadCategoryTreeAction(this.commandData.selectedCategoryId, this.commandData.categoryIdToBeExpanded)).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		movedCategoryId : this.commandData.movedCategoryId,
	    		targetCategoryId : this.commandData.targetCategoryId
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/category/move`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (message) => {
				this.commandData.message = message;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



