import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserUserDoesNotExistEvent from "../../../gen/author/events/InviteUserUserDoesNotExistEvent";
import InviteUserUnauthorizedEvent from "../../../gen/author/events/InviteUserUnauthorizedEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractInviteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.InviteUserCommand");
        this.ok = "ok";
        this.userDoesNotExist = "userDoesNotExist";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new DisplayMessageAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.userDoesNotExist:
			promises.push(new InviteUserUserDoesNotExistEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadCategoriesAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new InviteUserUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('InviteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
