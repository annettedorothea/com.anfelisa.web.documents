import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowNextWordOfTestShowNextWordOfTestEvent from "../../../src/vocabulary/events/ShowNextWordOfTestShowNextWordOfTestEvent";

export default class AbstractShowNextWordOfTestCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "vocabulary.ShowNextWordOfTestCommand");
        this.showNextWordOfTest = "showNextWordOfTest";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.showNextWordOfTest:
			promises.push(new ShowNextWordOfTestShowNextWordOfTestEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowNextWordOfTestCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
