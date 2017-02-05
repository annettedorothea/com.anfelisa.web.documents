'use strict';

class AbstractStartTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "StartTestCommand");
        this.testStarted = "testStarted";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.testStarted:
        	promises.push(new TestStartedEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new ShowNextWordOfTestAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
