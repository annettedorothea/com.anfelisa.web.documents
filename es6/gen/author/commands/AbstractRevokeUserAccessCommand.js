import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RevokeUserAccessOkEvent from "../../../src/author/events/RevokeUserAccessOkEvent";
import RevokeUserAccessUnauthorizedEvent from "../../../src/author/events/RevokeUserAccessUnauthorizedEvent";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractRevokeUserAccessCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.RevokeUserAccessCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RevokeUserAccessOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new RevokeUserAccessUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RevokeUserAccessCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
