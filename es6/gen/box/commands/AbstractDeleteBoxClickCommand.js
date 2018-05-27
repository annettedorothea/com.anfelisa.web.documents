import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DeleteBoxClickOkEvent from "../../../src/box/events/DeleteBoxClickOkEvent";

export default class AbstractDeleteBoxClickCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "box.DeleteBoxClickCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DeleteBoxClickOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DeleteBoxClickCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
