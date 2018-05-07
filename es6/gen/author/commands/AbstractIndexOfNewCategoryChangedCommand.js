import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfNewCategoryChangedOkEvent from "../../../src/author/events/IndexOfNewCategoryChangedOkEvent";

export default class AbstractIndexOfNewCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new IndexOfNewCategoryChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IndexOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
