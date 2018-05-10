import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteUserUnauthorizedEvent from "../../../src/profile/events/DeleteUserUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractDeleteUserCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.DeleteUserCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			break;
		case this.unauthorized:
			new DeleteUserUnauthorizedEvent(this.commandData).publish();
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			break;
		default:
			throw 'DeleteUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
