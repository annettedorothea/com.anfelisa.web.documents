import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InitialLoginOkEvent from "../../../gen/common/events/InitialLoginOkEvent";
import RouteChangedAction from "../../../src/common/actions/RouteChangedAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractInitialLoginCommand extends Command {
    constructor(commandData) {
        super(commandData, "common.InitialLoginCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new InitialLoginOkEvent(this.commandData).publish();
			new TriggerAction(new RouteChangedAction(this.commandData)).publish();
			break;
		case this.unauthorized:
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			break;
		default:
			throw 'InitialLoginCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
