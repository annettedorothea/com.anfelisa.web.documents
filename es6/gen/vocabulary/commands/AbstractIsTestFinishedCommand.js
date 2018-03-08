import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayNextWordButtonEvent from "../../../src/vocabulary/events/DisplayNextWordButtonEvent";
import SaveResultAction from "../../../src/common/actions/SaveResultAction";

export default class AbstractIsTestFinishedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.IsTestFinishedCommand");
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
			promises.push(new DisplayNextWordButtonEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IsTestFinishedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
