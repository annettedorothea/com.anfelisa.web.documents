import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggelUseDictionaryOkEvent from "../../../src/author/events/ToggelUseDictionaryOkEvent";

export default class AbstractToggelUseDictionaryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.ToggelUseDictionaryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggelUseDictionaryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggelUseDictionaryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
