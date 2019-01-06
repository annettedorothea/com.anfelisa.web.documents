import AbstractMoveCategoryStartedCommand from "../../../gen/category/commands/AbstractMoveCategoryStartedCommand";
import {findCategory} from "../utils/CategoryTreeUtils";
import {getAppState} from "../../app/App";

export default class MoveCategoryStartedCommand extends AbstractMoveCategoryStartedCommand {
    execute() {
        const data = getAppState().data;
        this.commandData.movedCategory = findCategory(data.categoryList, this.commandData.movedCategoryId);
    	this.commandData.outcome = this.ok;
    }
}

/*       S.D.G.       */
