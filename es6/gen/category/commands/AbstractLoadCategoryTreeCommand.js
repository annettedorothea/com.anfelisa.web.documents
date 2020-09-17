/********************************************************************************
 * generated by de.acegen 0.9.10
 ********************************************************************************/




import AbstractAsynchronousCommand from "../../../gen/ace/AbstractAsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import ACEController from "../../ace/ACEController";
import * as AppState from "../../ace/AppState";
import LoadCategoryTreeOkEvent from "../../../gen/category/events/LoadCategoryTreeOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractLoadCategoryTreeCommand extends AbstractAsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.LoadCategoryTreeCommand");
        this.ok = "ok";
        this.commandData.rootCategory = AppState.get_authorView_categoryTree_rootCategory();
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCategoryTreeOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCategoryTreeCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	
			this.doHttpGet(`/${Utils.getRootPath()}/category/tree?rootCategoryId=${this.commandData.rootCategoryId}`, true).then((data) => {
				this.commandData.rootCategory = data.rootCategory;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



