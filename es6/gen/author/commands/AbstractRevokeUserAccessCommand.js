import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import RevokeUserAccessOkEvent from "../../../gen/author/events/RevokeUserAccessOkEvent";
import RevokeUserAccessErrorEvent from "../../../gen/author/events/RevokeUserAccessErrorEvent";
import DisplayMessageAction from "../../../src/common/actions/DisplayMessageAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractRevokeUserAccessCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.RevokeUserAccessCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new RevokeUserAccessOkEvent(this.commandData).publish();
			new TriggerAction(new DisplayMessageAction(this.commandData.messageKey)).publish();
			new TriggerAction(new LoadCategoriesAction()).publish();
			break;
		case this.error:
			new RevokeUserAccessErrorEvent(this.commandData).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData.error)).publish();
			break;
		default:
			throw 'RevokeUserAccessCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
