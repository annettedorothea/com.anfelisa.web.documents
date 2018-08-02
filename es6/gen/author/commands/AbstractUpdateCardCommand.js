import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCardOkEvent from "../../../gen/author/events/UpdateCardOkEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractUpdateCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.UpdateCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
