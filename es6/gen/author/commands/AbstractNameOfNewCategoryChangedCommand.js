import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NameOfNewCategoryChangedOkEvent from "../../../src/author/events/NameOfNewCategoryChangedOkEvent";

export default class AbstractNameOfNewCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.NameOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new NameOfNewCategoryChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('NameOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
