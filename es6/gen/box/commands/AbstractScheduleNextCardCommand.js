import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ScheduleNextCardUnauthorizedEvent from "../../../src/box/events/ScheduleNextCardUnauthorizedEvent";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";
import LogoutAction from "../../../src/common/actions/LogoutAction";

export default class AbstractScheduleNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScheduleNextCardCommand");
        this.ok = "ok";
        this.unauthorized = "unauthorized";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData)).publish());
			break;
		case this.unauthorized:
			promises.push(new ScheduleNextCardUnauthorizedEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LogoutAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
