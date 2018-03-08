import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowFalseMultipleChoiceEvent from "../../../src/multiplechoice/events/ShowFalseMultipleChoiceEvent";
import EnableNextButtonEvent from "../../../src/multiplechoice/events/EnableNextButtonEvent";
import SaveResultAction from "../../../src/common/actions/SaveResultAction";

export default class AbstractShowFalseMultipleChoiceCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "multiplechoice.ShowFalseMultipleChoiceCommand");
        this.last = "last";
        this.notLast = "notLast";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.last:
			promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
			break;
		case this.notLast:
			promises.push(new ShowFalseMultipleChoiceEvent(this.commandData).publish());
			promises.push(new EnableNextButtonEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowFalseMultipleChoiceCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
