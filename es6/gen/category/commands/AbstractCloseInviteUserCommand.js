import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CloseInviteUserOkEvent from "../../../gen/category/events/CloseInviteUserOkEvent";
import LoadCategoryTreeAction from "../../../src/category/actions/LoadCategoryTreeAction";

export default class AbstractCloseInviteUserCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.CloseInviteUserCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CloseInviteUserOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCategoryTreeAction(this.commandData.pathToSelected, this.commandData.selectedCategoryId)).publish();
			break;
		default:
			throw 'CloseInviteUserCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
