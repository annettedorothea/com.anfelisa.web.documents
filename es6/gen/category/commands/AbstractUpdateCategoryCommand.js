import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCategoryErrorEvent from "../../../gen/category/events/UpdateCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractUpdateCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.UpdateCategoryCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish());
			promises.push(new TriggerAction(new LoadCardsAction()).publish());
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
			let queryParams = [];
	        let payload = {	
	        	categoryId : this.commandData.categoryId,
	        	categoryName : this.commandData.categoryName,
	        	dictionaryLookup : this.commandData.dictionaryLookup,
	        	givenLanguage : this.commandData.givenLanguage,
	        	wantedLanguage : this.commandData.wantedLanguage,
	        	};

			this.httpPut(`/api/category/update`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
