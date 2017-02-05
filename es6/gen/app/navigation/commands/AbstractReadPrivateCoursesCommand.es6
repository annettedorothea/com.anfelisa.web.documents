'use strict';

class AbstractReadPrivateCoursesCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ReadPrivateCoursesCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.ok:
        	promises.push(new PrivateCoursesReadEvent(this.commandData).publish());
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
