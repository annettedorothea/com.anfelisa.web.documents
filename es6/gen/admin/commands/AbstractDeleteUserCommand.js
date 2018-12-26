import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserErrorEvent from "../../../gen/admin/events/DeleteUserErrorEvent";
import GetAllUsersAction from "../../../src/admin/actions/GetAllUsersAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "admin.DeleteUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new GetAllUsersAction(this.commandData)).publish();
			break;
		case this.error:
			new DeleteUserErrorEvent(this.commandData).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'DeleteUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
