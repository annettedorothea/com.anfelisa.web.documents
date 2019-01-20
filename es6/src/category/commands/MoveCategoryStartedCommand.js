import AbstractMoveCategoryStartedCommand from "../../../gen/category/commands/AbstractMoveCategoryStartedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";
import {getState} from "../../../gen/ace/AppState";

export default class MoveCategoryStartedCommand extends AbstractMoveCategoryStartedCommand {
    execute() {
        const data = getState().data.categoryTree;
        this.commandData.movedCategory = findCategory(data.categoryList, this.commandData.movedCategoryId);
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
