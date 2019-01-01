import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import LoadCategoriesAction from "../../../src/author/actions/LoadCategoriesAction";

export default class AbstractScheduleSelectedCardsCommand extends Command {
    constructor(commandData) {
        super(commandData, "author.ScheduleSelectedCardsCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new TriggerAction(new LoadCategoriesAction()).publish();
			break;
		default:
			throw 'ScheduleSelectedCardsCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
