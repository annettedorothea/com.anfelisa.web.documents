import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelRevokeUserAccessOkEvent from "../../../gen/author/events/CancelRevokeUserAccessOkEvent";

export default class AbstractCancelRevokeUserAccessCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.CancelRevokeUserAccessCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelRevokeUserAccessOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelRevokeUserAccessCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
