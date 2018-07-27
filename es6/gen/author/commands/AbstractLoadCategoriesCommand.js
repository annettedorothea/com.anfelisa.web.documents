import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoriesOkEvent from "../../../gen/author/events/LoadCategoriesOkEvent";
import LoadCategoriesUnauthorizedEvent from "../../../gen/author/events/LoadCategoriesUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadCategoriesCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.LoadCategoriesCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadCategoriesOkEvent(this.commandData).publish());
			break;
		case this.unauthorized:
			promises.push(new LoadCategoriesUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadCategoriesCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
