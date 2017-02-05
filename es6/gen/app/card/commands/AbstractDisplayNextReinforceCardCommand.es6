'use strict';

class AbstractDisplayNextReinforceCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "DisplayNextReinforceCardCommand");
        this.next = "next";
        this.finished = "finished";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.next:
        	promises.push(new DisplayNextReinforceCardEvent(this.commandData).publish());
        	break;
        case this.finished:
        	promises.push(new DisplayReinforceFinishedEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
