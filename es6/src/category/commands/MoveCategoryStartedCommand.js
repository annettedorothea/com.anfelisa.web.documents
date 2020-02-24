import AbstractMoveCategoryStartedCommand from "../../../gen/category/commands/AbstractMoveCategoryStartedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";
import {getState} from "../../../gen/ace/ReadAppState";

export default class MoveCategoryStartedCommand extends AbstractMoveCategoryStartedCommand {
    execute() {
        const categoryTree = getState().data.categoryTree;
        this.commandData.movedCategory = findCategory(categoryTree.rootCategory.childCategories, this.commandData.movedCategoryId);
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
