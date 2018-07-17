import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardOkEvent from "../../../src/box/events/LoadNextCardOkEvent";
import LoadNextCardDoNotScheduleNextEvent from "../../../src/box/events/LoadNextCardDoNotScheduleNextEvent";
import LoadNextCardUnauthorizedEvent from "../../../src/box/events/LoadNextCardUnauthorizedEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";
import ScheduleNextCardAction from "../../../src/box/actions/ScheduleNextCardAction";
import ClearToastAction from "../../../src/common/actions/ClearToastAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractLoadNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextCardCommand");
        this.ok = "ok";
        this.scheduleNext = "scheduleNext";
        this.doNotScheduleNext = "doNotScheduleNext";
        this.unauthorized = "unauthorized";
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
		case this.unauthorized:
			promises.push(new LoadNextCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new ClearToastAction(this.commandData)).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
