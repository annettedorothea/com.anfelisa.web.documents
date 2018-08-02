import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCardOkEvent from "../../../gen/author/events/DeleteCardOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractDeleteCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.DeleteCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
