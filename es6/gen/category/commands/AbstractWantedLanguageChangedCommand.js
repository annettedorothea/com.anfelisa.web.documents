import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import WantedLanguageChangedOkEvent from "../../../gen/category/events/WantedLanguageChangedOkEvent";

export default class AbstractWantedLanguageChangedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.WantedLanguageChangedCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new WantedLanguageChangedOkEvent(this.commandData).publish();
			break;
		default:
			throw 'WantedLanguageChangedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
