import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserBadRequestEvent from "../../../gen/author/events/InviteUserBadRequestEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractInviteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.InviteUserCommand");
        this.ok = "ok";
        this.badRequest = "badRequest";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.badRequest:
			promises.push(new InviteUserBadRequestEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InviteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
