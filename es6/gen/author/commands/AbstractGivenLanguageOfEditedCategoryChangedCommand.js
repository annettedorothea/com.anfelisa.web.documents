import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import GivenLanguageOfEditedCategoryChangedOkEvent from "../../../src/author/events/GivenLanguageOfEditedCategoryChangedOkEvent";

export default class AbstractGivenLanguageOfEditedCategoryChangedCommand extends Command {
    constructor(commandParam) {
        super(commandParam, "author.GivenLanguageOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new GivenLanguageOfEditedCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'GivenLanguageOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
