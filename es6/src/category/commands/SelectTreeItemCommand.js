import AbstractSelectTreeItemCommand from "../../../gen/category/commands/AbstractSelectTreeItemCommand";
import {findCategory} from "../utils/CategoryTreeUtils"

export default class SelectTreeItemCommand extends AbstractSelectTreeItemCommand {
    execute() {
        if (this.commandData.rootCategory.categoryId === this.commandData.categoryId) {
            this.commandData.selectedCategory = this.commandData.rootCategory;
            this.commandData.hash = `#categories/${this.commandData.categoryId}`;
        } else {
            this.commandData.selectedCategory = findCategory(this.commandData.rootCategory.childCategories, this.commandData.categoryId);
            this.commandData.hash = `#categories/${this.commandData.selectedCategory.rootCategoryId}/${this.commandData.categoryId}`;
        }
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
