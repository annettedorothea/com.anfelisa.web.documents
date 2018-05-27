import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoginOkEvent from "../../../src/common/events/LoginOkEvent";
import LoginUnauthorizedEvent from "../../../src/common/events/LoginUnauthorizedEvent";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.LoginCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoginOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteChangedAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new LoginUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoginCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
