import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import RouteAction from "../../../src/common/actions/RouteAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractRegisterUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "registration.RegisterUserCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new DisplayMessageAction(this.commandData)).publish();
			new TriggerAction(new RouteAction(this.commandData)).publish();
			break;
		case this.error:
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'RegisterUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
