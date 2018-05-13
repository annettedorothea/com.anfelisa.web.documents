import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleDictionaryLookupOfNewCategoryOkEvent from "../../../src/author/events/ToggleDictionaryLookupOfNewCategoryOkEvent";

export default class AbstractToggleDictionaryLookupOfNewCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.ToggleDictionaryLookupOfNewCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleDictionaryLookupOfNewCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleDictionaryLookupOfNewCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
