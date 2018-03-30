import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ShowCorrectMultipleChoiceLastEvent from "../../../src/multiplechoice/events/ShowCorrectMultipleChoiceLastEvent";
import ShowCorrectMultipleChoiceNotLastEvent from "../../../src/multiplechoice/events/ShowCorrectMultipleChoiceNotLastEvent";
import SaveResultAction from "../../../src/common/actions/SaveResultAction";

export default class AbstractShowCorrectMultipleChoiceCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "multiplechoice.ShowCorrectMultipleChoiceCommand");
        this.last = "last";
        this.notLast = "notLast";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.last:
			promises.push(new ShowCorrectMultipleChoiceLastEvent(this.commandData).publish());
			promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
			break;
		case this.notLast:
			promises.push(new ShowCorrectMultipleChoiceNotLastEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ShowCorrectMultipleChoiceCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
