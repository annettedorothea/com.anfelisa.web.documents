import Command from "../../../gen/ace/SynchronousCommand";
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
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteUserOkEvent(this.commandData).publish();
			new TriggerAction(new LogoutAction(this.commandData)).publish();
			break;
		case this.error:
			new DeleteUserErrorEvent(this.commandData).publish();
			new TriggerAction(new LoadUserAction(this.commandData)).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'DeleteUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
