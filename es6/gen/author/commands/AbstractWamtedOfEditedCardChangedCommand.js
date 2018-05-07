import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WamtedOfEditedCardChangedOkEvent from "../../../src/author/events/WamtedOfEditedCardChangedOkEvent";

export default class AbstractWamtedOfEditedCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.WamtedOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new WamtedOfEditedCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('WamtedOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
