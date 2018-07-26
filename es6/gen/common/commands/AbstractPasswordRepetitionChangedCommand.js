import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PasswordRepetitionChangedMismatchEvent from "../../../src/common/events/PasswordRepetitionChangedMismatchEvent";
import PasswordRepetitionChangedMatchEvent from "../../../src/common/events/PasswordRepetitionChangedMatchEvent";

export default class AbstractPasswordRepetitionChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.PasswordRepetitionChangedCommand");
        this.mismatch = "mismatch";
        this.match = "match";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.mismatch:
			new PasswordRepetitionChangedMismatchEvent(this.commandData).publish();
			break;
		case this.match:
			new PasswordRepetitionChangedMatchEvent(this.commandData).publish();
			break;
		default:
			throw 'PasswordRepetitionChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
