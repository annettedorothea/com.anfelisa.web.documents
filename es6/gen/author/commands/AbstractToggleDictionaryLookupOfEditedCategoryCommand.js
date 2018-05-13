import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ToggleDictionaryLookupOfEditedCategoryOkEvent from "../../../src/author/events/ToggleDictionaryLookupOfEditedCategoryOkEvent";

export default class AbstractToggleDictionaryLookupOfEditedCategoryCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.ToggleDictionaryLookupOfEditedCategoryCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new ToggleDictionaryLookupOfEditedCategoryOkEvent(this.commandData).publish();
			break;
		default:
			throw 'ToggleDictionaryLookupOfEditedCategoryCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
