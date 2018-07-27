import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserBadRequestEvent from "../../../gen/profile/events/DeleteUserBadRequestEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";

export default class AbstractDeleteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserCommand");
        this.ok = "ok";
        this.badRequest = "badRequest";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		case this.badRequest:
			promises.push(new DeleteUserBadRequestEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadUserAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
