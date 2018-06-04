import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardOkEvent from "../../../src/box/events/LoadNextCardOkEvent";
import LoadNextCardUnauthorizedEvent from "../../../src/box/events/LoadNextCardUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextCardOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadNextCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
