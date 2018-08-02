import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextCardAction from "../../../src/box/actions/LoadNextCardAction";

export default class AbstractScheduleNextCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.ScheduleNextCardCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadNextCardAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('ScheduleNextCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
