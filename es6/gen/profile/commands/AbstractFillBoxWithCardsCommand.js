import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractFillBoxWithCardsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.FillBoxWithCardsCommand");
        this.filled = "filled";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.filled:
        	promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
        	break;
        case this.error:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new RouteHomeAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
