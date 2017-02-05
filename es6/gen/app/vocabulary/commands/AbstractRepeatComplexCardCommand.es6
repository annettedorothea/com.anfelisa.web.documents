'use strict';

class AbstractRepeatComplexCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "RepeatComplexCardCommand");
        this.go = "go";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.go:
        	promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
