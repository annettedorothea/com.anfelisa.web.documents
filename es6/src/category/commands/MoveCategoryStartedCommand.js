import AbstractMoveCategoryStartedCommand from "../../../gen/category/commands/AbstractMoveCategoryStartedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class MoveCategoryStartedCommand extends AbstractMoveCategoryStartedCommand {
    execute() {
        this.commandData.movedCategory = findCategory(this.commandData.rootCategory.childCategories, this.commandData.movedCategoryId);
        if (!this.commandData.movedCategory) {
            this.commandData.movedCategory = this.commandData.rootCategory
        }
    	this.addOkOutcome();
    }
}

/*       S.D.G.       */
