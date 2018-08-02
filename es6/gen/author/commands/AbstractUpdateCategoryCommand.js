import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCategoryOkEvent from "../../../gen/author/events/UpdateCategoryOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractUpdateCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.UpdateCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
