import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextReinforceCardOkEvent from "../../../src/box/events/LoadNextReinforceCardOkEvent";
import LoadNextReinforceCardUnauthorizedEvent from "../../../src/box/events/LoadNextReinforceCardUnauthorizedEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadNextReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextReinforceCardCommand");
        this.ok = "ok";
        this.noCard = "noCard";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextReinforceCardOkEvent(this.commandData).publish());
			break;
		case this.noCard:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadNextReinforceCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
