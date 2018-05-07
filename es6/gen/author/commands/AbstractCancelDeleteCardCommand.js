import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelDeleteCardOkEvent from "../../../src/author/events/CancelDeleteCardOkEvent";

export default class AbstractCancelDeleteCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelDeleteCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CancelDeleteCardOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CancelDeleteCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
