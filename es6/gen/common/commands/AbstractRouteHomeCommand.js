import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RouteHomeOkEvent from "../../../src/common/events/RouteHomeOkEvent";
import InitAction from "../../../src/common/actions/InitAction";

export default class AbstractRouteHomeCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.RouteHomeCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RouteHomeOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RouteHomeCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
