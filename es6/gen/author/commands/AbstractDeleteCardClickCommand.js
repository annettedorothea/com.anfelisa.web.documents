import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteCardClickOkEvent from "../../../src/author/events/DeleteCardClickOkEvent";

export default class AbstractDeleteCardClickCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.DeleteCardClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteCardClickOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteCardClickCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
