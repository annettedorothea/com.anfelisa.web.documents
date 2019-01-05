import Command from "../../../gen/ace/SynchronousCommand";
import TriggerAction from "../../../gen/ace/TriggerAction";
import ItemDroppedSelfEvent from "../../../gen/category/events/ItemDroppedSelfEvent";
import MoveCardsAction from "../../../src/card/actions/MoveCardsAction";

export default class AbstractItemDroppedCommand extends Command {
    constructor(commandData) {
        super(commandData, "category.ItemDroppedCommand");
        this.card = "card";
        this.self = "self";
    }

    publishEvents() {
		switch (this.commandData.outcome) {
		case this.card:
			new TriggerAction(new MoveCardsAction()).publish();
			break;
		case this.self:
			new ItemDroppedSelfEvent(this.commandData).publish();
			break;
		default:
			throw 'ItemDroppedCommand unhandled outcome: ' + this.commandData.outcome;
		}
    }
}

/*       S.D.G.       */
