/********************************************************************************
 * generated by de.acegen 1.1.0
 ********************************************************************************/




import AsynchronousCommand from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import Utils from "../../ace/Utils";
import AppUtils from "../../../src/app/AppUtils";
import * as AppState from "../../ace/AppState";
import ImportCsvOkEvent from "../../../gen/category/events/ImportCsvOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractImportCsvCommand extends AsynchronousCommand {
    constructor(commandData) {
        super(commandData, "category.ImportCsvCommand");
        this.commandData.rootCategoryId = AppState.get_rootContainer_authorView_categoryTree_rootCategory_categoryId();
        this.commandData.selectedCategoryId = AppState.get_rootContainer_authorView_categoryTree_movedCategory_categoryId();
        this.commandData.previewCsv = AppState.get_rootContainer_authorView_categoryTree_previewCsv();
        this.commandData.categoryId = AppState.get_rootContainer_authorView_categoryTree_selectedCategory_categoryId();
        this.commandData.outcomes = [];
    }

	addOkOutcome() {
		this.commandData.outcomes.push("ok");
	}

    publishEvents() {
		let promises = [];
	    
		if (this.commandData.outcomes.includes("ok")) {
			promises.push(new ImportCsvOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
	    	let payload = {
	    		previewCsv : this.commandData.previewCsv,
	    		categoryId : this.commandData.categoryId
	    	};
	
			AppUtils.httpPut(`${Utils.settings.rootPath}/category/import-csv`, this.commandData.uuid, true, payload).then(() => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}




/******* S.D.G. *******/



