import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCategoryOkEvent from "../../../gen/category/events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "../../../gen/category/events/DeleteCategoryErrorEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractDeleteCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.DeleteCategoryCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish());
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
			let queryParams = [];
		    queryParams.push({key: "categoryId",value: this.commandData.categoryId});
	        
			this.httpDelete(this.adjustedUrl(`/api/category/delete`), true, queryParams).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
