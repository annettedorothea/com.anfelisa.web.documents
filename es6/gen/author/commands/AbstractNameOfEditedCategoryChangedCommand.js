import Command from "../../../gen/ace/Command";
import TriggerAction from "../../../gen/ace/TriggerAction";
import NameOfEditedCategoryChangedOkEvent from "../../../src/author/events/NameOfEditedCategoryChangedOkEvent";

export default class AbstractNameOfEditedCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.NameOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new NameOfEditedCategoryChangedOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('NameOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
