import Command from "../../../gen/ace/AsynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadNextReinforceCardOkEvent from "../../../gen/box/events/LoadNextReinforceCardOkEvent";
import LoadBoxStatisticsAction from "../../../src/box/actions/LoadBoxStatisticsAction";
import RouteAction from "../../../src/common/actions/RouteAction";

export default class AbstractLoadNextReinforceCardCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.LoadNextReinforceCardCommand");
        this.ok = "ok";
        this.noCard = "noCard";
    }

    publishEvents() {
		let promises = [];
	    	
		switch (this.commandData.outcome) {
		case this.ok:
			promises.push(new LoadNextReinforceCardOkEvent(this.commandData).publish());
			promises.push(new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish());
			break;
		case this.noCard:
			promises.push(new TriggerAction(new RouteAction(this.commandData)).publish());
			break;
		default:
			return new Promise((resolve, reject) => {reject('LoadNextReinforceCardCommand unhandled outcome: ' + this.commandData.outcome)});
		}
		return Promise.all(promises);
    }
}

/*       S.D.G.       */
