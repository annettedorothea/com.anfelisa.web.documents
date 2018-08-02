import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoriesOkEvent from "../../../gen/author/events/LoadCategoriesOkEvent";

export default class AbstractLoadCategoriesCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.LoadCategoriesCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCategoriesOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCategoriesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
