'use strict';

class AbstractShowCorrectMultipleChoiceCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ShowCorrectMultipleChoiceCommand");
        this.last = "last";
        this.notLast = "notLast";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.last:
        	promises.push(new ShowCorrectMultipleChoiceEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
        	break;
        case this.notLast:
        	promises.push(new ShowCorrectMultipleChoiceEvent(this.commandData).publish());
        	promises.push(new EnableNextButtonEvent(this.commandData).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
