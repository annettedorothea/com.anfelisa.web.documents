'use strict';

class AbstractDeleteBoxCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "DeleteBoxCommand");
        this.deleted = "deleted";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.deleted:
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
