import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ScheduleSelectedCardsUnauthorizedEvent from "../../../src/author/events/ScheduleSelectedCardsUnauthorizedEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractScheduleSelectedCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.ScheduleSelectedCardsCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new ScheduleSelectedCardsUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleSelectedCardsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
