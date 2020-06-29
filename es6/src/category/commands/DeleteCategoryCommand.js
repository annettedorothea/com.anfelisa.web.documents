import AbstractDeleteCategoryCommand from "../../../gen/category/commands/AbstractDeleteCategoryCommand";
import {getState} from "../../../gen/ace/ReadAppState";

export default class DeleteCategoryCommand extends AbstractDeleteCategoryCommand {

    validateCommandData() {
        const data = getState().data.categoryTree;
        this.commandData.categoryId = data.selectedCategory.categoryId;
        return true;
    }

    handleResponse(resolve) {
        this.commandData.displayDeleteCategory = false;
        this.commandData.outcome = this.ok;
    	resolve();
    }
    handleError(resolve) {
        this.commandData.outcome = this.error;
        this.commandData.displayDeleteCategory = false;
        resolve();
    }
}

/*       S.D.G.       */
