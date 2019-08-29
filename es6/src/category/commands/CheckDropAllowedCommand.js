import AbstractCheckDropAllowedCommand from "../../../gen/category/commands/AbstractCheckDropAllowedCommand";
import {findCategory, isCategoryChildOfParent, depthOf} from "../utils/CategoryTreeUtils";
import {getState} from "../../../gen/ace/ReadAppState";

export default class CheckDropAllowedCommand extends AbstractCheckDropAllowedCommand {
    execute() {
        const data = getState().data.categoryTree;
        const dropTarget = findCategory(data.categoryList, this.commandData.categoryId);
        this.commandData.dropTargetCategoryId = dropTarget.categoryId;
        if (data.movedCategory) {
            if (this.commandData.altKey === true) {
                if (this.commandData.depth === 1 && data.movedCategory.rootCategoryId === data.movedCategory.categoryId) {
                    this.commandData.dropAllowed = dropTarget.categoryId !== data.movedCategory.categoryId;
                } else {
                    if (data.movedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                        const depth = depthOf(data.categoryList, data.movedCategory.categoryId);
                        this.commandData.dropAllowed = depth === this.commandData.depth && dropTarget.categoryId !== data.movedCategory.categoryId;
                    } else {
                        this.commandData.dropAllowed = false;
                    }
                }
            } else {
                if (data.movedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                    if (dropTarget.categoryId !== data.movedCategory.categoryId && data.movedCategory.parentCategoryId !== dropTarget.categoryId) {
                        this.commandData.dropAllowed = !isCategoryChildOfParent(data.movedCategory, dropTarget.categoryId)
                    } else {
                        this.commandData.dropAllowed = false;
                    }
                } else {
                    this.commandData.dropAllowed = false;
                }
            }
        } else {
            if (data.selectedCategory.rootCategoryId === dropTarget.rootCategoryId) {
                this.commandData.dropAllowed = dropTarget.categoryId !== data.selectedCategory.categoryId;
            } else {
                this.commandData.dropAllowed = false;
            }
        }
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
