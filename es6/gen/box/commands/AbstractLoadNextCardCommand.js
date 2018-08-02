import Command from "../../../gen/ace/AsynchronousCommand";
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
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish());
			break;
		case this.scheduleNext:
			promises.push(new TriggerAction(new ScheduleNextCardAction(this.commandData)).publish());
			break;
		case this.doNotScheduleNext:
			promises.push(new LoadNextCardDoNotScheduleNextEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
