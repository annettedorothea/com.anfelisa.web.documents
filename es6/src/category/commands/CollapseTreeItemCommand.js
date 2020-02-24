import AbstractCollapseTreeItemCommand from "../../../gen/category/commands/AbstractCollapseTreeItemCommand";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/ReadAppState";

export default class CollapseTreeItemCommand extends AbstractCollapseTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        let category = findCategory(categoryTree.rootCategory.childCategories, this.commandData.categoryId);
        category.expanded = false;
        this.commandData.rootCategory = categoryTree.rootCategory;
        if (categoryTree.selectedCategory && isCategoryChildOfParent(category, categoryTree.selectedCategory.categoryId)) {
            this.commandData.selectedCategory = undefined;
            this.commandData.outcome = this.deselectCategory;
        } else {
            this.commandData.outcome = this.ok;
        }
    }
}

/*       S.D.G.       */
