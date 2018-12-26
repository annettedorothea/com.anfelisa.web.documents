import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractConfirmEmailCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.ConfirmEmailCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new DisplayMessageAction(this.commandData)).publish();
			new TriggerAction(new RouteAction(this.commandData)).publish();
			break;
		default:
			throw 'ConfirmEmailCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
