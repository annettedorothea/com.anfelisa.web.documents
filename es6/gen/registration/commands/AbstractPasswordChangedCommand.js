import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PasswordChangedOkEvent from "../../../gen/registration/events/PasswordChangedOkEvent";

export default class AbstractPasswordChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.PasswordChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PasswordChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'PasswordChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
