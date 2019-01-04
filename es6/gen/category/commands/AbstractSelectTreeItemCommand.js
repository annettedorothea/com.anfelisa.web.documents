import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import SelectTreeItemOkEvent from "../../../gen/category/events/SelectTreeItemOkEvent";
import LoadCardsAction from "../../../src/card/actions/LoadCardsAction";

export default class AbstractSelectTreeItemCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.SelectTreeItemCommand");
        this.ok = "ok";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.ok:
			new SelectTreeItemOkEvent(this.commandData).publish();
			new TriggerAction(new LoadCardsAction()).publish();
			break;
		default:
			throw 'SelectTreeItemCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
