import AbstractItemDroppedCommand from "../../../gen/category/commands/AbstractItemDroppedCommand";
import {getAppState} from "../../app/App";

export default class ItemDroppedCommand extends AbstractItemDroppedCommand {
    execute() {
        const data = getAppState().data;
        if (data.movedCategory) {
            this.commandData.outcome = this.category;
        } else {
            this.commandData.outcome = this.card;
        }
    }
}

/*       S.D.G.       */