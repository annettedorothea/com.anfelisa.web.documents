import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitUserEvent from "../../../src/common/events/InitUserEvent";
import InitNoUserEvent from "../../../src/common/events/InitNoUserEvent";
import LoginAction from "../../../src/common/actions/LoginAction";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractInitCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "common.InitCommand");
        this.user = "user";
        this.noUser = "noUser";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.user:
			new InitUserEvent(this.commandData).publish();
			new TriggerAction(new LoginAction(this.commandData)).publish();
			new TriggerAction(new RouteChangedAction(this.commandData)).publish();
			break;
		case this.noUser:
			new InitNoUserEvent(this.commandData).publish();
			new TriggerAction(new RouteAction(this.commandData)).publish();
			new TriggerAction(new RouteChangedAction(this.commandData)).publish();
			break;
		default:
			throw 'InitCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
