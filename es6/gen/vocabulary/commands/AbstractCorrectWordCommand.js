import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CorrectWordWordIsCorrectAndFinishedEvent from "../../../src/vocabulary/events/CorrectWordWordIsCorrectAndFinishedEvent";
import CorrectWordWordIsCorrectAndNotFinishedEvent from "../../../src/vocabulary/events/CorrectWordWordIsCorrectAndNotFinishedEvent";
import CorrectWordWordIsNotCorrectEvent from "../../../src/vocabulary/events/CorrectWordWordIsNotCorrectEvent";
import IsTestFinishedAction from "../../../src/vocabulary/actions/IsTestFinishedAction";

export default class AbstractCorrectWordCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.CorrectWordCommand");
        this.wordIsCorrectAndFinished = "wordIsCorrectAndFinished";
        this.wordIsCorrectAndNotFinished = "wordIsCorrectAndNotFinished";
        this.wordIsNotCorrect = "wordIsNotCorrect";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.wordIsCorrectAndFinished:
			promises.push(new CorrectWordWordIsCorrectAndFinishedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
			break;
		case this.wordIsCorrectAndNotFinished:
			promises.push(new CorrectWordWordIsCorrectAndNotFinishedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
			break;
		case this.wordIsNotCorrect:
			promises.push(new CorrectWordWordIsNotCorrectEvent(this.commandData).publish());
			promises.push(new TriggerAction(new IsTestFinishedAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CorrectWordCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
