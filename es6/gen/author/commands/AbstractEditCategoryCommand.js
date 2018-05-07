import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCategoryOkEvent from "../../../src/author/events/EditCategoryOkEvent";

export default class AbstractEditCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.EditCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new EditCategoryOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('EditCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
