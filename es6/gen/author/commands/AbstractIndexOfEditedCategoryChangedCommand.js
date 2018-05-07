import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import IndexOfEditedCategoryChangedOkEvent from "../../../src/author/events/IndexOfEditedCategoryChangedOkEvent";

export default class AbstractIndexOfEditedCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.IndexOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new IndexOfEditedCategoryChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('IndexOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
