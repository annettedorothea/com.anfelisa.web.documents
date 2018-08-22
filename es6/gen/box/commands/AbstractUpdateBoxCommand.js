import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";

export default class AbstractUpdateBoxCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.UpdateBoxCommand");
        this.ok = "ok";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('UpdateBoxCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
