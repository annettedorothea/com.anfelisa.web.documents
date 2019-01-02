import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoryTreeOkEvent from "../../../gen/category/events/LoadCategoryTreeOkEvent";

export default class AbstractLoadCategoryTreeCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.LoadCategoryTreeCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCategoryTreeOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCategoryTreeCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        
			this.httpGet(`/api/category/tree`, true, queryParams).then((data) => {
				this.commandData.categoryList = data.categoryList;
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
