import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenLanguageChangedOkEvent from "../../../gen/category/events/GivenLanguageChangedOkEvent";

export default class AbstractGivenLanguageChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.GivenLanguageChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenLanguageChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GivenLanguageChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
