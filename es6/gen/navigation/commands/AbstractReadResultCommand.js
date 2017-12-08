import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ResultReadEvent from "../../../src/navigation/events/ResultReadEvent";
import ServerErrorEvent from "../../../src/common/events/ServerErrorEvent";

export default class AbstractReadResultCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "navigation.ReadResultCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new ResultReadEvent(this.commandData).publish());
        	break;
        case this.error:
        	promises.push(new ServerErrorEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
