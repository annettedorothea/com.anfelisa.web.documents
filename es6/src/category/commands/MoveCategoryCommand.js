import AbstractMoveCategoryCommand from "../../../gen/category/commands/AbstractMoveCategoryCommand";
import {getAppState} from "../../app/App";
import {findCategory} from "../utils/CategoryTreeUtils";

export default class MoveCategoryCommand extends AbstractMoveCategoryCommand {

    initCommandData() {
        const data = getAppState().data;
        this.commandData.targetCategoryId = data.dropTargetCategoryId;
        this.commandData.movedCategoryId = data.movedCategory.categoryId;
        this.commandData.formerParentId = data.movedCategory.parentCategoryId;
    	return true;
    }

    handleResponse(resolve, reject) {
        this.commandData.selectedCategoryId = this.commandData.targetCategoryId;
        this.commandData.outcome = this.ok;

    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
