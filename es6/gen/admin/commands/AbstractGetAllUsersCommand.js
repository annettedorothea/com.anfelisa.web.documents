import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetAllUsersOkEvent from "../../../gen/admin/events/GetAllUsersOkEvent";

export default class AbstractGetAllUsersCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.GetAllUsersCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GetAllUsersOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GetAllUsersCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
