import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetRoleOkEvent from "../../../src/common/events/GetRoleOkEvent";
import GetRoleUnauthorizedEvent from "../../../src/common/events/GetRoleUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractGetRoleCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.GetRoleCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GetRoleOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new GetRoleUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GetRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
