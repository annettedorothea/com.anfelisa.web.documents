/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import UpdateCategoryOkEvent from "../../../gen/category/events/UpdateCategoryOkEvent";
import UpdateCategoryErrorEvent from "../../../gen/category/events/UpdateCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractUpdateCategoryCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.UpdateCategoryCommand");
        this.commandData.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_rootContainer_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.categoryId = AppState.get_rootContainer_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.categoryName = AppState.get_rootContainer_authorView_categoryTree_categoryName();
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
			promises.push(new UpdateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
		}
		if (this.commandData.outcomes.includes("error")) {
			promises.push(new UpdateCategoryErrorEvent(this.commandData).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryId : this.commandData.categoryId,
	    		categoryName : this.commandData.categoryName
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/category/update`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



