import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserOkEvent from "../../../gen/profile/events/DeleteUserOkEvent";
import DeleteUserErrorEvent from "../../../gen/profile/events/DeleteUserErrorEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import LoadUserAction from "../../../src/profile/actions/LoadUserAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "profile.DeleteUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new DeleteUserOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		case this.error:
			promises.push(new DeleteUserErrorEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadUserAction(this.commandData)).publish());
			promises.push(new TriggerAction(new DisplayErrorAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('DeleteUserCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
