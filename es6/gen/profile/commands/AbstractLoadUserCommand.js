import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadUserOkEvent from "../../../gen/profile/events/LoadUserOkEvent";

export default class AbstractLoadUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.LoadUserCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadUserOkEvent(this.commandData).publish();
			break;
		default:
			throw 'LoadUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
