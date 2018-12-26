import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxesOkEvent from "../../../gen/box/events/LoadBoxesOkEvent";

export default class AbstractLoadBoxesCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadBoxesCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadBoxesOkEvent(this.commandData).publish();
			break;
		default:
			throw 'LoadBoxesCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
