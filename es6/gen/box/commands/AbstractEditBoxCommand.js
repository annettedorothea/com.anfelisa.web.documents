import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditBoxOkEvent from "../../../gen/box/events/EditBoxOkEvent";

export default class AbstractEditBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.EditBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditBoxOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
