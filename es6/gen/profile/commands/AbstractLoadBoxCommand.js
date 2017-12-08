import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RenderBoxEvent from "../../../src/profile/events/RenderBoxEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractLoadBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.LoadBoxCommand");
        this.loaded = "loaded";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.loaded:
        	promises.push(new RenderBoxEvent(this.commandData).publish());
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
