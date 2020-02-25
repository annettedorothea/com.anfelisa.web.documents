import AbstractCheckDropAllowedCommand from "../../../gen/category/commands/AbstractCheckDropAllowedCommand";
import {findCategory, isCategoryChildOfParent} from "../utils/CategoryTreeUtils";
import {getState} from "../../../gen/ace/ReadAppState";

export default class CheckDropAllowedCommand extends AbstractCheckDropAllowedCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        let dropTarget;
        if (this.commandData.categoryId === categoryTree.rootCategory.categoryId) {
            dropTarget = categoryTree.rootCategory;
        } else {
            dropTarget = findCategory(categoryTree.rootCategory.childCategories, this.commandData.categoryId);
        }
        this.commandData.dropTargetCategoryId = dropTarget.categoryId;
        if (categoryTree.movedCategory) {
            if (this.commandData.altKey === true) {
                this.commandData.dropAllowed =
                    dropTarget.parentCategoryId === categoryTree.movedCategory.parentCategoryId
                    && dropTarget.categoryId !== categoryTree.movedCategory.categoryId;
            } else {
                this.commandData.dropAllowed = dropTarget.categoryId !== categoryTree.movedCategory.categoryId
                    && dropTarget.categoryId !== categoryTree.movedCategory.parentCategoryId;
            }
        } else {
            this.commandData.dropAllowed = dropTarget.categoryId !== categoryTree.selectedCategory.categoryId;
        }
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
