import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import EditMaxCardsPerDayOkEvent from "../../../gen/box/events/EditMaxCardsPerDayOkEvent";

export default class AbstractEditMaxCardsPerDayCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.EditMaxCardsPerDayCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new EditMaxCardsPerDayOkEvent(this.commandData).publish();
			break;
		default:
			throw 'EditMaxCardsPerDayCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
