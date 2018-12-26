import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxStatisticsOkEvent from "../../../gen/box/events/LoadBoxStatisticsOkEvent";

export default class AbstractLoadBoxStatisticsCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadBoxStatisticsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadBoxStatisticsOkEvent(this.commandData).publish();
			break;
		default:
			throw 'LoadBoxStatisticsCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
