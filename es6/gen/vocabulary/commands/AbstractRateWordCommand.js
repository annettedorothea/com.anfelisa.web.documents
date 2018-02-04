import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WordIsCorrectAndFinishedEvent from "../../../src/vocabulary/events/WordIsCorrectAndFinishedEvent";
import WordIsCorrectAndNotFinishedEvent from "../../../src/vocabulary/events/WordIsCorrectAndNotFinishedEvent";
import WordIsNotCorrectEvent from "../../../src/vocabulary/events/WordIsNotCorrectEvent";
import IsRatedTestFinishedAction from "../../../src/vocabulary/actions/IsRatedTestFinishedAction";

export default class AbstractRateWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.RateWordCommand");
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
