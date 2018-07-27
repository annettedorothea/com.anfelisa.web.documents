import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedLanguageOfNewCategoryChangedOkEvent from "../../../gen/author/events/WantedLanguageOfNewCategoryChangedOkEvent";

export default class AbstractWantedLanguageOfNewCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.WantedLanguageOfNewCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedLanguageOfNewCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedLanguageOfNewCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
