import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InvitedUsernameChangedOkEvent from "../../../gen/category/events/InvitedUsernameChangedOkEvent";

export default class AbstractInvitedUsernameChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.InvitedUsernameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new InvitedUsernameChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'InvitedUsernameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
