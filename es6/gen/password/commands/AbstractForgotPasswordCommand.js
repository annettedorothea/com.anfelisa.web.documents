import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractForgotPasswordCommand extends Command {
    constructor(commandData) {
        super(commandData, "password.ForgotPasswordCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish();
			new TriggerAction(new RouteAction(this.commandData.hash)).publish();
			break;
		default:
			throw 'ForgotPasswordCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
