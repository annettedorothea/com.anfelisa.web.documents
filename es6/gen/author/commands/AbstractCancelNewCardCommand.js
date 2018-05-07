import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelNewCardOkEvent from "../../../src/author/events/CancelNewCardOkEvent";

export default class AbstractCancelNewCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.CancelNewCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new CancelNewCardOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('CancelNewCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
