import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";
import {getAppState} from "../../app/App";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        const data = getAppState().data;
        if (data.dropTargetCategoryId === data.selectedCategory.categoryId) {
            this.commandData.outcome = this.self;
        } else {
            this.commandData.outcome = this.card;
        }
    }
}

/*       S.D.G.       */
