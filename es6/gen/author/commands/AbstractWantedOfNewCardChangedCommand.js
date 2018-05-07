import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedOfNewCardChangedOkEvent from "../../../src/author/events/WantedOfNewCardChangedOkEvent";

export default class AbstractWantedOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.WantedOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new WantedOfNewCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('WantedOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
