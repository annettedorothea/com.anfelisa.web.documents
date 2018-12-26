import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GetRoleOkEvent from "../../../gen/login/events/GetRoleOkEvent";
import RouteAction from "../../../src/common/actions/RouteAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractGetRoleCommand extends Command {
    constructor(commandData) {
        super(commandData, "login.GetRoleCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GetRoleOkEvent(this.commandData).publish();
			new TriggerAction(new RouteAction(this.commandData)).publish();
			break;
		case this.unauthorized:
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'GetRoleCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
