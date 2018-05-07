import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCategoryClickOkEvent from "../../../src/author/events/DeleteCategoryClickOkEvent";

export default class AbstractDeleteCategoryClickCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.DeleteCategoryClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCategoryClickOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCategoryClickCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
