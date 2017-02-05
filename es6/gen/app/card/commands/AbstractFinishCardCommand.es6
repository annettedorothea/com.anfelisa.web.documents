'use strict';

class AbstractFinishCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "FinishCardCommand");
        this.cardFinished = "cardFinished";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.cardFinished:
        	promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
