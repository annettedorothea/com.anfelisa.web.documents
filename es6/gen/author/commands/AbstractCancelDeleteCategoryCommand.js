import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelDeleteCategoryOkEvent from "../../../src/author/events/CancelDeleteCategoryOkEvent";

export default class AbstractCancelDeleteCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelDeleteCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CancelDeleteCategoryOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CancelDeleteCategoryCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
