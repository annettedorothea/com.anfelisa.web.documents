import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateCategoryErrorEvent from "../../../gen/category/events/CreateCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractCreateCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CreateCategoryCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish());
			break;
		case this.error:
			promises.push(new CreateCategoryErrorEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	categoryName : this.commandData.categoryName,
	        	categoryIndex : this.commandData.categoryIndex,
	        	parentCategoryId : this.commandData.parentCategoryId,
	        	dictionaryLookup : this.commandData.dictionaryLookup,
	        	givenLanguage : this.commandData.givenLanguage,
	        	wantedLanguage : this.commandData.wantedLanguage,
	        	};

			this.httpPost(`/api/category/create`, true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
