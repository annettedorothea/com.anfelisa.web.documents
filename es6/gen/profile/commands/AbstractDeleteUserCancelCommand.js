import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserCancelOkEvent from "../../../gen/profile/events/DeleteUserCancelOkEvent";

export default class AbstractDeleteUserCancelCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserCancelCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteUserCancelOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteUserCancelCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
