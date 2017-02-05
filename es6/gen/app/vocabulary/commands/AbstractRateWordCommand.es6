'use strict';

class AbstractRateWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "RateWordCommand");
        this.wordIsCorrectAndFinished = "wordIsCorrectAndFinished";
        this.wordIsCorrectAndNotFinished = "wordIsCorrectAndNotFinished";
        this.wordIsNotCorrect = "wordIsNotCorrect";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.wordIsCorrectAndFinished:
        	promises.push(new WordIsCorrectAndFinishedEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
        	break;
        case this.wordIsCorrectAndNotFinished:
        	promises.push(new WordIsCorrectAndNotFinishedEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
        	break;
        case this.wordIsNotCorrect:
        	promises.push(new WordIsNotCorrectEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
