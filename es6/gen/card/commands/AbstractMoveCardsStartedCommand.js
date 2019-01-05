import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MoveCardsStartedOkEvent from "../../../gen/card/events/MoveCardsStartedOkEvent";

export default class AbstractMoveCardsStartedCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.MoveCardsStartedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new MoveCardsStartedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'MoveCardsStartedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
