'use strict';

class AbstractIsTestFinishedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "IsTestFinishedCommand");
        this.testFailed = "testFailed";
        this.testFinishedSuccessfully = "testFinishedSuccessfully";
        this.goOnWithTest = "goOnWithTest";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.testFailed:
        	promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
        	break;
        case this.testFinishedSuccessfully:
        	promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
        	break;
        case this.goOnWithTest:
        	promises.push(new DisplayNextWordButtonEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
