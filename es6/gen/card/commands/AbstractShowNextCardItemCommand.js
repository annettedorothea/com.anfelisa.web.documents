import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowNextCardItemShowWantedEvent from "../../../src/card/events/ShowNextCardItemShowWantedEvent";
import ShowNextCardItemShowNextLineEvent from "../../../src/card/events/ShowNextCardItemShowNextLineEvent";
import ShowNextCardItemShowNextWordEvent from "../../../src/card/events/ShowNextCardItemShowNextWordEvent";
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
			promises.push(new ShowNextCardItemShowWantedEvent(this.commandData).publish());
			break;
		case this.showNextLine:
			promises.push(new ShowNextCardItemShowNextLineEvent(this.commandData).publish());
			promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
			break;
		case this.showNextWord:
			promises.push(new ShowNextCardItemShowNextWordEvent(this.commandData).publish());
			promises.push(new TriggerAction(new CheckIfComplexCardIsFinishedAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowNextCardItemCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
