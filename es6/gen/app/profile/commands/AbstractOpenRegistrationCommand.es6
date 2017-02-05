'use strict';

class AbstractOpenRegistrationCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "OpenRegistrationCommand");
        this.ok = "ok";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new RenderRegistrationEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
