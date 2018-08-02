import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractScheduleSelectedCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.ScheduleSelectedCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleSelectedCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
