'use strict';

class AbstractOpenChangePasswordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "OpenChangePasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new RenderChangePasswordEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
