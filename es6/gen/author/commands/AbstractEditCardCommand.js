import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditCardOkEvent from "../../../src/author/events/EditCardOkEvent";

export default class AbstractEditCardCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.EditCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new EditCardOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('EditCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
