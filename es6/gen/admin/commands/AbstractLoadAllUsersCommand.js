import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadAllUsersOkEvent from "../../../src/admin/events/LoadAllUsersOkEvent";
import LoadAllUsersUnauthorizedEvent from "../../../src/admin/events/LoadAllUsersUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadAllUsersCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.LoadAllUsersCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadAllUsersOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadAllUsersUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadAllUsersCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
