import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import DictionaryLookupChangedOkEvent from "../../../gen/category/events/DictionaryLookupChangedOkEvent";

export default class AbstractDictionaryLookupChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.DictionaryLookupChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new DictionaryLookupChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'DictionaryLookupChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
