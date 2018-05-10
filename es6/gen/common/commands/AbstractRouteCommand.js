import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteOkEvent from "../../../src/common/events/RouteOkEvent";

export default class AbstractRouteCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RouteCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RouteOkEvent(this.commandData).publish();
			break;
		default:
			throw 'RouteCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
