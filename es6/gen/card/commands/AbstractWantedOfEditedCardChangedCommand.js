import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedOfEditedCardChangedOkEvent from "../../../gen/card/events/WantedOfEditedCardChangedOkEvent";

export default class AbstractWantedOfEditedCardChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.WantedOfEditedCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedOfEditedCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedOfEditedCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
