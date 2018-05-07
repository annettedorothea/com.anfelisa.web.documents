import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfEditedCardChangedOkEvent from "../../../src/author/events/IndexOfEditedCardChangedOkEvent";

export default class AbstractIndexOfEditedCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new IndexOfEditedCardChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IndexOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
