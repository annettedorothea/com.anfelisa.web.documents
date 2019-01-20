import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";
import {getState} from "../../../gen/ace/AppState";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        const data = getState().data;
        if (data.categoryTree.movedCategory) {
            this.commandData.outcome = this.category;
        } else {
            this.commandData.outcome = this.card;
        }
    }
}

/*       S.D.G.       */
