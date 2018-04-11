import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateUserRoleDefaultAdminEvent from "../../../src/admin/events/UpdateUserRoleDefaultAdminEvent";
import UpdateUserRoleUnauthorizedEvent from "../../../src/admin/events/UpdateUserRoleUnauthorizedEvent";
import LoadAllUsersAction from "../../../src/admin/actions/LoadAllUsersAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractUpdateUserRoleCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.UpdateUserRoleCommand");
        this.ok = "ok";
        this.defaultAdmin = "defaultAdmin";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.defaultAdmin:
			promises.push(new UpdateUserRoleDefaultAdminEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new UpdateUserRoleUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateUserRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
