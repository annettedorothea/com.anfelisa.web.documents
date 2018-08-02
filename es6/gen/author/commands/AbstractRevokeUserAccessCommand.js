import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RevokeUserAccessOkEvent from "../../../gen/author/events/RevokeUserAccessOkEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractRevokeUserAccessCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.RevokeUserAccessCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new RevokeUserAccessOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('RevokeUserAccessCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
