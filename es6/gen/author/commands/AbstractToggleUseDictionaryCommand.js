import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleUseDictionaryOkEvent from "../../../src/author/events/ToggleUseDictionaryOkEvent";

export default class AbstractToggleUseDictionaryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.ToggleUseDictionaryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleUseDictionaryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleUseDictionaryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
