import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LogoutOkEvent from "../../../src/common/events/LogoutOkEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractLogoutCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.LogoutCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LogoutOkEvent(this.commandData).publish();
			new TriggerAction(new RouteAction(this.commandData)).publish();
			break;
		default:
			throw 'LogoutCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
