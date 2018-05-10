import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadUserOkEvent from "../../../src/profile/events/LoadUserOkEvent";
import LoadUserUnauthorizedEvent from "../../../src/profile/events/LoadUserUnauthorizedEvent";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadUserCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "profile.LoadUserCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadUserOkEvent(this.commandData).publish();
			break;
		case this.unauthorized:
			new LoadUserUnauthorizedEvent(this.commandData).publish();
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			break;
		default:
			throw 'LoadUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
