import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxStatisticsOkEvent from "../../../gen/box/events/LoadBoxStatisticsOkEvent";

export default class AbstractLoadBoxStatisticsCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadBoxStatisticsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadBoxStatisticsOkEvent(this.commandData).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadBoxStatisticsCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
