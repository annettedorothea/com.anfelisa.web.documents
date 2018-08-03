import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCategoryOkEvent from "../../../gen/author/events/DeleteCategoryOkEvent";
import DeleteCategoryErrorEvent from "../../../gen/author/events/DeleteCategoryErrorEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.DeleteCategoryCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new DeleteCategoryErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
