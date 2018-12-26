import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardOkEvent from "../../../gen/box/events/LoadNextCardOkEvent";
import LoadNextCardDoNotScheduleNextEvent from "../../../gen/box/events/LoadNextCardDoNotScheduleNextEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";
import ScheduleNextCardAction from "../../../src/box/actions/ScheduleNextCardAction";

export default class AbstractLoadNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextCardCommand");
        this.ok = "ok";
        this.scheduleNext = "scheduleNext";
        this.doNotScheduleNext = "doNotScheduleNext";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadNextCardOkEvent(this.commandData).publish();
			new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish();
			break;
		case this.scheduleNext:
			new TriggerAction(new ScheduleNextCardAction(this.commandData)).publish();
			break;
		case this.doNotScheduleNext:
			new LoadNextCardDoNotScheduleNextEvent(this.commandData).publish();
			new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish();
			break;
		default:
			throw 'LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
