import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UsernameChangedOkEvent from "../../../src/common/events/UsernameChangedOkEvent";
import CheckUsernameAction from "../../../src/common/actions/CheckUsernameAction";

export default class AbstractUsernameChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.UsernameChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UsernameChangedOkEvent(this.commandData).publish();
			new TriggerAction(new CheckUsernameAction(this.commandData)).publish();
			break;
		default:
			throw 'UsernameChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
