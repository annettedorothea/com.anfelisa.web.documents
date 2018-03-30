import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteOkEvent from "../../../src/common/events/RouteOkEvent";
import InitAction from "../../../src/common/actions/InitAction";

export default class AbstractRouteCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RouteCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RouteOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RouteCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
