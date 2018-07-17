import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadUserOkEvent from "../../../src/profile/events/LoadUserOkEvent";
import LoadUserUnauthorizedEvent from "../../../src/profile/events/LoadUserUnauthorizedEvent";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.LoadUserCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadUserOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadUserUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
