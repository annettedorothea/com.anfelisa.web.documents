import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MaxCardsPerDayChangedOkEvent from "../../../gen/box/events/MaxCardsPerDayChangedOkEvent";

export default class AbstractMaxCardsPerDayChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "box.MaxCardsPerDayChangedCommand");
        this.ok = "ok";
        this.invalid = "invalid";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MaxCardsPerDayChangedOkEvent(this.commandData).publish();
			break;
		case this.invalid:
			break;
		default:
			throw 'MaxCardsPerDayChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
