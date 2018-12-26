import Command from "../../../gen/ace/SynchronousCommand";
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
		switch (this.commandData.outcome) {
		case this.ok:
			new LoadNextReinforceCardOkEvent(this.commandData).publish();
			new TriggerAction(new LoadBoxStatisticsAction(this.commandData)).publish();
			break;
		case this.noCard:
			new TriggerAction(new RouteAction(this.commandData)).publish();
			break;
		default:
			throw 'LoadNextReinforceCardCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
