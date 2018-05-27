import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedLanguageOfEditedCategoryChangedOkEvent from "../../../src/author/events/WantedLanguageOfEditedCategoryChangedOkEvent";

export default class AbstractWantedLanguageOfEditedCategoryChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.WantedLanguageOfEditedCategoryChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedLanguageOfEditedCategoryChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedLanguageOfEditedCategoryChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
