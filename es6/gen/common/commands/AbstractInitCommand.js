import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitUserEvent from "../../../gen/common/events/InitUserEvent";
import InitNoUserEvent from "../../../gen/common/events/InitNoUserEvent";
import InitialLoginAction from "../../../src/common/actions/InitialLoginAction";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";

export default class AbstractInitCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.InitCommand");
        this.user = "user";
        this.noUser = "noUser";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.user:
			new InitUserEvent(this.commandData).publish();
			new TriggerAction(new InitialLoginAction(this.commandData.hash)).publish();
			break;
		case this.noUser:
			new InitNoUserEvent(this.commandData).publish();
			new TriggerAction(new RouteChangedAction(this.commandData.hash)).publish();
			break;
		default:
			throw 'InitCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
