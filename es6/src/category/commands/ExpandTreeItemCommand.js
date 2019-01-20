import AbstractExpandTreeItemCommand from "../../../gen/category/commands/AbstractExpandTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/AppState";

export default class ExpandTreeItemCommand extends AbstractExpandTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        let category = findCategory(categoryTree.categoryList, this.commandData.categoryId);
        category.expanded = true;
        this.commandData.categoryList = categoryTree.categoryList;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
