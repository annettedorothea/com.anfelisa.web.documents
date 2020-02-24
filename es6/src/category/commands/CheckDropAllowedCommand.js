import AbstractCheckDropAllowedCommand from "../../../gen/category/commands/AbstractCheckDropAllowedCommand";
import {findCategory, isCategoryChildOfParent, depthOf} from "../utils/CategoryTreeUtils";
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
                if (this.commandData.depth === 1 && categoryTree.movedCategory.rootCategoryId === categoryTree.movedCategory.categoryId) {
                    this.commandData.dropAllowed = dropTarget.categoryId !== categoryTree.movedCategory.categoryId;
                } else {
                    if (categoryTree.movedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                        const depth = depthOf(categoryTree.categoryList, categoryTree.movedCategory.categoryId);
                        this.commandData.dropAllowed = depth === this.commandData.depth && dropTarget.categoryId !== categoryTree.movedCategory.categoryId;
                    } else {
                        this.commandData.dropAllowed = false;
                    }
                }
            } else {
                if (categoryTree.movedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                    if (dropTarget.categoryId !== categoryTree.movedCategory.categoryId && categoryTree.movedCategory.parentCategoryId !== dropTarget.categoryId) {
                        this.commandData.dropAllowed = !isCategoryChildOfParent(categoryTree.movedCategory, dropTarget.categoryId)
                    } else {
                        this.commandData.dropAllowed = false;
                    }
                } else {
                    this.commandData.dropAllowed = false;
                }
            }
        } else {
            if (categoryTree.selectedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                this.commandData.dropAllowed = dropTarget.categoryId !== categoryTree.selectedCategory.categoryId;
            } else {
                this.commandData.dropAllowed = false;
            }
        }
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
