import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ErrorEvent from "../../../src/common/events/ErrorEvent";
import UserLoggedInEvent from "../../../src/common/events/UserLoggedInEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import RouteHomeAction from "../../../src/common/actions/RouteHomeAction";

export default class AbstractUpdatePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.UpdatePasswordCommand");
        this.dataInvalid = "dataInvalid";
        this.mismatch = "mismatch";
        this.saved = "saved";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.dataInvalid:
        	promises.push(new ErrorEvent(this.commandData).publish());
        	break;
        case this.mismatch:
        	promises.push(new ErrorEvent(this.commandData).publish());
        	break;
        case this.saved:
        	promises.push(new UserLoggedInEvent(this.commandData).publish());
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
