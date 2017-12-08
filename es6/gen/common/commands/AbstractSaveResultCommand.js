import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderResultEvent from "../../../src/common/events/RenderResultEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractSaveResultCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.SaveResultCommand");
        this.noCredentials = "noCredentials";
        this.resultSaved = "resultSaved";
        this.serverError = "serverError";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.noCredentials:
        	promises.push(new RenderResultEvent(this.commandData).publish());
        	break;
        case this.resultSaved:
        	promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
        	break;
        case this.serverError:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
