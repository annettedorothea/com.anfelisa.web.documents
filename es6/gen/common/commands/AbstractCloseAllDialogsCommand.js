import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";

export default class AbstractCloseAllDialogsCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.CloseAllDialogsCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
