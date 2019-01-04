import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import PassValueToDictionaryOkEvent from "../../../gen/card/events/PassValueToDictionaryOkEvent";

export default class AbstractPassValueToDictionaryCommand extends Command {
    constructor(commandData) {
        super(commandData, "card.PassValueToDictionaryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new PassValueToDictionaryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'PassValueToDictionaryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
