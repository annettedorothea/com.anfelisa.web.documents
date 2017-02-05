'use strict';

class AbstractDisplayNextQuestionCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "DisplayNextQuestionCommand");
        this.go = "go";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.go:
        	promises.push(new DisplayNextQuestionEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
