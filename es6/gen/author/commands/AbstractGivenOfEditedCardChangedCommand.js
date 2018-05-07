import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenOfEditedCardChangedOkEvent from "../../../src/author/events/GivenOfEditedCardChangedOkEvent";

export default class AbstractGivenOfEditedCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.GivenOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new GivenOfEditedCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('GivenOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
