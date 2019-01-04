import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import FilterCardsOkEvent from "../../../gen/card/events/FilterCardsOkEvent";

export default class AbstractFilterCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.FilterCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new FilterCardsOkEvent(this.commandData).publish();
			break;
		default:
			throw 'FilterCardsCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
