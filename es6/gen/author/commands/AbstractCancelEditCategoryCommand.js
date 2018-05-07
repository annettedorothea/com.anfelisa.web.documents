import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelEditCategoryOkEvent from "../../../src/author/events/CancelEditCategoryOkEvent";

export default class AbstractCancelEditCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelEditCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CancelEditCategoryOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CancelEditCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
