import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserAdminDefaultAdminEvent from "../../../src/admin/events/DeleteUserAdminDefaultAdminEvent";
import DeleteUserAdminUnauthorizedEvent from "../../../src/admin/events/DeleteUserAdminUnauthorizedEvent";
import LoadAllUsersAction from "../../../src/admin/actions/LoadAllUsersAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDeleteUserAdminCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "admin.DeleteUserAdminCommand");
        this.ok = "ok";
        this.defaultAdmin = "defaultAdmin";
        this.self = "self";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.defaultAdmin:
			promises.push(new DeleteUserAdminDefaultAdminEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadAllUsersAction(this.commandData)).publish());
			break;
		case this.self:
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new DeleteUserAdminUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteUserAdminCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
