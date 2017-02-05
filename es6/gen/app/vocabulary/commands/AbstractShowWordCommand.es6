'use strict';

class AbstractShowWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ShowWordCommand");
        this.showWord = "showWord";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.showWord:
        	promises.push(new ShowWordEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
