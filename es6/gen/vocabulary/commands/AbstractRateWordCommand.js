import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RateWordWordIsCorrectAndFinishedEvent from "../../../src/vocabulary/events/RateWordWordIsCorrectAndFinishedEvent";
import RateWordWordIsCorrectAndNotFinishedEvent from "../../../src/vocabulary/events/RateWordWordIsCorrectAndNotFinishedEvent";
import RateWordWordIsNotCorrectEvent from "../../../src/vocabulary/events/RateWordWordIsNotCorrectEvent";
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
			promises.push(new RateWordWordIsCorrectAndFinishedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
			break;
		case this.wordIsCorrectAndNotFinished:
			promises.push(new RateWordWordIsCorrectAndNotFinishedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
			break;
		case this.wordIsNotCorrect:
			promises.push(new RateWordWordIsNotCorrectEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsRatedTestFinishedAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RateWordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
