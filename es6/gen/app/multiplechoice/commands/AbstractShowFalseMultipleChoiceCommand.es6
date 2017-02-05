'use strict';

class AbstractShowFalseMultipleChoiceCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ShowFalseMultipleChoiceCommand");
        this.last = "last";
        this.notLast = "notLast";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.last:
        	promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
        	break;
        case this.notLast:
        	promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
        	promises.push(new EnableNextButtonEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
