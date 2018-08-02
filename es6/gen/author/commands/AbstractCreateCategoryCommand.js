import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CreateCategoryOkEvent from "../../../gen/author/events/CreateCategoryOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractCreateCategoryCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.CreateCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CreateCategoryOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CreateCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
