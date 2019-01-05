import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import UsernameForgotPasswordChangedOkEvent from "../../../gen/password/events/UsernameForgotPasswordChangedOkEvent";

export default class AbstractUsernameForgotPasswordChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "password.UsernameForgotPasswordChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new UsernameForgotPasswordChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'UsernameForgotPasswordChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
