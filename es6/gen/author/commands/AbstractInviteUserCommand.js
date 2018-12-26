import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import InviteUserBadRequestEvent from "../../../gen/author/events/InviteUserBadRequestEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractInviteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.InviteUserCommand");
        this.ok = "ok";
        this.badRequest = "badRequest";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new DisplayMessageAction(this.commandData)).publish();
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		case this.badRequest:
			new InviteUserBadRequestEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoriesAction(this.commandData)).publish();
			break;
		default:
			throw 'InviteUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
