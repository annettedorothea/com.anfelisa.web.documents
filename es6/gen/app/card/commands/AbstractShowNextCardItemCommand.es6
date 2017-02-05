'use strict';

class AbstractShowNextCardItemCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "ShowNextCardItemCommand");
        this.showWanted = "showWanted";
        this.showNextLine = "showNextLine";
        this.showNextWord = "showNextWord";
    }

    publishEvents() {
    	let promises = [];
    	
        switch (this.commandData.outcome) {
        case this.showWanted:
        	promises.push(new ShowWantedEvent(this.commandData).publish());
        	promises.push(new ShowScoreButtonsEvent(this.commandData).publish());
        	break;
        case this.showNextLine:
        	promises.push(new ShowNextLineEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
        	break;
        case this.showNextWord:
        	promises.push(new ShowNextWordEvent(this.commandData).publish());
        	promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
        	break;
    	default:
    		throw 'unhandled outcome: ' + this.commandData.outcome;
    	}
    	return Promise.all(promises);
    }
}

/*       S.D.G.       */
