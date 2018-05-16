import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedOfNewCardChangedOkEvent from "../../../src/author/events/WantedOfNewCardChangedOkEvent";

export default class AbstractWantedOfNewCardChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.WantedOfNewCardChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedOfNewCardChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedOfNewCardChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */