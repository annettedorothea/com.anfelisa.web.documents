import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersOkEvent from "../../../src/admin/events/GetAllUsersOkEvent";
import GetAllUsersUnauthorizedEvent from "../../../src/admin/events/GetAllUsersUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractGetAllUsersCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.GetAllUsersCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GetAllUsersOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new GetAllUsersUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GetAllUsersCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
