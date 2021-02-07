/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import CreateCategoryOkEvent from "../../../gen/category/events/CreateCategoryOkEvent";
import CreateCategoryErrorEvent from "../../../gen/category/events/CreateCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractCreateCategoryCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.CreateCategoryCommand");
        this.commandData.categoryName = AppState.get_rootContainer_authorView_categoryTree_categoryName();
        this.commandData.parentCategoryId = AppState.get_rootContainer_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_categoryId();
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
			promises.push(new CreateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
		}
		if (this.commandData.outcomes.includes("error")) {
			promises.push(new CreateCategoryErrorEvent(this.commandData).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		categoryName : this.commandData.categoryName,
	    		parentCategoryId : this.commandData.parentCategoryId
	    	};
	
			AppUtils.httpPost(`${Utils.settings.rootPath}/category/create`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



