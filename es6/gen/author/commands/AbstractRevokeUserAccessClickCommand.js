import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RevokeUserAccessClickOkEvent from "../../../gen/author/events/RevokeUserAccessClickOkEvent";

export default class AbstractRevokeUserAccessClickCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.RevokeUserAccessClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RevokeUserAccessClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RevokeUserAccessClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
