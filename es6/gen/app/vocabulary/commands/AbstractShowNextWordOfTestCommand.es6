'use strict';

class AbstractShowNextWordOfTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ShowNextWordOfTestCommand");
        this.showNextWordOfTest = "showNextWordOfTest";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.showNextWordOfTest:
        	promises.push(new ShowNextWordOfTestEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
