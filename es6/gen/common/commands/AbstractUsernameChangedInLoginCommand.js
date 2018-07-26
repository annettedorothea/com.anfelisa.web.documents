import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UsernameChangedInLoginOkEvent from "../../../src/common/events/UsernameChangedInLoginOkEvent";

export default class AbstractUsernameChangedInLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.UsernameChangedInLoginCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UsernameChangedInLoginOkEvent(this.commandData).publish();
			break;
		default:
			throw 'UsernameChangedInLoginCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
