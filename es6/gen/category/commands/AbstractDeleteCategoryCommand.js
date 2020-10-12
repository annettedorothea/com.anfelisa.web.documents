/********************************************************************************
 * generated by de.acegen 0.9.12
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import DeleteCategoryOkEvent from "../../../gen/category/events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "../../../gen/category/events/DeleteCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractDeleteCategoryCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.DeleteCategoryCommand");
        this.ok = "ok";
        this.error = "error";
        this.commandData.categoryId = AppState.get_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_authorView_categoryTree_selectedCategory_parentCategoryId();
        this.commandData.rootCategoryId = AppState.get_authorView_categoryTree_rootCategory_categoryId();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.rootCategoryId, this.commandData.selectedCategoryId)).publish());
			break;
		case this.error:
			promises.push(new DeleteCategoryErrorEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			AppUtils.httpDelete(`${Utils.settings.rootPath}/category/delete?categoryId=${this.commandData.categoryId}`, this.commandData.uuid, true).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



