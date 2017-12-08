import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UpdateHashEvent from "../../../src/common/events/UpdateHashEvent";
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
        	promises.push(new UpdateHashEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new InitAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
