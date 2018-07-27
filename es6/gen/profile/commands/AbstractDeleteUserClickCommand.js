import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserClickOkEvent from "../../../gen/profile/events/DeleteUserClickOkEvent";

export default class AbstractDeleteUserClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteUserClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteUserClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
