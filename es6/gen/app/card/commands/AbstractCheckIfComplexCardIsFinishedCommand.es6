'use strict';

class AbstractCheckIfComplexCardIsFinishedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "CheckIfComplexCardIsFinishedCommand");
        this.complexCardIsFinished = "complexCardIsFinished";
        this.complexCardIsNotFinished = "complexCardIsNotFinished";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.complexCardIsFinished:
        	promises.push(new ShowScoreButtonsEvent(this.commandData).publish());
        	break;
        case this.complexCardIsNotFinished:
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
