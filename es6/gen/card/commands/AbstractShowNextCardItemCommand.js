import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowWantedEvent from "../../../src/card/events/ShowWantedEvent";
import ShowScoreButtonsEvent from "../../../src/card/events/ShowScoreButtonsEvent";
import ShowNextLineEvent from "../../../src/card/events/ShowNextLineEvent";
import ShowNextWordEvent from "../../../src/card/events/ShowNextWordEvent";
import CheckIfComplexCardIsFinishedAction from "../../../src/card/actions/CheckIfComplexCardIsFinishedAction";

export default class AbstractShowNextCardItemCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.ShowNextCardItemCommand");
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
