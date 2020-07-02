import AbstractCheckDropAllowedCommand from "../../../gen/category/commands/AbstractCheckDropAllowedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class CheckDropAllowedCommand extends AbstractCheckDropAllowedCommand {
    execute() {
        let dropTarget;
        if (this.commandData.categoryId === this.commandData.rootCategory.categoryId) {
            dropTarget = this.commandData.rootCategory;
        } else {
            dropTarget = findCategory(this.commandData.rootCategory.childCategories, this.commandData.categoryId);
        }
        this.commandData.dropTargetCategoryId = dropTarget.categoryId;
        if (this.commandData.movedCategory) {
            if (this.commandData.altKey === true) {
                this.commandData.dropAllowed =
                    dropTarget.parentCategoryId === this.commandData.movedCategory.parentCategoryId
                    && dropTarget.categoryId !== this.commandData.movedCategory.categoryId;
            } else {
                this.commandData.dropAllowed = dropTarget.categoryId !== this.commandData.movedCategory.categoryId
                    && dropTarget.categoryId !== this.commandData.movedCategory.parentCategoryId;
            }
        } else {
            this.commandData.dropAllowed = dropTarget.categoryId !== this.commandData.selectedCategory.categoryId;
        }
        this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
