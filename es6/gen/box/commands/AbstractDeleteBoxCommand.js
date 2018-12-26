import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteBoxErrorEvent from "../../../gen/box/events/DeleteBoxErrorEvent";
import LoadBoxesAction from "../../../src/box/actions/LoadBoxesAction";
import DisplayErrorAction from "../../../src/common/actions/DisplayErrorAction";

export default class AbstractDeleteBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.DeleteBoxCommand");
        this.ok = "ok";
        this.error = "error";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new LoadBoxesAction(this.commandData)).publish();
			break;
		case this.error:
			new DeleteBoxErrorEvent(this.commandData).publish();
			new TriggerAction(new DisplayErrorAction(this.commandData)).publish();
			break;
		default:
			throw 'DeleteBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
