import AbstractSelectTreeItemCommand from "../../../gen/category/commands/AbstractSelectTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"
import {getState} from "../../../gen/ace/ReadAppState";

export default class SelectTreeItemCommand extends AbstractSelectTreeItemCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        if (categoryTree.rootCategory.categoryId === this.commandData.categoryId) {
            this.commandData.selectedCategory = categoryTree.rootCategory;
            this.commandData.hash = `#categories/${this.commandData.categoryId}`;
        } else {
            this.commandData.selectedCategory = findCategory(categoryTree.rootCategory.childCategories, this.commandData.categoryId);
            this.commandData.hash = `#categories/${this.commandData.selectedCategory.rootCategoryId}/${this.commandData.categoryId}`;
        }
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
