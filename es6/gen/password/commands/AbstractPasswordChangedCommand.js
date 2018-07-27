import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PasswordChangedMismatchEvent from "../../../gen/password/events/PasswordChangedMismatchEvent";
import PasswordChangedMatchEvent from "../../../gen/password/events/PasswordChangedMatchEvent";

export default class AbstractPasswordChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "password.PasswordChangedCommand");
        this.mismatch = "mismatch";
        this.match = "match";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.mismatch:
			new PasswordChangedMismatchEvent(this.commandData).publish();
			break;
		case this.match:
			new PasswordChangedMatchEvent(this.commandData).publish();
			break;
		default:
			throw 'PasswordChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
