import AbstractCollapseTreeItemCommand from "../../../gen/category/commands/AbstractCollapseTreeItemCommand";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils"

export default class CollapseTreeItemCommand extends AbstractCollapseTreeItemCommand {
    execute() {
        let category = findCategory(this.commandData.rootCategory.childCategories, this.commandData.categoryId);
        category.expanded = false;
        if (this.commandData.selectedCategory && isCategoryChildOfParent(category, this.commandData.selectedCategory.categoryId)) {
            this.addSelectParentCategoryOutcome();
        } else {
            this.addOkOutcome();
        }
    }
}

/*       S.D.G.       */
