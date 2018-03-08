import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveResultAction from "../../../src/common/actions/SaveResultAction";
import ShowNextWordOfTestAction from "../../../src/vocabulary/actions/ShowNextWordOfTestAction";

export default class AbstractIsRatedTestFinishedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.IsRatedTestFinishedCommand");
        this.testFailed = "testFailed";
        this.testFinishedSuccessfully = "testFinishedSuccessfully";
        this.goOnWithTest = "goOnWithTest";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.testFailed:
			promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
			break;
		case this.testFinishedSuccessfully:
			promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
			break;
		case this.goOnWithTest:
			promises.push(new TriggerAction(new ShowNextWordOfTestAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IsRatedTestFinishedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
