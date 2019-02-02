import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import CancelEditMaxCardsPerDayOkEvent from "../../../gen/box/events/CancelEditMaxCardsPerDayOkEvent";

export default class AbstractCancelEditMaxCardsPerDayCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.CancelEditMaxCardsPerDayCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new CancelEditMaxCardsPerDayOkEvent(this.commandData).publish();
			break;
		default:
			throw 'CancelEditMaxCardsPerDayCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
