/********************************************************************************
 * generated by de.acegen 0.9.12
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
        this.ok = "ok";
        this.error = "error";
        this.commandData.rootCategoryId = AppState.get_authorView_categoryTree_rootCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.categoryId = AppState.get_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.categoryName = AppState.get_authorView_categoryTree_categoryName();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
			break;
		case this.error:
			promises.push(new UpdateCategoryErrorEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
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



