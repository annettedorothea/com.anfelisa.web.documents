import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelNewCategoryOkEvent from "../../../src/author/events/CancelNewCategoryOkEvent";

export default class AbstractCancelNewCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelNewCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CancelNewCategoryOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CancelNewCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
