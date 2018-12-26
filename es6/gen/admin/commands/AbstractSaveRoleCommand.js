import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";

export default class AbstractSaveRoleCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.SaveRoleCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new GetAllUsersAction(this.commandData)).publish();
			break;
		default:
			throw 'SaveRoleCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
