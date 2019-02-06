import AbstractSelectTreeItemCommand from "../../../gen/category/commands/AbstractSelectTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/ReadAppState";

export default class SelectTreeItemCommand extends AbstractSelectTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        this.commandData.selectedCategory = findCategory(categoryTree.categoryList, this.commandData.categoryId);
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
