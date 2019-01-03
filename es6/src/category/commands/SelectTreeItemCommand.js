import AbstractSelectTreeItemCommand from "../../../gen/category/commands/AbstractSelectTreeItemCommand";
import {getAppState} from "../../app/App";
import {findCategory} from "../utils/CategoryTreeUtils"

export default class SelectTreeItemCommand extends AbstractSelectTreeItemCommand {
    execute() {
        const data = getAppState().data;
        this.commandData.selectedCategory = findCategory(data.categoryList, this.commandData.categoryId);
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
