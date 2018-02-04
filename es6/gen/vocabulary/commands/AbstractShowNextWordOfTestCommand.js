import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowNextWordOfTestEvent from "../../../src/vocabulary/events/ShowNextWordOfTestEvent";

export default class AbstractShowNextWordOfTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.ShowNextWordOfTestCommand");
        this.showNextWordOfTest = "showNextWordOfTest";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.showNextWordOfTest:
			promises.push(new ShowNextWordOfTestEvent(this.commandData).publish());
			break;
		default:
			throw 'unhandled outcome: ' + this.commandData.outcome;
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
