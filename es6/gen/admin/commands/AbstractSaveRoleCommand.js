import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";

export default class AbstractSaveRoleCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.SaveRoleCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new GetAllUsersAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('SaveRoleCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
