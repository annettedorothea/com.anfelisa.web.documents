import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdatePasswordAdminSelfEvent from "../../../src/admin/events/UpdatePasswordAdminSelfEvent";
import UpdatePasswordAdminUnauthorizedEvent from "../../../src/admin/events/UpdatePasswordAdminUnauthorizedEvent";
import LoadAllUsersAction from "../../../src/admin/actions/LoadAllUsersAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractUpdatePasswordAdminCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.UpdatePasswordAdminCommand");
        this.ok = "ok";
        this.self = "self";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.self:
			promises.push(new UpdatePasswordAdminSelfEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new UpdatePasswordAdminUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdatePasswordAdminCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
