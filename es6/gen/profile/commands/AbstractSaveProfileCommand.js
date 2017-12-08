import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractSaveProfileCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.SaveProfileCommand");
        this.saved = "saved";
        this.dataInvalid = "dataInvalid";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.saved:
        	promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
        	break;
        case this.dataInvalid:
        	promises.push(new ErrorEvent(this.commandData).publish());
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
