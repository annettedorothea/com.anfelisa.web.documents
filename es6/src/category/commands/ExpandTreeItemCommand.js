import AbstractExpandTreeItemCommand from "../../../gen/category/commands/AbstractExpandTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/ReadAppState";

export default class ExpandTreeItemCommand extends AbstractExpandTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        let category = findCategory(categoryTree.rootCategory.childCategories, this.commandData.categoryId);
        category.expanded = true;
        this.commandData.rootCategory = categoryTree.rootCategory;
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
