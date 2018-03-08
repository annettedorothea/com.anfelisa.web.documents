import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SaveResultAction from "../../../src/common/actions/SaveResultAction";

export default class AbstractFinishCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "card.FinishCardCommand");
        this.cardFinished = "cardFinished";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.cardFinished:
			promises.push(new TriggerAction(new SaveResultAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('FinishCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
