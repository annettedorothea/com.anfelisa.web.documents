import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LogoutOkEvent from "../../../src/common/events/LogoutOkEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractLogoutCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.LogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LogoutOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LogoutCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
