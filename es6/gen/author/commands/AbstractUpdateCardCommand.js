import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateCardOkEvent from "../../../src/author/events/UpdateCardOkEvent";
import UpdateCardUnauthorizedEvent from "../../../src/author/events/UpdateCardUnauthorizedEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractUpdateCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.UpdateCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new UpdateCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new UpdateCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
