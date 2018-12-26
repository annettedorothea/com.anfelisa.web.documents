import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";

export default class AbstractUpdateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.UpdateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish();
			break;
		default:
			throw 'UpdateBoxCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
