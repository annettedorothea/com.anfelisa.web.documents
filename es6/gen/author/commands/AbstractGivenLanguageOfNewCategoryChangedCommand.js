import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenLanguageOfNewCategoryChangedOkEvent from "../../../src/author/events/GivenLanguageOfNewCategoryChangedOkEvent";

export default class AbstractGivenLanguageOfNewCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.GivenLanguageOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenLanguageOfNewCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GivenLanguageOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
