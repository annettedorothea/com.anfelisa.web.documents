import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenOfNewCardChangedOkEvent from "../../../src/author/events/GivenOfNewCardChangedOkEvent";

export default class AbstractGivenOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.GivenOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GivenOfNewCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GivenOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
