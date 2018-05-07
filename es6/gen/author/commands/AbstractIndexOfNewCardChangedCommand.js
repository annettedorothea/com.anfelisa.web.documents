import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfNewCardChangedOkEvent from "../../../src/author/events/IndexOfNewCardChangedOkEvent";

export default class AbstractIndexOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new IndexOfNewCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IndexOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
