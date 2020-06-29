import AbstractMoveCategoryCommand from "../../../gen/category/commands/AbstractMoveCategoryCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class MoveCategoryCommand extends AbstractMoveCategoryCommand {

    validateCommandData() {
        const categoryTree = getState().data.categoryTree;
        this.commandData.targetCategoryId = categoryTree.dropTargetCategoryId;
        this.commandData.movedCategoryId = categoryTree.movedCategory.categoryId;
    	return true;
    }

    handleResponse(resolve) {
        this.commandData.selectedCategoryId = this.commandData.targetCategoryId;
        this.commandData.outcome = this.ok;

    	resolve();
    }
    handleError(resolve, reject) {
    	reject(this.commandData.error);
    }
}

/*       S.D.G.       */
