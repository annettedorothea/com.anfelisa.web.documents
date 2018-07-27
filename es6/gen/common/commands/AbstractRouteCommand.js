import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteOkEvent from "../../../gen/common/events/RouteOkEvent";

export default class AbstractRouteCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.RouteCommand");
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
