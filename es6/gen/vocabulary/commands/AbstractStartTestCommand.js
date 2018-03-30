import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import StartTestTestStartedEvent from "../../../src/vocabulary/events/StartTestTestStartedEvent";
import ShowNextWordOfTestAction from "../../../src/vocabulary/actions/ShowNextWordOfTestAction";

export default class AbstractStartTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.StartTestCommand");
        this.testStarted = "testStarted";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.testStarted:
			promises.push(new StartTestTestStartedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ShowNextWordOfTestAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('StartTestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
