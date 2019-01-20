import AbstractCollapseTreeItemCommand from "../../../gen/category/commands/AbstractCollapseTreeItemCommand";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/AppState";

export default class CollapseTreeItemCommand extends AbstractCollapseTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        let category = findCategory(categoryTree.categoryList, this.commandData.categoryId);
        category.expanded = false;
        this.commandData.categoryList = categoryTree.categoryList;
        if (categoryTree.selectedCategory && isCategoryChildOfParent(category, categoryTree.selectedCategory.categoryId)) {
            this.commandData.selectedCategory = undefined;
            this.commandData.outcome = this.deselectCategory;
        } else {
            this.commandData.outcome = this.ok;
        }
    }
}

/*       S.D.G.       */
