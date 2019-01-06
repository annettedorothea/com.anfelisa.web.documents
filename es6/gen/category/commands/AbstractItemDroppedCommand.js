import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import MoveCardsAction from "../../../src/card/actions/MoveCardsAction";
import MoveCategoryAction from "../../../src/category/actions/MoveCategoryAction";

export default class AbstractItemDroppedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.ItemDroppedCommand");
        this.card = "card";
        this.category = "category";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.card:
			new TriggerAction(new MoveCardsAction()).publish();
			break;
		case this.category:
			new TriggerAction(new MoveCategoryAction()).publish();
			break;
		default:
			throw 'ItemDroppedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
