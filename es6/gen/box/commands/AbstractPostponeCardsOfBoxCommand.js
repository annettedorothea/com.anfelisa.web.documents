import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PostponeCardsOfBoxUnauthorizedEvent from "../../../src/box/events/PostponeCardsOfBoxUnauthorizedEvent";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractPostponeCardsOfBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.PostponeCardsOfBoxCommand");
        this.next = "next";
        this.list = "list";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.next:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData)).publish());
			break;
		case this.list:
			promises.push(new TriggerAction(new LoadBoxesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new PostponeCardsOfBoxUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('PostponeCardsOfBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
