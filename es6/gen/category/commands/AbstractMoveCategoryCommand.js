import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MoveCategoryOkEvent from "../../../gen/category/events/MoveCategoryOkEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractMoveCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.MoveCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new MoveCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('MoveCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
    
	execute() {
	    return new Promise((resolve, reject) => {
			let queryParams = [];
	        let payload = {	
	        	movedCategoryId : this.commandData.movedCategoryId,
	        	targetCategoryId : this.commandData.targetCategoryId,
	        	};

			this.httpPut(this.adjustedUrl(`/api/category/move`), true, queryParams, payload).then((data) => {
				this.handleResponse(resolve, reject);
			}, (error) => {
				this.commandData.error = error;
				this.handleError(resolve, reject);
			});
	    });
	}

}

/*       S.D.G.       */
